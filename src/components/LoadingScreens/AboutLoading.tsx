import { motion } from "framer-motion"
function AboutLoading() {
    const container = {
        hidden: {},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.7,
                delayChildren: 0.1,
            },
        },
    }
    const childVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }
    return (
        <motion.section className=" h-full w-full flex items-center justify-center relative"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="absolute top-40 left-30 lg:left-1/3 lg:top-30 lg:h-27 lg:w-27 h-15 w-15 space-y-5"
                variants={childVariants}
            >
                <p className="text-sm">Chidinma</p>
                <img src="/images/arrow.svg" alt="arrow" className="-rotate-100" />

            </motion.div>
            <motion.div className="absolute top-40 right-30 lg:top-30 lg:right-60 lg:h-27 lg:w-27 h-15 w-15  space-y-5"
                variants={childVariants}
            >
                <p className="text-sm">Aspiring Full Stack</p>
                <img src="/images/arrow.svg" alt="arrow" className="-rotate-48" />
            </motion.div>
            <motion.div className="absolute top-1/2 right-10 h-13 w-13 lg:top-1/3 lg:right-36 lg:h-27 lg:w-27 space-y-5"
                variants={childVariants}
            >
                <p className="text-end text-sm">Kdrama & Anime Lover</p>
                <img src="/images/arrow.svg" alt="arrow" className="-rotate-300" />
            </motion.div>
            <motion.div className="absolute top-70 left-10 lg:left-50 lg:top-70 lg:h-27 lg:w-27 h-13 w-13 space-y-5"
                variants={childVariants}
            >
                <img src="/images/arrow.svg" alt="arrow" className="-rotate-140 lg:-rotate-190" />
                <p className="text-xs">Prefers Dogs but Cats are cuter</p>
            </motion.div>
            <motion.div className="absolute bottom-50 left-30 lg:bottom-40 lg:left-1/3 lg:h-27 lg:w-27 h-14 w-14 space-y-5"
                variants={childVariants}
            >
                <img src="/images/arrow.svg" alt="arrow" className="-rotate-200" />
                <p className="text-sm">Markiplier Fan</p>
            </motion.div>
            <motion.div className="absolute bottom-50 right-30 lg:right-1/3 lg:bottom-40 lg:h-27 lg:w-27 h-14 w-14 space-y-5 "
                variants={childVariants}
            >
                <img src="/images/arrow.svg" alt="arrow" className="-rotate-260" />
                <p className=" text-end text-sm">She/Her</p>
            </motion.div>
            <motion.p className="font-heading text-7xl lg:text-[100px]"
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 0.5, delay: 2 }}
                variants={childVariants}
            >Me</motion.p>

        </motion.section>
    )
}

export default AboutLoading