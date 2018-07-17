<template>
  <div id="exampleApp">
    <header class="header-container">
      <picture class="logo-container">
        <img src="./assets/img/logo.png">
      </picture>
      <div class="navbar-container">
        <NavBar />
      </div>
    </header>
    <main class="main-container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import { NavBar } from "./components";

export default {
  name: "ExampleApp",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "./assets/styles/colors";

#exampleApp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $second-color;

  header.header-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    background-color: $primary-color;
    text-transform: uppercase;

    .logo-container,
    .navbar-container {
      display: flex;
      align-items: center;
    }

    .logo-container {
      width: 20vw;
      justify-content: center;
      img {
        width: 60px;
        height: 50px;
      }
    }

    .navbar-container {
      width: 80vw;
      justify-content: flex-start;
    }
  }

  main.main-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $third-color;
}
</style>
