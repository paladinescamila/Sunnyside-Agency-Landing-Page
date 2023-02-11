import React from 'react';
import DesktopGraphicDesignImage from '../../assets/desktop/graphic-design.jpg';

export default function GraphicDesign() {
	return (
		<div className='graphic-design'>
			<img src={DesktopGraphicDesignImage} alt='' className='graphic-design-image' />
			<h2>Graphic Design</h2>
			<p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
		</div>
	);
}
