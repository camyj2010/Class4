import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { MeshReflectorMaterial} from '@react-three/drei'
import Box from './Box'
import Floor from './Floor'
import useRef from 'react'
import { useTexture } from "@react-three/drei";
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper,HemisphereLightHelper,PointLightHelper, RectAreaLight ,SpotLightHelper } from 'three';


export default function Experience() {
   
    //const directionalLightRef={useRef}
    //useHelper(directionalLightRef, DirectionalLightHelper, 1)

    // const hemisphereLightRef={useRef}
    // useHelper(hemisphereLightRef, HemisphereLight, 1)

    // const pointLightRef={useRef}
    // useHelper(pointLightRef, PointLightHelper, 1)

    // const rectAreaLightRef={useRef}
    // useHelper(rectAreaLightRef, RectAreaLight, 1)
    const spotLightRef={useRef}
    useHelper(spotLightRef, SpotLightHelper, 1)
    
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/*<directionalLight ref={directionalLightRef} position={[1, 1, -4]} intensity={2.0} castShadow/>*/}
        
        {/* <hemisphereLight ref={hemisphereLightRef} position={[1, 1, -4]} intensity={2.0} castShadow/> */}

        {/* <pointLight ref={pointLightRef} position={[ 50, 50, 50]} intensity={2.0} castShadow/> */}

        {/* <rectAreaLight ref={rectAreaLightRef} position={[1, 1, -4]} intensity={1.0} castShadow penumbra={1} /> */}

        <spotLight ref={spotLightRef} position={[ 0,3,-3]} intensity={1.0} castShadow angle={Math.PI/8} decay={0.01} />

        <ambientLight intensity={0.5}castShadow />
        <Box/>
        <Floor/>
        
    </>
}