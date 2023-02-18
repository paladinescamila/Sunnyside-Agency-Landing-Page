import React from 'react';
import './StandOut.scss';
import DesktopStandOutImage from '../../assets/desktop/stand-out.jpg';
import MobileStandOutImage from '../../assets/mobile/stand-out.jpg';

interface StandOutProps {
	isDesktop: boolean;
}

export default function StandOut(props: StandOutProps) {
	const link = '';

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
					<a href={link} aria-label='Link to learn more'>
						LEARN MORE
					</a>
				</div>
			</div>
		</>
	);
}
