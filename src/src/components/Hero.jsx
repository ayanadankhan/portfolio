import React from 'react';
import Adan2 from '../../assets/Adan2.jpeg';
const Hero = () => {
    return (
        <div>
            <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        {/* Text Content */}
                        <div className="lg:w-1/2 space-y-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                <span className="block">Hi, I'm Adan</span>
                                <span className="block text-blue-500">Full Stack Developer</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Passionate software engineer specializing in building exceptional digital experiences.
                                Proficient in modern web technologies and frameworks.
                            </p>

                            {/* Tech Stack Section */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold text-white">Tech Stack</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                                        <h4 className="text-blue-500 font-semibold mb-2">MERN Stack</h4>
                                        <ul className="text-gray-300 space-y-1">
                                            <li>MongoDB</li>
                                            <li>Express.js</li>
                                            <li>React.js</li>
                                            <li>Node.js</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                                        <h4 className="text-blue-500 font-semibold mb-2">MEAN Stack</h4>
                                        <ul className="text-gray-300 space-y-1">
                                            <li>MongoDB</li>
                                            <li>Express.js</li>
                                            <li>Angular</li>
                                            <li>Node.js</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                                        <h4 className="text-blue-500 font-semibold mb-2">Python</h4>
                                        <ul className="text-gray-300 space-y-1">
                                            <li>Django</li>
                                            <li>Flask</li>
                                            <li>FastAPI</li>
                                            <li>Data Science</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex gap-4">
                                <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                                    Contact Me
                                </a>
                                <a href="#projects" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                                    View Projects
                                </a>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                            <div className="relative">
                                <div className="absolute"></div>
                                <img src={Adan2} alt="Adan - Full Stack Developer" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Hero;