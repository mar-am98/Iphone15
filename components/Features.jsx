import { exploreVideo,explore1Img,explore2Img } from "../src/utils"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Features(){

    const videoRef = useRef();
    
    useGSAP(()=> {
        // VIDEO
        gsap.to("#exploreVideo", {
            scrollTrigger : {
                trigger:"#exploreVideo",
                start:"-15% bottom",
                toggleActions : "play pause reverse restart",
                
            },
            onComplete : ()=>{
                videoRef.current.play();
            }
        });
        // IMAGES
        gsap.to(".img_grow_1", {
            scrollTrigger : {
                trigger:".img_grow_1",
                start:"top 80%",
                
                scrub:5,
            },

            opacity:1,
            scale:1,
            ease:"power1"
        });

        // TEXT
        gsap.to(".g_text",1, {
            scrollTrigger : {
                trigger:".g_text",
                
                start:"top 90%",
               
                
            },

            opacity:1,
            y:0,
            ease:"power2.inOut"
        });
    })


    return (
        <section className="h-full common-padding bg-zinc relative overflow-hidden">
                <div className="screen-max-wdith">
                    {/* Main Titles */}
                    <div className="mb-12 w-full">
                         <h1 className="section-heading">
                            Explore the full story ..
                         </h1>
                    </div>
                {/* video section */}
                    <div className="flex flex-col justify-center items-center overflow-hidden">
                        {/* titles */}
                        <div className="mt-32 mb-24 pl-24">
                            <h2 className="text-5xl font-semibold lg:text-7xl">Iphone</h2>
                            <h2 className="text-5xl font-semibold lg:text-7xl">Forged in titanium</h2>
                        </div>

                        {/* video */}
                        <div className="flex-center flex-col sm:px-10">
                            <div className="relative h-[50vh] w-full flex items-center" >
                                <video 
                                ref={videoRef}
                                id="exploreVideo" 
                                playsInline 
                                className="w-full h-full object-cover object-center" 
                                src={exploreVideo} 
                                muted autoPlay/>
                            </div>

                            <div className="flex flex-col w-full relative">

                                {/* video Container */}

                                <div className="feature-video-container">
                                    <div className="overflow-hidden flex-1 h-[50vh]">
                                        <img src={explore1Img} alt="" className="feature-video img_grow_1"/>
                                    </div>

                                    <div className="overflow-hidden flex-1 h-[50vh]">
                                        <img src={explore2Img} alt="" className="feature-video img_grow_1" />
                                    </div>

                                </div>

                                {/* Video Text */}
                                <div className="feature-text-container ">
                                    <div className="flex-1 flex-center">
                                        <p className="feature-text g_text">
                                        iPhone 15 Pro is
                                        <span className="text-white">
                                        the first iPhone to feature an aerospace-grade titanium design
                                        </span>
                                        using the same alloy that spacecrafts use for missions to Mars.
                                        </p>
                                    </div>

                                    <div className="flex-1 flex-center">
                                        <p className="feature-text g_text">
                                        Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                        <span className="text-white">
                                        lightest Pro models ever.
                                        </span>
                                        You'll notice the difference the moment you pick one up.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}