import React from 'react';
import Reviews from '../cmps/Reviews';
import FirstView from '../cmps/FirstView';
import NavBar from '../cmps/NavBar';
import SecondView from '../cmps/SecondView';
import C2Abanner from '../cmps/C2Abanner';
import Footer from '../cmps/Footer';


const HomePage = _ => {
    return <main className="flex column">
        <NavBar></NavBar>
        <FirstView></FirstView>
        <SecondView></SecondView>
        <Reviews></Reviews>
        <C2Abanner></C2Abanner>
        <Footer></Footer>
    </main>
}

export default HomePage;