'use client'
import './globals.css'

import {Canvas, useFrame} from "@react-three/fiber"
import {Cloud, OrbitControls, PerspectiveCamera, Sparkles} from "@react-three/drei"
import {useRef} from "react";
import * as THREE from "three";

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`flex min-h-screen flex-col justify-between bg-black`}>

          <div className={`flex min-h-screen p-7`}>

            <div className={`flex grow border border-black`}>

                   <div className={`flex grow`}>

                       {/*<Canvas>*/}
                       {/*    <Cloud*/}
                       {/*        texture={"public/cloud.png"}*/}
                       {/*       opacity={0.06}*/}
                       {/*       speed={0.24} // Rotation speed*/}
                       {/*       width={10} // Width of the full cloud*/}
                       {/*       depth={0} // Z-dir depth*/}
                       {/*       segments={7} // Number of particles*/}
                       {/*     />*/}
                       {/*</Canvas>*/}
                       <Canvas>
                        <PerspectiveCamera makeDefault fov={75} position={[0,2,3]} />
                        <ambientLight />
                        <pointLight color="#00b3ff" intensity={3} position={[0.2,6, 6]} />
                        <Plane />
                        <Sparkles count={100} speed={0.1} color="#008080" size={0.5} scale={5}/>
                        <OrbitControls />
                    </Canvas>

                   </div>
                <div className={'absolute p-7'}>
                    {children}
                </div>

            </div>
          </div>
        </div>
      </body>
    </html>
  )
}


function Plane() {
    const loader = new THREE.TextureLoader();
    const height = loader.load('sc_bw.png')
    // const landscape = loader.load('sc_landscape.png')
    const landscape = loader.load('custom_landscape.jpg')
    const alpha = loader.load('alpha_map_v3.png')
    const geometry = new THREE.PlaneGeometry(15,10,128,128);
    const material = new THREE.MeshStandardMaterial(
        {
            color: "#008080",
            // map: landscape,
            displacementMap: height,
            displacementScale: 1.7,
            alphaMap: alpha,
            transparent: true,
            depthTest: false,
            wireframe: true
        }
    );
    const mesh = new THREE.Mesh( geometry, material );

    const meshRef = useRef();
    useFrame(() => {{
        meshRef.current.rotation.z -= 0.0005
    }})



    return (
        <mesh rotation={new THREE.Euler(-1.5, 0, -0.9)} ref={meshRef}>

                <primitive object={mesh} />

        </mesh>
    )
}