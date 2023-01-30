import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from 'react-i18next'
import logo from "../imgs/logo.webp";
import {useNavigate,useLocation} from "react-router-dom";

function Header(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        window.location.reload()
    };
    const history = useNavigate();
    const location = useLocation();
    const goPage = (url) => {
        history(url);
    }
    let activeIndex=1
    console.log(location)
    switch (location.pathname) {
        case "/":activeIndex=1;break
        case "/TeamManifest":activeIndex=2;break;
        case "/FAQ":activeIndex=3;break;
        case "/Roadmap":activeIndex=4;break;
        case "/Whitepaper":activeIndex=5;break;
        case "/Docs":activeIndex=6;break;
    }
    console.log(activeIndex)
    const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "English");
    const [isShowChooseLang, setIsShowChooseLang] = useState(false);
    const Header = styled.div`
      .home-header {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 20px 10%;

        .logo {
          width: 200px;
          position: relative;
          z-index: 10;
        }
        .launch-app-box{
          text-decoration: none;
        }
        .launch-app{
          width: 160px;
          height: 50px;
          background: linear-gradient(315deg, #D50224 0%, #FFB301 100%);
          border-radius: 5px;
          position: relative;
          z-index: 1;
          font-size: 20px;
          font-family: Roboto-Bold, Roboto,sans-serif;
          line-height: 50px;
          font-weight: bold;
          color: #FFFFFF;
          text-align: center;
          cursor: pointer;
          margin-left: 1em;
          user-select: none;
        }
        .nav-list {
          display: flex;
          align-items: center;
       
          .nav-item {
            margin: 0 0.5em;
            position: relative;
            cursor: pointer;
            display: flex;
            align-items: center;
            background: none;
            color: #fff;
            border: none;
            font-size: 18px;
            a{
              text-decoration: none;
              color: #fff;
            }
            &.active {
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 33px;
              background: linear-gradient(270deg, #FFB301 0%, #D50224 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              position: relative;

              &::after {
                content: '';
                position: absolute;
                left: 0;
                width: 100%;
                height: 4px;
                top: 100%;
                border-radius: 1px;
                background: linear-gradient(270deg, #FFB301 0%, #D50224 100%);
              }
            }

            .chooseIcon {
              transform: rotate(90deg) scaleX(0.7);
              margin-left: 1em;
              font-size: 20px;
            }

            .choose-language {
              width: 100px;
              position: absolute;
              top: 2em;
              left: 0;
              z-index: 100;
              display: flex;
              flex-direction: column;

              .item {
                margin-top: 0.5em;
              }
            }
          }
        }
      }
    
    `

    return (
        <Header>
            <div className="home-header">
                <img className="logo" src={logo} alt=""/>
                <div className="nav-list">

                    <button className={["nav-item",activeIndex==1?"active":"" ].join(' ')} onClick={()=>{goPage("/")}}>
                        {t('Home')}
                    </button>
                    <button className={["nav-item",activeIndex==2?"active":"" ].join(' ')} onClick={()=>{goPage("/TeamManifest")}}>
                        {t('TeamManifesto')}
                    </button>
                    <button className={["nav-item",activeIndex==3?"active":"" ].join(' ')} onClick={()=>{goPage("/FAQ")}}>
                        FAQs
                    </button>
                    <button className={["nav-item",activeIndex==4?"active":"" ].join(' ')} onClick={()=>{goPage("/Roadmap")}}>
                        {t('Roadmap')}
                    </button>
                    <button className={["nav-item",activeIndex==5?"active":"" ].join(' ')} onClick={()=>{goPage("/Whitepaper")}}>
                        {t('Whitepaper')}
                    </button>
                    <button className="nav-item">
                        <a href="http://forum.firedao.co/" target="_blank">{t('Forum')}</a>
                    </button>
                    <button className="nav-item" className={["nav-item",activeIndex==6?"active":"" ].join(' ')} onClick={()=>{goPage("/Docs")}}>
                        Docs
                    </button>
                    <a href="http://apptest.firedao.co/" className="launch-app-box">
                        <div className="launch-app">
                            Launch APP
                        </div>
                    </a>
                    {/*<a src="#" className="nav-item" onClick={(e) => {*/}
                    {/*    setIsShowChooseLang(true)*/}
                    {/*}}>*/}
                    {/*    {language}*/}
                    {/*    <div className="chooseIcon">></div>*/}
                    {/*    {isShowChooseLang && (*/}
                    {/*        <div className="choose-language">*/}
                    {/*            <button type="button" className="item" onClick={(e) => {*/}
                    {/*                setLanguage('English')*/}
                    {/*                changeLanguage('en')*/}
                    {/*                setIsShowChooseLang(false)*/}
                    {/*                localStorage.setItem("language", "English")*/}
                    {/*                e.stopPropagation();*/}
                    {/*            }}>*/}
                    {/*                English*/}
                    {/*            </button>*/}
                    {/*            <button type="button" className="item" onClick={(e) => {*/}
                    {/*                setLanguage('简体中文')*/}
                    {/*                localStorage.setItem("language", "简体中文")*/}
                    {/*                changeLanguage('zh')*/}
                    {/*                setIsShowChooseLang(false)*/}
                    {/*                e.stopPropagation();*/}
                    {/*            }}>*/}
                    {/*                简体中文*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</a>*/}
                </div>
            </div>
        </Header>
    )
}

export default Header
