'use client'
import Image from 'next/image'
import Link from "next/link";

import {Canvas} from "@react-three/fiber"
import {Cloud} from "@react-three/drei"


export default function Home() {
  return (
    <div className={'grow'}>
        {/*<div className={'flex grow min-h-screen'}>*/}
        {/*      <Canvas>*/}
        {/*           <Cloud*/}
        {/*               texture={"app/cloud.png"}*/}
        {/*              opacity={0.1}*/}
        {/*              speed={0.2} // Rotation speed*/}
        {/*              width={10} // Width of the full cloud*/}
        {/*              depth={0} // Z-dir depth*/}
        {/*              segments={5} // Number of particles*/}
        {/*            />*/}
        {/*       </Canvas>*/}
        {/*  </div>*/}
          <p className={`text-5xl font-thin`}>
              Dauren Tursynbek
          </p>
          <p className={`text font-light`}>
              Math student
          </p>
          <div className={`grid grid-cols-1 justify-items-start gap-2 pt-7`}>
                  <Link  href='/about'>
                      <p className={`text-s font-semibold`}>
                          About me
                      </p>
                  </Link>
                  <Link href='/education'>
                      <p className={`text-s font-semibold`}>
                          Education
                      </p>
                  </Link>
                  <Link href='/courses'>
                      <p className={`text-s font-semibold`}>
                          Courses
                      </p>
                  </Link>
                  <Link href='/projects'>
                      <p className={`text-s font-semibold`}>
                          Projects
                      </p>
                  </Link>

                  <Link href='/contact'>
                      <p className={`text-s font-semibold`}>
                          Contact
                      </p>
                  </Link>
        </div>


      </div>


  )
}

