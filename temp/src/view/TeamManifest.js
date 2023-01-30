import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from 'react-i18next'
import Header from "../components/header";
import Footer from "../components/footer";
import onBuildingImg from  "../imgs/fire_building.webp"
function TeamManifest(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        window.location.reload()
    };

    const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "English");
    const [isShowChooseLang, setIsShowChooseLang] = useState(false);
    const TeamManifest = styled.div`
      overflow: hidden;
      background: #000;
      color: #fff;
      .content{
        min-height: 60vh;
        padding-top: 100px;
        text-align: center;
        font-size: 30px;
        img{
          width: 300px;
        }
        .title{
          padding-bottom: 100px;
        }
      }
    `

    return (
        <TeamManifest>
            <Header></Header>
                <div className="content">
                    <img src={onBuildingImg} alt=""/>
                    <div className="title">
                        This module is on building!
                    </div>
                </div>
            <Footer></Footer>
        </TeamManifest>
    )
}

export default TeamManifest
