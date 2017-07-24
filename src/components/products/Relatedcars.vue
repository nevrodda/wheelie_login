<template>  
<div id="relatedcars">
    <div class="header-hot-wheels">
        <h4>Related Wheels</h4>
    </div>                
                <div class="nav-container product-underline">
                    <div v-for="car in cars">
                        <a class="" href="" data-toggle="modal" data-target="#modal-fullscreen-carview">
                                <div class="flexcontainer-row-car">     
                                    <div id="car-box-1-related">
                                       <img v-bind:src="car.image" width="100" class="product-thumbnail-related"/>
                                    </div>
                                    <div id="car-box-2-related">
                                        <div class="car-title-productview">
                                            <div id="vehicleTitleRelated">
                                                {{ car.title }}     
                                            </div>
                                        </div>
                                        <div id="car-description-related">
                                            {{ car.description }}
                                        </div>
                                        <div class="item-price-related">
                                            {{ car.price }}
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
    loadCars() {
      this.cars = [
        { title: "Honda CRX - This Is A Beast", description: "Leather interior, lowered suspension, subwoofer in the boot.", image: "/src/assets/images/porsche-grey.gif", kilometers: 112 + "," + 330 + " km", transmission: "Manual", cartype: "Coupe", sellertype: "Private", location: "Wellington", price: "$" + 92342, bids: 19 },
        { title: "Honda CRX - This Is A Beast", description: "Leather interior, lowered suspension, subwoofer in the boot. This car will be sold this weekend! Don't miss the chance.", image: "/src/assets/images/porsche-grey.gif", kilometers: 112 + "," + 330, sellertype: "Private", price: "$" + 92342 },  
        { title: "Porsche 911 Turbo - Ready To Blow Your Mind", description: "Leather interior, lowered suspension, subwoofer in the boot. This car will be sold this weekend! Don't miss the chance.", image: "/src/assets/images/motorbike.gif", kilometers: 112 + "," + 330, sellertype: "Dealer", price: "$" + 54345 },
        { title: "Ford XR6 2011 With Awesome Paint", description: "Leather interior, lowered suspension, subwoofer in the boot. This car will be sold this weekend! Don't miss the chance.", image: "/src/assets/images/black-lamb.gif", kilometers: 112 + "," + 330, sellertype: "Dealer", price: "$" + 32456 },
        { title: "Honda CRX - This Is A Beast", description: "Leather interior, lowered suspension, subwoofer in the boot. This car will be sold this weekend! Don't miss the chance.", image: "/src/assets/images/porsche-grey.gif", kilometers: 112 + "," + 330, sellertype: "Private", price: "$" + 92342 } 
      ];
    },
  },
  mounted() {
    this.loadCars();
  },
}
    
    
    
    

</script>

<style>
    
    
    
</style>