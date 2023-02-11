import React from 'react';
import Logo from './assets/logo.svg';
import DesktopHeaderImage from '../../assets/desktop/header.jpg';

export default function Header() {
	return (
		<div className='header'>
			<img src={DesktopHeaderImage} alt='' />
			<h1>WE ARE CREATIVES</h1>
		</div>
	);
}
