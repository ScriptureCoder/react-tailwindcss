import React from 'react';
import './assets/style.css';

function App() {
    return (
        <>
            <nav className="flex w-full justify-between items-center absolute py-5 px-32 border-b shadow-md">
                <div className="text-center px-5">
                    <img src="http://vectorasit.com/html/codethemes/softdash-html/multiple/img/logo.png" className='w-32' alt=""/>
                </div>
                <div className="sm:flex sm:flex-col md:flex-row text-center">
                    <a href="#" className="px-4">HOME</a>
                    <a href="#" className="px-4">FEATURES</a>
                    <a href="#" className="px-4">ABOUT US</a>
                    <a href="#" className="px-4">PRICING</a>
                    <a href="#" className="px-4">BLOG</a>
                    <a href="#" className="px-4">CONTACT</a>
                </div>
                <div className="text-center px-5">
                    <a className="bg-gray-300 py-4 px-8 hover:bg-purple-700 hover:text-white">FREE TRIAL</a>
                </div>
            </nav>

            {/*<section className='flex justify-between flex-wrap h-screen' >
                <div className='flex-1 self-center'>
                    <div className='pl-64'>
                        <h1 className='text-5xl text-black leading-tight font-bold'>We Made our Software 100% Errorless</h1>
                        <p className='leading-loose mt-5 text-gray-600 font-bold'>The first is a non technical method which requires the use of adware removal software. Download free adware and spyware removal software and use advanced tools to help prevent getting infected.</p>
                        <div className="mt-10">
                            <a className="bg-purple-700 py-4 px-8 hover:bg-gray-300 hover:text-black text-white mr-5">START A PROJECT</a>
                            <a className="bg-gray-300 py-4 px-8 hover:bg-purple-700 hover:text-white">VIEW PRICING</a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 self-end">
                    <img src="http://vectorasit.com/html/codethemes/softdash-html/multiple/img/hero/hero-img.png" alt=""/>
                </div>
            </section>

            <section className="flex justify-between items-center py-20 px-64 py-40">
                <div className="flex-1 bg-gray-200 m-5 px-10 py-10 border-2 border-transparent hover:border-purple-600 hover:bg-white">
                    <img className="bg-white rounded-full p-5 mb-5" src="http://vectorasit.com/html/codethemes/softdash-html/multiple/img/feature/i1.png"alt=""/>
                    <h1 className="text-2xl">Collaboration</h1>
                    <p className="text-gray-900 mt-5 leading-relaxed">Some days a motivational quote can provide a quick pick-me-up for employees and even management.</p>
                </div>

                <div className="flex-1 bg-gray-200 m-5 px-10 py-10 border-2 border-transparent hover:border-purple-600 hover:bg-white">
                    <img className="bg-white rounded-full p-5 mb-5" src="http://vectorasit.com/html/codethemes/softdash-html/multiple/img/feature/i3.png"alt=""/>
                    <h1 className="text-2xl">Collaboration</h1>
                    <p className="text-gray-900 mt-5 leading-relaxed">Some days a motivational quote can provide a quick pick-me-up for employees and even management.</p>
                </div>

                <div className="flex-1 bg-gray-200 m-5 px-10 py-10 border-2 border-transparent hover:border-purple-600 hover:bg-white">
                    <img className="bg-white rounded-full p-5 mb-5" src="http://vectorasit.com/html/codethemes/softdash-html/multiple/img/feature/i4.png"alt=""/>
                    <h1 className="text-2xl">Collaboration</h1>
                    <p className="text-gray-900 mt-5 leading-relaxed">Some days a motivational quote can provide a quick pick-me-up for employees and even management.</p>
                </div>
            </section>

            <section className="flex flex-col py-40 justify-center text-center bg-purple-600">
                <div className="max-w-2xl self-center">
                    <p className="text-3xl text-white font-bold">Fallen in Love with our features? Get a free trial for 14 days!</p>
                </div>
                <div className="mt-10">
                    <a className="bg-gray-200 py-4 px-8 hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white text-black mr-5">START FREE TRIAL</a>
                    <a className="py-4 px-8 border-2 border-white text-white hover:bg-white hover:text-black">SIGNUP</a>
                </div>
            </section>


            <section className="flex justify-between items-center py-20 px-64">
                <div className="flex-1 bg-gray-200 m-5 px-10 py-10 border-2 border-transparent hover:border-purple-600 hover:bg-white">
                    <p className="text-gray-900 mt-5 leading-relaxed">Some days a motivational quote can provide a quick pick-me-up for employees and even management.</p>
                </div>

                <div className="flex-1 bg-gray-200 m-5 px-10 py-10 border-2 border-transparent hover:border-purple-600 hover:bg-white">
                    <p className="text-gray-900 mt-5 leading-relaxed">Some days a motivational quote can provide a quick pick-me-up for employees and even management.</p>
                </div>

                <div className="flex-1 bg-gray-200 m-5 px-10 py-10 border-2 border-transparent hover:border-purple-600 hover:bg-white">
                    <p className="text-gray-900 mt-5 leading-relaxed">Some days a motivational quote can provide a quick pick-me-up for employees and even management.</p>
                </div>
            </section>

            <footer className="flex flex-col px-64 py-40 justify-between bg-purple-600 text-white">
                <div className="flex">
                    <div className="flex-1 m-5">
                        <h3 className="text-2xl font-bold">About Us</h3>
                        <p>About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about. 11% of all adult internet user visit websites.</p>
                    </div>
                    <div className="flex-1 m-5">
                        <h3 className="text-2xl font-bold">Resources</h3>
                        <ul>
                            <li>Guide</li>
                            <li>Research</li>
                            <li>Expert</li>
                            <li>Agency</li>
                        </ul>
                    </div>
                    <div className="flex-1 m-5">
                        <h3 className="text-2xl font-bold">Features</h3>
                        <ul>
                            <li>Guide</li>
                            <li>Research</li>
                            <li>Expert</li>
                            <li>Agency</li>
                        </ul>
                    </div>
                    <div className="flex-1 m-5">
                        <h3 className="text-2xl font-bold">Follow Us</h3>
                        <ul>
                            <li>Guide</li>
                            <li>Research</li>
                            <li>Expert</li>
                            <li>Agency</li>
                        </ul>
                    </div>
                    <div className="flex-1 m-5">
                        <h3 className="text-2xl font-bold">Newsletter</h3>
                        <ul>
                            <li>Guide</li>
                            <li>Research</li>
                            <li>Expert</li>
                            <li>Agency</li>
                        </ul>
                    </div>
                </div>

                <div className="self-center mt-20 w-full">
                    Copyright © 2019 All rights reserved to IntaScript Innovations
                </div>
            </footer>*/}

        </>
    );
}

export default App;
