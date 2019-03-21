import * as functions from 'firebase-functions';
// import sendContactMail from './sendContactMail';
// import sendContactMailConfirmation from './sendContactMailConfirmation';

export const onCreateRequest = functions.firestore
  .document('requests/{uid}')
  .onCreate(async snap => {
    try {
      console.log('Received Request with Data:');
      console.log(snap.data());

      // await sendContactMail({ ...snap.data(), urls });
      // await sendContactMailConfirmation(snap.data());
    } catch (e) {
      console.error(e);
      return null;
    }
    return null;
  });
