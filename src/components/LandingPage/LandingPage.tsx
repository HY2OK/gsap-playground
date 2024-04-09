import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const LandingPage = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from('#intro-slider', {
        xPercent: '-100',
        duration: 1.3,
        delay: 0.3,
      })
        .from(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '+=30',
          stagger: 0.5,
        })
        .to(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '-=30',
          delay: 0.3,
          stagger: 0.5,
        })
        .to('#intro-slider', {
          xPercent: '-100',
          duration: 1.3,
        })
        .from('#welcome', {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative h-full" ref={comp}>
      <div
        id="intro-slider"
        className="h-full p-10 absolute top-0 left-0 z-10 w-full flex flex-col justify-end gap-10 tracking-tighter font-ibm text-white bg-[#242424]"
      >
        <h1 className="text-8xl" id="title-1">
          Frontend developer
        </h1>
        <h1 className="text-8xl" id="title-2">
          HY2OK
        </h1>
        <h1 className="text-8xl" id="title-3">
          GSAP Playground
        </h1>
      </div>
      <div className="h-full flex justify-center items-center ">
        <h1 id="welcome" className="text-9xl font-bold text-[#242424]">
          Hello
        </h1>
      </div>
    </div>
  )
}

export default LandingPage
