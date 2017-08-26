<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <audio controls>
                    <source :src="this.songUrl" type="audio/mpeg">
                </audio>
            </div>
        </div>

        <div class="row">

            <div class="col-xs-3">
                <form class="form-inline" @submit.prevent="getMusic">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="artist" placeholder="Search Artist...">
                        <button type="submit" id="get-music">Search</button>
                    </div>
                </form>
            </div>

            <div class="col-xs-9">

            </div>

        </div>
    </div>
</template>