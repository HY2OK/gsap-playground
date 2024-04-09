import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ButtonToggle = () => {
  const container = useRef<HTMLElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  const toggleTimeline = () => {
    if (tl.current) {
      tl.current.reversed(!tl.current.reversed())
    }
  }

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('#box') as HTMLElement[]
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 150, rotation: 360 })
        .to(boxes[1], { x: -150, y: -52, rotation: -360 }, '<')
        .to(boxes[2], { y: -104 })
        .reverse()
    },
    { scope: container },
  )

  return (
    <div className="text-black h-full">
      <section
        ref={container}
        className="h-full flex flex-col items-center gap-3
      "
      >
        <h2 className="text-2xl font-bold my-20">Use the button to toggle a Timeline</h2>
        <div className="w-36 h-10 flex justify-center items-center border-black border-2 rounded-md">
          <button onClick={() => toggleTimeline()}>Toggle Timeline</button>
        </div>
        <div
          id="box"
          className="w-36 h-10 flex justify-center items-center bg-slate-600 text-white rounded-md"
        >
          Box 1
        </div>
        <div
          id="box"
          className="w-36 h-10 flex justify-center items-center bg-slate-600 text-white rounded-md"
        >
          Box 2
        </div>
        <div
          id="box"
          className="w-36 h-10 flex justify-center items-center bg-slate-600 text-white rounded-md"
        >
          Box 3
        </div>
      </section>
    </div>
  )
}

export default ButtonToggle
