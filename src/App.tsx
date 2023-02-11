import React from 'react';
import './App.scss';
import Logo from './assets/logo.svg';

// Desktop Images
import DesktopHeaderImage from './assets/desktop/header.jpg';
import DesktopTransformImage from './assets/desktop/transform.jpg';
import DesktopStandOutImage from './assets/desktop/stand-out.jpg';
import DesktopGraphicDesignImage from './assets/desktop/graphic-design.jpg';
import DesktopPhotographyImage from './assets/desktop/photography.jpg';
import DesktopMilkBottlesImage from './assets/desktop/milk-bottles.jpg';
import DesktopOrangeImage from './assets/desktop/orange.jpg';
import DesktopConeImage from './assets/desktop/cone.jpg';
import DesktopSugarCubesImage from './assets/desktop/sugar-cubes.jpg';

// Mobile Images
import MobileHeaderImage from './assets/mobile/header.jpg';
import MobileTransformImage from './assets/mobile/transform.jpg';
import MobileStandOutImage from './assets/mobile/stand-out.jpg';
import MobileGraphicDesignImage from './assets/mobile/graphic-design.jpg';
import MobilePhotographyImage from './assets/mobile/photography.jpg';
import MobileMilkBottlesImage from './assets/mobile/milk-bottles.jpg';
import MobileOrangeImage from './assets/mobile/orange.jpg';
import MobileConeImage from './assets/mobile/cone.jpg';
import MobileSugarCubesImage from './assets/mobile/sugar-cubes.jpg';

// Icons
import FacebookIcon from './assets/icons/facebook.svg';
import InstagramIcon from './assets/icons/instagram.svg';
import TwitterIcon from './assets/icons/twitter.svg';
import PinterestIcon from './assets/icons/pinterest.svg';

// Testimonials profiles
import EmilyProfile from './assets/profiles/emily.jpg';
import ThomasProfile from './assets/profiles/thomas.jpg';
import JennieProfile from './assets/profiles/jennie.jpg';

function App() {
	return (
		<>
			<div className='header'>
				<img src={DesktopHeaderImage} alt='' />
				<h1>WE ARE CREATIVES</h1>
			</div>
			<div className='transform-text'>
				<h2>Transform your brand</h2>
				<p>
					We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals
					that do most of the marketing for you.
				</p>
				<a href=''>LEARN MORE</a>
			</div>
			<div className='transform-image'>
				<img src={DesktopTransformImage} alt='' />
			</div>
			<div className='stand-out-image'>
				<img src={DesktopStandOutImage} alt='' />
			</div>
			<div className='stand-out-text'>
				<h2>Stand out to the right audience</h2>
				<p>
					Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend
					your brand in digital places.
				</p>
				<a href=''>LEARN MORE</a>
			</div>
			<div className='graphic-design'>
				<img src={DesktopGraphicDesignImage} alt='' className='graphic-design-image' />
				<h2>Graphic Design</h2>
				<p>
					Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’
					attention.
				</p>
			</div>
			<div className='photography'>
				<img src={DesktopPhotographyImage} alt='' className='photography-image' />
				<h2>Photography</h2>
				<p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
			</div>
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
							Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable
							experience.
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
			<div className='footer'>
				<img src={Logo} alt='' />
				<ul className='footer-links'>
					<li>About</li>
					<li>Services</li>
					<li>Projects</li>
				</ul>
				<ul className='footer-socials'>
					<li>
						<img src={FacebookIcon} alt='' />
					</li>
					<li>
						<img src={InstagramIcon} alt='' />
					</li>
					<li>
						<img src={TwitterIcon} alt='' />
					</li>
					<li>
						<img src={PinterestIcon} alt='' />
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
