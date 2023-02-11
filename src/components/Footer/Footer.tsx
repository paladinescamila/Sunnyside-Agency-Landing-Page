import React from 'react';
import './Footer.scss';
import Logo from '../../assets/logo.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import PinterestIcon from '../../assets/icons/pinterest.svg';

export default function Footer() {
	return (
		<div className='footer'>
			<img src={Logo} alt='' className='footer-logo' />
			<ul className='footer-links'>
				<li>About</li>
				<li>Services</li>
				<li>Projects</li>
			</ul>
			<ul className='footer-socials'>
				<li>
					<img src={FacebookIcon} alt='' />
				</li>
				<li>
					<img src={InstagramIcon} alt='' />
				</li>
				<li>
					<img src={TwitterIcon} alt='' />
				</li>
				<li>
					<img src={PinterestIcon} alt='' />
				</li>
			</ul>
		</div>
	);
}
