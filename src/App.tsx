import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
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
			<Header />
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
