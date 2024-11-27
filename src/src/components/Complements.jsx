import React, { useEffect, useState } from 'react';

const Complements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            name: "John Smith",
            title: "CEO, Tech Solutions",
            quote: "Adan delivered exceptional results. His technical expertise and attention to detail transformed our vision into reality. Highly recommended!",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Sarah Johnson",
            title: "Product Manager, Innovation Labs",
            quote: "Working with Adan was a pleasure. His problem-solving skills and innovative approach helped us achieve our goals ahead of schedule.",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "Michael Chen",
            title: "CTO, Digital Ventures",
            quote: "Adan's full-stack expertise was instrumental in launching our platform. His code quality and documentation are outstanding.",
            image: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            name: "Emily Davis",
            title: "Founder, StartUp Inc",
            quote: "The web application Adan built exceeded our expectations. His communication and project management skills are exceptional.",
            image: "https://randomuser.me/api/portraits/women/4.jpg"
        }
    ];

    // Automatic carousel scroll (every 5 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What Clients Say</h2>
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-1000 ease-in-out transform" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-none px-4">
                            <div className="bg-gray-800/50 rounded-lg p-8 shadow-xl">
                                <div className="flex items-center mb-6">
                                    <img 
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                                        <p className="text-blue-400">{testimonial.title}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300">{testimonial.quote}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 px-4">
                    <button 
                        className="bg-gray-800/50 rounded-full p-2 text-white hover:bg-gray-700 transition duration-200" 
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}>
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 px-4">
                    <button 
                        className="bg-gray-800/50 rounded-full p-2 text-white hover:bg-gray-700 transition duration-200" 
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}>
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Complements;
