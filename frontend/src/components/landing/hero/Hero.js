
import React from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'
import salim5 from '../../../images/myimages/salim5.jfif'

function Hero()
{
	
		return (
			<div className = 'marwan py-5 mb-5 mt-5'>
				<div className = 'container'>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'left-side mb-lg-0 mb-5 text-lg-start text-center'>
								<h3 className = 'title text-capitalize'>welcome to <span>Tashilat Application</span> !</h3>
								<p className = 'sub-title text-muted text-capitalize'>Pay all bills in the same place</p>
								<p className = 'desc pb-3'>
									A plateforme that allows you to pay all kind of bills, from water, electricity, car taxes  and even buy airplane tickets!
								</p>
								<div className = 'buttons'>
									{/* <Link className = 'btn btn-danger text-capitalize me-3 shadow' to = '/login'>
										Pay a taxe<i className="ms-2 fas fa-chevron-right"></i></Link> */}
									
									<Link className = 'btn btn-outline-danger text-capitalize shadow' to = '/login'>
										Sign In To access services<i className="ms-2 fas fa-user-cog"></i></Link>
								</div>
							</div>
						</div>

						<div className = 'c col-lg-6 col-12'>
							<div className  = 'right-side text-lg-end text-center'>
								<img className = 'w-75 img-fluid' src = {salim5} alt = 'marwan' />
							</div>
						</div>
					</div>
				</div>
				<div style={{ height: 140 }} ></div>
			</div>
		)
	
}

export default Hero