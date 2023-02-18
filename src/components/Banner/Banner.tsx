import React from 'react';
import './Banner.scss';
import Logo from '../../assets/white-logo.svg';
import HamburgerIcon from '../../assets/icons/hamburger.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import DesktopBannerImage from '../../assets/desktop/banner.jpg';
import MobileBannerImage from '../../assets/mobile/banner.jpg';

interface BannerProps {
	isDesktop: boolean;
}

export default function Banner(props: BannerProps) {
	const link = '';

	// Mobile menu
	const [displayMenu, setDisplayMenu] = React.useState(false);
	const toggleMenu = () => setDisplayMenu(!displayMenu);

	React.useEffect(() => {
		if (props.isDesktop) setDisplayMenu(false);
	}, [props.isDesktop]);

	return (
		<div className='banner'>
			<img src={props.isDesktop ? DesktopBannerImage : MobileBannerImage} alt='' />
			<div>
				<img src={Logo} alt='' className='logo' />
				{props.isDesktop && (
					<ul className='menu-desktop'>
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
						<li>
							<button>CONTACT</button>
						</li>
					</ul>
				)}
				{displayMenu && (
					<ul className='menu-mobile'>
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
						<li>
							<button>CONTACT</button>
						</li>
					</ul>
				)}
				{!props.isDesktop && <img src={HamburgerIcon} alt='' className='hamburger-menu-icon' onClick={toggleMenu}></img>}
			</div>
			<h1>WE ARE CREATIVES</h1>
			<img src={ArrowDown} alt='' className='arrow-down' />
		</div>
	);
}
