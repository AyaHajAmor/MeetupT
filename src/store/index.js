import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl : 'https://i0.wp.com/www.webdo.tn/wp-content/uploads/2018/11/Tunisie_Sousse-1.jpg?fit=3500%2C2064' , 
        title:'meetup in Sousse devfest' , 
        location: 'Sousse' ,
        description: 'this is a meetup ........',
        id:'1ghjgyjhg',
        date: new Date(),
      },
      {
        imageUrl : 'https://www.okvoyage.com/wp-content/uploads/2019/12/monastir.jpg' , 
        title:'meetup in Monastir' , 
        location: 'Monastir',
        description: 'this is a meetup ........',
        id:'2fghj22',
        date: '2021-01-05'
      },
      {
        imageUrl : 'https://i.ytimg.com/vi/GwFTPhm-9xQ/maxresdefault.jpg' , 
        title:'meetup in Sfax' , 
        location: 'Sfax',
        description: 'this is a meetup ........',
        id:'ftgjyku45',
        date: '2022-06-05'
      }
    ],
    user: null ,
    loading :false ,
    error : null

  },
  mutations: {
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadMeetups ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedMeetups', meetups)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      }
      firebase.database().ref('meetups').push(meetup)
        .then((data) => {
          const key = data.key
          commit('createMeetup', {
            ...meetup,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading',true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading',false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading',false)
            commit('setError',error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading',true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading',false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError',error)
            commit('setLoading',false)
            console.log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
    }
   
  },
  getters: {
    loadedMeetups(state){
      return state.loadedMeetups.sort((meetupA, meetupB)=>{
        return meetupA.date > meetupB.date ;
      });
    },
    featuredMeetups(state ,getters){
      return getters.loadedMeetups.slice(0.5)
    },
    loadedMeetup (state){
      return(meetupId)=> {
        return state.loadedMeetups.find((meetup)=>{
          return meetup.id ==meetupId 
        })
      }
    },
    user (state) {
      return state.user 
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error   }
  }
})
