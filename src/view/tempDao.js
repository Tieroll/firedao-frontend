import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import logo from "../imgs/logo.webp"
import firedao from "../imgs/FireDAO@2x.webp"
import OnChain from "../imgs/On-chain Identity@2x.webp"
import OffChain from "../imgs/Off-chain Life@2x.webp"
import bg1 from "../imgs/bg1.webp"
import bg3 from "../imgs/bg3.webp"
import bg4 from "../imgs/bg4.webp"
import bg5 from "../imgs/bg5.webp"
import bg6 from "../imgs/bg6.webp"
import bg7 from "../imgs/bg7.webp"
import bg8 from "../imgs/bg8.webp"
import bg9 from "../imgs/bg9.webp"
import bg10 from "../imgs/bg10.webp"
import bg11 from "../imgs/bg11.webp"
import bg12 from "../imgs/bg12.webp"
import bg13 from "../imgs/bg13.webp"
import {useTranslation} from 'react-i18next'
import fireIcon1 from "../imgs/fire_icon1.webp"
import fireIcon2 from "../imgs/fire_icon2.webp"
import flameIcon from "../imgs/ios-flame.webp"
import {useNavigate} from 'react-router-dom'
import Footer from "../components/footer.js"
import Header from "../components/header";
import icon2 from "../imgs/twitter@2x.webp";
import icon3 from "../imgs/telegram@2x.webp";
import icon4 from "../imgs/facebook@2x.webp";
import icon5 from "../imgs/TikTok@2x.webp";
import icon6 from "../imgs/Youtube@2x.webp";
import icon7 from "../imgs/reddit@2x.webp";
import icon8 from "../imgs/medium@2x.webp";
import icon9 from "../imgs/discord-fill@2x.webp";
function DaoHome(props) {
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
    const DaoHome = styled.div`
      position: relative;
      color: #fff;
      overflow: hidden;

      #fireBg {
        position: absolute;
        left: 20%;
        top: 60%;
        width: 60%;
        height: 40%;
        opacity: 1;
      }

      button {
        position: relative;
        z-index: 2;
      }

      a {
        position: relative;
        z-index: 2;
      }

      .sub-title {
        font-size: 40px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 60px 0;

        strong {
          margin-left: 10px;
        }

        .icon {
          width: 30px;
        }
      }

      .page-title {
        text-align: center;
        font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi;

        strong {
          font-size: 40px;
          line-height: 60px;
        }

        span {
          font-size: 60px;
          position: relative;
          top: 3px;
        }
      }

      .nft-type {
        width: 200px;
        margin: 0 auto;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #FFFFFF;
      }

      .page-content {
        width: 80vw;
        margin: 1em auto;

        p {
          text-align: justify;
          line-height: 24px;
          font-size: 18px;
          margin-top: 1em;
        }
      }


      .page-box {
        width: 100%;
        overflow: hidden;
        padding-bottom: 4em;
      }

      .index-box {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        span{
          background: linear-gradient(225deg, #FFB301 0%, #D50224 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi,sans-serif;
          position: absolute;
          left: calc(50% - 5px);
          top: 50%;
        }

        .icon {
          width: 40px;
        }

      }

      .page1 {
        background-image: url(${bg1});
        background-size: 100% 100%;
        padding-top: calc(1% + 100px);
        padding-bottom: 1em;
        text-align: center;
        position: relative;

        #canvas {
          width: 100vw;
          height: 200px;
          position: absolute;
        }

        .title1 {
          width: 20%;
        }

        .title2 {
          font-size: 1.8em;
          margin:1em auto 1em;
          width: 76%;
          line-height: 40px;
        }

        .page1-content {
          width: 60%;
          margin: 40vh auto 3em;
          line-height: 28px;
          font-size: 1.1em;
        }
    
      }

      .page2 {
        background: #000;
        background-size: 100% 100%;
        padding-top: 3em;

        .btn-box {
          display: flex;
          justify-content: center;
          margin-top: 3em;

          .btn-item {
            width: 190px;
            height: 50px;
            box-shadow: 0px 0px 10px 10px rgba(255, 61, 61, 0.5);
            border-radius: 30px 2px 30px 2px;
            border: 1px solid #fcc4c4;
            font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi;
            margin-right: 30px;
            line-height: 50px;
            cursor: pointer;
            background: none;
            color: #fff;
            font-size: 18px;
            a{
              text-decoration: none;
              color: #fff;

            }
          }

          .btn-item:nth-child(2n) {
            border-radius: 2px 30px 2px 30px;
          }

          .btn-item:last-child {
            margin-right: 0;
          
          }

        }
        .subbtn-box{
          width: 100%;
          text-align: center;
        }
        .icon-list {
          display: flex;
          justify-content: space-between;
          width: 40%;
          max-width: 600px;
          margin:  4em auto 0;
          a {
            cursor: pointer;
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
        .sub-btn-box {
          width: 354px;
          height: 84px;
          border-radius: 5px 30px 5px 30px ;
          background: linear-gradient(180deg, rgba(255, 179, 15, 1), rgba(213, 2, 34, 1));
          box-shadow: 0px 0px 10px 10px rgba(255, 61, 61, 0.5);
          border: none;
          padding: 0;
          overflow: hidden;
          margin: 5em auto;
          
          .sub-btn-content {
            background: #000;
            width: 350px;
            height: 80px;
            background: linear-gradient(315deg, #D50224 0%, #FFB301 100%);
            border-radius: 5px 30px 5px 30px ;
            margin: 2px 2px;
            a{
              text-decoration: none;
            }
            .sub-btn {
              width: 350px;
              height: 80px;
              border-radius: 5px 30px 5px 30px ;
              cursor: pointer;
              color: #fff;
              display: flex;
              font-size: 18px;

              flex-direction: column;
              justify-content: center;


              strong {
                font-size: 22px;

              }
            }
          }

        }
        .btn-boxs {
          display: flex;
          justify-content: center;

          .btn2 {
            width: 190px;
            height: 50px;
            border-radius: 30px 2px 30px 2px;
            border: 1px solid #FFFFFF;
            background: none;
            color: #fff;
            font-size: 18px;
            margin-left: 2em;
            margin-top: 2em;

            &:nth-child(4n+1) {
              margin-left: 0;
            }
          }

          .btn {
            min-width: 340px;
            height: 110px;
            box-shadow: 0px 0px 10px 10px rgba(255, 61, 61, 0.5);
            border-radius: 30px 2px 30px 2px;
            border: 1px solid #FFFFFF;
            background: none;
            font-size: 18px;
            font-weight: 600;
            color: #FFFFFF;

            &:last-child {
              margin-left: 2em;
            }

            strong {
              font-size: 26px;
              line-height: 50px;
            }
          }
        }

      }

      .page3 {
        background-image: url("${bg3}");
        background-size: 100% 100%;
        padding: 3em 0;

        .coin-detail-box {
          display: flex;
          width: 80%;
          margin: 0 auto;
          justify-content: space-between;
          
          .coin-detail-name {
            text-align: center;
            margin-top: 30px;
            font-size: 26px;
            font-family: PingFangSC-Semibold, PingFang SC,sans-serif;
            font-weight: 600;
          }

          .coin-detail-item {
            background: rgba(255, 255, 255, 0.17);
            width: 180px;
            height: 180px;
            border-radius: 50%;
            padding: 10px;
            overflow: hidden;
            position: relative;

            .coin-detail-bg {
              z-index: 2;
              width: 50%;
              height: 50%;
              position: absolute;
              top: 0;
              right: 0;
              background: linear-gradient(135deg, rgba(213, 2, 34, 1), rgba(255, 179, 15, 1));
            }

            .coin-detail {

              position: relative;
              z-index: 3;
              background: #000;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 160px;
              height: 160px;
              border-radius: 50%;
              font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi,sans-serif;
              font-size: 30px;

              strong {
                font-size: 40px;
                line-height: 48px;
              }
            }
          }
        }

        .content-list {
          display: flex;
          justify-content: center;
          width: 80%;
          margin: 1em auto;
          .content-item {
            text-align: center;
            &:nth-child(n+2){
              margin-left: 5em;
            }
           
            .name {
              margin-top: 0.5em;
              height: 60px;
              line-height: 60px;
              font-size: 34px;
              font-family: PingFangSC-Bold, PingFang SC,sans-serif;
              font-weight: bold;
              color: #FFFFFF;
            }

            .content {
              width: 100%;
              font-size: 16px;
              margin-top: 2em;
              font-family: PingFangSC-Semibold, PingFang SC,sans-serif;
              font-weight: 600;
              color: #FFFFFF;
              line-height: 26px;
            }
          }
        }
      }

      .page4 {
        overflow: hidden;
        background: url("${bg4}");
        background-size: 100% 100%;
        padding-bottom: 3em;
        .page-title{
          background: linear-gradient(225deg, #FFB301 0%, #D50224 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi,sans-serif;
        }
        .intro {
          margin: 3em auto;
          text-align: center;
          width: 80vw;
          font-size: 20px;
          font-family: PingFangSC-Semibold, PingFang SC, serif;
          color: #FFFFFF;
          line-height: 30px;
          font-weight: bold;
        }

        .content-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          .content-item {
            width: 26%;
            text-align: center;
            margin-left: 4%;
            margin-top: 3em;

            &:nth-child(3n + 1) {
              margin-left: 0;
            }

            .content-item-title {
              font-size: 40px;
              font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi, serif;
              font-weight: 400;
              color: #FFFFFF;
              padding-bottom: 1em;
              display: flex;
              align-items: center;
              justify-content: center;

              .icon {
                width: 40px;
                height: 40px;
              }
            }

            .content-item-number {
              font-size: 30px;
              font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi, serif;
              margin: 1em 0;
            }

            .content-item-intro {
              font-size: 22px;
              font-family: PingFangSC-Semibold, PingFang SC, serif;
              padding-bottom: 1em;
            }

            .nft-type {
              width: 120px;
              height: 40px;
              border-radius: 20px;
              border: 1px solid #FFFFFF;
              line-height: 40px;
              font-size: 20px;
              margin: 0 auto 1em;
            }

            .content-item-detail {
              text-align: left;
              line-height: 22px;
            }
          }
        }
      }

      .page5 {
        overflow: hidden;
        background-image: url("${bg5}");
        background-size: 100% 100%;
        padding-bottom: 3em;

        .table-box {
          width: 80vw;
          margin: 0 auto;

          .col1 {
            width: 26%;
          }

          .col2 {
            font-size: 20px;
            width: 12%;
            padding-left: 1em;
            font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi, serif;
          }

          .col3 {
            font-size: 20px;
            width: 14%;
            padding: 0 1em;
            font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi, serif;
          }

          .col4 {
            width: 40%;
          }

          .table-header {
            font-size: 22px;
            color: #eee;
            padding: 20px 20px;
            display: flex;
            font-family: PingFangSC-Semibold, PingFang SC, serif !important;
            font-weight: bold;

          }

          .table-row {
            margin-top: 10px;
            display: flex;
            border-radius: 10px;
            padding: 16px 20px;
            font-size: 18px;
            background: rgba(255, 255, 255, 0.1);

          }
        }
      }

      .page6 {
        background-image: url("${bg6}");
        background-size: 100% 100%;
        padding-bottom: 3em;

        .content-table {
          width: 80vw;
          margin: 0 auto;

          .col {
            background: rgba(255, 255, 255, 0.1);
            padding: 16px 20px;

            border-radius: 10px;
            margin-top: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .table-header {
            font-size: 22px;
            color: #eee;
            padding: 20px 20px;
            display: flex;
            font-family: PingFangSC-Semibold, PingFang SC, serif !important;
            font-weight: bold;

            .col {
              width: 33.3%;
              background: none;
            }
          }

          .table-row {
            display: flex;
            font-size: 18px;

            .col-box {
              margin-left: 4px;
            }

            > div {
              width: 33.3%;

              &:last-child {
                font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi, serif;
                font-weight: bold;
              }

              .col {
                width: 100%;

              }
            }
          }
        }
      }

      .page7 {
        background-image: url("${bg7}");
        background-size: 100% 100%;


        .content-list {
          display: flex;
          width: 80vw;
          flex-wrap: wrap;
          margin: 0 auto;

          .list-item {
            width: 33.3%;
            margin-top: 5em;
            display: flex;
            flex-direction: column;
            align-items: center;
            .name {
              max-width: 300px;
              margin-top: 1.2em;
              line-height: 40px;
              font-family: Roboto-Bold, Roboto,sans-serif;
              font-size: 22px;
              text-align: center;
            }
          }
        }
      }

      .page8 {
        background-image: url("${bg8}");
        background-size: 100% 100%;

        .content-list {
          display: flex;
          width: 80vw;
          flex-wrap: wrap;
          margin: 0 auto;

          .list-item {
            width: 20%;
            padding: 0 10px;
            margin-top: 2em;

            .number {
              text-align: center;
              margin-top: 1em;
              font-size: 36px;
              background: linear-gradient(225deg, #FFB301 0%, #D50224 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              font-family: Fontquan-XinYilogoTi-Regular, Fontquan-XinYilogoTi,sans-serif;
            }

            .name {
              margin-top: 1.2em;
              font-family: Roboto-Bold, Roboto,sans-serif;
              font-size: 22px;
              text-align: center;
              line-height: 40px;

            }
        
          }
        }
      }

      .page9 {
        background-image: url("${bg9}");
        background-size: 100% 100%;

        .content-list {
          display: flex;
          width: 80vw;
          flex-wrap: wrap;
          margin: 0 auto;

          .list-item {
            width: 20%;
            margin-top: 4em;

            .name {
              margin-top: 1.2em;
              font-size: 22px;
              text-align: center;
            }
          }
        }
      }

      .page10 {
        background-image: url("${bg10}");
        background-size: 100% 100%;

        .content-list {
          display: flex;
          width: 80vw;
          flex-wrap: wrap;
          margin: 0 auto;

          .list-item {
            width: 28%;

            &:nth-child(4), &:nth-child(5) {
              margin-top: 4em;
            }

            :nth-child(2), :nth-child(3), :nth-child(5) {
              margin-left: 6%;
            }

            .content {
              font-size: 18px;
              text-align: justify;
              line-height: 24px;
              margin-top: 1em;
            }
          }
        }
      }

      .page11 {
        background-image: url("${bg11}");
        background-size: 100% 100%;
        padding-bottom: 3em;

        .content-list {
          display: flex;
          width: 80vw;
          flex-wrap: wrap;
          margin: 0 auto;
          justify-content: space-between;
          .list-item {
            width: 42%;
            margin-top: 4em;

            :nth-child(2), :nth-child(4) {
              margin-left: 6%;
            }

            .content {
              font-size: 18px;
              text-align: justify;
              line-height: 24px;
              margin-top: 1em;
            }
          }
        }
      }

      .page12 {
        background-image: url("${bg12}");
        background-size: 100% 100%;

        p {
          width: 80vw;
          margin: 1em auto;
          font-size: 16px;
          line-height: 24px;
        }

        .content-box {
          display: flex;
          width: 80vw;
          margin: 3em auto;
          justify-content: space-between;

          .content-item {
            width: 43%;

            .name {
              font-size: 30px;
              text-align: center;
              img{
                width: 290px;
              }
            }

            .content {
              margin-top: 2em;
              line-height: 30px;
            }
          }
        }
      }

      .page13 {
        background-image: url("${bg13}");
        background-size: 100% 100%;
        padding-bottom: 3em;

        p {
          width: 80vw;
          margin: 1em auto;
          font-size: 16px;
          line-height: 24px;
        }

        .content-list {
          display: flex;
          width: 80vw;
          flex-wrap: wrap;
          margin: 0 auto;
          padding-bottom: 3em;

          .list-item {
            width: 20%;
            margin-top: 4em;

            :nth-child(2), :nth-child(3), :nth-child(4), :nth-child(6), :nth-child(7) {
              margin-left: 6%;
            }

            .content {
              font-size: 18px;
              text-align: center;
              line-height: 24px;
              margin-top: 1em;
            }
          }
        }
      }

    `

    return (
        <DaoHome className='daoHome'>
            <canvas id="fire" style={{
                position: "fixed",
                top: "0",
                zIndex: 1,
                background: "none",
                opacity: 1,
            }}/>

            <Header/>

            <div className="page-box page1">
                {/*<iframe src="/firebg/index.html" id="fireBg"/>*/}
                {/*<img src={Flame} alt="" id="fireBg"/>*/}
                <h1>
                    <img className="title1" src={firedao} alt=""/>
                </h1>
                <h2 className="title2">
                    {t('page1title2part1')}<br/>
                    {t('page1title2part2')}
                </h2>



                <div className="page1-content">
                    {t('page1content')}
                </div>

                <canvas id="canvas"/>
            </div>
            <div className="page-box page2">
                <div className="subbtn-box">
                    <button className="sub-btn-box">
                        <div className="sub-btn-content">
                            <a href="http://apptest.firedao.co/">
                                <div className="sub-btn">
                                    <strong>  {t('launch')}APP</strong>
                                    {/*(BNB{t('testnet')})*/}
                                    <div>  {t('Enter the Holy Fire Altar')}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </button>
                </div>
                <div className="btn-box">
                    <button className="btn-item">
                        {t('whitepaper')}
                    </button>
                    <button className="btn-item">
                        Deck
                    </button>
                    <button className="btn-item">
                        <a href="https://github.com/FireDAOlab" target="_blank">
                            Github
                        </a>
                    </button>
                    <button className="btn-item">
                        <a href="http://forumtest.firedao.co/" target="_blank">
                            Forum
                        </a>

                    </button>
                </div>
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('Social Media')}</strong>
                </div>
                <div className="icon-list">

                    <a href="https://twitter.com/FireDAOla" target="_blank">
                        <img className="icon" src={icon2}  alt=""/></a>
                    <a href="https://t.me/FireDAOEN" target="_blank" ><img className="icon" src={icon3} alt=""/></a>
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
            </div>
            <div className="page-box page3">
                <div className="coin-detail-box">
                    <div className="coin-detail-item-box">
                        <div className="coin-detail-item">
                            <div className="coin-detail-bg"></div>

                            <div className="coin-detail">
                                {/*<strong>8,888</strong>*/}
                                <strong>0</strong>
                                <div>{t('pieces')}</div>
                            </div>
                        </div>
                        <div className="coin-detail-name">
                            {t('Collect FireSeed')}
                        </div>
                    </div>
                    <div className="coin-detail-item-box">
                        <div className="coin-detail-item">
                            <div className="coin-detail-bg"></div>
                            <div className="coin-detail">
                                {/*<strong>120.22K</strong>*/}
                                <strong>0</strong>
                                <div>{t('times')}</div>
                            </div>
                        </div>
                        <div className="coin-detail-name">
                            {t('Pass FireSeed')}
                        </div>
                    </div>
                    <div className="coin-detail-item-box">
                        <div className="coin-detail-item">
                            <div className="coin-detail-bg"></div>

                            <div className="coin-detail">
                                {/*<strong>1.88M</strong>*/}
                                <strong>0</strong>
                                <div>{t('pieces')}</div>
                            </div>
                        </div>
                        <div className="coin-detail-name">
                            {t('Cast FireSoul')}
                        </div>
                    </div>
                    <div className="coin-detail-item-box">
                        <div className="coin-detail-item">
                            <div className="coin-detail-bg"></div>
                            <div className="coin-detail">
                                {/*<strong>10K</strong>*/}
                                <strong>0</strong>
                                <div>{t('pieces')}</div>
                            </div>
                        </div>
                        <div className="coin-detail-name">
                            {t('Cast FID')}
                        </div>
                    </div>
                </div>
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('FireDAO Philosophy')}</strong>
                </div>
                <div className="content-list">
                    <div className="content-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>1</span>
                        </div>
                        <div className="name">
                            {t('Positioning')}
                        </div>
                        <div className="content">
                            {t('Social DAO, Native on-chain Web3 Identity System, a community-driven autonomous economy on Blockchains ')}
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>2</span>
                        </div>
                        <div className="name">
                            {t('Mission')}
                        </div>
                        <div className="content">
                            {t('Fuel the evolution of decentralized civilization, light the fire of civilization, pass on wisdom and prosper civilization')}
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>3</span>
                        </div>
                        <div className="name">
                            {t('Vision')}
                        </div>
                        <div className="content">
                            {t('Build a super economy on blockchains that truly embodies the spirit of the encrypted world')}
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>4</span>
                        </div>
                        <div className="name">
                            {t('Values')}
                        </div>
                        <div className="content">
                            {t('Openness, Fairness, Justice, Co-creation, Co-governance, Co-ownership, Freedom, Transparency and Decentralization')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page4">
                <div className="part1">
                    <div className="sub-title">
                        <img src={fireIcon1} alt="" className="icon"/>
                        <strong>{t('Economics of tokens')}</strong>
                    </div>
                    <div className="page-title">
                        <strong>3+1+6+x
                        </strong>
                        <strong style={{marginLeft:"16px"}}>{t('Model')}</strong>
                    </div>
                    <div className="intro">
                        {t('page4Intro')}
                    </div>
                    <div className="page-title">
                        <span>-</span>
                        <strong> {t('3 Types of Ecological Tokens')}</strong>
                        <span>-</span>
                    </div>
                    <div className="content-list">
                        <div className="content-item">
                            <div className="content-item-title">

                            </div>
                            <div className="content-item-number">
                                {t('1 Billions')}
                            </div>
                            <div className="content-item-intro">
                                {t('FireDAO Ecological Governance Token')}
                            </div>
                            <div className="nft-type">
                                ERC20
                            </div>
                            <div className="content-item-detail">
                                {t('page4content1')}
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="content-item-title">

                            </div>
                            <div className="content-item-number">
                                {t('1 Billions')}
                            </div>
                            <div className="content-item-intro">
                                {t('FireDAO Ecological Incentive Token')}
                            </div>
                            <div className="nft-type">
                                ERC1155
                            </div>
                            <div className="content-item-detail">
                                {t('page4content2')}
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="content-item-title">

                            </div>
                            <div className="content-item-number">
                                {t('1 Billions')}
                            </div>

                            <div className="content-item-intro">
                                {t('FireDAO Ecological Identity Token')}
                            </div>
                            <div className="nft-type">
                                ERC20
                            </div>
                            <div className="content-item-detail">
                                {t('page4content3')}
                            </div>
                        </div>
                    </div>
                </div>

                {/*  page4-part2*/}
                <div className="part2" style={{marginTop: "5em"}}>
                    <div className="page-title">
                        <span>-</span>
                        <strong>{t('6 Soulbound Tokens')}</strong>
                        <span>-</span>
                    </div>
                    <div className="sub-title"
                    >
                        FireSoul
                    </div>
                    <div className="nft-type">
                        ERC721{t('extension')}
                    </div>
                    <div className="page-content" style={{marginTop: "3em"}}>
                        <p>
                            {t('page4part2content1')}
                        </p>
                        <p>
                            {t('page4part2content2')}
                        </p>
                    </div>
                </div>
                {/*  page4-part3*/}
                <div className="part3">
                    <div className="page-title">
                        <span>-</span>
                        <strong>{t('1 Soulbound Account')}</strong>
                        <span>-</span>
                    </div>
                    <div className="intro" style={{textAlign: "left"}}>
                        {t('page4part3intro')}
                    </div>
                    <div className="content-list">
                        <div className="content-item">
                            <div className="content-item-title">
                                <img src={flameIcon} alt="" className="icon"/>
                                FD-SBT-001
                            </div>
                            <div className="content-item-detail">
                                {t('FD-SBT-001')}
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="content-item-title">
                                <img src={flameIcon} alt="" className="icon"/>
                                FD-SBT-002
                            </div>
                            <div className="content-item-detail">
                                {t('FD-SBT-002')}
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="content-item-title">
                                <img src={flameIcon} alt="" className="icon"/>
                                FD-SBT-003
                            </div>
                            <div className="content-item-detail">
                                {t('FD-SBT-003')}
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="content-item-title">
                                <img src={flameIcon} alt="" className="icon"/>
                                FD-SBT-004
                            </div>
                            <div className="content-item-detail">
                                {t('FD-SBT-004')}
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="content-item-title">
                                <img src={flameIcon} alt="" className="icon"/>
                                FD-SBT-005
                            </div>
                            <div className="content-item-detail">
                                {t('FD-SBT-005')}
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="content-item-title">
                                <img src={flameIcon} alt="" className="icon"/>
                                FD-SBT-006
                            </div>
                            <div className="content-item-detail">
                                {t('FD-SBT-006')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page5">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('FDT Original release allocation')}</strong>
                </div>
                <div className="table-box">
                    <div className="table-header">
                        <div className="col1">
                            {t('page5table.Distribution Type')}
                        </div>
                        <div className="col2">
                            {t('page5table.Distribution Percentage')}
                        </div>
                        <div className="col3">
                            {t('page5table.Distribution Quantity')}
                        </div>
                        <div className="col4">
                            {t('page5table.Lock-up and Unlock Rules')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col1">
                            {t('page5table.FireDAO Community Vault')}
                        </div>
                        <div className="col2">
                            30%
                        </div>
                        <div className="col3">
                            {t('page5table.3 billion')}
                        </div>
                        <div className="col4">
                            {t('page5table.content1')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col1">
                            {t('page5table.FireDAO Community Contributions Exchange')}
                        </div>
                        <div className="col2">
                            20%
                        </div>
                        <div className="col3">
                            {t('page5table.2 billion')}
                        </div>
                        <div className="col4">
                            {t('page5table.content2')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col1">
                            {t('page5table.FireDAO Community Ecological Guarantee Funds')}
                        </div>
                        <div className="col2">
                            10%
                        </div>
                        <div className="col3">
                            {t('page5table.1 billion')}
                        </div>
                        <div className="col4">
                            {t('page5table.content3')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col1">
                            {t('page5table.Community Consensus Mining Pool Issuance')}
                        </div>
                        <div className="col2">
                            10%
                        </div>
                        <div className="col3">
                            {t('page5table.1 billion')}
                        </div>
                        <div className="col4">
                            {t('page5table.content4')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col1">
                            {t('page5table.Founding and Managment Team')}
                        </div>
                        <div className="col2">
                            15%
                        </div>
                        <div className="col3">
                            {t('page5table.1.5 billion')}
                        </div>
                        <div className="col4">
                            {t('page5table.content5')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col1">
                            {t('page5table.Early-stage Contributors')}
                        </div>
                        <div className="col2">
                            5%
                        </div>
                        <div className="col3">
                            {t('page5table.500 millions')}
                        </div>
                        <div className="col4">
                            {t('page5table.content6')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col1">
                            {t('page5table.Fair Launch')}
                        </div>
                        <div className="col2">
                            5%
                        </div>
                        <div className="col3">
                            {t('page5table.500 millions')}
                        </div>
                        <div className="col4">
                            {t('page5table.content7')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col1">
                            {t('page5table.Liquid Injection')}
                        </div>
                        <div className="col2">
                            5%
                        </div>
                        <div className="col3">
                            {t('page5table.500 millions')}
                        </div>
                        <div className="col4">
                            {t('page5table.content8')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page6">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('FDT Ecological Tax')}</strong>
                </div>
                <div className="content-table">
                    <div className="table-header">
                        <div className="col">
                            {t('page6table.Tax Type')}
                        </div>
                        <div className="col">
                            {t('page6table.Distribution Category')}
                        </div>
                        <div className="col">
                            {t('page6table.Distribution Percentage')}
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col">
                            {t('page6table.Transfer Tax')}
                        </div>
                        <div className="col-box">
                            <div className="col">
                                1、{t('page6table.Third-level Referral Incentive')}
                            </div>
                            <div className="col">
                                2、 {t('page6table.City-nodes Incentive')}
                            </div>
                            <div className="col">
                                3、 {t('page6table.FireDAO Treasury')}
                            </div>
                        </div>
                        <div className="col-box">
                            <div className="col">
                                0.5%
                            </div>
                            <div className="col">
                                0.5%
                            </div>
                            <div className="col">
                                4%
                            </div>
                        </div>

                    </div>
                    <div className="table-row">
                        <div className="col">
                            {t('page6table.Purchase Tax')}
                        </div>
                        <div className="col-box">
                            <div className="col">
                                1、{t('page6table.Third-level Referral Incentive')}
                            </div>
                            <div className="col">
                                2、 {t('page6table.City-nodes Incentive')}
                            </div>
                            <div className="col">
                                3、{t('page6table.FireDAO Treasury')}
                            </div>
                        </div>
                        <div className="col-box">
                            <div className="col">
                                0.5%
                            </div>
                            <div className="col">
                                4%
                            </div>
                            <div className="col">
                                5%
                            </div>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="col">
                            {t('page6table.Sales Tax')}
                        </div>
                        <div className="col" style={{marginLeft: "4px"}}>
                            {t('page6table.FireDAO Treasury')}
                        </div>
                        <div className="col" style={{marginLeft: "4px"}}>
                            5%
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page7">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('page7-title')}</strong>
                </div>
                <div className="content-list">
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>1</span>
                        </div>
                        <div className="name">
                            {t('page7-listitem1')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>2</span>
                        </div>
                        <div className="name">
                            {t('page7-listitem2')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>3</span>
                        </div>
                        <div className="name">
                            {t('page7-listitem3')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>4</span>
                        </div>
                        <div className="name">
                            {t('page7-listitem4')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>5</span>
                        </div>
                        <div className="name">
                            {t('page7-listitem5')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>6</span>
                        </div>
                        <div className="name">
                            {t('page7-listitem6')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page8">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('page8-title')}</strong>
                </div>
                <div style={{textAlign:'center',margin:'-3em 0 4em'}}>
                    <strong style={{fontSize:"40px"}}>{t('page8-title2')}</strong>
                </div>
                <div className="content-list">
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>1</span>
                        </div>
                        <div className="number">
                            <strong>15</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem1')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>2</span>
                        </div>
                        <div className="number">
                            <strong>20</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem2')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>3</span>
                        </div>
                        <div className="number">
                            <strong>15</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem3')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>4</span>
                        </div>
                        <div className="number">
                            <strong>5</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem4')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>5</span>
                        </div>
                        <div className="number">
                            <strong>15</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem5')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>6</span>
                        </div>
                        <div className="number">
                            <strong>10</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem6')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>7</span>
                        </div>
                        <div className="number">
                            <strong>5</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem7')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>8</span>
                        </div>
                        <div className="number">
                            <strong>5</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem8')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>9</span>
                        </div>
                        <div className="number">
                            <strong>10</strong>%
                        </div>
                        <div className="name">
                            {t('page8-listitem9')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page9">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('page9-title')}</strong>
                </div>
                <div className="content-list">
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>1</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem1')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>2</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem2')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>3</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem3')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>4</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem4')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>5</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem5')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>6</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem6')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>7</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem7')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>8</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem8')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>9</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem9')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span style={{marginLeft: "-4px"}}>10</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem10')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span style={{marginLeft: "-4px"}}>11</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem11')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span style={{marginLeft: "-4px"}}>12</span>
                        </div>

                        <div className="name">
                            {t('page9-listitem12')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page10">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('page10-title')}</strong>
                </div>
                <div className="content-list">
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>1</span>
                        </div>

                        <div className="content">
                            {t('page10-listitem1')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>2</span>
                        </div>

                        <div className="content">
                            {t('page10-listitem2')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>3</span>
                        </div>

                        <div className="content">
                            {t('page10-listitem3')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>4</span>
                        </div>

                        <div className="content">
                            {t('page10-listitem4')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>5</span>
                        </div>

                        <div className="content">
                            {t('page10-listitem5')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page11">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('page11-title')}</strong>
                </div>
                <div className="content-list">
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>1</span>
                        </div>

                        <div className="content">
                            {t('page11-listitem1')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>2</span>
                        </div>

                        <div className="content">
                            {t('page11-listitem2')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>3</span>
                        </div>

                        <div className="content">
                            {t('page11-listitem3')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>4</span>
                        </div>

                        <div className="content">
                            {t('page11-listitem4')}
                        </div>
                    </div>

                </div>
            </div>
            <div className="page-box page12">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('page12-title')}</strong>
                </div>
                <p>
                    {t('page12-content1')}
                </p>
                <p>
                    {t('page12-content2')}
                </p>
                <p>
                    {t('page12-content3')}
                </p>
                <div className="content-box">
                    <div className="content-item">
                        <div className="name">
                            <img src={OnChain} alt=""/>
                        </div>
                        <div className="content">
                            {t('page12-content4')}
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="name">
                            <img src={OffChain} alt=""/>
                        </div>
                        <div className="content">
                            {t('page12-content5')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-box page13">
                <div className="sub-title">
                    <img src={fireIcon1} alt="" className="icon"/>
                    <strong>{t('page13-title')}</strong>
                </div>
                <p>
                    {t('page13-content1')}
                </p>
                <p>
                    {t('page13-content2')}
                </p>
                <p>
                    {t('page13-content3')}
                </p>
                <div className="content-list">
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>1</span>
                        </div>

                        <div className="content">
                            {t('page13-listitem1')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>2</span>
                        </div>

                        <div className="content">
                            {t('page13-listitem2')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>3</span>
                        </div>

                        <div className="content">
                            {t('page13-listitem3')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>4</span>
                        </div>

                        <div className="content">
                            {t('page13-listitem4')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>5</span>
                        </div>

                        <div className="content">
                            {t('page13-listitem5')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>6</span>
                        </div>

                        <div className="content">
                            {t('page13-listitem6')}
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="index-box">
                            <img src={fireIcon2} alt="" className="icon"/>
                            <span>7</span>
                        </div>

                        <div className="content">
                            {t('page13-listitem7')}
                        </div>
                    </div>
                </div>
                <p>
                    {t('page13-content4')}
                </p>
            </div>
            <Footer></Footer>
        </DaoHome>

    )
}

export default DaoHome
