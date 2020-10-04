<template>
    <v-container>
        <div class="overlay-bg">
            <div class="content-wrapper">
                <v-row>
                    <v-col cols="6" class="form-wrapper">
                        <h2>Send commands to rover</h2>
                        <p>Dimension width: {{dimensions.width}}</p>
                        <p>Dimension height: {{dimensions.height}}</p>
                        <form v-on:submit.prevent="ValidateCommands()">
                            <v-text-field v-model="command" label="Commands (A, L, R)"></v-text-field>
                            <v-btn type="submit">Send commands</v-btn>
                        </form>
                    </v-col>
                    <v-col cols="6">
                        <h4>Current rover position: {{rover.orientation + " ("+ rover.position.h + " , " + rover.position.v +")"}}</h4>
                        <div class="output" v-show="output.length > 0">
                            <h4>Output</h4>
                            <div class="scroll-output">
                                <p v-for="(outputLine, index) in output" v-bind:key="index">{{outputLine}}</p>
                            </div>
                            <v-btn v-on:click="output = []">Clear output</v-btn>
                        </div>
                    </v-col>
                </v-row>

            </div>
        </div>
  </v-container>
</template>

<script>

export default {
    name: 'Roverpage',
    data(){
        return {
            command:"",
            rover:{
                advance: true,
                orientation: 'E',
                position: {
                    h:0,
                    v:0
                }
            },
            output:[]
        }
    },
    computed:{
        dimensions(){
            return this.$store.state.dimensions
        }
    },
    methods:{
        ValidateCommands(){
            const directions = ['W', 'N', 'E', 'S']
            const actions = [
                {direction: 'N', coordinates: {h:0 , v:1}},
                {direction: 'E', coordinates: {h:1,v:0}},
                {direction: 'S', coordinates: {h:0,v:-1}},
                {direction: 'W', coordinates: {h:-1,v:0}}
            ]
            let aCommands = [...this.command]
            for(let i=0; i< aCommands.length; i++){
                let isValid = true;
                if(aCommands[i] === 'L'){
                    let turnLeftIndex = directions.indexOf(this.rover.orientation) - 1
                    if(turnLeftIndex < 0){
                        turnLeftIndex = directions.length - 1
                    }
                    this.rover.orientation = directions[turnLeftIndex];
                }
                else if(aCommands[i] === 'R'){
                    let turnRightIndex = directions.indexOf(this.rover.orientation) + 1
                    if(turnRightIndex === directions.length){
                        turnRightIndex = directions[0]
                    }
                    this.rover.orientation = directions[turnRightIndex]
                }
                else if(aCommands[i] === 'A'){
                    let action = actions.find(x=> x.direction === this.rover.orientation)
                    let moveRover = {
                        h: this.rover.position.h + action.coordinates.h,
                        v: this.rover.position.v + action.coordinates.v
                    }
                    if(moveRover.h < 0 || moveRover.v < 0 || moveRover.h > this.dimensions.width || moveRover.v > this.dimensions.height){
                        isValid = false
                    }else{
                        this.rover.position = moveRover
                    }
                }
                else{
                    isValid = false
                }
                this.output.push(isValid + ", " + this.rover.orientation + ", " + "(" + this.rover.position.h + "," + this.rover.position.v + ")");
            }
        }
    },
    beforeMount(){
        if(this.dimensions.width < 1 || this.dimensions.height < 1){
            this.$router.push('/');
        }
    }
}

</script>
<style scoped>
.inline-content{
    display:flex;
    align-items:center;
    justify-content: space-between;
}
.content-wrapper form{
    max-width:167px;
}
.form-wrapper p{
    margin-bottom:16px;
}
h2{
    margin-bottom:24px;
}
h4{
    padding-top:14px;
}
.scroll-output{
    max-height: 98px;
    overflow: auto;
    margin-bottom: 14px;
    margin-top: 14px;
}
.scroll-output p{
    margin-bottom:5px;
}
</style>