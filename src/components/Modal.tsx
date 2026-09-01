interface ModalProps {
    activeTab: string,
    isOpen: boolean,
    selectedId: number | null,
    setIsOpen: (isOpen: boolean) => void
}
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import About from "../sections/About"
import Contact from "../sections/Contact"
import TechStack from "../sections/TechStack"




function Modal({ activeTab, isOpen, selectedId, setIsOpen }: ModalProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    return (
        <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 px-2"


            >
                <motion.div className="max-w-4xl w-full h-170 bg-white rounded-lg overflow-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-white"
                    ref={containerRef}
                    layoutId={`folder-${selectedId}`}
                >
                    <div className="w-full  ps-5 py-4 border-b border-dashed border-neutral-500 flex items-center gap-3 ">
                        <span className="inline-block h-2.5 w-2.5 bg-red-500 rounded-full"
                            onClick={() => setIsOpen(false)}
                        />
                        <span className="inline-block h-2.5 w-2.5 bg-yellow-500 rounded-full" />
                        <span className="inline-block h-2.5 w-2.5 bg-green-500 rounded-full" />
                    </div>
                    <p className="sr-only">{activeTab}</p>

                    <main className="h-full w-full">
                        {/* Conditional content */}
                        {activeTab === "about" && (<About activeTab={activeTab} />)}
                        {activeTab === "stack" && (<TechStack />)}
                        {activeTab === "contact" && (<Contact />)}
                    </main>
                </motion.div>
            </div>
        </>
    )
}

export default Modal