  <template>
  <div id="app">
  <div id="header">
     <md-button id="logoutbtn" class="md-raised" :md-ripple="true" @click="logout">Logout
    </md-button>
  </div>
    <center>
    <h3>Todo's</h3>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todo
    v-bind:todos="todos" 
    v-on:del-todo="deleteTodo"/>
    </center>
  </div>
</template>

<script>
import todo from './routes/todo';
import logout from './routes/user';
import Todo from './components/todo.vue'
import AddTodo from './components/AddTodo.vue'

export default {
    components: {
    Todo,
    AddTodo
  },
  data () {
    return {
      oauthData:{},
      todos:[],
    }
  },
  methods:{
    async logout(){
      await logout.logout();
      this.$router.push('/');
    },
    async deleteTodo(id){
      this.todos = this.todos.filter(todo => todo._id !==id);
      await todo.delTodo(id);
    },
    async addTodo(newTodo){
      this.todos = [...this.todos,newTodo];
      await todo.addTodo({text:newTodo.text,date:new Date(),completed:false});
    }
  },
    async created(){
        const data = await todo.browseTodos();
        this.todos = data;
  }
}
</script>

<style scoped>
#header{
  background-color: grey;
  height: 8vh;
}
#logoutbtn{
  background-color: white;
}
#logout{
  margin-top: 2vh;
  margin-left: 3%;
}
</style>