
import { heroVideo,smallHeroVideo } from "../src/utils"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Hero(){

    useGSAP(()=>{
        gsap.to("#hero",0.3, {
            opacity : 1,
            delay: 2
        });
        
        gsap.to("#call_to_action",1, {
            opacity : 1,
            delay: 2,
            y:-40
        });

    },[])

    return (
        <section className="w-full relative bg-black nav-height">

            <div className="iphone flex-center h-5/6 flex-col ">
                <p id="hero" className="hero-title">
                    Iphone Pro 15
                </p>
                <div className="w-9/12">
                    <video 
                    src={heroVideo}
                     muted
                     autoPlay
                     key={heroVideo}
                      >
                    </video>
                </div>
            </div>
            <div id="call_to_action" className="flex flex-col items-center opacity-0">
                <a href="#" className="btn">
                    Buy
                </a>
                <p className="font-normal text-lg">
                From $799 or $33.29/mo. for 24 mo.1
                </p>
            </div>

        </section>
    )
}