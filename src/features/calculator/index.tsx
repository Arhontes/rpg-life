import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import blackhole from '../../assets/pngwing.com.png'

import s from './style.module.css'
const SomeSvg = () => {
    const icon = {
        hidden: {
            pathLength: 0,
            fill: 'rgba(255, 255, 255, 0)',
        },
        visible: {
            pathLength: 1,
            fill: 'rgba(255, 255, 255, 1)',
        },
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                initial="hidden"
                animate="visible"
            />
        </svg>
    )
}

export const CircleButton = () => {
    const [isClicked, setIsClicked] = useState(false)

    const handleCircleClick = () => {
        setIsClicked(!isClicked)
    }

    const centerItemSize = 120
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                background: '#202124',
            }}
        >
            <div
                onClick={handleCircleClick}
                className={s.justRotate}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        zIndex: 9999,
                        width: 1,
                        height: 1,
                        borderRadius: '50%',
                        cursor: 'pointer',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.img
                        className={s.rotate}
                        src={blackhole}
                        style={{
                            zIndex: 9999,
                            width: 200,
                            height: 200,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                        }}
                    />

                    <AnimatePresence>
                        {isClicked && (
                            <>
                                <motion.div
                                    initial={{ opacity: 1, x: 0, zIndex: 0 }}
                                    animate={{ opacity: 1, x: isClicked ? centerItemSize : 0 }}
                                    exit={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{
                                        zIndex: 0,
                                        scale: 0.8,
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <h1>А</h1>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 1, x: 0, zIndex: 0 }}
                                    animate={{ opacity: 1, x: isClicked ? -centerItemSize : 0 }}
                                    exit={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{
                                        zIndex: 0,
                                        scale: 0.8,

                                        borderRadius: '50%',

                                        position: 'absolute',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <h1>Я</h1>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 1, x: 0, y: 0, zIndex: 0 }}
                                    animate={{ opacity: 1, y: isClicked ? centerItemSize : 0 }}
                                    exit={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{
                                        zIndex: 0,
                                        scale: 0.8,

                                        borderRadius: '50%',
                                        position: 'absolute',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <h1>Д</h1>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 1, x: 0, y: 0, zIndex: 0 }}
                                    animate={{ opacity: 1, y: isClicked ? -centerItemSize : 0 }}
                                    exit={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{
                                        zIndex: 0,
                                        scale: 0.8,

                                        borderRadius: '50%',
                                        position: 'absolute',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <h1>Н</h1>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
// <AnimatePresence>
//     {isClicked && (
//         <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0, x: 100 }}
//             exit={{ opacity: 0, y: 100 }}
//             transition={{ duration: 1 }}
//             style={{
//                 width: 100,
//                 height: 100,
//                 borderRadius: '50%',
//                 backgroundColor: 'blue',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//             }}
//         />
//     )}
// </AnimatePresence>
