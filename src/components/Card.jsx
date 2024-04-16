import React from 'react'
import LogoImg from '../img/logo.svg'
import NikeImg from '../img/nike.png'
import { useMotionValue, motion, useTransform } from 'framer-motion'


const Card = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [30, -30]);

    const colors = [
        { value: '#b6a179' },
        { value: '#272425' },
        { value: '#6389cb' },
        { value: '#f2c758' },
        { value: '#ffffff' }
    ]

    return (
        <>
            <div style={{ perspective: 2000 }} className='drop-shadow-2xl'>
                <motion.div
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    whileTap={{ cursor: 'grabbing' }}
                    className='w-[426px] h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
                >
                    <div className='mb-6'>
                        <img src={LogoImg} alt="Nike-logo-image" />
                    </div>
                    <div>
                        <h1 className='text-5xl mb-6 font-extrabold'>Nike Air Max Pre-Day</h1>
                    </div>
                    <div>
                        <p className='max-w=[300px] text-justify mb-6 text-black'>
                            Taking the classic look of hertiage Nike Running into new realm, the Nike Air Max Pre-Day brings you a fast-peaced look that's ready for today's world.
                        </p>
                    </div>
                    <div className='flex items-center gap-x-[20px] mb-12'>
                        <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>Add to bag</button>
                        <div className='text-[24px] font-bold text-[#000000]'>$ 495.00</div>
                    </div>
                    <ul className='flex gap-x-[12px]'>
                        {
                            colors.map((color, index) => {
                                return (
                                    <li key={index} style={{ backgroundColor: color.value }} className='w-6 h-6 rounded-full cursor-pointer'>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <motion.div
                        style={{ x, y, rotateX, rotateY, z: 100000 }}
                        className='absolute top-12 -right-64 w-[550px] mt-8 drop-shadow-2xl'
                    >
                        <img src={NikeImg} alt="Nike-shoes-image" draggable={false} />
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default Card