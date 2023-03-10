import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";


const blink = keyframes`
0%{
    transform: scale(0.15);
    opacity: 0;
}50%{
    opacity: 1;
}100%{
    transform: scale(1);
    opacity: 0;
}
`
const Loader = styled.div`
 width: 64px;
 height: 64px;
 border-radius: 50%;
 background: #ffffff;
 animation: ${blink} 0.85s infinite linear;
`
const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.onload = () => setLoading(false)
    }
  }, []);

  return (
    <>
      {loading &&
        <div className="fixed mt-9 w-screen text-gray-300 z-50 ">
          <div className="lds-ring inline-block relative w-20 h-20">
            <Loader />

          </div>
        </div>
      }
    </>
  );
};

export default Loading;

// const ring = keyframes`
// 0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `

// const Circle = styled.div`
//     box-sizing: border-box;
//   display: block;
//   position: absolute;
//   width: 22px;
//   height: 22px;
//   margin: 2px;
//   border: 2px solid #34ff01;
//   border-radius: 50%;
//   animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
//   border-color: #34ff01 transparent transparent transparent;
//   :nth-child(1) {
//   animation-delay: -0.45s;
//  }
//  :nth-child(2) {
//   animation-delay: -0.3s;
//  }
//  :nth-child(3) {
//   animation-delay: -0.15s;
//  }
// `