import React from 'react';
import './Testimonials.scss';
import EmilyProfile from '../../assets/profiles/emily.jpg';
import ThomasProfile from '../../assets/profiles/thomas.jpg';
import JennieProfile from '../../assets/profiles/jennie.jpg';

interface TestimonialsProps {
	isDesktop: boolean;
}

export default function Testimonials(props: TestimonialsProps) {
	return (
		<div className='testimonials'>
			<h2>CLIENT TESTIMONIALS</h2>
			<ul>
				<li>
					<img src={EmilyProfile} alt='' />
					<p className='comment'>
						We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
					</p>
					<p className='name'>Emily R.</p>
					<p className='role'>Marketing Director</p>
				</li>
				<li>
					<img src={ThomasProfile} alt='' />
					<p className='comment'>
						Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
					</p>
					<p className='name'>Thomas S.</p>
					<p className='role'>Chief Operating Officer</p>
				</li>
				<li>
					<img src={JennieProfile} alt='' />
					<p className='comment'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
					<p className='name'>Jennie F.</p>
					<p className='role'>Business Owner</p>
				</li>
			</ul>
		</div>
	);
}
