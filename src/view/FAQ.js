import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from 'react-i18next'
import Header from "../components/header";
import Footer from "../components/footer";

function FAQ(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        window.location.reload()
    };

    const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "English");
    const [isShowChooseLang, setIsShowChooseLang] = useState(false);
    const FAQ = styled.div`
      overflow: hidden;
      background: #000;
      color: #fff;
        .content{
          min-height: 60vh;
          padding-top: 100px;
          text-align: center;
          font-size: 30px;
        }
    `

    return (
        <FAQ>
            <Header></Header>
            <div className="content">
                {t('Under construction, please be patient')}
            </div>
            <Footer></Footer>
        </FAQ>
    )
}

export default FAQ
