<template>
    <div class="container MyItunes">
        <div class="row">
            <div class="col-xs-12">
                <h2>Your Tunes</h2>
            </div>

        </div>
        <div class="row">

            <div class="col-xs-3">
                <div v-for="track in tracks">
                    <img :src="track.artworkUrl100" style="width:150px;height:150px;">
                    <div class="info caption">
                        <h5>{{ track.artistName }}</h5>
                        <h5>{{ track.trackName }}</h5>
                        <h5>{{ track.collectionPrice }}</h5>
                    </div>
                    <audio controls>
                        <source :src="this.trackUrl" type="audio/mpeg">
                    </audio>
                    <div class="remove">
                        <button @click="removeFromMyTunes(track)">Remove Track</button>
                    </div>
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
            removeFromMyTunes(track) {
                this.$store.dispatch("removeTrack", track)
            }
        },
        mounted() {
        }
    }

</script>

<style>
    .MyItunes {
        min-height: 500px;
        min-width: 50%;
        background: coral;
    }
</style>