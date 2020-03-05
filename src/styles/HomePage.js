import React, { useState } from 'react';

import Reviews from '../cmps/Reviews';
import FirstView from '../cmps/FirstView';
import NavBar from '../cmps/NavBar';
import SecondView from '../cmps/SecondView';
import C2Abanner from '../cmps/C2Abanner';
import Footer from '../cmps/Footer';
import MenuModal from '../cmps/MenuModal';


const HomePage = _ => {
    const [toggleMobMenu, setToggleMobMenu] = useState(false);

    return <main className="flex column">
        <NavBar toggleMobMenu={toggleMobMenu} setToggleMobMenu={setToggleMobMenu}></NavBar>
        <FirstView></FirstView>
        <SecondView></SecondView>
        <Reviews></Reviews>
        <C2Abanner></C2Abanner>
        <Footer></Footer>
        {toggleMobMenu && <MenuModal toggleMobMenu={toggleMobMenu} setToggleMobMenu={setToggleMobMenu}></MenuModal>}
    </main>
}

export default HomePage;