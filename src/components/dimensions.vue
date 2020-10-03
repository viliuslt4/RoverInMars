<template>
  <div class="dimensions">
    <h3>Set dimensions of the square</h3>
    <form v-on:submit.prevent="SetDimensions">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field placeholder="Width" v-model="width" max-length="6"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field placeholder="Height" v-model="height" max-length="6"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn type="submit">Set dimensions</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'dimensions',
  data(){
    return{
      width:null,
      height:null
    }
  },
  methods:{
    SetDimensions: () =>{
      console.log("sets");
    }
  }
}
</script>

<style>
form{
  max-width:400px;
}
.dimensions{
  padding:32px 0 0;
}
</style>
