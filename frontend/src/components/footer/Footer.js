
import React from 'react'
//import {navbar_items} from '../navbar/Data'
import {Link} from 'react-router-dom'
import './Footer.css'
import {accounts} from './Data'


function Footer()
{
	
	const display_accounts = _ =>
	{
		let items = accounts.map((item, index) =>
		{
			return (
				<div className = {`a account-${index} mx-2 px-2 py-1 rounded-circle shadow-lg`}  key = {Math.random()}>
					<a className = 'text-center' href = {item.link} target = '_blank' rel="noreferrer"><i className = {item.icon}></i></a>
				</div>
			)
		})
		return items
	}

	
		return (
			<div className = 'footer py-3 pb-4'>
				<div className = 'container'>
					<div className = 'footer-top py-3 mb-4 d-flex justify-content-center'>
						{display_accounts()}
					</div>
					
					<div className = 'copyrights text-center'>
						<p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link to = "/">TashilatApplication</Link></p>
					</div>
				</div>
			</div>
		)
	
}

export default Footer