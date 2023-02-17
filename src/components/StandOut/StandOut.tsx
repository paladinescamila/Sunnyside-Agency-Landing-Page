import React from 'react';
import './StandOut.scss';
import DesktopStandOutImage from '../../assets/desktop/stand-out.jpg';
import MobileStandOutImage from '../../assets/mobile/stand-out.jpg';

interface StandOutProps {
	isDesktop: boolean;
}

export default function StandOut(props: StandOutProps) {
	return (
		<>
			<div className='stand-out-image'>
				<img src={props.isDesktop ? DesktopStandOutImage : MobileStandOutImage} alt='' />
			</div>
			<div className='stand-out-text'>
				<div>
					<h2>Stand out to the right audience</h2>
					<p>
						Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend
						your brand in digital places.
					</p>
					<a href='https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef' target='_blank' rel='noreferrer'>
						LEARN MORE
					</a>
				</div>
			</div>
		</>
	);
}
