<template>
  <div id="signup">
   <!-- Modal fullscreen SignUp -->
<div class="modal modal-fullscreen fade" id="modal-fullscreen" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
       <div class="icon-container">
        <span class="ti-close" data-dismiss="modal"></span>
       </div>
      <div class="modal-body flexcontainer">
       <div class="hero-modal">
                          <div class="modal-hero-flexcontainer">
                            <div class="hero-modal-top">
                                     <img   src="/src/assets/images/WheelieBranding.png" class="rounded mx-auto d-block" alt="Cinque Terre" width="200px" height="150px">
                                </div>
                             <div class="hero-modal-bottom">
                                    <h3>Sign Up To Join The Community</h3>
                                        <div class="title-paragraph">
                                            <h5>Wheelie is a community for car enthusiasts to buy, sell, share and talk about wheels. Join us :)</h5>
                                        </div>
                             </div>
                             <div class="flexcontainer-signup">
                                        <div class="sign-up-input">
                                            <input type="search" placeholder=" Email Address" class="form-control" v-model="user.email">
                                        </div>
                                        <div class="sign-up-input">
                                            <input type="password" placeholder=" Password" class="form-control" v-model="user.password">
                                        </div>
                                        <div class="sign-up-input">
                                            <button type="submit" class="modal-btn" @click="submit">SIGN UP</button>
                                        </div>
                             </div>
                        </div>
                </div>
      </div>
    </div>
  </div>
 </div>
</div>  
                <!-- Modal fullscreen SignUp End -->
   
  </div>
</template>

<script>
    
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            };
        },
        methods: {
            submit() {
                this.$http.post('mongodb://wheelie:bskS2YknzNzI4Auu@wheelie0-shard-00-00-dmwmz.mongodb.net:27017,wheelie0-shard-00-01-dmwmz.mongodb.net:27017,wheelie0-shard-00-02-dmwmz.mongodb.net:27017/wheelie0?ssl=true&replicaSet=Wheelie0-shard-0&authSource=admin', this.user)
                .then(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
            });
        }
        }
    }

</script>

<style>
#signup {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>