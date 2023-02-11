
import { useEffect, useState } from 'react';
import LightBanner from "../img/LightXmas.png";
import DarkBanner from "../img/NightXmas.png";
import FPCSS from '../css/front-page.module.css';
import '../css/front-page.module.css';

import '../css/phone-rotation.module.css';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducer/Counter'
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { changeTheme } from '../reducer/AppBev';
import logo from '.././logo.svg';
import { ReactComponent as ReactLogo } from '.././logo.svg';
import { openCloseDialog, changeImageURL } from '../reducer/ExpandDialog';
import Tictactoe from './Tictactoe';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '../css/style.css';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { EffectFade, Pagination, EffectCube } from "swiper";
import Calculator from './Calculator';

function Counter() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div style={{ color: "white" }}>{count}</div>
      </div>
    </div>
  )
}

function Header() {
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme);
  const dispatch = useDispatch();
  useEffect(() => {

    const startAnimation3 = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle(FPCSS.slideInRightAnimation, entry.isIntersecting);
      });
    };
    const observer3: any = new IntersectionObserver(startAnimation3);
    const options3 = { root: null, rootMargin: '0px', threshold: 1 };
    const elements3 = document.querySelectorAll('.' + FPCSS.pageHeaderTextDiv);
    elements3.forEach(el => {
      observer3.observe(el, options3);
    });
  });

  return (

    <div id="section1" style={{ position: "relative", height: "auto", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className={FPCSS.pageHeaderTextDiv} style={{}}>
        <div className={FPCSS['font-25px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{ width: "auto", height: "auto", paddingTop: "1em", paddingBottom: "1em" }}>
          <div>
            This Page Is Created Using React Redux Framework.

          </div>
          <div>
            *There is light and dark theme

          </div>
         
        </div>

      </div>
      <div className={FPCSS.reactIconDiv} onClick={() => { dispatch(changeTheme()) }} style={{}}>
        <ReactLogo className={FPCSS['App-logo']} />
      </div>
      <img src={DarkBanner} alt="" style={{ zIndex: 0, height: "auto", width: "100%", position: "absolute", transition: "2s", opacity: isDarkTheme ? 1 : 0 }} />
      <img src={LightBanner} alt="" style={{ zIndex: 0, width: "100%", transition: "2s", opacity: isDarkTheme ? 0 : 1 }} />




    </div>
  );
}

function NavigationDrawer() {
  useEffect(() => {


  });

  return (
    <div className={FPCSS.drawerContainer} >
 
      <div style={{width:"80%", display: "flex", flexDirection: "column", height: "50%",alignItems:"flex-start" }}>
        <div className={FPCSS.navigationDrawerSelection +" "+FPCSS['font-25px'] + " " + FPCSS['font-color']} onClick={() => { var element = document.getElementById("section1")!; element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }}>
          <div className={FPCSS.navigationDrawerContent}>
          <ArrowSVG/>
          Back To Top
          </div>
         
        </div>
      </div>

    </div>
  )
}


function ArrowSVG(){
  return(
    <svg width="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height:"1em"}}>
            <g clipPath="url(#clip0_822_2)">
              <path className={FPCSS.navigationDrawerArrowPath} d="M25.5 13.134C26.1667 13.5189 26.1667 14.4811 25.5 14.866L4.5 26.9904C3.83333 27.3753 3 26.8942 3 26.1244L3 1.87564C3 1.10584 3.83333 0.624719 4.5 1.00962L25.5 13.134Z" fill="#7000FF" />
            </g>
            <defs>
              <clipPath id="clip0_822_2">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>

  )
}

function LightDarkIcon() {
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme)
  const dispatch = useDispatch()
  return (
    <IconButton className={FPCSS['theme-icon-div']} onClick={() => { dispatch(changeTheme()) }} aria-label="delete" style={{ position: "absolute", right: "1vw", top: "1vw", zIndex: 3 }}>
      {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}

    </IconButton>
  )
}

function FrontPage() {
  const isDarkTheme = useSelector((state: any) => state.appBev.isDarkTheme)

  return (
    <div className={isDarkTheme ? FPCSS['parent-isDark'] : FPCSS['parent-isLight']} style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}>
      <LightDarkIcon />
      <NavigationDrawer />
      <div className={FPCSS.bannerImg} style={{}}>
        <Header />
        <Tictactoe />
        <Calculator/>
        
      </div>
    </div>

  );
}


export default FrontPage;
