// components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ image, title }) {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-yellow-400 to-transparent text-black text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{title}</p>
            </div>
        </div>
    );
}
