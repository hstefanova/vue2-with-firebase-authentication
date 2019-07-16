import firebase from "firebase";
import Vue from "vue";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let app ='';

firebase.initializeApp({
  apiKey: "AIzaSyAzlaq1vuqO70LlNQtFDcs14Ee6cXR6fDs",
  authDomain: "fir-auth-tutorial-fcca0.firebaseapp.com",
  databaseURL: "https://fir-auth-tutorial-fcca0.firebaseio.com",
  projectId: "fir-auth-tutorial-fcca0",
  storageBucket: "",
  messagingSenderId: "787809871139",
  appId: "1:787809871139:web:5d2038ae7201bebd"
});
// Initialize App only when Firebase Auth object is ready to use
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});

