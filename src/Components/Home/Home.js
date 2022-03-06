import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Digital from '../Digital-Marketing/Digital';




import Graphic from '../Graphic/Graphic';
import IosApp from '../IosApp/IosApp';
import Services from '../Services/Services';
import Webdev from '../WebDevelopment/Webdev';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <br />
            <Webdev></Webdev>
            <br /> <br />
            <Graphic></Graphic>
            <br />
            <IosApp></IosApp>
            <br />
            {/* <Game> </Game> */}
            <Digital></Digital>
            <br /> 
          
            <About></About>

                <Footer></Footer>
        </div>
    );
};

export default Home;