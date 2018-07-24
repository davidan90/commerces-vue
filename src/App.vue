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
@import "./assets/styles/global";
@import "./assets/styles/mixins";
@import "./assets/styles/colors";

#exampleApp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $second-color;

  header.header-container,
  main.main-container {
    box-sizing: border-box;
  }

  header.header-container {
    @include flex(row, center, flex-start);
    width: 100%;
    padding: 10px 0;
    background-color: $primary-color;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.7);
    text-transform: uppercase;

    .logo-container,
    .navbar-container {
      @include flex(row, center, inherit);
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
    @include flex(column, center, inherit);
    width: 100%;
    padding: 1.5rem;
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
