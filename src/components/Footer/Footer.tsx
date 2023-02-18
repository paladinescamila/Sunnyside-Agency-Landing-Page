import React from 'react';
import './Footer.scss';
import Logo from '../../assets/green-logo.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import PinterestIcon from '../../assets/icons/pinterest.svg';

interface FooterProps {
	isDesktop: boolean;
}

export default function Footer(props: FooterProps) {
	const link = '';

	return (
		<div className='footer'>
			<img src={Logo} alt='' className='footer-logo' />
			<ul className='footer-links'>
				<li>
					<a href={link} aria-label='Link to About section'>
						About
					</a>
				</li>
				<li>
					<a href={link} aria-label='Link to Services section'>
						Services
					</a>
				</li>
				<li>
					<a href={link} aria-label='Link to Projects section'>
						Projects
					</a>
				</li>
			</ul>
			<ul className='footer-socials'>
				<li>
					<a href={link} aria-label='Link to Facebook'>
						<img src={FacebookIcon} alt='' />
					</a>
				</li>
				<li>
					<a href={link} aria-label='Link to Instagram'>
						<img src={InstagramIcon} alt='' />
					</a>
				</li>
				<li>
					<a href={link} aria-label='Link to Twitter'>
						<img src={TwitterIcon} alt='' />
					</a>
				</li>
				<li>
					<a href={link} aria-label='Link to Pinterest'>
						<img src={PinterestIcon} alt='' />
					</a>
				</li>
			</ul>
		</div>
	);
}
