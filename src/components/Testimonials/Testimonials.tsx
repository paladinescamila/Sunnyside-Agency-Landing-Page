import React from 'react';
import './Testimonials.scss';
import EmilyProfile from '../../assets/profiles/emily.jpg';
import ThomasProfile from '../../assets/profiles/thomas.jpg';
import JennieProfile from '../../assets/profiles/jennie.jpg';

export default function Testimonials() {
	return (
		<div className='testimonials'>
			<h2>CLIENT TESTIMONIALS</h2>
			<ul>
				<li>
					<img src={EmilyProfile} alt='' />
					<p className='comment'>
						We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
					</p>
					<div>
						<p className='name'>Emily R.</p>
						<p className='role'>Marketing Director</p>
					</div>
				</li>
				<li>
					<img src={ThomasProfile} alt='' />
					<p className='comment'>
						Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
					</p>
					<div>
						<p className='name'>Thomas S.</p>
						<p className='role'>Chief Operating Officer</p>
					</div>
				</li>
				<li>
					<img src={JennieProfile} alt='' />
					<p className='comment'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
					<div>
						<p className='name'>Jennie F.</p>
						<p className='role'>Business Owner</p>
					</div>
				</li>
			</ul>
		</div>
	);
}
