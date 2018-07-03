<template>
  <div>
    <h1>Auth</h1>
  </div>
</template>

<script>
export default {
  mounted(){
    const code = location.search.split('code=')[1];
    if (code) {
      this.$unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
          this.$unsplash.auth.setBearerToken(json.access_token);
          localStorage.setItem('token', this.$unsplash._bearerToken);
        });
    } 
    this.$router.push("list");
    console.log("auth", this.$unsplash._bearerToken);
  }
}
</script>