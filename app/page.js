'use client'
import Image from 'next/image'
import Link from "next/link";

import {Canvas} from "@react-three/fiber"
import {Cloud} from "@react-three/drei"


export default function Home() {
  return (
    <div className={'w-full'}>
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

        <div className={'absolute right-5 top-5 space-y-2'}>
            <div><a href=''><img src='icons_black/Gmail_black.png' width={20} height={20}/></a></div>
            <div><a href='https://github.com/dauren2210'><img src='icons_black/Github_black.png' width={20} height={20}/></a></div>
            <div><a href='https://www.linkedin.com/in/dtursynbek22/'><img src='icons_black/LinkedIN_black.png' width={20} height={20}/></a></div>
        </div>

      </div>


  )
}

