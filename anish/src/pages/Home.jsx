import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="main mx-auto w-8/12 py-23 h-auto flex flex-col gap-4">
            <h1 className='text-3xl text-center py-5'>I'M ANISHKRISHNA N</h1>
            <div className="brief flex flex-col gap-4">
                <p>Your friendly neighborhood frontend developer, Full stack web developer, and Code enthusiasist. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive, interactive experiences,</p>
                <p>Bona fide photochromic LENS enthusiast - sunlight or indoors, I've got it covered. I tread the path of minimalism, finding beauty in simplicity and order. When I'm not crafting beautiful web experiences, you can find me reading ARTICLES or swaying to the rhythm of</p>
                <p>Pop Music & Jazz, losing myself in the captivating flow of melodies. anyways you can CONTACT ME</p>
            </div>
            <div className="linker py-10">
              <p><NavLink to="/About">See more about me  --</NavLink></p>
            </div>
        </div>
    </>
  )
}

export default Home
