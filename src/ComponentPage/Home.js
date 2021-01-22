import React, { useEffect, useRef } from "react";
import Banner from "../Component/Banner";
import { useSelector, useDispatch } from "react-redux";
import SlideMovie from "../Component/SlideMovie";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import requests from "../utils/requests";
import MovieCard from "../Component/MovieCard";
import { CHANGE_LOAD, selectFirstLoad } from "../features/filmsSlice";

function Home() {
  const firstload = useSelector(selectFirstLoad);
  const dispatch = useDispatch();
  let home = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    window.scrollTo(0, 0);
    let banner = home.firstElementChild;
    let bannerContent = banner.firstElementChild;
    let slidePoster = home.childNodes[1];

    //Rimuovo "flash" iniziale
    //avendo settato la visibility hidden della home solo quando viene caricato completamente si ha il cambio di visibility e parte animazione
    TweenMax.to(home, 0, { css: { visibility: "visible" } });

    //animazione parte solo al primo caricamento del sito
    //poichè modifico con evento onComplete il value di firstload
    if (firstload) {
      //animation
      tl.from(banner, {
        height: "100vh",
        scale: 1.2,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        duration: 1.6,
        ease: Power3.easeIn,
      }).from(
        bannerContent,
        {
          scale: 0,
          paddingTop: "50vh",
          duration: 0.4,
          ease: Power3.easeOut,
          delay: 0.2,
        },
        "Start"
      );

      tl.from(
        slidePoster,
        {
          x: "100vw",
          duration: 0.8,
          ease: Power3.easeOut,
          delay: 0.2,
          onComplete: function () {
            dispatch(CHANGE_LOAD());
          },
        },
        "Start"
      );
    }

    // //animazione parte ogni volta che si ritorna alla home
    // tl.from(banner,{height:"100vh",scale:1.2,backgroundPositionX:0,backgroundPositionY:0,duration:1.6,ease:Power3.easeIn})
    //   .from(bannerContent,{scale:0,paddingTop:"50vh",duration:.4,ease:Power3.easeOut,delay:0.2},'Start')

    // tl.from(slidePoster,{x:"100vw",duration:.8,ease:Power3.easeOut,delay:0.2},'Start')
  }, []);

  return (
    <div
      className="home"
      ref={(el) => {
        home = el;
      }}
      style={{ height: "100vh", visibility: "hidden" }}
    >
      <Banner></Banner>
      <SlideMovie fetchUrl={requests.fetchTrending}></SlideMovie>
      <MovieCard></MovieCard>
    </div>
  );
}

export default Home;
