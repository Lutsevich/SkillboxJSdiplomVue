<template>
  <div>
    <h1>Photo</h1>
    <div v-if="photo">
      <div>
        <a :href="photo.user.links.html" target="_blank">
          Author: {{photo.user.first_name}} {{photo.user.last_name}}
        </a>
      </div>
      <div>
         Date: {{dateFormat(photo.created_at)}}
      </div>
      <div>
        Likes: {{photo.likes}}
      </div>
      <div>
        <button v-if="!photo.liked_by_user" @click="likePhoto(photo)">Like this</button>
        <button v-else  @click="unlikePhoto(photo)">Unlike</button>
      </div>
      <img :src="photo.urls.full" class="img-fluid" style="max-height: 800px;">
    </div>
  </div>
</template>

<script>
import dateFormat from "../mixins/dateFormat.js"
import likeUnlike from "../mixins/likeUnlike.js"

export default {
  mixins: [dateFormat, likeUnlike],
  data () {
    return {
       photo: null
    }
  },
  mounted(){
    console.log("photo", this.$unsplash._bearerToken);

    this.$unsplash.photos.getPhoto(this.$route.params.id)
        .then(res => res.json())
        .then(json => {
          this.photo = json;
        });
  }
}
</script>