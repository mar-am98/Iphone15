import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";

import {models,sizes} from '../src/constants/index.js'
import ModelView from "./ModelView.jsx";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { useEffect, useState } from "react";
import  {yellowImg}  from "../src/utils/index.js";

export default function Model(){

    const [size,setSize] = useState("small");
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
      });
   

   //animate the iphone title 
    useGSAP(()=>{
        gsap.to("#iphone_header",{
            y:0,
            opacity:1
        })
    });


    const tl = gsap.timeline();
    
    useEffect(()=>{
        console.log(size);
        if(size === 'large'){
            tl.to('#view1',1,{
                transform:'translateX(-100%)',
                ease: 'power2.inOut',
                rotationZ:40,
                
            })
            tl.to('#view2',1, {
                transform:'translateX(-100%)',
                ease: 'power2.inOut',
                rotationZ:0,
                

            });
        }

        if(size === 'small'){
            tl.to('#view2',1,{
                transform:'translateX(0)',
                rotationZ:40,
                ease: 'power2.inOut'

            },"<")
            tl.to('#view1',1, {
                transform:'translateX(0)',
                rotationZ:-40,
                ease: 'power2.inOut',
                
            },"<")
        }

       

        

    },[size]);

    return (
        <>
            <section className="common-padding">
                    <div className="screen-max-width">
                        <h1 id="iphone_header" className="section-heading"> Take a Closer Look</h1>

                        <div className="flex flex-col items-center mt-5">
                            <div className="w-full h-[75vh] overflow-hidden relative">
                               {/* <ModelView /> */}
                               
                               <ModelView
                                index={1}
                                gsapType='view1'
                                size={size}
                                item={model}
                               />

                               <ModelView
                               index={2} 
                               gsapType='view2'
                               size={size}
                               item={model}
                               /> 
                               

                               <Canvas
                               className="w-full h-full"
                               eventSource={document.getElementById("root")}
                                style={{
                                    position:"fixed",
                                    top:0,
                                    left:0,
                                    right:0,
                                    bottom:0,
                                     overflow:'hidden',
                                     pointerEvents: 'none'
                                 }}
                               >
                                    <View.Port />
                               </Canvas>
                            </div>

                            <div className="mx-auto w-full">
                               <p className="text-sm font-light text-center mb-6">
                                {model.title}
                               </p>

                               <div className="flex-center">
                                    <ul className="color-container">
                                       {
                                        models.map((item,index)=>(
                                            <li key={index} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{backgroundColor:item.color[0]}} onClick={() => setModel(item)}/>
                                                
                                        ))
                                       }
                                    </ul>

                                    <button className="size-btn-container">
                                       {
                                        sizes.map((item,index)=>(
                                            <span key={index} className="size-btn" style={{
                                                backgroundColor: item.value === size ? "white" : "black" ,
                                                color: item.value === size ? "black" : "white"
                                                }} 

                                                onClick={()=>setSize(item.value)}
                                                
                                                >
                                               {item.label}
                                            </span>
                                        ))
                                       }
                                    </button>
                               </div>
                            </div>    
                        </div>       
                        
                    </div>
            </section>
        </>
    )
}