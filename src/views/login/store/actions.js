const fb = require('../../../../firebaseConfig.js');

export default {
  loginSystem(_, params) {
    return fb.auth.signInWithEmailAndPassword(params.email, params.password);
  },
};
