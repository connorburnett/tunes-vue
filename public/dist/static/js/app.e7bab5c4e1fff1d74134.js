webpackJsonp([0],[,,function(t,e,s){s(9);var n=s(0)(s(7),s(14),null,null);t.exports=n.exports},function(t,e,s){"use strict";var n=s(1),a=s(18),r=s(12),o=s.n(r);n.a.use(a.a);var i=new a.a.Store({state:{MyItunes:[],tracks:[],results:[]},mutations:{setResults:function(t,e){t.results=e,console.log(e)},addToMyTunes:function(t,e){t.MyItunes.push(e)},removeTrack:function(t,e){t.Itunes.push(e)}},actions:{getMusicByArtist:function(t,e){var s=t.commit,n=(t.dispatch,"https://itunes.apple.com/search?term="+e),a="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(n);o.a.get(a).then(function(t){var e=JSON.parse(t);s("setResults",e.results)})},getMyTunes:function(t,e){var s=t.commit;t.dispatch;o.a.get("http://tunesvue.herokuapp.com/api/tracks"+e).then(function(t){s("getMyTunes",t)})},addToMyTunes:function(t,e){var s=(t.commit,t.dispatch);o.a.post("http://tunesvue.herokuapp.com/api/tracks",e).then(function(t){s("addToMyTunes")})},removeTrack:function(t,e){var s=(t.commit,t.dispatch);o.a.delete("http://tunesvue.herokuapp.com/api/tracks",e).then(function(t){s("removeTrack")})},promoteTrack:function(t,e){t.commit,t.dispatch},demoteTrack:function(t,e){t.commit,t.dispatch}}});e.a=i},function(t,e,s){s(10);var n=s(0)(s(5),s(15),null,null);t.exports=n.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(13),a=s.n(n),r=s(2),o=s.n(r);e.default={name:"app",components:{Itunes:a.a,MyItunes:o.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s.n(n);e.default={name:"Itunes",data:function(){return{genre:"",artist:""}},components:{MyItunes:a.a},methods:{search:function(){console.log("i am here"),this.$store.dispatch("getMusicByArtist",this.artist)},addToMyTunes:function(t){this.$store.dispatch("addToMyTunes",t)}},computed:{tracks:function(){return this.$store.state.results}},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Itunes",data:function(){return{artist:"",trackUrl:""}},components:{},computed:{tracks:function(){return this.$store.state.results.results}},methods:{removeFromMyTunes:function(t){this.$store.dispatch("removeTrack",t)}},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=s(4),r=s.n(a),o=s(3);new n.a({el:"#app",template:"<App/>",store:o.a,components:{App:r.a}})},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){s(11);var n=s(0)(s(6),s(16),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container MyItunes"},[t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-3"},t._l(t.tracks,function(e){return s("div",[s("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:e.artworkUrl100}}),t._v(" "),s("div",{staticClass:"info caption"},[s("h5",[t._v(t._s(e.artistName))]),t._v(" "),s("h5",[t._v(t._s(e.trackName))]),t._v(" "),s("h5",[t._v(t._s(e.collectionPrice))])]),t._v(" "),s("audio",{attrs:{controls:""}},[s("source",{attrs:{src:this.trackUrl,type:"audio/mpeg"}})]),t._v(" "),s("div",{staticClass:"remove"},[s("button",{on:{click:function(s){t.removeFromMyTunes(e)}}},[t._v("Remove Track")])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("h2",[t._v("Your Tunes")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("MyItunes"),t._v(" "),s("Itunes")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"itunes"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("h2",[t._v("Search For Tunes")]),t._v(" "),s("form",{staticClass:"form-inline",on:{submit:function(e){e.preventDefault(),t.search()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Find an Artist..."},domProps:{value:t.artist},on:{input:function(e){e.target.composing||(t.artist=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit",id:"get-music"}},[t._v("Search")])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("h2",[t._v("Results:")]),t._v(" "),s("div",{staticClass:"col-xs-3"},t._l(t.tracks,function(e){return s("div",[s("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:e.artworkUrl100}}),t._v(" "),s("div",{staticClass:"info caption"},[s("h5",[t._v(t._s(e.artistName))]),t._v(" "),s("h5",[t._v(t._s(e.trackName))]),t._v(" "),s("h5",[t._v(t._s(e.collectionPrice))])]),t._v(" "),s("audio",{attrs:{controls:""}},[s("source",{attrs:{src:e.previewUrl,type:"audio/mp4"}})]),t._v(" "),s("div",{staticClass:"add"},[s("button",{on:{click:function(s){t.addToMyTunes(e)}}},[t._v("Add Track")])])])}))])])])},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.e7bab5c4e1fff1d74134.js.map