import React from 'react'
import myImg from '../media/my.JPG'

export default function NG() {
  return (
    <>

        <div className='container mt-5 ' >
            <div className='row text-white profile-content '>
                <div className='d-flex img-container col-12'>
                    <img className='profile-image col-6' src={myImg} alt=''/>
                    <div className='about-text col-6 ms-5 mt-5'>
                        <h1 className='text-center'>
                            Hey, I'm Nikhil Gupta
                        </h1>
                        <h5 className='text-center mt-5'>
                        I am a software engineer with 3 years of experience in developing and maintaining 
                        software applications. I have hands-on experience in full stack web
                        development and software engineering. My greatest strength is my ability to
                        analyze complex problems and design efficient solutions. I possess excellent
                        communication skills that help me collaborate effectively with other teams.
                        </h5>
                    </div>
                </div>
                
            </div>
        </div>
    </>
    
  )
}
