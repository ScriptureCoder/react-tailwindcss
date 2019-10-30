import React from 'react';
import './assets/style.css';

function App() {
    return (
        <>
            <nav className="flex w-full justify-between items-center absolute py-5 px-32">
                <div className="text-center px-5">
                    <img src="http://vectorasit.com/html/codethemes/softdash-html/multiple/img/logo.png" className='w-32' alt=""/>
                </div>
                <div className="text-center">
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

            <section className='flex justify-between flex-wrap h-screen' >
                <div className='flex-1 self-center'>
                    <div className='pl-64'>
                        <h1 className='text-5xl text-black leading-tight'>We Made our Software 100% Errorless</h1>
                        <p className='leading-loose mt-5'>The first is a non technical method which requires the use of adware removal software. Download free adware and spyware removal software and use advanced tools to help prevent getting infected.</p>
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

            <section className="flex justify-between items-center py-20 px-64">
                <div className="flex-1 bg-gray-200 m-5 h-64 px-10 py-10">
                    <img src="http://vectorasit.com/html/codethemes/softdash-html/multiple/img/feature/i1.png" alt=""/>
                    <h1 className="text-2xl">Collaboration</h1>
                    <p>Some days a motivational quote can provide a quick pick-me-up for employees and even management.</p>
                </div>
                <div className="flex-1 bg-gray-200 m-5 h-64">

                </div>
                <div className="flex-1 bg-gray-200 m-5 h-64">

                </div>
            </section>
        </>
    );
}

export default App;
