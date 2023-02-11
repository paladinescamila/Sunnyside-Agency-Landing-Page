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

export default function Gallery() {
	return (
		<>
			<div className='milk-bottles'>
				<img src={window.innerWidth > 600 ? DesktopMilkBottlesImage : MobileMilkBottlesImage} alt='' />
			</div>
			<div className='orange'>
				<img src={window.innerWidth > 600 ? DesktopOrangeImage : MobileOrangeImage} alt='' />
			</div>
			<div className='cone'>
				<img src={window.innerWidth > 600 ? DesktopConeImage : MobileConeImage} alt='' />
			</div>
			<div className='sugar-cubes'>
				<img src={window.innerWidth > 600 ? DesktopSugarCubesImage : MobileSugarCubesImage} alt='' />
			</div>
		</>
	);
}
