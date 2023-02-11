import React from 'react';
import './StandOut.scss';
import DesktopStandOutImage from '../../assets/desktop/stand-out.jpg';

export default function StandOut() {
	return (
		<>
			<div className='stand-out-image'>
				<img src={DesktopStandOutImage} alt='' />
			</div>
			<div className='stand-out-text'>
				<h2>Stand out to the right audience</h2>
				<p>
					Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend
					your brand in digital places.
				</p>
				<a href='https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef' target='_blank' rel='noreferrer'>
					LEARN MORE
				</a>
			</div>
		</>
	);
}
