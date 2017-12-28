<template>
  <div id="app">
    <div class="load-animation elevation-2">
      <div class="animation-text-container">
        <div>Ruiyang Sun</div> 
        <div> 
          <span>Leading Change</span>
        </div>
      </div>
      
    </div>
    <v-app class="app-animation">
      <app-header></app-header>
      <app-content></app-content>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@font-face {
  font-family: 'Open Sans';
  font-weight: 300;
  font-style: normal;
  src: url('/static/fonts/Open-Sans-300/Open-Sans-300.eot');
  src: url('/static/fonts/Open-Sans-300/Open-Sans-300.eot?#iefix') format('embedded-opentype'),
  local('Open Sans Light'),
  local('Open-Sans-300'),
  url('/static/fonts/Open-Sans-300/Open-Sans-300.woff2') format('woff2'),
  url('/static/fonts/Open-Sans-300/Open-Sans-300.woff') format('woff'),
  url('/static/fonts/Open-Sans-300/Open-Sans-300.ttf') format('truetype'),
  url('/static/fonts/Open-Sans-300/Open-Sans-300.svg#OpenSans') format('svg');
}

@font-face {
  font-family: 'Open Sans';
  font-weight: 400;
  font-style: normal;
  src: url('/static/fonts/Open-Sans-regular/Open-Sans-regular.eot');
  src: url('/static/fonts/Open-Sans-regular/Open-Sans-regular.eot?#iefix') format('embedded-opentype'),
  local('Open Sans'),
  local('Open-Sans-regular'),
  url('/static/fonts/Open-Sans-regular/Open-Sans-regular.woff2') format('woff2'),
  url('/static/fonts/Open-Sans-regular/Open-Sans-regular.woff') format('woff'),
  url('/static/fonts/Open-Sans-regular/Open-Sans-regular.ttf') format('truetype'),
  url('/static/fonts/Open-Sans-regular/Open-Sans-regular.svg#OpenSans') format('svg');
}

@font-face {
  font-family: 'Open Sans';
  font-weight: 600;
  font-style: normal;
  src: url('/static/fonts/Open-Sans-600/Open-Sans-600.eot');
  src: url('/static/fonts/Open-Sans-600/Open-Sans-600.eot?#iefix') format('embedded-opentype'),
  local('Open Sans Semibold'),
  local('Open-Sans-600'),
  url('/static/fonts/Open-Sans-600/Open-Sans-600.woff2') format('woff2'),
  url('/static/fonts/Open-Sans-600/Open-Sans-600.woff') format('woff'),
  url('/static/fonts/Open-Sans-600/Open-Sans-600.ttf') format('truetype'),
  url('/static/fonts/Open-Sans-600/Open-Sans-600.svg#OpenSans') format('svg');
}

@font-face {
  font-family: 'Open Sans';
  font-weight: 700;
  font-style: normal;
  src: url('/static/fonts/Open-Sans-700/Open-Sans-700.eot');
  src: url('/static/fonts/Open-Sans-700/Open-Sans-700.eot?#iefix') format('embedded-opentype'),
  local('Open Sans Bold'),
  local('Open-Sans-700'),
  url('/static/fonts/Open-Sans-700/Open-Sans-700.woff2') format('woff2'),
  url('/static/fonts/Open-Sans-700/Open-Sans-700.woff') format('woff'),
  url('/static/fonts/Open-Sans-700/Open-Sans-700.ttf') format('truetype'),
  url('/static/fonts/Open-Sans-700/Open-Sans-700.svg#OpenSans') format('svg');
}
@font-face {
  font-family: 'Roboto';
  font-weight: 300;
  font-style: normal;
  src: url('/static/fonts/Roboto-300/Roboto-300.eot');
  src: url('/static/fonts/Roboto-300/Roboto-300.eot?#iefix') format('embedded-opentype'),
  local('Roboto Light'),
  local('Roboto-300'),
  url('/static/fonts/Roboto-300/Roboto-300.woff2') format('woff2'),
  url('/static/fonts/Roboto-300/Roboto-300.woff') format('woff'),
  url('/static/fonts/Roboto-300/Roboto-300.ttf') format('truetype'),
  url('/static/fonts/Roboto-300/Roboto-300.svg#Roboto') format('svg');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  src: url('/static/fonts/Roboto-regular/Roboto-regular.eot');
  src: url('/static/fonts/Roboto-regular/Roboto-regular.eot?#iefix') format('embedded-opentype'),
  local('Roboto'),
  local('Roboto-regular'),
  url('/static/fonts/Roboto-regular/Roboto-regular.woff2') format('woff2'),
  url('/static/fonts/Roboto-regular/Roboto-regular.woff') format('woff'),
  url('/static/fonts/Roboto-regular/Roboto-regular.ttf') format('truetype'),
  url('/static/fonts/Roboto-regular/Roboto-regular.svg#Roboto') format('svg');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 500;
  font-style: normal;
  src: url('/static/fonts/Roboto-500/Roboto-500.eot');
  src: url('/static/fonts/Roboto-500/Roboto-500.eot?#iefix') format('embedded-opentype'),
  local('Roboto Medium'),
  local('Roboto-500'),
  url('/static/fonts/Roboto-500/Roboto-500.woff2') format('woff2'),
  url('/static/fonts/Roboto-500/Roboto-500.woff') format('woff'),
  url('/static/fonts/Roboto-500/Roboto-500.ttf') format('truetype'),
  url('/static/fonts/Roboto-500/Roboto-500.svg#Roboto') format('svg');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 700;
  font-style: normal;
  src: url('/static/fonts/Roboto-700/Roboto-700.eot');
  src: url('/static/fonts/Roboto-700/Roboto-700.eot?#iefix') format('embedded-opentype'),
  local('Roboto Bold'),
  local('Roboto-700'),
  url('/static/fonts/Roboto-700/Roboto-700.woff2') format('woff2'),
  url('/static/fonts/Roboto-700/Roboto-700.woff') format('woff'),
  url('/static/fonts/Roboto-700/Roboto-700.ttf') format('truetype'),
  url('/static/fonts/Roboto-700/Roboto-700.svg#Roboto') format('svg');
}

#app {
  font-family: 'Roboto', 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:355px;}
    80% {opacity:1;}
    100% {opacity:0;width:355px;}
}

@keyframes home-scale {
	from {
    transform-origin: top;
    transform: scale(1, 1);
  }
	to {
    transform-origin: top;
    transform: scale(1, 0);
  }
}

.animation-text-container {
  margin-top: 40vh;
}

.load-animation .animation-text-container div {
  color: white;
  font-size: 32px;
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
}

.load-animation .animation-text-container div:first-of-type {
  animation: showup 7s forwards;
}

.load-animation .animation-text-container div:last-of-type {
  width:0px;
  animation: reveal 7s forwards;
}

.load-animation .animation-text-container div:last-of-type span {
  margin-left:-355px;
  animation: slidein 7s forwards;
}

.load-animation {
  position: fixed;
  background-color: #212121;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  animation-name: home-scale;
	animation-duration: 1s;
	animation-delay: 4s;
	animation-fill-mode: forwards;
}


@media (max-width: 600px) {
  @keyframes showupxs {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  .load-animation .animation-text-container div {
    color: white;
    font-size: 32px;
    white-space:nowrap;
  }

  .load-animation .animation-text-container div:first-of-type {
    opacity: 0;
    animation-name: showupxs;
    animation-duration: 1.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }

  .load-animation .animation-text-container div:last-of-type {
    opacity: 0;
    margin-top: 10px;
    width: 100%;
    animation-name: showupxs;
    animation-duration: 1.5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }

  .load-animation .animation-text-container div:last-of-type span {
    margin: 0;
    animation: none;
  }
}

</style>
