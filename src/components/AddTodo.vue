<template>
    <div>
        <form @submit="addTodo" id="form">
            <md-field id="text">
            <md-input v-model="text" placeholder="Add Todo..."></md-input>
            </md-field>
            <md-button id="logoutbtn" type="submit" class="md-raised" :md-ripple="true" @click="addTodo">Add
            </md-button>
        </form>
    </div>
</template>

<script>
export default {
    name:"AddTodo",
    data(){
        return{
            text:''
        }
    },
    methods:{
        addTodo(e){
            e.preventDefault();
            const newTodo = {
                id:'',
                text:this.text,
            }
            //send up to parent
            this.$emit('add-todo', newTodo);
            this.text = '';
        }
    }
}
</script>

<style scoped>
#form{
    display: flex;
    width:10vh;
}
</style>