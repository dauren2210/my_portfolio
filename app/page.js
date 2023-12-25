'use client'
import Image from 'next/image'
import Link from "next/link";


export default function Home() {
  return (
    <div className={'w-full h-full'}>
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

        <div className={'absolute right-5 top-5 space-y-4'}>
            <div>
                <a href=''>
                    <picture>
                        {/*<source srcset='icons_white/Gmail_white.png' media="(prefers-color-scheme: dark)" />*/}
                            <img src='icons_white/Gmail_white.png' width={20} height={20} />
                    </picture>

                </a>
            </div>
            <div>
                <a href='https://github.com/dauren2210'>
                    <picture>
                        {/*<source srcset='icons_white/Github_white.png' media="(prefers-color-scheme: dark)"/>*/}
                            <img src='icons_white/Github_white.png' width={20} height={20}/>
                    </picture>
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/dtursynbek22/'>
                    <picture>
                        {/*<source srcset='icons_white/LinkedIN_white.png' media="(prefers-color-scheme: dark)"/>*/}
                            <img src='icons_white/LinkedIN_white.png' width={20} height={20}/>
                    </picture>
                </a>
            </div>
        </div>

      </div>



  )
}

