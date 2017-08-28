<template>
    <div class="itunes">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">

                    <h2>Search For Tunes</h2>
                    <form class="form-inline" @submit.prevent="search()">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="artist" placeholder="Find an Artist...">
                            <button type="submit" id="get-music">Search</button>
                        </div>
                    </form>

                </div>
            </div>

            <div class="row">
                <h2>Results:</h2>
                <div class="col-xs-3">
                    <div v-for="track in tracks">
                        <img :src="track.artworkUrl100" style="width:150px;height:150px;">
                        <div class="info caption">
                            <h5>{{ track.artistName }}</h5>
                            <h5>{{ track.trackName }}</h5>
                            <h5>{{ track.collectionPrice }}</h5>
                        </div>
                        <audio controls>
                            <source :src="track.previewUrl" type="audio/mp4">
                        </audio>
                        <div class="add">
                            <button @click="addToMyTunes(track)">Add Track</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    //import Itunes from './Itunes'
    import MyItunes from './MyItunes'
    export default {
        name: 'Itunes',
        data() {
            return {
                genre: '',
                artist: ''
            }
        },
        components: {
            //Itunes,
            MyItunes
        },
        methods: {
            search() {
                console.log('i am here')
                this.$store.dispatch("getMusicByArtist", this.artist)
            },
            // loadPlayer(track) {
            //     this.trackUrl = track;
            // },
            addToMyTunes(track) {
                this.$store.dispatch("addToMyTunes", track)
            }
        },
        computed: {
            tracks() {
                return this.$store.state.results
            }
        },
        mounted() {
        }
    }

</script>

<style>
    .itunes {
        background: cadetblue;
        min-height: 500px;
        min-width: 45%;
    }

</style>