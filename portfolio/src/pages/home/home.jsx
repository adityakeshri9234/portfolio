import React from 'react'
import Profile from "../../assets/home.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"
const Home = () => {
  return (
    <section className='home section grid'>
        <img src={Profile} alt="" className='home__img' />
        <div className="home__content">
            <div className="home__data">
                <h1 className="home__title">
                    <span>I'm Aditya Keshri.</span> Full Stack Developer
                </h1>
                <p className="home__description">
                    I am a passionate full stack developer specializing in the MERN stack. I have a strong knowledge of data structures and algorithms and strive to be in a position where I can showcase my skills in a way that will be efficient and beneficial for my company.
                </p>
                <Link to='/about' className='button'>
                    More About Me{' '}
                    <span className='button__icon'>
                        <FaArrowRight/>
                    </span>
                </Link>
            </div>
        </div>
        <div className="color__block"></div>
      
    </section>
  )
}

export default Home
