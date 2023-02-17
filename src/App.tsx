import React from 'react';
import './styles/App.scss';
import Banner from './components/Banner/Banner';
import Transform from './components/Transform/Transform';
import StandOut from './components/StandOut/StandOut';
import GraphicDesign from './components/GraphicDesign/GraphicDesign';
import Photography from './components/Photography/Photography';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
	const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 800);

	React.useEffect(() => {
		window.addEventListener('resize', () => {
			setIsDesktop(window.innerWidth > 800);
		});
	}, []);

	return (
		<>
			<Banner isDesktop={isDesktop} />
			<Transform isDesktop={isDesktop} />
			<StandOut isDesktop={isDesktop} />
			<GraphicDesign isDesktop={isDesktop} />
			<Photography isDesktop={isDesktop} />
			<Testimonials isDesktop={isDesktop} />
			<Gallery isDesktop={isDesktop} />
			<Footer isDesktop={isDesktop} />
		</>
	);
}

export default App;
