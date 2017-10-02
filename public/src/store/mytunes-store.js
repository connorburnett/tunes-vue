import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

//var production = !window.location.host.s

vue.use(vuex)

var store = new vuex.Store({
  state: {
    MyItunes: [],
    tracks: [],
    results: []

  },
  mutations: {
    setResults(state, results) {
      state.results = results
      console.log(results)
    },
    setTracks(state, tracks) {
      state.tracks = tracks
    },
    addToMyTunes(state, track) {
      state.MyItunes.push(track)
    },
    removeTrack(state, track) {
      state.Itunes.push(track)
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        var tracks = JSON.parse(data)
        commit('setResults', tracks.results)
      })
    },
    getMyTunes({ commit, dispatch }, id) {
      //this should send a get request to your server to return the list of saved tunes
      $.get('http://tunesvue.herokuapp.com/api/tracks').then(res => {
        
        commit('setTracks', res)
        console.log(res)
      })
      //tunesvue.herokuapp.com
    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
      $.post('http://tunesvue.herokuapp.com/api/tracks', track).then(res => {
        dispatch('getMyTunes')
      })
    },
    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
      console.log(track)
      $.ajax({
        method: 'DELETE',
        contentType: 'application/json',
        url: 'http://tunesvue.herokuapp.com/api/tracks/' + track._id,
      })
        .then(res => {
          dispatch('getMyTunes') 
        })


      // $.ajax('http://localhost:3000/api/tracks', track).then(res => {
      //   dispatch('removeTrack')
      // })
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
