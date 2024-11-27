import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* AI-Powered Healthcare Analytics Platform */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <img 
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                                alt="Healthcare Analytics"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">AI Healthcare Analytics</h3>
                                <p className="text-gray-300 mb-4">Full-stack healthcare platform using React, Node.js, and TensorFlow for predictive analytics and patient care optimization.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Node.js</span>
                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">TensorFlow</span>
                                </div>
                            </div>
                        </div>

                        {/* Blockchain Supply Chain Platform */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <img 
                                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                                alt="Blockchain Supply Chain"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Supply Chain DApp</h3>
                                <p className="text-gray-300 mb-4">Decentralized supply chain management platform using Ethereum smart contracts and Web3 integration.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Solidity</span>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Web3.js</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Next.js</span>
                                </div>
                            </div>
                        </div>

                        {/* Cloud-Native Microservices Platform */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <img 
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                                alt="Microservices Architecture"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Cloud Microservices</h3>
                                <p className="text-gray-300 mb-4">Scalable microservices architecture using Kubernetes, Docker, and AWS cloud services.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Kubernetes</span>
                                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Docker</span>
                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">AWS</span>
                                </div>
                            </div>
                        </div>

                        {/* Real-time IoT Analytics Dashboard */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <img 
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                                alt="IoT Dashboard"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">IoT Analytics Platform</h3>
                                <p className="text-gray-300 mb-4">Real-time IoT data visualization platform using MQTT, Apache Kafka, and D3.js.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Apache Kafka</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">MQTT</span>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">D3.js</span>
                                </div>
                            </div>
                        </div>

                        {/* AI-Powered Code Review Assistant */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <img 
                                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                                alt="Code Review AI"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">AI Code Reviewer</h3>
                                <p className="text-gray-300 mb-4">Automated code review system using GPT-4 API and GitHub Actions for continuous integration.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Python</span>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">GPT-4</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">GitHub Actions</span>
                                </div>
                            </div>
                        </div>

                        {/* Sustainable Energy Management System */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <img 
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                                alt="Energy Management"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Smart Energy Platform</h3>
                                <p className="text-gray-300 mb-4">ML-powered energy management system using Python, FastAPI, and React for sustainable energy optimization.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">FastAPI</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Python</span>
                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">TensorFlow</span>
                                </div>
                            </div>
                        </div>

                        {/* Augmented Reality Education Platform */}
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                            <img 
                                src="https://images.unsplash.com/photo-1617839625591-e5a789593135?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                                alt="AR Education"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">AR Learning Platform</h3>
                                <p className="text-gray-300 mb-4">Interactive AR-based educational platform using Unity, ARKit, and WebXR for immersive learning experiences.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm">Unity</span>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">ARKit</span>
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">WebXR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;