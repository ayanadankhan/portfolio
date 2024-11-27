import React from 'react';
import { useState } from 'react';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="w-full bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <img 
                                className="h-8 w-auto" 
                                src="/logo.png" 
                                alt="Logo"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Home
                            </a>
                            <a href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                About
                            </a>
                            <a href="/gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Gallery
                            </a>
                            <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Contact Us
                            </a>
                        </div>

                        {/* Mobile Navigation Button */}
                        <div className="md:hidden flex items-center">
                            <button 
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Hamburger Icon */}
                                <svg 
                                    className="block h-6 w-6" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </a>
                            <a href="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                                About
                            </a>
                            <a href="/gallery" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                                Gallery
                            </a>
                            <a href="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                                Contact Us
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};



export default Header;