'use client'
import './globals.css'

import {Canvas} from "@react-three/fiber"
import {Cloud} from "@react-three/drei"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`flex min-h-screen flex-col justify-between bg-amber-50`}>

          <div className={`flex min-h-screen p-7`}>

            <div className={`flex grow border border-zinc-500`}>

                   <div className={`flex grow`}>

                       <Canvas>
                           <Cloud
                               texture={"app/cloud.png"}
                              opacity={0.06}
                              speed={0.24} // Rotation speed
                              width={10} // Width of the full cloud
                              depth={0} // Z-dir depth
                              segments={7} // Number of particles
                            />
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
