<template>
  <div class="dimensions">
    <h3>Set dimensions of the square</h3>
    <form v-on:submit.prevent="SetDimensions">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field type="number" hide-details label="Width" v-model.number="dimensions.width" @keypress="isNumber($event)"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field type="number" hide-details label="Height" v-model.number="dimensions.height" @keypress="isNumber($event)"></v-text-field>
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
      dimensions:{
        width: null,
        height: null
      }
    }
  },
  methods:{
    SetDimensions: function(){
      this.$store.commit('setDimensions', this.dimensions)
      this.$router.push('rover')
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
        evt.preventDefault()
      } else {
        return true;
      }
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
.dimensions form button{
  margin-top:16px;
}
</style>
