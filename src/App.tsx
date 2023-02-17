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
	return (
		<>
			<Banner />
			<Transform />
			<StandOut />
			<GraphicDesign />
			<Photography />
			<Testimonials />
			<Gallery />
			<Footer />
		</>
	);
}

export default App;
