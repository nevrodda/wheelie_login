<template>
    <div id="productbiddingengine">
                   <div class="flexcontainer">
                                 <div class="title">
                                     <h4>Current Bid: </h4>
                                     <h1>$93,211</h1>
                                 </div>
                                 
                            <div class="content">
                                <div class="flexcontainer-row">
                                    
                                    <div class="flexcontainer-row">
                                        <div class="numbers">
                                            <p align="left">You gotta be in it to win it!
                                            </p>
                                            <span></span>
                                            <div class="flexcontainer-row">
                                            <h6 align="left">Place a bid</h6>
                                            </div>
                                        </div>
                                    </div>          
                                </div>
                                    <div class="stats">
                                        <div class="flexcontainer">
                                            <div class="form-group">
                                                <input type="email" class="form-control border-input" placeholder="Amount">
                                            </div>
                                                <button type="submit" class="btn-bid">Place Bid</button>
                                        </div>
                                    </div>
                            </div>
                    </div>
                    <div class="flexcontainer">
                                 <div class="title">
                                     <h4>Bid History: 59 Bids </h4>
                                 </div>
                                 
                            <div class="flexcontainer-row product-underline">
                            <div id="avatar-img">
                                <img src="/src/assets/images/ryan.jpg" alt="Circle Image" class="bid-avatar">
                            </div>
                            <div class="flexcontainer-row">
                            <div id="ask-wheelie-name flexcontainter-row">
                                <h5>Chad Graybeal</h5>
                            </div>
                            <div id="bid-history-no">
                                <h6>$89,000</h6>
                            </div>
                            </div>
                        </div>
                    </div>
                 </div>                             
                               
                            
</template>


<script>

</script>


<style>
    #bid-history-no {
    width: 33%;
    margin-right: 20px;
    margin-top: 20px;
    padding-left: 5px;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    border-radius: 3px;
    }
</style>