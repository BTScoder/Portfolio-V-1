import { useState } from "react"
import Box3D from '../components/Box'
import { motion, AnimatePresence } from "framer-motion";
import StackContent from "../components/StackContent";

function TechStack() {
    const [isLoadingDone, setIsLoadingDone] = useState(false);

    return (
        <section className='h-full w-full flex items-center justify-center'>
            <AnimatePresence mode="wait">
                {!isLoadingDone ? (
                    <>
                        <Box3D setIsLoadingDone={setIsLoadingDone} />

                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full"
                    >
                        <StackContent />
                    </motion.div>
                )}

            </AnimatePresence>

        </section>
    )
}

export default TechStack