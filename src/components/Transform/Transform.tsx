import React from 'react';
import './Transform.scss';
import DesktopTransformImage from '../../assets/desktop/transform.jpg';
import MobileTransformImage from '../../assets/mobile/transform.jpg';

export default function Transform() {
	return (
		<>
			<div className='transform-text'>
				<h2>Transform your brand</h2>
				<p>
					We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals
					that do most of the marketing for you.
				</p>
				<a href='https://www.frontendmentor.io/profile/paladinescamila'>LEARN MORE</a>
			</div>
			<div className='transform-image'>
				<img src={window.innerWidth > 600 ? DesktopTransformImage : MobileTransformImage} alt='' />
			</div>
		</>
	);
}
