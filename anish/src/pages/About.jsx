import React from 'react'
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <div className="main mx-auto w-8/12 py-23 h-auto flex flex-col gap-4">
        <div className="heading">
            <h1 className='text-3xl py-5'>About Me.</h1>
        </div>
        <div className="paras flex flex-col gap-8">
            <div className="title flex place-content-between">
                <h3>Engineering </h3>
                <h4>View Github</h4>
            </div>
            <hr />
            <div className="desc">
                <p>The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every aspect of your website is finely tuned to perfection.</p>
            </div>
        </div>
        <hr />
        <div className="paras flex flex-col gap-8">
            <div className="title flex place-content-between">
                <h3>Engineering </h3>
                <h4>View Github</h4>
            </div>
            <hr />
            <div className="desc">
                <p>The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every aspect of your website is finely tuned to perfection.</p>
            </div>
        </div>
        <hr />
        <div className="paras flex flex-col gap-8">
            <div className="title flex place-content-between">
                <h3>Engineering </h3>
                <h4>View Github</h4>
            </div>
            <hr />
            <div className="desc">
                <p>The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every aspect of your website is finely tuned to perfection.</p>
            </div>
        </div>
        <hr />
        <div className="linker">
                <p><NavLink to="/Projects">See PROJECTS  --</NavLink></p>
            </div>
      </div>
    </>
  )
}

export default About
