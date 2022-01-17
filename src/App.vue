<template>
  <div id="nav">
    <router-link to="/">Meetings</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <transition name="slide-fade" >
    <router-view />
  </transition>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/*** TRANSITION ***/
.slide-fade-enter {
  transform: translateX(1000px);
  opacity: 0;
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease-in;
}
.slide-fade-leave-to {
  transform: translateX(-1000px);
  opacity: 0;
}

</style>
