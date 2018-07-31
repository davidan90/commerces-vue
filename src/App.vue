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
import { NavBar } from "components";

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
  color: $second-color;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  header.header-container,
  main.main-container {
    box-sizing: border-box;
  }

  header.header-container {
    @include flex(row, center, flex-start);

    background-color: $primary-color;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.7);
    padding: 10px 0;
    text-transform: uppercase;
    width: 100%;

    .logo-container,
    .navbar-container {
      @include flex(row, center, inherit);
    }

    .logo-container {
      justify-content: center;
      width: 20vw;

      img {
        height: 50px;
        width: 60px;
      }
    }

    .navbar-container {
      justify-content: flex-start;
      width: 80vw;
    }
  }

  main.main-container {
    @include flex(column, center, inherit);

    padding: 1.5rem;
    width: 100%;
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
