import React from 'react'
import '../Styles/Footer.css'
import Logo from '../Assets/movE.png'
import google from '../Assets/google-play.png'
import appstore from '../Assets/app-store.png'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import pinterest from '../Assets/pinterest.png'

function Footer() {
	return (
		<div>
			<footer className='footer'>
				<div className='upper-footer'>
					<div className='left-upper-footer'>
						{' '}
						<img src={Logo} alt='logo' /> <span> TV </span>{' '}
						<div className='paragraph'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil unde ratione laborum, sint necessitatibus facilis dolores nisi quaerat tenetur, repellat
							perspiciatis corrupti tempore tempora!{' '}
						</div>{' '}
					</div>{' '}
					<div className='center-upper-footer'>
						<p> Layanan Kami </p> <p>Blog</p> <p> Pusat Bantuan </p> <p> Layanan </p> <p> Karir </p>{' '}
					</div>{' '}
					<div className='right-upper-footer'>
						{' '}
						<h3> Download </h3> <img src={google} className='google' alt='google' />
						<img src={appstore} alt='app-store' className='app-store' />{' '}
						<div className='social-media'>
							<h5> Social Media </h5> <img src={facebook} alt='facebook' />
							<img src={instagram} alt='facebook' />
							<img src={pinterest} alt='facebook' />
						</div>{' '}
					</div>{' '}
				</div>{' '}
				<hr className='underline' />
				<div className='dibawah'>
					<p> Copyright @ 2021 Mov - E Tv All Rights Reserved </p>{' '}
				</div>{' '}
			</footer>{' '}
		</div>
	)
}
export default Footer
