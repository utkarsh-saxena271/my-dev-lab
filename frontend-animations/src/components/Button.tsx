import {motion} from 'motion/react'
const Button = () => {
  return (
    <div className="bg-neutral-950 h-screen w-screen flex justify-center items-center [perspective::1000px] transform-3d"
    style={{
      backgroundImage:'radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.1) 0.5px, transparent 0)',
      backgroundSize:"8px 8px",
      backgroundRepeat:"repeat "
    }}
    >
      <motion.button 
    whileHover={{
        rotateX:20,
        rotateY:10,
        boxShadow:"0px 20px 50px rgba(8,112,184,0.7)",
    }}
    style={{
        translateZ:100
    }}
    transition={{
        duration:0.3,
        ease:"easeInOut"
    }}
    className="relative group text-neutral-400 px-12 py-5 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
        <span className='group-hover:text-cyan-500 transition-color duration-300'>Follow</span>
        <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm"></span>
    </motion.button>
    </div>
  )
}

export default Button