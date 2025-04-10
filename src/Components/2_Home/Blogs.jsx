import React from 'react';

export default function Blogs() {
    const blogPosts = [
        {
            id: 1,
            title: "How to Design a Modern Living Room",
            description: "Learn the latest trends and tips for designing a modern living room that combines style and comfort.",
            image: "./img/blogs/How to Design a Modern Living Room.jpg", // Replace with actual image path
            link: "#",
        },
        {
            id: 2,
            title: "Top 10 Bedroom Decor Ideas",
            description: "Discover the top 10 bedroom decor ideas to create a cozy and relaxing space in your home.",
            image: "./img/blogs/Top 10 Bedroom Decor Ideas.jpg", // Replace with actual image path
            link: "#",
        },
        {
            id: 3,
            title: "Maximizing Small Spaces",
            description: "Explore creative ways to maximize small spaces in your home without compromising on style.",
            image: "./img/blogs/Maximizing Small Spaces.jpg", // Replace with actual image path
            link: "#",
        },
    ];

    return (
        <div className="w-full flex flex-col justify-center items-center p-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-10">Our Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-10">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        {/* Blog Image */}
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                        />
                        {/* Blog Content */}
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                            <p className="text-gray-700 mb-4">{post.description.slice(0, 100)}...</p>
                            <a
                                href={post.link}
                                className="text-blue-500 hover:underline font-medium"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
