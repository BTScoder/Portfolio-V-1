import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AboutContent from "../components/AboutContent"
function About({ activeTab }: { activeTab: string }) {
    const [isLoadingDone, setIsLoadingDone] = useState(false)

    const container = {
        hidden: {
            // x: "100%"
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.5
            }
        },
        exit: {
            x: "-100%",
            transition: { duration: 0.6, ease: "easeInOut" as const }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }


    const contentVariants = {
        hidden: {
            // x: "100%" 
        }, // start off screen right
        visible: {
            x: 0,
            transition: { duration: 0.6, ease: "easeInOut" as const } // slight delay so it "follows"
        }
    }
    return (
        <>
            <AnimatePresence mode="wait">
                {!isLoadingDone ? (
                    <motion.section className=" h-full w-full flex items-center justify-center relative"
                        key="loader"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onAnimationComplete={(definition) => {
                            if (definition === "visible") {
                                setIsLoadingDone(true)
                            }
                        }}
                    >
                        <motion.div className="absolute top-40 left-30 lg:left-1/3 lg:top-30 lg:h-27 lg:w-27 h-15 w-15 space-y-5"
                            variants={item}
                        >
                            <p className="text-sm">Chidinma</p>
                            <img src="/images/arrow.svg" alt="arrow" className="-rotate-100" />

                        </motion.div>
                        <motion.div className="absolute top-40 right-30 lg:top-30 lg:right-60 lg:h-27 lg:w-27 h-15 w-15  space-y-5"
                            variants={item}
                        >
                            <p className="text-sm">Aspiring Full Stack</p>
                            <img src="/images/arrow.svg" alt="arrow" className="-rotate-48" />
                        </motion.div>
                        <motion.div className="absolute top-1/2 right-10 h-13 w-13 lg:top-1/3 lg:right-36 lg:h-27 lg:w-27 space-y-5"
                            variants={item}
                        >
                            <p className="text-end text-sm">Kdrama & Anime Lover</p>
                            <img src="/images/arrow.svg" alt="arrow" className="-rotate-300" />
                        </motion.div>
                        <motion.div className="absolute top-70 left-10 lg:left-50 lg:top-70 lg:h-27 lg:w-27 h-13 w-13 space-y-5"
                            variants={item}
                        >
                            <img src="/images/arrow.svg" alt="arrow" className="-rotate-140 lg:-rotate-190" />
                            <p className="text-xs">Prefers Dogs but Cats are cuter</p>
                        </motion.div>
                        <motion.div className="absolute bottom-50 left-30 lg:bottom-40 lg:left-1/3 lg:h-27 lg:w-27 h-14 w-14 space-y-5"
                            variants={item}
                        >
                            <img src="/images/arrow.svg" alt="arrow" className="-rotate-200" />
                            <p className="text-sm">Markiplier Fan</p>
                        </motion.div>
                        <motion.div className="absolute bottom-50 right-30 lg:right-1/3 lg:bottom-40 lg:h-27 lg:w-27 h-14 w-14 space-y-5 "
                            variants={item}
                        >
                            <img src="/images/arrow.svg" alt="arrow" className="-rotate-260" />
                            <p className=" text-end text-sm">She/Her</p>
                        </motion.div>
                        <motion.p className="font-heading text-7xl lg:text-[100px]"
                            variants={item}
                        >Me</motion.p>

                    </motion.section>
                ) : (
                    <motion.div
                        key="content"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <AboutContent />

                    </motion.div>
                )}

            </AnimatePresence>
        </>
    )
}

export default About