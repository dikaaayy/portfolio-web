import { useParallax } from 'react-scroll-parallax'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'

export default function Spin() {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotate: [0, 360],
  // })
  return (
    <div className="vertical-center relative mx-auto h-48 w-48 animate-spinner select-none justify-center gap-1 rounded-full border-2 border-black border-opacity-10 dark:border-inherit md:h-60 md:w-60 lg:h-72 lg:w-72">
      <SiReact size={100} className="text-[#61DBFB]" />
      <div className="absolute -top-8 rounded-full p-2 text-3xl text-white dark:text-black sm:bg-customLight-darkGray dark:sm:bg-white lg:p-3">
        <SiNextdotjs size={50} />
      </div>
      <div className="absolute -bottom-8 rounded-full p-2 text-3xl sm:bg-customLight-darkGray dark:sm:bg-white lg:p-3">
        <SiTailwindcss size={50} className="text-[#40beb2]" />
      </div>
      <div className="absolute -left-8 rounded-full p-2 text-3xl sm:bg-customLight-darkGray dark:sm:bg-white lg:p-3">
        <SiHtml5 size={50} className="text-[#FC5800]" />
      </div>
      <div className="absolute -right-8 rounded-full p-2 text-3xl sm:bg-customLight-darkGray dark:sm:bg-white lg:p-3">
        <SiCss3 size={50} className="text-[#2965F1]" />
      </div>
    </div>
  )
}
