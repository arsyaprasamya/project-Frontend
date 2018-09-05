import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
	<div className="header-top">
		<div className="container">
			<div className="header-top-in">
				
				<ul className="support">
					<li ><a href="mailto:info@example.com" ><i > </i>info@example.com</a></li>
					<li ><span ><i className="tele-in"> </i>08123456789</span></li>			
				</ul>
				<ul className=" support-right">
					<li ><a href="account.html" ><i className="men"> </i>Login</a></li>
					<li ><a href="account.html" ><i className="tele"> </i>Create an Account</a></li>			
				</ul>
				<div className="clearfix"> </div>
			</div>
			</div>
			<div className="header-bottom">
			<div className="container">			
				<div className="logo">
					<h1><a href="index.html">Arsya</a></h1>
				</div>
				<div className="top-nav">
				
		<ul className="megamenu skyblue">
			<li><a  href="index.html">Home</a></li>
			
			<li className="active grid"><a  href="">Pages</a>
				<div className="megapanel">
					<div className="row">
						<div className="col1">
							<div className="h_nav">
								<h4>SUBMENU1</h4>
								<ul>
									<li><a href="about.html">About</a></li>
									<li><a href="product.html">men</a></li>
									<li><a href="product.html">women</a></li>
									<li><a href="product.html">accessories</a></li>
									
								</ul>	
							</div>							
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>SUBMENU2</h4>
								<ul>
									<li><a href="product.html">trends</a></li>
									<li><a href="product.html">sale</a></li>
									<li><a href="product.html">style videos</a></li>
									<li><a href="product.html">accessories</a></li>
									<li><a href="product.html">kids</a></li>
									<li><a href="product.html">style videos</a></li>
								</ul>	
							</div>							
						</div>
						<div className="col1 col5">
							<iframe src="https://player.vimeo.com/video/10777111?color=ffffff&title=0&byline=0&portrait=0"  webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
						</div>
						
					</div>
					
    				</div>
				</li>	
		<li ><a  href="404.html">Blog</a></li>				
				<li><a  href="">Products</a>
				<div className="megapanel">
					<div className="row">
						<div className=" col-nav">
							<div className="h_nav">
								<h4>BEST SELLING</h4>
								<div className="sell">
									<div className="men">
										<a href="product.html"><img src="images/pi.jpg" alt="" /></a>
									</div>
									<div className="men-in">
										<h6>Lorem Ipsum</h6>
										<span>Rp. 60000.00</span>
									</div>
									<div className="clearfix"> </div>
								</div>	
								<div className="sell">
									<div className="men">
										<a href="product.html"><img src="images/pi11.jpg" alt="" /></a>
									</div>
									<div className="men-in">
										<h6> Dummy Text</h6>
										<span>Rp. 160.00</span>
									</div>
									<div className="clearfix"> </div>
								</div>	
								<div className="sell">
									<div className="men">
										<a href="product.html"><img src="images/pi12.jpg" alt="" /></a>
									</div>
									<div className="men-in">
										<h6>Standard Chunk</h6>
										<span>Rp. 80000.00</span>
									</div>
									<div className="clearfix"> </div>
								</div>	
							</div>							
						</div>
						<div className=" col-nav">
							<div className="h_nav">
								<h4>TOP RATE</h4>
								<div className="sell">
									<div className="men">
									<a href="product.html"><img src="images/pi13.jpg" alt="" /></a>
									</div>
									<div className="men-in">
										<h6> Perspiciatis Und</h6>
										<span>Rp. 90000.00</span>
									</div>
									<div className="clearfix"> </div>
								</div>	
								<div className="sell">
									<div className="men">
										<a href="product.html"><img src="images/pi.jpg" alt="" /></a>
									</div>
									<div className="men-in">
										<h6>Veritatis Et</h6>
										<span>Rp. 60000.00</span>
									</div>
									<div className="clearfix"> </div>
								</div>	
								<div className="sell">
									<div className="men">
										<a href="product.html"><img src="images/pi11.jpg" alt="" /></a>
									</div>
									<div className="men-in">
										<h6>Lorem Ipsum</h6>
										<span>Rp. 100.00</span>
									</div>
									<div className="clearfix"> </div>
								</div>	
							</div>							
						</div>
					</div>
    				</div>
				</li>
				
				<li><a  href="contact.html">Contact</a>
					
				</li>
		 </ul> 
		 
		 <div className="search-in" >
			<div className="search" >
						<form action="search.html">
							<input type="text" value="Keywords" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Keywords';}" className="text"/>
							<input type="submit" value="SEARCH"/>
						</form>
							<div className="close-in"><img src="images/close.png" alt="" /></div>
					</div>
						<div className="right"><button> </button></div>
				</div>
						<script type="text/javascript">
							$('.search').hide();
							$('button').click(function (){
							$('.search').show();
							$('.text').focus();
							}
							);
							$('.close-in').click(function(){
							$('.search').hide();
							});
						</script>

					
					<div className="cart box_1">
						<a href="checkout.html">
						<h3> <div className="total">
							<span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)</div>
							<img src="images/cart.png" alt=""/></h3>
						</a>
						<p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>
						<div className="clearfix"> </div>
					</div>

<div className="clearfix"> </div>
					
				</div>
				
			</div>
			<div className="clearfix"> </div>
		</div>
		</div>

	<div className="banner">
		<div className="banner-top">
	         <h2>THIS IS ARSYA</h2>
	         <p>This theme for high selling <span>fashion such as
clothings, shoes, bags, fashion for men,
women, accessories, etc.</span></p>
</div>

	<div className="now">
	         <a className="morebtn" href="single.html">Explore</a>
	         <a className="morebtn at-in" href="single.html">Shop Now</a>
	         <div className="clearfix"> </div>
	         </div>
 	</div>	

</div>

<div className="content">
	<div className="container">
		<div className="content-top">
			<div className="col-md-9">
				<div className="col-top">
					<div className="col-md-6 black">
						<a href="single.html"><div className="shoe" >
							<h3>WOMEN SHOES</h3>
						</div>
						<img src="images/sh.png" alt="" /></a>
					</div>
					<div className="col-md-6 black-in">
						<a href="single.html"><div className="shoe bag" >
							<h3>WOMEN BAGS</h3>
						</div>
						<img src="images/ba.png" alt="" /></a>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-top-bottom">
					<h3 className="menber">MEMBER DISCOUNT</h3>
					<a href="single.html" className="now-in">SHOP NOW</a>
					<div className="clearfix"> </div>
				</div>
			</div>
			<div className="col-md-3 per">
				<a href="single.html"><img className="img-responsive" src="images/pi1.jpg" alt="" />
				<div className="six">
					<h4>FASHION</h4>
					<p>Get up to</p>
					<span>60%</span>
				</div></a>
			</div>
			<div className="clearfix"> </div>
		</div>
		
		<div className="sap_tabs">
			<label className="line"> </label>
			<h2>LATES ARRIVAL</h2>	
						 <div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
						  <ul className="resp-tabs-list">
						  	  <li className="resp-tab-item" aria-controls="tab_item-0" role="tab"><span>WOMENS</span></li>
							  <li className="resp-tab-item" aria-controls="tab_item-1" role="tab"><span>MENS</span></li>
							  <li className="resp-tab-item" aria-controls="tab_item-2" role="tab"><span>SHOES</span></li>
							  <div className="clearfix"></div>
						  </ul>				  	 
							<div className="resp-tabs-container">
							    <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
									<div className="tab_img">
									  <div className="img-top simpleCart_shelfItem">
										
					   		  			   <img src="images/pi2.jpg" className="img-responsive" alt=""/>
											
								              <div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 
												 	<div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
										
										</div>
										<div className="img-top simpleCart_shelfItem">
										  
					   		  			   <img src="images/pi3.jpg" className="img-responsive" alt=""/>
											<div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 
												<div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
											  <div className="col-in">
											  	<p>NEW</p>
											  </div>
											 </div>
											  <div className="img-top simpleCart_shelfItem">
										  
					   		  			   <img src="images/pi4.jpg" className="img-responsive" alt=""/>
											<div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 
												 <div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
											 <div className="col-in col-in-1">
											  	<p>SALE <span>30%</span></p>
											  </div>
											</div>
											<div className="clearfix"></div>
							     </div>	
									 	        					 
						  </div>
							    <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
									<div className="tab_img">
									  <div className="img-top simpleCart_shelfItem">
										
					   		  			   <img src="images/pi9.jpg" className="img-responsive" alt=""/>
											
								              <div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 
												 <div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
										
										</div>
										<div className="img-top simpleCart_shelfItem">
										  
					   		  			   <img src="images/pi8.jpg" className="img-responsive" alt=""/>
											<div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 
												 <div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
											  <div className="col-in">
											  	<p>NEW</p>
											  </div>
											 </div>
											  <div className="img-top simpleCart_shelfItem">
										  
					   		  			   <img src="images/pi10.jpg" className="img-responsive" alt=""/>
											<div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 <div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
											 <div className="col-in col-in-1">
											  	<p>SALE <span>30%</span></p>
											  </div>
											</div>
											<div className="clearfix"></div>
							     </div>	
									 	        					 
						  </div>
						    <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-2">
									<div className="tab_img">
									  <div className="img-top simpleCart_shelfItem">
										
					   		  			   <img src="images/pi5.jpg" className="img-responsive" alt=""/>
											
								              <div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 
												 <div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
										
										</div>
										<div className="img-top simpleCart_shelfItem">
										  
					   		  			   <img src="images/pi6.jpg" className="img-responsive" alt=""/>
											<div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 
												 	<div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
											  <div className="col-in">
											  	<p>NEW</p>
											  </div>
											 </div>
											  <div className="img-top simpleCart_shelfItem">
										  
					   		  			   <img src="images/pi7.jpg" className="img-responsive" alt=""/>
											<div className="tab_desc">
												 <ul className="round-top">
												 	<li><a href=""><i> </i></a></li>
												 	<li><a href=""><i className="round"> </i></a></li>
												 </ul>
												 
												 	<div className="agency ">
													<div className="agency-left">
														<h6 className="jean">BAJU JEANS</h6>
														<span className="dollor item_price">Rp. 50000.00</span>
														<div className="clearfix"> </div>
													</div>
													<div className="agency-right">
														<ul className="social">
															<li><a href=""><i className="item_add"> </i></a></li>
															<li><a href=""><i className="text"> </i></a></li>
														</ul>
														<ul className="social-in">
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i> </i></a></li>
															<li><a href=""><i > </i></a></li>
															<li><a href=""><i > </i></a></li>
														</ul>
														<div className="clearfix"> </div>
													</div>
												 </div>
											  </div>
											 <div className="col-in col-in-1">
											  	<p>SALE <span>30%</span></p>
											  </div>
											</div>
											<div className="clearfix"></div>
							     </div>	
									 	        					 
						  </div>		
                  </div>
          </div>
         </div>
		
	</div>
	
		<div className="content-bottom">
			<div className="container">
				<p>Design is a funny word. Some people think 
design means how it looks. But of course, if you dig deeper 
it’s really how it works.</p>
<label className="line1"> </label>
<span>Steve Jobs</span>
			</div>
		</div>
		
		<div className="content-bottom-top">
			<div className="container">
					<h3>Latest News</h3>
					<div className="blog-in">
						<div className="col-md-8">
						
							<div className="wmuSlider example1">
					<div className="wmuSliderWrapper">
						<article style="position: absolute; width: 100%; opacity: 0;"> 
					  			<div className="blog-in-top">
								<div className="col-md-6 van">
								<a href="single.html"> <img src="images/bl.jpg" className="img-responsive" alt=""/></a>
								</div>
								<div className="col-md-6 on-para">
									<div className="col-on">
										<h4>Iniloh Judulnya</h4>
										<span>Saturday, 23/08/2014</span>
									</div>
									<p>Lorem ipsum dolor sit <span>amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
magna aliquam erat volutpat ....</span></p>
<a href="single.html" className="sed">Readmore</a>
<div className="clearfix"> </div>
								</div>	
							<div className="clearfix"> </div>
							</div>
							<div className="blog-in-bottom">
								<div className="col-md-6 van-in">
									<h5>Discount Up to</h5>
								<span>60%</span>
								</div>
								<div className="col-md-6 on-para">
									<div className="col-on">
										<h4>Iniloh Judulnya</h4>
										<span>Saturday, 23/08/2014</span>
									</div>
									<p>Lorem ipsum dolor sit <span>amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
magna aliquam erat volutpat ....</span></p>
<a href="single.html" className="sed">Readmore</a>
<div className="clearfix"> </div>
								</div>	
							<div className="clearfix"> </div>
							</div>
						</article>
						<article style="position: absolute; width: 100%; opacity: 0;"> 
					  			<div className="blog-in-top">
								<div className="col-md-6 van">
								<a href="single.html"> <img src="images/bl2.jpg" className="img-responsive" alt=""/></a>
								</div>
								<div className="col-md-6 on-para">
									<div className="col-on">
										<h4>Iniloh Judulnya</h4>
										<span>Saturday, 23/08/2014</span>
									</div>
									<p>Lorem ipsum dolor sit <span>amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
magna aliquam erat volutpat ....</span></p>
<a href="single.html" className="sed">Readmore</a>
<div className="clearfix"> </div>
								</div>	
							<div className="clearfix"> </div>
							</div>
							<div className="blog-in-bottom">
								<div className="col-md-6 van-in in-bus">
									<h5>Discount Up to</h5>
								<span>60%</span>
								</div>
								<div className="col-md-6 on-para">
									<div className="col-on">
										<h4>Iniloh Judulnya</h4>
										<span>Saturday, 23/08/2014</span>
									</div>
									<p>Lorem ipsum dolor sit <span>amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
magna aliquam erat volutpat ....</span></p>
<a href="single.html" className="sed">Readmore</a>
<div className="clearfix"> </div>
								</div>	
							<div className="clearfix"> </div>
							</div>	
						</article>
						<article style="position: absolute; width: 100%; opacity: 0;"> 
				   				<div className="blog-in-top">
								<div className="col-md-6 van">
								<a href="single.html"> <img src="images/bl.jpg" className="img-responsive" alt=""/></a>
								</div>
								<div className="col-md-6 on-para">
									<div className="col-on">
										<h4>Iniloh Judulnya</h4>
										<span>Saturday, 23/08/2014</span>
									</div>
									<p>Lorem ipsum dolor sit <span>amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
magna aliquam erat volutpat ....</span></p>
<a href="single.html" className="sed">Readmore</a>
<div className="clearfix"> </div>
								</div>	
							<div className="clearfix"> </div>
							</div>
							<div className="blog-in-bottom">
								<div className="col-md-6 van-in">
									<h5>Discount Up to</h5>
								<span>60%</span>
								</div>
								<div className="col-md-6 on-para">
									<div className="col-on">
										<h4>Iniloh Judulnya</h4>
										<span>Saturday, 23/08/2014</span>
									</div>
									<p>Lorem ipsum dolor sit <span>amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
magna aliquam erat volutpat ....</span></p>
<a href="single.html" className="sed">Readmore</a>
<div className="clearfix"> </div>
								</div>	
							<div className="clearfix"> </div>
							</div>	   		 	
						</article>
			</div>
		</div>
		
		  <script src="js/jquery.wmuSlider.js"></script> 
			  <script>
       			$('.example1').wmuSlider({
					 pagination : false,
				});         
   		     </script> 	

						</div>
						<div className="col-md-4 amet">
							<div className="grid-per">
							<a href="single.html"><img className="img-responsive" src="images/bl1.jpg" alt=""/>
							<div className="six-per">
					<h4>Get up to</h4>
					<span>60%</span>
					<p>Lorem ipsum dolor amet, consectetuer elit
adipiscing , sed diam nonummy nibh euismod
tincidunt ut laoreet dolore magna erat
aliquam volutpat.</p>
					
				</div></a>
						</div>
						</div>
						<div className="clearfix"> </div>
					</div>
			</div>
		</div>
		
			<div className="container">
				<div className="bottom-grid">
					<img className="img-responsive" src="images/back1.jpg" alt=""/>
					<div className="fit">
						<h6>Best fit for women’s feet</h6>
						<p>TRY TO WALK IN OUR SHOES</p>
					</div>
				</div>
			</div>
		
</div>

	<div className="footer">
		<div className="container">
			<div className="col-md-4 footer-top">
				<h3>QUICK CONTACT</h3>
				<form>
						
						<input type="text" value="ENTER YOUR NAME*" onfocus="this.value='';" onblur="if (this.value == '') {this.value ='ENTER YOUR NAME*';}"/>
						
						<input type="text" value="ENTER YOUR EMAIL*" onfocus="this.value='';" onblur="if (this.value == '') {this.value ='ENTER YOUR EMAIL*';}"/>
						
						<input type="text" value="ENTER YOUR PHONE" onfocus="this.value='';" onblur="if (this.value == '') {this.value ='ENTER YOUR PHONE';}"/>
					
						<textarea cols="77" rows="6" value="" onfocus="this.value='';" onblur="if (this.value == '') {this.value = 'ENTER YOUR MESSAGE*';}">ENTER YOUR MESSAGE*</textarea>
						
							<input type="submit" value="SEND MESSAGE" />
						
					</form>

			</div>
			<div className="col-md-4 footer-middle">
				<h3>TOP RATED PRODUCTS</h3>
					<div className="product-go">
							<div className="grid-product">
								<h6><a href="" >Winter Combo Style</a></h6>
								<ul className="star-footer">
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
								</ul>
								<span className=" price-in"><small>Rp. 70000000.00</small> Rp. 40000.00</span>
							</div>
								<div className="fashion">
									<a href=""><img className="img-responsive " src="images/f1.jpg" alt=""/>
									<p>SALE</p></a>
								</div>
							<div className="clearfix"> </div>
							</div>
								<div className="product-go">
							<div className="grid-product">
								<h6><a href="" >Winter Combo Style</a></h6>
								<ul className="star-footer">
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
								</ul>
								<span className=" price-in"><small>Rp. 70000000.00</small> Rp. 40000.00</span>
							</div>
								<div className="fashion">
									<a href=""><img className="img-responsive " src="images/f2.jpg" alt=""/>
									<p className="new1">NEW</p></a>
								</div>
							<div className="clearfix"> </div>
							</div>
								<div className="product-go">
							<div className="grid-product">
								<h6><a href="" >Winter Combo Style</a></h6>
								<ul className="star-footer">
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
									<li><a href=""><i> </i></a></li>
								</ul>
								<span className=" price-in"><small>Rp. 70000000.00</small> Rp. 40000.00</span>
							</div>
								<div className="fashion">
									<a href=""><img className="img-responsive " src="images/f3.jpg" alt=""/>
									<p className="new1">NEW</p></a>
								</div>
							<div className="clearfix"> </div>
							</div>

			</div>
			<div className="col-md-4 footer-bottom">
				<div className="logo-footer">
					<div className="logo-bottom">
						<a href=""><img src="images/lo.png" alt=""/></a>
					</div>
					<div className="logo-the">
						<h4>Arsya Theme</h4>
						<p>Was designed for opencart, magento, 
woocommerce and prestashop platforms. 
It is based on Bootstrap.</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="indo">
				<p className="in">Bandung, Indonesia <span>40553</span></p>
					<ul className="social-footer ">
						<li><span><i> </i>+62 226759804 </span></li>
						<li><span><i className="down"> </i>blithemes</span></li>
						<li><a href="mailto:info@example.com"><i className="mes"> </i>info@example.com</a></li>
						<li><a href=""><i className="mes-in"> </i>http://example.com</a></li>
					</ul>
					<a href=""><img src="images/pa.png" alt=""/></a>
					</div>
			</div>
			<div className="clearfix"> </div>
			<p className="footer-class">© 2015 Amberegul All Rights Reserved | Template by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
		</div>
	</div>
      </div>
    );
  }
}

export default App;