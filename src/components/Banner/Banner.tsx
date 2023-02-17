import React from 'react';
import './Banner.scss';
import Logo from '../../assets/white-logo.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import DesktopBannerImage from '../../assets/desktop/banner.jpg';
import MobileBannerImage from '../../assets/mobile/banner.jpg';

export default function Banner() {
	const link = 'https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef';

	return (
		<div className='banner'>
			<img src={window.innerWidth > 800 ? DesktopBannerImage : MobileBannerImage} alt='' />
			<div>
				<img src={Logo} alt='' className='logo' />
				<ul>
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
					<li>
						<button>CONTACT</button>
					</li>
				</ul>
			</div>
			<h1>WE ARE CREATIVES</h1>
			<img src={ArrowDown} alt='' className='arrow-down' />
		</div>
	);
}
