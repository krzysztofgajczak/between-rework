'use client'
import React from "react";
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox } from 'lightbox.js-react'

const images = [
    {
        title: 'food1',
        source: 'food1.jpg'
    },
    {
        title: 'food2',
        source: 'food2.jpg'
    },
    {
        title: 'food3',
        source: 'food3.jpg'
    },
    {
        title: 'food4',
        source: 'food4.jpg'
    },
    {
        title: 'food5',
        source: 'food5.jpg'
    },
    {
        title: 'food6',
        source: 'food6.jpg'
    },
    {
        title: 'food7',
        source: 'food7.jpg'
    },
    {
        title: 'food8',
        source: 'food8.jpg'
    },
]

const GallerySection = () => {
    return (
        <>
            <h1 className="text-4xl text-secondary">Galeria</h1>
            <p>Nasze jedzenie świetnie prezentuje się w galerii, ale polecamy spróbować go w naszym bistro :)</p>
            <div className='my-8 flex justify-center items-center'>
                <SlideshowLightbox className='container grid grid-cols-2 gap-2 mx-auto'>
                    {images.map((image, index) => {
                        return (
                            <img key={index} className='w-full rounded' src={image.source} alt={image.title} />
                        )
                    })}
                </SlideshowLightbox>
            </div>
        </>
    );
}

export default GallerySection;