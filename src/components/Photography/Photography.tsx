import React from 'react';
import './Photography.scss';
import DesktopPhotographyImage from '../../assets/desktop/photography.jpg';
import MobilePhotographyImage from '../../assets/mobile/photography.jpg';

export default function Photography() {
	return (
		<div className='photography'>
			<img src={window.innerWidth > 600 ? DesktopPhotographyImage : MobilePhotographyImage} alt='' className='photography-image' />
			<h2>Photography</h2>
			<p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
		</div>
	);
}
