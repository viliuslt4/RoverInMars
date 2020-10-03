<template>
  <v-container>
    <div class="overlay-bg">
      <div class="content-wrapper">
        <h1>Welcome to Rover in Mars app</h1>
        <dimensions></dimensions>
      </div>
    </div>
  </v-container>
</template>

<script>
import dimensions from './components/dimensions';

export default {
  name: 'Homepage',
  components:{
    dimensions
  }
}
</script>
