import React from 'react';
import { Button } from '@material-ui/core';

import { getState, setLocale } from '../../state';

export function Locale() {
  const [{ locale }, dispatch] = getState();
  function handleLocaleChange() {
    dispatch(setLocale(locale === 'de' ? 'en' : 'de'));
  }
  return (
    <div className="container">
      <Button color="primary" onClick={handleLocaleChange}>
        {locale === 'de' ? 'EN' : 'DE'}
      </Button>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Locale;
