import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const app =  () => {
    return (
        <div className="flex-center h-screen">
            <h1 className="text-3xl text-indigo-800">Hello, GSAP!</h1>
        </div>
    )
}   

export default app;