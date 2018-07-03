<template>
    <div>
      <h1>Home</h1>
    </div>
</template>

<script>
  export default {
    mounted(){
      const authenticationUrl = this.$unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
      ]);

      location.assign(authenticationUrl);
    }
  }
</script>