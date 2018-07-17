<template>
  <nav id="navBar">
    <span>
      <router-link to="/home">Home</router-link>
    </span>
    <span>
      <router-link to="/about">About</router-link>
    </span>    
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
#navBar {
  width: 100%;
  span {
    margin: 0 1rem;
    a {
      text-decoration: none;
      font-weight: bold;
      &:hover {
        color: #2c3e50;
      }
    }
  }
}
</style>
