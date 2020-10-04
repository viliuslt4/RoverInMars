<template>
  <div class="dimensions">
    <h3>Set dimensions of the square</h3>
    <form v-on:submit.prevent="SetDimensions">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field type="number" hide-details label="Width" v-model.number="dimensions.width" max-length="6"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field type="number" hide-details label="Height" v-model.number="dimensions.height" max-length="6"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn type="submit">Set dimensions</v-btn>
    </form>
  </div>
</template>

<script>
import { between } from 'vuelidate/lib/validators'
export default {
  name: 'dimensions',
  data(){
    return{
      dimensions:{
        width: null,
        height: null
      }
    }
  },
  validations: {
    dimensions:{
      width:{
        between: between(1, 999999)
      },
      height:{
        between: between(1, 999999)
      }
    }
  },
  methods:{
    SetDimensions: function(){
      this.$store.commit('setDimensions', this.dimensions)
      this.$router.push('rover')
    }
  }
}
</script>

<style>
.dimensions form{
  max-width:400px;
}
.dimensions{
  padding:32px 0 0;
}
</style>
