
import { useState,useEffect,useRef } from "react";
import { hightlightsSlides } from "../src/constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function VideoSlider(){

const [videoSlider,setVideoSlide] = useState({
    videoID : 0,
    isPlaying: false,
});

const {videoID,isPlaying} = videoSlider;

const videoRef = useRef([]);
const spanRef = useRef([]);



useEffect(()=> {

    // ensure that the previous video is pused when switching to the next video

    if(videoRef.current[videoID - 1]) {
        videoRef.current[videoID - 1].pause();
    }

    // play current active Video
    if(videoRef.current[videoID]){
        videoRef.current[videoID].play();
    }
    
    // animate sliders
    const precentage = 100 * videoID;
    gsap.to("#slider", {
        x: `-${precentage}%`,
        duration:2,
        ease:"power2.easeInOut"
    });

    // animate active span
    gsap.to(spanRef.current[videoID], {
        scale:1.5,
        backgroundColor:"royalblue",
        duration:0.3,
    });

    // reset inActive span 
    hightlightsSlides.forEach((_,index)=> {
        if(index !== videoID) {
            gsap.to(spanRef.current[index],{
                scale:1,
                backgroundColor : "#e0e0e0",
                duration: 0.3
            })
        }
    })



   
},[videoID])


    
    return (
        <>
           <div className="flex items-center">
                 {
                    hightlightsSlides.map((list , index)=> (
                        <div key={list.id} id="slider" className="pr-10">
                                <div className="video-carousel_container">
                                    <div className="w-full h-full flex-center rounded-3xl overflow-hidden  bg-black">
                                        <video 
                                        id="video"
                                        src={list.video} 
                                        muted 
                                        loop
                                        ref={(e)=> (videoRef.current[index] = e)}
                                        />
                                    </div>

                                    <div className="absolute top-12 left-[5%] z-10">
                                        {list.textLists.map((txt, index)=>(
                                            <p key={index} className=" text-lg font-medium">
                                                {txt}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                        </div>
                    ))
                 }
           </div>

           <div className="relative flex-center mt-10">
                 <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                     

                     {
                        hightlightsSlides.map((_,index)=>(
                            <span 
                            key={index} 
                            className="mx-2 w-3 h-3 bg-gray-200 rounded-full cursor-pointer relative"
                            onClick={()=>setVideoSlide((prev)=>({...prev,videoID: index}))}
                            >
                                <span 
                                className="absolute h-full w-full rounded-full"
                                ref={(e)=> spanRef.current[index] = e}
                                ></span>
                            </span>
                        ))
                     }
                     
                     
                 </div>
           </div>
        </>
    )
}


/*

const [videoSlider,setVideoSlide] = useState({
    videoID : 0,
});



*/ 