import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from 'react-i18next'
import bg from "../imgs/TeamManifest.png"
import {useNavigate} from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
function TeamManifest(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        window.location.reload()
    };
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "English");
    const [isShowChooseLang, setIsShowChooseLang] = useState(false);
    const TeamManifest = styled.div`
      background: url("${bg}");
      background-size: 100%;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
      .content{
        color: #fff;
        font-size: 18px;
        line-height: 36px;
        width: 80%;
        margin: 6em auto;
        text-indent: 40px;
        padding-top: 60px;
        p{
          margin-top: 2em;
          text-align: justify;
        }
      }
    `

    return (
        <TeamManifest>
            <Header/>
            <div className="content">
                <p>
                    {t('teamManifestContent1')}
                </p>
                <p>
                    {t('teamManifestContent2')}
                </p>
                <p>
                    {t('teamManifestContent3')}
                </p>
                <p>
                    {t('teamManifestContent4')}
                </p>
                <p>
                    {t('teamManifestContent5')}
                </p>
                <p>
                    {t('teamManifestContent6')}
                </p>

            </div>
            <Footer/>
        </TeamManifest>
    )
}

export default TeamManifest
