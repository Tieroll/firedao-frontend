import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from 'react-i18next'
import logo from "../imgs/logo.webp";
import {useNavigate} from "react-router-dom";
import icon1 from "../imgs/github.webp";
import icon2 from "../imgs/twitter.webp";
import icon3 from "../imgs/telegram.webp";
import icon4 from "../imgs/facebook.webp";
import icon5 from "../imgs/tiktok.webp";
import icon6 from "../imgs/Youtube.webp";
import icon7 from "../imgs/reddit.webp";
import icon8 from "../imgs/medium.webp";
import icon9 from "../imgs/discord.webp";

function Footer(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        window.location.reload()
    };
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [isShowTwitter, setIsShowTwitter] = useState(false);
    const [isShowTelegram, setIsShowTelegram] = useState(false);
    const Footer = styled.div`

      .footer-box {
        background: #221919;
        width: 100%;
        position: relative;

        .footer {
          width: 80vw;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          padding: 5em 0;

          .left {
            .logo {
              width: 260px;
            }

            .icon-list {
              display: flex;
              margin-top: 4em;

              a {
                &:nth-child(n+2) {
                  margin-left: 14px;
                }
              }

              .icon {

                width: 34px;
                height: 34px;

                &:nth-child(n+2) {
                  margin-left: 14px;
                }
              }
            }

            .copyright {
              margin-top: 6em;
              font-size: 20px;
              font-family: PingFangSC-Semibold, PingFang SC, serif;
              font-weight: 600;
              color: #666;
              line-height: 33px;
            }
          }

          .right {
            .link-list {
              width: 380px;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
          
              .link-item {
                width: 150px;
                font-size: 20px;
                font-family: PingFangSC-Semibold, PingFang SC, serif;
                font-weight: 600;
                color: #aaa;
                line-height: 33px;
                text-decoration: none;
                margin-top: 1em;
              }
            }
          }
        }

        .dialog {
          position: absolute;
          top:-10em;
          left: 20vw;
          z-index: 100;
          padding: 40px 20px 20px;
          background: #100B0B;
          border: 1px solid rgba(255,255,255,0.2);
          width: 60vw;
          .close{
            position: absolute;
            right: 1em;
            top: 0.5em;
            font-size: 30px;
            cursor: pointer;
          }
          .dialog-content{
            display: flex;
            flex-wrap: wrap;

            .item{
              width: 50%;
              padding: 1em 0;
            }
            a{
              text-decoration: none;
              font-size: 20px;
              color: #fff;
              margin-left: 2em;
            }
          }
        }
      }

    `
    const TwitterDialog = ()=>{
        return (
            <div className="dialog">
                <div className="close" onClick={()=>{
                    setIsShowTwitter(false)
                }}>
                    x
                </div>
                <div className="dialog-content">
                    <div className="item">
                        <a href="https://twitter.com/FireDAOlab "> Official Twitter</a>
                    </div>
                    <div className="item">
                        <a href="https://twitter.com/FireDAOKun "> FireKun</a>
                    </div>
                    <div className="item">
                        <a href="https://twitter.com/FireDAO_FG ">Financial Guild</a>
                    </div>
                    <div className="item">
                        <a href="https://twitter.com/FireDAO_OD "> Operating Guild</a>
                    </div>
                    <div className="item">
                        <a href="https://twitter.com/FireDAO_MG "> Market Guild</a>
                    </div>
                    <div className="item">
                        <a href="https://twitter.com/FireDAO_ID ">  Investment Guild</a>
                    </div>
                    <div className="item">
                        <a href="https://twitter.com/FireDAO_RG "> Research Guild</a>
                    </div>
                    <div className="item">
                        <a href="https://twitter.com/FireDAO_EG"> Education Guild </a>
                    </div>
                    <div className="item"><a href="https://twitter.com/FireDAO_DG">Development Guild</a></div>
                    <div className="item"><a href="https://twitter.com/FireDAO_DAG"> Data Analysis Guild</a></div>
                    <div className="item"><a href="https://twitter.com/FireDAO_TLG"> Translation  Guild</a></div>
                    <div className="item"><a href="https://twitter.com/FireDAO_DVG">   Design and Video Guild</a></div>
                    <div className="item"><a href="https://twitter.com/FireDAO_LG"> Legal Guild</a></div>
                    <div className="item"><a href="https://twitter.com/FireDAO_CPG"> Charity and Public Welfare Guild</a></div>
                </div>
            </div>
        )
    }
    const TelegramDialog = ()=>{
        return (
            <div className="dialog">
                <div className="close" onClick={()=>{
                    setIsShowTelegram(false)
                }}>
                    x
                </div>
                <div className="dialog-content">
                    <div className="item">
                        <a href="https://t.me/FireDAOEN"> English</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAOcn"> Chinese</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAO_Arabic"> Arabic</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAO_French"> French</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAO_Russian"> Russian</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAO_Spanish"> Spanish</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAO_Portuguese"> Portuguese</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAO_German1"> German</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAO_Japanese"> Japanese</a>
                    </div>
                    <div className="item">
                        <a href="https://t.me/FireDAO_Korean">Korean</a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Footer>
            <div className="footer-box">
                <div className="footer">
                    <div className="left">
                        <img className="logo" src={logo} alt=""/>
                        <div className="icon-list">
                            <a href="https://github.com/FireDAOlab" target="_blank"><img className="icon" src={icon1}
                                                                                         alt=""/></a>
                            <a onClick={()=>{
                                setIsShowTwitter(true)
                            }} >
                                <img className="icon" src={icon2}  alt=""/></a>
                            <a onClick={()=>{
                                setIsShowTelegram(true)
                            }} ><img className="icon" src={icon3} alt=""/></a>
                            <a href="https://facebook.com/FireDAO" target="_blank"><img className="icon" src={icon4}
                                                                                        alt=""/></a>
                            <a href="https://www.tiktok.com/@firedaoofficial" target="_blank"><img className="icon"
                                                                                                   src={icon5} alt=""/></a>
                            <a href="https://www.youtube.com/@FireDAOlab" target="_blank"><img className="icon"
                                                                                               src={icon6} alt=""/></a>
                            <a href="https://www.reddit.com/r/FireDAO" target="_blank"><img className="icon" src={icon7}
                                                                                            alt=""/></a>
                            <a href="https://medium.com/@FireDAOlab" target="_blank"><img className="icon" src={icon8}
                                                                                          alt=""/></a>
                            <a href="https://discord.gg/HjtHk5j6nG" target="_blank"><img className="icon" src={icon9}
                                                                                         alt=""/></a>
                        </div>
                        <div className="copyright">
                            Copyright ©FireDAO
                        </div>
                    </div>
                    <div className="right">
                        <div className="link-list">
                            <a href="" className="link-item">
                                {t('footer.Home Page')}
                            </a>
                            <a href="" className="link-item">
                                {t('footer.White paper')}
                            </a>
                            <a href="" className="link-item">
                                {t('footer.Declaration of the team')}
                            </a>
                            <a href="" className="link-item">
                                {t('footer.BBS')}
                            </a>
                            <a href="" className="link-item">
                                {t('footer.The roadmap')}
                            </a>
                            <a href="" className="link-item">
                                Docs
                            </a>
                            <a href="" className="link-item">
                                FAQ
                            </a>
                        </div>
                    </div>
                </div>
                {
                    isShowTwitter?<TwitterDialog/>:''
                }
                {
                    isShowTelegram?<TelegramDialog/>:''
                }
            </div>

        </Footer>
    )
}

export default Footer
