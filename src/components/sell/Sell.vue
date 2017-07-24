<template>
<div id="sell-form">
   <navigation-search></navigation-search>
       <sell-banner></sell-banner>
    <div id="main-container">
                    <div id="constrain-width">
                       <!-- Left SideBar    --> 
                        <div class="left-sidebar-sell">
                           
                            <div id="header-feed">
                                <h6>Title</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <h6><input v-model="product.producttitle" id="sell-inputs" ></h6>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Description</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.productdesc" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Seller Type</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.sellertype" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Make</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.make" id="sell-inputs">
                                      <option>Toyota</option>
                                      <option>Ford</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Model</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.model" id="sell-inputs">
                                      <option>Integra</option>
                                      <option>XR8</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Year</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.year" id="sell-inputs">
                                      <option>1988</option>
                                      <option>2012</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Transmission</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.transmission" id="sell-inputs">
                                      <option>Manual</option>
                                      <option>Automatic</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Kilometers</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.odometer" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Starting Price</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.startingprice" id="sell-inputs">
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Reserve Price</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.reserve" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Auction Ends In?</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.endsin" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Primary Colour</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.primarycolour" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Interior Colour</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.interiorcolour" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Has The Car Been Written Off?</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.writtenoff" id="sell-inputs">
                                      <option>Yes</option>
                                      <option>No</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Is The Car Registered?</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.registered" id="sell-inputs">
                                      <option>Yes</option>
                                      <option>No</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Plate Number</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.plateno" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Reg Expiry Month</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.regoexpirymonth" id="sell-inputs">
                                      <option>01</option>
                                      <option>02</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Reg Expiry Year</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.regoexpiryyear" id="sell-inputs">
                                      <option>2017</option>
                                      <option>2018</option>
                                      <option>2019</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Sold With Road Worthy?</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><select v-model="product.soldwithroadworthy" id="sell-inputs">
                                      <option>Yes</option>
                                      <option>No</option>
                                    </select></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>VIN Number</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.vinno" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        <div id="header-feed">
                                <h6>Phone Number</h6>
                            </div>
                        <div class="flexcontainer-row">
                            <div class="sidebar-options">
                                <div class="search-name"> 
                                    <p><input v-model="product.contactno" id="sell-inputs"></p>
                                </div>
                            </div> 
                        </div>
                        
                        <button type="submit" class="modal-btn" @click="submit">Submit</button>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        </div> 
                        <!-- Left SideBar    --> 
                <div class="main-scroll-sell">  
                          <div class="hot-wheels border"> 
          
                <ul class="list-unstyled" id="container">
                     <div class="nav-container product-underline">
                
                                <div class="flexcontainer-row-car">     
                                    <div id="car-box-1"> 
                                      
                                       <template slot="clip-uploader-body" scope="props">
                                          <div v-for="file in props.files">
                                            <img v-bind:src="file.dataUrl" />
                                            {{ file.name }} {{ file.status }}
                                          </div>
                                        </template>
                                       
                                       
                                    </div>
                                    <div id="car-box-2">
                                        <div class="car-title">
                                            <div id="vehicleTitle">
                                                  {{ product.producttitle }}     
                                            </div>
                                            <div class="number">
                                            Asking Price
                                        </div>
                                        </div>
                                        <div class="car-description">
                                           <div id="car-description-inner">
                                               {{ product.productdesc }} 
                                           </div>
                                           <div class="item-price">
                                               ${{ product.startingprice }}
                                           </div>    
                                        </div>
                                        <div id="car-details">
                                            {{ product.odometer }} >> {{ product.make }} >> {{ product.transmission }} >>
                                            Wellington
                                        </div>
                                        <div class="car-btns-row">
                                        <div class="car-buttons-left">
                                            <button type="submit" class="car-btn-brand"><p>{{ product.sellertype }}</p></button>
                                            <button type="submit" class="car-btn-comments-small"><i class="fa fa-commenting" aria-hidden="true"></i></button>
                                            <button type="submit" class="car-btn-comments"><p><i class="fa fa-commenting" aria-hidden="true"></i></p></button>
                                        </div>
                                        <div class="car-buttons-right">
                                            <button type="submit" class="car-btn-uparrow"><i class="fa fa-chevron-up" aria-hidden="true"></i> 22 Bids</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>     
                        </div>        
                    </ul> 
                                </div> 
                        
                       
                          
                            
                </div>     
            
                        </div>
                        
    </div>
    <footer-main></footer-main>



</div>  
  
</template>

<script>   
 
 module.exports = {
    data: function () {
    return {
      product: {
        producttitle : '',
        productdesc : '',  
        sellertype : '',
        make : '',
        model: '',
        seller_dealer: '',
        year: '',
        transmission: '',
        odometer: '',
        startingprice: '',
        reserve: '',
        endsin: '',
        primarycolour: '',
        interiorcolour: '',
        writtenoff: '',
        registered: '',
        plateno: '',
        regoexpirymonth: '',
        regoexpiryyear: '',
        soldwithroadworthy: '',
        vinno: '',
        contactno: '',
        url: '/upload',
        paramName:'file', 
        options: {
          url: '/upload',
          paramName: 'file'
          }     
        }
    };
  },
   methods: {
            submit() { this.$http.post('http://localhost:3004/product', this.product)
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
    
    #sell {
      margin-top: 0 !important;
      text-align: left !important;    
    };

</style>