  <template>
  <center>
  <div id="Login">
    <hr>
    <center>
          <md-card>
          <md-card-content id="Signin">
              Sign In
          </md-card-content>
               <md-button class="md-raised" :md-ripple="true" @click="login">Google
               </md-button>
    </md-card>
    </center>
  </div>
  </center>
</template>

<script>
import client from './lib/client';

export default {
  
  data () {
    return {
      oauthData:{},
    }
  },
  methods:{
     login(){
          return document.location.href = this.oauthData.google.url;
      }
  },
    async created(){
    client.oauthStart().then((res)=>{
        this.oauthData = res.providers;
    });
}
}
</script>

<style>
#Login{
  width:40%;
}
#Signin{
  font-size: 35px;
}
</style>
