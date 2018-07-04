<template>
  <div>
    <h1>List photos</h1>
    <b-container>
      <b-row class="align-items-center">
          <b-col class="mb-4" col md="3" sm="6" v-for="(photo) in photos" :key="photo.id">
              <router-link  :to="{ name: 'photo', params: {id: photo.id} }">
                <img class="w-100" :src="photo.urls.thumb">
              </router-link>
              <div>
                <a :href="photo.links.html">
                  Author: {{photo.user.first_name}}  {{photo.user.last_name}}
                </a>
              </div>
              <div>
                date: {{ dateFormat(photo.created_at) }}
              </div>
              <div>
                likes: {{photo.likes}}
              </div>
              <div>
                <button v-if="!photo.liked_by_user" @click="likePhoto(photo)">Like this</button>
                <button v-else @click="unlikePhoto(photo)">Unlike</button>
              </div>
          </b-col>
      </b-row>
      <button @click="listPhotos">Load photos</button>
    </b-container>
  </div>
</template>

<script>
import dateFormat from "../mixins/dateFormat.js"
import likeUnlike from "../mixins/likeUnlike.js"

export default {
  mixins: [dateFormat, likeUnlike],
  data () {
    return {
      photos: [],
      page: 1
    }
  },
  methods: {
    listPhotos(){
      this.$unsplash.photos.listPhotos(this.page, 10, "latest")
        .then(res => res.json())
        .then(json => {
          json.forEach(element => this.photos.push(element));
          this.page++;
        });
    }
  },
  mounted(){
    this.listPhotos();
  }
}
</script>