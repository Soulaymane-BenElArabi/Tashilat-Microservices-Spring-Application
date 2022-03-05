
import React from 'react'
import './Hero.css'
//import {Link} from 'react-router-dom'
import about from '../../../images/sections/about.svg'

function Hero()
{
	
	return (
		<div className = 'hero py-2 mb-5'>
				<div className = 'container'>
					<div className = 'title pt-1 pb-5 text-center'>
						<h4 className = 'sub-title text-capitalize'>about <span>us</span></h4>
					</div>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'left-side mb-lg-0 mb-5 text-lg-start text-center'>
								<h5 className = 'title text-capitalize mb-3'>we are <span>TashilatApplication</span></h5>
								<p className  = 'desc mb-lg-4 mb-5'>
									We bring all daily bills near your door, the only thing you need to pay a bill is to bring it to use, and leave the rest for us 
								</p>
							</div>
						</div>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'right-side text-lg-end text-center'>
								<img className = 'w-75 img-fluid mb-5' src = {about} alt = 'about' />
								<div style={{height:199}}></div>
							</div>
						</div>
					</div>
				</div>
				
		</div>
		
	)
	
}

export default Hero
