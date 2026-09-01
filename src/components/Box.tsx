import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // optional but makes it easy

export default function Box3D() {
    const size = 150; // px
    const [isLoadingDone, setIsLoadingDone] = useState(false);
    const container = {
        hidden: {},
        visible: {
            rotateX: 360,
            rotateY: 360,
            transition: {
                duration: 5,
                // repeat: Infinity,
                ease: "linear" as const,
                staggerChildren: 0.7
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <AnimatePresence mode="wait">
            {!isLoadingDone ? (
                <>

                    <motion.div className="scene flex items-center justify-center"

                    >
                        <motion.div
                            className="box *:font-dotted"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            onAnimationComplete={(definition) => {
                                if (definition === "visible") {
                                    setIsLoadingDone(true)
                                }
                            }}
                        >
                            <motion.div className="face front" variants={item}>S</motion.div>
                            <motion.div className="face back" variants={item}>T</motion.div>
                            <motion.div className="face right" variants={item}>A</motion.div>
                            <motion.div className="face left" variants={item}>C</motion.div>
                            <motion.div className="face top" variants={item}>K</motion.div>
                            <motion.div className="face bottom font-dotted uppercase font-bold" variants={item}>Chidinma</motion.div>
                        </motion.div>

                        <style>{`
        .scene {
          width: 200px;
          height: 200px;
          perspective: 600px; /* This is what makes it 3D */
        }
        .box {
          width: ${size}px;
          height: ${size}px;
          position: relative;
          transform-style: preserve-3d; /* Kids can be 3D too */
        }
        .face {
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: rgba(100, 100, 100, 0.8);
          border: 1px solid #eeeeee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
        }
          .bottom {
                font-size: 16px;
          }
        .front  { transform: rotateY(0deg) translateZ(${size / 2}px); }
        .back   { transform: rotateY(180deg) translateZ(${size / 2}px); }
        .right  { transform: rotateY(90deg) translateZ(${size / 2}px); }
        .left   { transform: rotateY(-90deg) translateZ(${size / 2}px); }
        .top    { transform: rotateX(90deg) translateZ(${size / 2}px); }
        .bottom { transform: rotateX(-90deg) translateZ(${size / 2}px); }
      `}</style>
                    </motion.div>
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full w-full"
                >
                    <p>New Content</p>
                </motion.div>
            )}

        </AnimatePresence>



    )
}