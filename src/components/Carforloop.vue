<template>  
<div id="carforloop">
<div class="nav-container product-underline">
                    <div v-for="car in cars">
                        <a class="" href="" data-toggle="modal" data-target="#modal-fullscreen-carview">
                                <div class="flexcontainer-row-car">     
                                    <div id="car-box-1">
                                       <img v-bind:src="car.image" width="100" class="product-thumbnail"/> 
                                    </div>
                                    <div id="car-box-2">
                                        <div class="car-title">
                                            <div id="vehicleTitle">
                                                {{ car.producttitle }}     
                                            </div>
                                            <div class="number">
                                            Asking Price
                                        </div>
                                        </div>
                                        <div class="car-description">
                                           <div id="car-description-inner">
                                               {{car.productdesc}}
                                           </div>
                                           <div class="item-price">
                                               {{ car.startingprice }}
                                           </div>    
                                        </div>
                                        <div id="car-details">
                                            {{ car.odometer }} >> {{ car.make }} >> {{ car.transmission }} >>
                                            {{ car.location }}
                                        </div>
                                        <div class="car-btns-row">
                                        <div class="car-buttons-left">
                                            <button type="submit" class="car-btn-brand"><p>{{ car.sellertype }}</p></button>
                                            <button type="submit" class="car-btn-comments-small"><i class="fa fa-commenting" aria-hidden="true"></i></button>
                                            <button type="submit" class="car-btn-comments"><p><i class="fa fa-commenting" aria-hidden="true"></i></p></button>
                                        </div>
                                        <div class="car-buttons-right">
                                            <button type="submit" class="car-btn-uparrow"><i class="fa fa-chevron-up" aria-hidden="true"></i> {{car.bids}} Bids</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>     
                        </a> 
                    </div>    
                </div> 
    </div>
</template>


<script>
    
  export default {
  data() {
    return {
      cars: [],
    };
  },
  methods: {
    loadCarsLive(){
      this.$http.get('http://localhost:3004/product')
        .then(function(response){
          this.cars = response.body;
      }, function(err){
          console.log(err);
      })
        
    },
  },
      
  mounted() {

            this.loadCarsLive();
  },
}
    
    
    
    

</script>

<style>

    
    
</style>
