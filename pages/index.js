import Navbar from '../components/navbar/Navbar';
import HeroComponent from '../components/hero/Hero';
import Footer from '../components/Footer';

function Homepage() {
    return <>
        <Navbar />
        <HeroComponent heading="Smart travel all over the world" subHeading="Find the rooms and dates that suit you in advanced" />
        <Footer />
    </>
}

export default Homepage;

