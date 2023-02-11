import React from 'react';
import DesktopPhotographyImage from '../../assets/desktop/photography.jpg';

export default function Photography() {
	return (
		<div className='photography'>
			<img src={DesktopPhotographyImage} alt='' className='photography-image' />
			<h2>Photography</h2>
			<p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
		</div>
	);
}
