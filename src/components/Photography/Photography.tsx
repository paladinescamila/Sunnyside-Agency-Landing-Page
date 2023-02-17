import React from 'react';
import './Photography.scss';
import DesktopPhotographyImage from '../../assets/desktop/photography.jpg';
import MobilePhotographyImage from '../../assets/mobile/photography.jpg';

interface PhotographyProps {
	isDesktop: boolean;
}

export default function Photography(props: PhotographyProps) {
	return (
		<div className='photography'>
			<img src={props.isDesktop ? DesktopPhotographyImage : MobilePhotographyImage} alt='' className='photography-image' />
			<h2>Photography</h2>
			<p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
		</div>
	);
}
