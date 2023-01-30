import {Routes, Route, Link} from "react-router-dom";
import React from "react";
import "./firepoint/script"
import DaoHome from "./view/daoHome";
import FAQ from "./view/FAQ";
import RoadMap from "./view/roadMap";
import TeamManifest from "./view/TeamManifest";
import Whitepaper from "./view/Whitepaper";
import Docs from "./view/Docs";
import {useTranslation} from "react-i18next";


// page uses the hook
function App() {
    const {t, i18n} = useTranslation();
    if(!localStorage.getItem("language")){
        i18n.changeLanguage('en');
    }
    return (
        <div>
            <Routes>
                <Route path="/" element={<DaoHome/>}/>
                <Route path="/FAQ" element={<FAQ/>}/>
                <Route path="/RoadMap" element={<RoadMap/>}/>
                <Route path="/TeamManifest" element={<TeamManifest/>}/>
                <Route path="/Docs" element={<Docs/>}/>
                <Route path="/Whitepaper" element={<Whitepaper/>}/>
            </Routes>
        </div>
    );
}


// here app catches the suspense from page in case translations are not yet loaded
export default App;
