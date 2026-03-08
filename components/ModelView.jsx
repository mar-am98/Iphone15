import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Iphone from './IPhone.jsx';
import Lights from "./Lights.jsx";
import { Suspense } from "react";
import Loader from "./Loader.jsx";
export default function ModelView({index,gsapType,size,item}){
    return (
        <View 
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
        >

            <PerspectiveCamera makeDefault position={[0,0,4]}/>

            {/* lights */}
            <ambientLight intensity={1} />
            <Lights />
            <OrbitControls  makeDefault enableZoom={false} rotateSpeed={0.5}/>
            
            <Suspense fallback={<Loader />}>
                <Iphone 
                scale={index === 1 ? [15,15,15] : [17,17,17]}
                item={item}
               
                />
            </Suspense>
            

        </View>    
    )
}