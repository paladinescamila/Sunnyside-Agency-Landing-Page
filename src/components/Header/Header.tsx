import React from 'react';
import './Header.scss';
import Logo from '../../assets/white-logo.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import DesktopHeaderImage from '../../assets/desktop/header.jpg';

export default function Header() {
	return (
		<div className='header'>
			<img src={DesktopHeaderImage} alt='' />
			<div>
				<img src={Logo} alt='' className='logo' />
				<ul>
					<li>
						<a href=''>About</a>
					</li>
					<li>
						<a href=''>Services</a>
					</li>
					<li>
						<a href=''>Projects</a>
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
