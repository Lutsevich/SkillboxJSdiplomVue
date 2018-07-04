<template>
    <div>
      <h1>Home</h1>
    </div>
</template>

<script>
  export default {
    mounted(){
      const code = location.search.split('code=')[1];
      if (code) {
        this.$router.push('/auth');
      } else {
        const authenticationUrl = this.$unsplash.auth.getAuthenticationUrl([
          "public",
          "write_likes"
        ]);

        location.assign(authenticationUrl);
      }
        
        console.log("auth", this.$unsplash._bearerToken);
    }
  }
</script>