<template>
<div id="sellbanner">
   <!-- Navbar    -->
        <!-- Hero    -->       
                <div class="hero">
                          <div class="hero-width">
                             <div class="hero-left">
                                 <h2>Sit back and start watching</h2>
                                        <h2>the bids roll in..</h2>
                                        <div class="title-paragraph">
                                            <p>Start building your Wheelie auction listing now and start watching
                                            the bids roll in...</p>
                                            
                                        </div>
                             </div>
                                <div class="hero-right">
                                    
                                <div id="odometer" class="odometer">
                                    12300
                                </div>
                                </div>
                          </div>
                
         <!-- Hero    -->  
                </div>
</div>                  
</template>

<script src="http://github.hubspot.com/odometer/odometer.js"></script>

<script>
    
   
 (function(){
        
       
       var count = 12900;
        setInterval(function(){
           odometer.innerHTML = count;
           count++ ;
       },2000)
   })();
    
    
    
    
//setTimeout(function(){
////    odometer.innerHTML = 456;
//}, 1000);


</script>

<style>

</style>