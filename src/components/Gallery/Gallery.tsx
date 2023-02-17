import React from 'react';
import './Gallery.scss';

import DesktopMilkBottlesImage from '../../assets/desktop/milk-bottles.jpg';
import DesktopOrangeImage from '../../assets/desktop/orange.jpg';
import DesktopConeImage from '../../assets/desktop/cone.jpg';
import DesktopSugarCubesImage from '../../assets/desktop/sugar-cubes.jpg';

import MobileMilkBottlesImage from '../../assets/mobile/milk-bottles.jpg';
import MobileOrangeImage from '../../assets/mobile/orange.jpg';
import MobileConeImage from '../../assets/mobile/cone.jpg';
import MobileSugarCubesImage from '../../assets/mobile/sugar-cubes.jpg';

interface GalleryProps {
	isDesktop: boolean;
}

export default function Gallery(props: GalleryProps) {
	return (
		<>
			<div className='milk-bottles'>
				<img src={props.isDesktop ? DesktopMilkBottlesImage : MobileMilkBottlesImage} alt='' />
			</div>
			<div className='orange'>
				<img src={props.isDesktop ? DesktopOrangeImage : MobileOrangeImage} alt='' />
			</div>
			<div className='cone'>
				<img src={props.isDesktop ? DesktopConeImage : MobileConeImage} alt='' />
			</div>
			<div className='sugar-cubes'>
				<img src={props.isDesktop ? DesktopSugarCubesImage : MobileSugarCubesImage} alt='' />
			</div>
		</>
	);
}
