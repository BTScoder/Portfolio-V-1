import React from 'react'

function AboutContent() {
    return (
        <>
            <section className='relative p-5'>
                <div className='h-30 grid-background w-full absolute top-0' />
                <h1 className='uppercase lg:text-7xl text-5xl'>About Me</h1>

                <div className='grid lg:grid-cols-2 gap-10  lg:gap-6 mt-15 lg:mt-20'>
                    <div className='border items-center justify-center lg:hidden flex '>
                        <img src="/images/profile.svg" alt="profile" className='h-50 w-50 border' />
                    </div>
                    <p className='text-sm leading-8 tracking-wider'>Hi, I’m Chidinma 👋🏾
                        I’m an aspiring Full Stack Developer who enjoys turning ideas into functional, engaging digital experiences. I’m passionate about technology and constantly learning, experimenting, and challenging myself to grow both personally and professionally.

                        When I’m not coding, you’ll probably find me watching anime or K-dramas, catching up on Markiplier, or doing what I arguably do best—sleeping 😴.

                        I believe that there’s always something new to learn, and I’m excited to keep growing, building, and discovering where my journey in tech takes me.</p>

                    <div className='border lg:flex items-center justify-center hidden'>
                        <img src="/images/profile.svg" alt="profile" className='h-50 w-50 border' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutContent