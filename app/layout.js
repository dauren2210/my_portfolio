'use client'
import './globals.css'

import {Canvas, useFrame} from "@react-three/fiber"
import {Cloud, OrbitControls, PerspectiveCamera, SoftShadows, Sparkles} from "@react-three/drei"
import {useRef} from "react";
import * as THREE from "three";

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`flex h-full w-full flex-col justify-between`}>

          <div className={`flex h-screen p-5`}>

            <div className={`flex relative w-full h-full border`}>

                   <div className={`flex w-full`}>
                       <Canvas>
                        <PerspectiveCamera makeDefault fov={75} position={[-1,1,2]} />
                        <ambientLight />
                           <directionalLight castShadow position={[2.5,8,5]}></directionalLight>
                        {/*<pointLight color="#00b3ff" intensity={3} position={[0.2,6, 6]} />*/}
                        {/*   <SoftShadows />*/}
                        <Plane />
                        <Sparkles count={200} speed={0.2} color="#000000" size={0.5} scale={6}/>
                        {/*<OrbitControls />*/}
                    </Canvas>

                   </div>
                <div className={'absolute h-full w-full p-5'}>
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
            color: "#aaaaaa",
            // map: landscape,
            displacementMap: height,
            displacementScale: 1.69,
            alphaMap: alpha,
            transparent: true,
            depthTest: false,
            wireframe: false
        }
    );
    const mesh = new THREE.Mesh( geometry, material );

    const meshRef = useRef();
    useFrame(() => {{
        // meshRef.current.rotation.z -= 0.001
        meshRef.current.rotation.x -= 0
        meshRef.current.rotation.y -= 0
        meshRef.current.rotation.z -= 0.0005
    }})



    return (
        <mesh rotation={new THREE.Euler(-1, -0.5, 0)} ref={meshRef}>

                <primitive object={mesh} />

        </mesh>
    )
}