import axios from 'axios';

export default {
  registerSystem(_, params) {
    return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXv-EtKn1KQDn1C1ZLCOYxXGGJNUr5c3E', params);
  },
};
