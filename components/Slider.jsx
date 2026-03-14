import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../src/utils"
import VideoSlider from "./VideoSlider"
export default function Slider(){

    useGSAP(()=>{
        gsap.to("#title",0.5, {
            opacity:1,
            y:0
        });
        gsap.to(".link",1, {
            opacity:1,
            y:0,
            delay:0.5,
            stagger:0.25
        })
    })


    return (
        <>
         <section className="w-screen overflow-hidden h-full common-padding bg-zinc">
                <div className="screen-max-width">
                    {/* titles */}
                    <div className="mb-12 flex justify-between items-center max-sm:flex-col">
                        <h2 id="title" className="section-heading"> Get The Highlights</h2>

                        <div className="flex flex-wrap items-end gap-5 mt-4">
                            <p className="link">
                                Watch The Film
                                <img src={watchImg} alt="watch" className="ml-2" />
                            </p>
                            <p className="link">
                                Watch The Event
                                <img src={rightImg} alt="watch" className="ml-2" />
                            </p>
                        </div>
                    </div>
                    {/* videoSlider */}
                    <VideoSlider />

                </div>
         </section>
        </>
    )
}