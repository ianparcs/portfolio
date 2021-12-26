import React from 'react';
import '../../assets/css/contact.css'
import CenterView from "../gui/CenterView";
import Scene from "../scene/Scene";
import Footer from "../app/Footer";

export default function Home() {
    return (
        <CenterView>
            <Scene/>
            <Footer fixedPos={"fixed-bottom"}/>
        </CenterView>
    );
}