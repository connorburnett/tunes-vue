<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <h2>iTunes Searcher</h2>
                <form class="form-inline" @submit.prevent="getMusicByArtist">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="artist" placeholder="Find an Artist...">
                        <button type="submit" id="get-music">Search</button>
                    </div>
                </form>

            </div>
        </div>
        <div class="row">

            <div class="col-xs-3">
                <div v-for="track in tracks">
                    <img :src="track.artworkUrl90" style="width:150px;height:150px;">
                    <div class="info caption">
                        <h5>{{ track.artistName }}</h5>
                        <h5>{{ track.trackName }}</h5>
                        <h5>{{ track.collectionPrice }}</h5>
                    </div>
                    <audio controls>
                        <source :src="this.trackUrl" type="audio/mpeg">
                    </audio>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Itunes',
        data() {
            return {
                artist: '',
                trackUrl: ''
            }
        },
        components: {
        },
        computed: {
            tracks() {
                return this.$store.state.results.results
            }
        },
        methods: {
            getMusicByArtist() {
                this.$store.dispatch("getMusicByArtist", this.artist)
            },
            loadPlayer(track) {
                this.trackUrl = track;
            },
            addToMyTunes(track) {
                this.$store.dispatch("addToMyTunes", track)
            }
        },
        mounted() {
        }
    }

</script>

<style>

</style>