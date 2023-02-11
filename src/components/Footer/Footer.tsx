import React from 'react';
import './Footer.scss';
import Logo from '../../assets/green-logo.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import PinterestIcon from '../../assets/icons/pinterest.svg';

export default function Footer() {
	const link = 'https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef';

	return (
		<div className='footer'>
			<img src={Logo} alt='' className='footer-logo' />
			<ul className='footer-links'>
				<li>
					<a href={link} target='_blank' rel='noreferrer'>
						About
					</a>
				</li>
				<li>
					<a href={link} target='_blank' rel='noreferrer'>
						Services
					</a>
				</li>
				<li>
					<a href={link} target='_blank' rel='noreferrer'>
						Projects
					</a>
				</li>
			</ul>
			<ul className='footer-socials'>
				<li>
					<a href={link} target='_blank' rel='noreferrer'>
						<img src={FacebookIcon} alt='' />
					</a>
				</li>
				<li>
					<a href={link} target='_blank' rel='noreferrer'>
						<img src={InstagramIcon} alt='' />
					</a>
				</li>
				<li>
					<a href={link} target='_blank' rel='noreferrer'>
						<img src={TwitterIcon} alt='' />
					</a>
				</li>
				<li>
					<a href={link} target='_blank' rel='noreferrer'>
						<img src={PinterestIcon} alt='' />
					</a>
				</li>
			</ul>
		</div>
	);
}
