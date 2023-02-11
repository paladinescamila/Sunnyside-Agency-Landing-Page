import React from 'react';
import './Testimonials.scss';
import EmilyProfile from '../../assets/profiles/emily.jpg';
import ThomasProfile from '../../assets/profiles/thomas.jpg';
import JennieProfile from '../../assets/profiles/jennie.jpg';

export default function Testimonials() {
	return (
		<div className='testimonials'>
			<h2>Client Testimonials</h2>
			<ul>
				<li>
					<img src={EmilyProfile} alt='' />
					<p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
					<p>Emily R.</p>
					<p>Marketing Director</p>
				</li>
				<li>
					<img src={ThomasProfile} alt='' />
					<p>
						Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
					</p>
					<p>Thomas S.</p>
					<p>Chief Operating Officer</p>
				</li>
				<li>
					<img src={JennieProfile} alt='' />
					<p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
					<p>Jennie F.</p>
					<p>Business Owner</p>
				</li>
			</ul>
		</div>
	);
}
