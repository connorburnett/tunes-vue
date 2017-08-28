import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    MyItunes: [],
    results: []
  },
  mutations: {
    setResults(state, results){
      state.results = results
    },
    addToMyTunes(state, track) {
      state.MyItunes.push(track)
    },
    removeTrack(state, track) {
      
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        commit('setResults', data)
      })
    },
    getMyTunes({commit, dispatch}, id){
      //this should send a get request to your server to return the list of saved tunes
      $.get('http://localhost:3000/api/tracks' + id).then(res => {
        commit('getMyTunes', res)
      })
    },
    addToMyTunes({commit, dispatch}, track){
      //this will post to your server adding a new track to your tunes
      $.post('http://localhost:300/api/tracks', track).then(res => {
        dispatch('getMyTunes')
      })
    },
    removeTrack({commit, dispatch}, track){
      //Removes track from the database with delete
      $.delete('http://localhost:300/api/tracks', track).then(res => {
        dispatch('getMyTunes')
      })
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
