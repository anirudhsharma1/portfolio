import "./index.scss";
import LogoS from "../../../assets/images/logo-s1.png";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin);
  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //     });
  // }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="s" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="559pt"
        zoomAndPan="magnify"
        viewBox="0 0 73.5 73.499996"
        height="897pt"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="id1">
            <path
              d="M 3 0 L 67 0 L 67 73.003906 L 3 73.003906 Z M 3 0 "
              clipRule="nonzero"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#id1)" className="svg-container">
          <path
            ref={outlineLogoRef}
            strokeLinecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, -13.500295, -16.910554)"
            fill="none"
            strokeLinejoin="miter"
            d="M 78.901445 117.000545 C 77.750403 117.000545 77.094153 116.438045 76.922278 115.307837 L 76.031653 105.10471 C 75.94832 104.766169 75.724361 104.594294 75.359778 104.594294 L 56.292067 104.594294 C 55.870192 104.594294 55.614984 104.766169 55.526442 105.10471 L 52.245192 115.307837 C 51.901442 116.438045 51.114983 117.000545 49.885816 117.000545 L 29.125397 117.000545 C 28.422272 117.000545 27.943105 116.807837 27.687897 116.427629 C 27.432688 116.021379 27.432688 115.469295 27.687897 114.76617 L 61.010818 27.271367 C 61.437901 26.141159 62.172276 25.578659 63.213943 25.578659 L 88.307696 25.578659 C 89.349363 25.578659 89.95353 26.141159 90.125405 27.271367 L 101.891031 114.76617 L 101.891031 115.052628 C 101.891031 116.349504 101.234781 117.000545 99.917073 117.000545 Z M 62.031651 85.146375 C 61.864985 85.56825 62.042068 85.781791 62.573318 85.781791 L 73.542069 85.781791 C 74.052486 85.781791 74.307694 85.56825 74.307694 85.146375 L 71.854569 57.307829 C 71.854569 56.969288 71.755611 56.797413 71.568111 56.797413 C 71.396236 56.797413 71.271236 56.969288 71.182694 57.307829 Z M 62.031651 85.146375 "
            stroke="#fff"
            strokeWidth="0.897944"
            strokeOpacity="1"
            strokeMiterlimit="4"
          />
        </g>
      </svg>
    </div>
  );
};
export default Logo;
