import CalculateIcon from '@mui/icons-material/Calculate'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import EditNoteIcon from '@mui/icons-material/EditNote'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './style.module.scss'

export const CircleButton = () => {
    const [isClicked, setIsClicked] = useState(false)

    const handleCircleClick = () => {
        setIsClicked(!isClicked)
    }

    const centerItemSize = 120
    const navigate = useNavigate()
    const go = (to: string) => {
        navigate(to)
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                background: '#f7f7f7',
            }}
        >
            <div
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
                    <div
                        onClick={handleCircleClick}
                        className={cn(s.startButton, { [s.clicked]: isClicked })}
                    >
                        <CatchingPokemonIcon />
                    </div>

                    <AnimatePresence>
                        {isClicked && (
                            <>
                                <motion.div
                                    onClick={() => go('/calculator')}
                                    initial={{ opacity: 0, x: 0, zIndex: 0 }}
                                    animate={{ opacity: 1, x: isClicked ? centerItemSize : 0 }}
                                    exit={{ opacity: 0, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={cn(s.menuItem)}
                                >
                                    <div>
                                        <CalculateIcon />
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 0, zIndex: 0 }}
                                    animate={{ opacity: 1, x: isClicked ? -centerItemSize : 0 }}
                                    exit={{ opacity: 0, x: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className={cn(s.menuItem)}
                                >
                                    <div>
                                        <EditNoteIcon />
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 0, y: 0, zIndex: 0 }}
                                    animate={{ opacity: 1, y: isClicked ? centerItemSize : 0 }}
                                    exit={{ opacity: 0, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={cn(s.menuItem)}
                                >
                                    <div>
                                        <FormatListNumberedIcon />
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 0, y: 0, zIndex: 0 }}
                                    animate={{ opacity: 1, y: isClicked ? -centerItemSize : 0 }}
                                    exit={{ opacity: 0, y: 0 }}
                                    transition={{ duration: 0.9 }}
                                    className={cn(s.menuItem)}
                                >
                                    <div>
                                        <LocalLibraryIcon />
                                    </div>
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
