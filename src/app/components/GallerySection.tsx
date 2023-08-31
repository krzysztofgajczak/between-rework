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
        <section className="bg-slate-100">
            <div className="h-auto pt-10">
                <div className="">
                    <h1 className="text-4xl text-white p-10 font-semibold bg-primary">Galeria</h1>
                </div>
                <div className="text-center mt-10">
                    <h1 className="text-2xl border-y-2 border-primary py-10">Jedzenie świetnie prezentuje się w galerii, ale polecamy spróbować go w naszym bistro :)</h1>
                </div>
            </div>
            <div className='py-10 flex justify-center items-center'>
                <SlideshowLightbox className='container grid grid-cols-2 gap-2 mx-auto'>
                    {images.map((image, index) => {
                        return (
                            <img key={index} className='w-full rounded' src={image.source} alt={image.title} />
                        )
                    })}
                </SlideshowLightbox>
            </div>
        </section>
    );
}

export default GallerySection;