import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { links } from "../../data";

const bannerDisplayTime = 5000;

const objCheck = {};

const Home = () => {
  const [iframeLink, setIframeLink] = useState(links[0]);
  const [counter, setCounter] = useState(0);

  async function giveLink(link) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(link), 0);
    });
  }

  // const interval = setTimeout(() => {
  //   giveLink(links[counter++]).then((link) => {
  //     // tabRef = window.open(link);
  //     // document.querySelector(".iframe").src = link;
  //   });
  // }, 2000);

  useEffect(() => {
    let inCounter = 0;
    const interval = setInterval(() => {
      console.log("Counter inside setInterval => ", counter);

      console.log(links[inCounter]);

      setIframeLink(links[inCounter]);

      if (objCheck[links[inCounter]]) {
        objCheck[links[inCounter]]++;
      } else {
        objCheck[links[inCounter]] = 1;
      }

      if (inCounter === links.length - 1) {
        console.log("Condition met");
        localStorage.setItem("links-count", JSON.stringify(objCheck));
        inCounter = 0;
        // clearInterval(interval);
      } else {
        inCounter++;
      }

      console.log("Object kys => ", objCheck);

      console.log("after Counter => ", inCounter);
    }, bannerDisplayTime);
  }, []);

  return (
    <div className="home-container">
      <div className="home__bg"></div>
      <div className="home__link">{iframeLink}</div>

      <iframe className="home__iframe" src={iframeLink} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: StaticRange,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
