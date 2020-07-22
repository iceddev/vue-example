<template>
    <h1>Signing in....</h1>
</template>

<script>
import client from './lib/client';
import routeState from './routes/user';

export default {
  methods:{
  },
    async created(){
    client.oauthStart().then((res)=>{
        this.oauthData = res.providers;
    })
    await routeState.validate(this.$route.params.token);
    await client.tokenLogin(this.$route.params.token);
    // await window.history.pushState({token:this.$route.params.token},"token",'/home');
    setTimeout(() => {
    console.log(this.$route.params.token);
    this.$router.push('/home');
        }, 100);

    }
}
</script>