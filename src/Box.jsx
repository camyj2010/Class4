import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";
export default function Box() {
    const PATH = "/static/textures/water2/"
    const props = useTexture({
        map: PATH + 'color.jpg',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'occ.jpg',
        
    })

    
    return (
        <mesh  rotation-x={ - Math.PI * 0.5 } scale={ 2}castShadow >
           <boxGeometry />
           <meshStandardMaterial {...props} side={DoubleSide} />
       </mesh>
    )
}