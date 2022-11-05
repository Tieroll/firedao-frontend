import {Routes, Route, Link} from "react-router-dom";
import React from "react";
import "./firepoint/script"
import DaoHome from "./view/daoHome";
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
            </Routes>
        </div>
    );
}


// here app catches the suspense from page in case translations are not yet loaded
export default App;
