<template>
  <div id="navigation">
   <!-- Navbar    -->
        <div id="nav-container"> 
                <nav id="main_nav">
                    <div id="logo">
                        <a class="navbar-logo" href="#">
                            <img src="src/assets/images/WheelieDubYou.svg" width="40" height="40">
                        </a>
                        <div class="brand-name">
                            Wheelie
                        </div>
                    </div>
            <section class="main_nav_search">
	             <form class="search" method="post" action="index.html" >
		 <input type="search" placeholder=" Discover your next set of wheels" class="search">
		             <ul class="results" >
			             <li><a href="index.html">Search Result #1<br /><span>Description...</span></a></li>
			             <li><a href="index.html">Search Result #2<br /><span>Description...</span></a></li>
	 		             <li><a href="index.html">Search Result #3<br /><span>Description...</span></a></li>
         	             <li><a href="index.html">Search Result #4</a></li>
		             </ul>
	             </form>
            </section>
                    <div class="main_nav_menu">
                        <div class="main_nav_menu_item">
                            <button @click="login" class="btn1 navbar-btn" id="login">LOG IN</button>
                            <p>Server Status: {{ status }}</p>
                        </div>
                        <div class="main_nav_menu_item">
                            <button type="submit" class="btn2 navbar-btn" data-toggle="modal" data-target="#modal-fullscreen">SIGN UP</button>
                        </div>
                    </div>
                </nav>
        </div>
        <!-- Navbar    -->
   
  </div>
</template>
<script src="https://cdn.auth0.com/js/auth0/8.8/auth0.min.js"></script></script>
<script>
  
    export default {
        data: function() {
            return {
                status: 'critical'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Normal';
            }
        }
    }
   
</script>

<style>
#navigation {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
