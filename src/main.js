import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import * as firebase from 'firebase'
import Vuetify from 'vuetify/lib'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'


Vue.config.productionTip = false
Vue.filter('date',DateFilter)
Vue.component('app-alert', AlertCmp)

Vue.use(Vuetify)

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth) {
     next('/signin');
  } else {
    next();
  }
  }) 
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created (){
    firebase.initializeApp({
      apiKey: "AIzaSyB60QmQZawoWvVGk3jdjY_ot2qYgMYxg78",
    authDomain: "meetup-cd6a7.firebaseapp.com",
    databaseURL: "https://meetup-cd6a7.firebaseio.com",
    projectId: "meetup-cd6a7",
    storageBucket: "meetup-cd6a7.appspot.com"
    })
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.$store.dispatch('autoSignIn', user)
    //   }
    // })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
