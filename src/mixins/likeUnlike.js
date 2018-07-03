export default {
    methods: {
        likePhoto(photo){
            this.$unsplash.photos.likePhoto(photo.id)
                .then(res => res.json())
                .then(json => {
                    if (json) {
                        photo.likes++;
                        photo.liked_by_user = true;
                    }
                });
            },
        unlikePhoto(photo){
            this.$unsplash.photos.unlikePhoto(photo.id)
                .then(res => res.json())
                .then(json => {
                    if (json) {
                        photo.likes--;
                        photo.liked_by_user = false;
                    }
                });
        },
    }
}