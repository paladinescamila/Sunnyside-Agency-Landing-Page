import React from 'react';
import DesktopMilkBottlesImage from '../../assets/desktop/milk-bottles.jpg';
import DesktopOrangeImage from '../../assets/desktop/orange.jpg';
import DesktopConeImage from '../../assets/desktop/cone.jpg';
import DesktopSugarCubesImage from '../../assets/desktop/sugar-cubes.jpg';

export default function Gallery() {
	return (
		<>
			<div className='milk-bottles'>
				<img src={DesktopMilkBottlesImage} alt='' />
			</div>
			<div className='orange'>
				<img src={DesktopOrangeImage} alt='' />
			</div>
			<div className='cone'>
				<img src={DesktopConeImage} alt='' />
			</div>
			<div className='sugar-cubes'>
				<img src={DesktopSugarCubesImage} alt='' />
			</div>
		</>
	);
}
