import React from 'react';
import './GraphicDesign.scss';
import DesktopGraphicDesignImage from '../../assets/desktop/graphic-design.jpg';
import MobileGraphicDesignImage from '../../assets/mobile/graphic-design.jpg';

export default function GraphicDesign() {
	return (
		<div className='graphic-design'>
			<img src={window.innerWidth > 800 ? DesktopGraphicDesignImage : MobileGraphicDesignImage} alt='' className='graphic-design-image' />
			<h2>Graphic Design</h2>
			<p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
		</div>
	);
}
