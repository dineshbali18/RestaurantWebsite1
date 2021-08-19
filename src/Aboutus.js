import React from 'react'
import "./aboutus.css"
import chef from "./images/chef.jpeg"
import aboutus from "./images/aboutus.jpeg"
import start from "./images/start.jpeg"
import main from "./images/main.jpeg"
import meal from "./images/meal.jpeg"
// import Speech from 'react-speech';
const Aboutus = () => {
	const style = {
  play: {
    button: {
      width: '28',
      height: '28',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'yellow',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    },
  }
};
  return (
    <div className="body">
      <div className="d1">
							<div>
									<img className="img1" src={aboutus} alt="rest" width="300" height="300"/>
							</div>
						<div>
								<h1 className="a"><b>ABOUT US</b></h1>
   <p className="p">Our aim is to provide a fun and safe environment where our customers can enjoy good food made with quality ingredients at affordable prices.
   </p>
						</div>

	</div>
 <div className="d2">
		
		<div>
		<h1 className="b">Expect the Best.</h1>
		<p className="p">Scrumtious to the core,snacks and starters are served before the maincourse,so that people get to taste a variety of flavours and textures while engaging in colourful conversations. </p>
		
		</div>

		<div>
			<img className="img2" src={start} alt ="start"  width="300" height="300"/>
		</div>
	
	</div>
	<div className="d3">
		<div>
				<img className ="img3" src={main} alt ="maincourse"  width="300" height="300"/>
		</div>
	<div>
				<h1 className="c">We serve the deliciousness.</h1>
		<p className="p"> There's nothing like noodle time! Come rain, come shine, digging into a bowl of noodles is the epitome of comfort food. The strings of happiness come in many forms and can be tossed in a number of ways with myriad ingredients to make spectacular treats. </p>
	</div>
	
	</div>

	<div className="d4">
		
	<div>
				<h1 className="d">Made fresh for YOU!</h1>
		<p className="p"> “Stressed spelled backwards is desserts.” Coincidence? We think not! A little bit of sugar goes a long way . No meal is complete without something meetha. We take immense pride in our wide array of delicious treats, ranging from Apple pie to Creamy Caramel Pancakes.</p>
	</div>
	
	<div>
				<img className ="img4" src={meal} alt ="dessert"  width="300" height="300"/>
		</div>
		
	</div>
	<div className="d5">
		<div>
			<img className="img5" src={chef} alt="chef" width="300" height="300"/>
		</div>
		<div>
			<h1 className="e">A Taste of Home.</h1>
		<p className="p">The imagination of our chefs will never bore you with always different and delicious dishes. The attention in choice of genuine and local ingredients will relax you The accurate service, the elegance of our dining halls will make you feel at ease. The availability of our friendly staff will pamper you. And you'll come back for more. We promise. :)</p>
		</div>
	
	</div>


 
    </div>
  )
}

export default Aboutus
