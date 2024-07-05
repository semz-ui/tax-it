import BottomBanner from "../components/BottomBanner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import GetStarted2 from "../components/GetStarted2";
import Header from "../components/Header";
import IndividualBanner from "../components/IndividualBanner";


const IndividualPage = () => {
    return <>
        <div className='bg-black'>
            <Header />
            <IndividualBanner />
        </div>
        <div className="mx-0 lg:mx-48">
            <Features />
            <GetStarted />
            <GetStarted2 />
            <BottomBanner />
            <Footer />
        </div>
    </>;
};

export default IndividualPage;
