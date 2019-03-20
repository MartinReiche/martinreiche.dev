import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

function init(values) {
  const initialValues = {};
  if (values) {
    Object.keys(values).forEach(key => {
      initialValues[key] = { value: values[key] };
    });
  }
  return initialValues;
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'change':
      return {
        ...state,
        [payload.name]: { ...state[payload.name], value: payload.value }
      };
    case 'error':
      return {
        ...state,
        [payload.name]: { ...state[payload.name], error: payload.error }
      };
    case 'reinitialize':
      return init(payload);
    default:
      return state;
  }
}

export function Form(props) {
  const [form, dispatch] = useReducer(
    reducer,
    init(props.initialValues || {}),
    init
  );

  useEffect(() => {
    if (props.initialValues) {
      dispatch({ type: 'reinitialize', payload: props.initialValues });
    }
  }, [JSON.stringify(props.initialValues)]);

  function init(props) {
    const initialValues = {};
    if (props.initialValues) {
      Object.keys(props.initialValues).forEach(key => {
        initialValues[key] = { value: props.initialValues[key] };
      });
    }
    return initialValues;
  }

  function handleChange(e) {
    dispatch({ type: 'change', payload: e.target });
    if (form[e.target.name] && form[e.target.name].error) {
      dispatch({
        type: 'error',
        payload: { name: e.target.name, error: props.validateFunc(e.target) }
      });
    }
  }

  function handleBlur(e) {
    dispatch({
      type: 'error',
      payload: { name: e.target.name, error: props.validateFunc(e.target) }
    });
  }

  function validate() {
    let isValid = true;
    if (props.validateFields) {
      const err = props.validateFields.map(name => {
        return {
          name,
          error: props.validateFunc({
            name,
            value: form[name] && form[name].value
          })
        };
      });
      err.forEach(error => {
        if (error.error) isValid = false;
        dispatch({ type: 'error', payload: error });
      });
    }
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      props.onSubmit(form);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {props.render({
        handleBlur,
        handleChange,
        form
      })}
    </form>
  );
}

Form.propTypes = {
  render: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validateFields: PropTypes.array.isRequired,
  validateFunc: PropTypes.func,
  initialValues: PropTypes.object
};

export default Form;
