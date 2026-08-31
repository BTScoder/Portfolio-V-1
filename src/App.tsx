import { useState } from "react"
import FolderComp from "./components/Folder"
import { Folder } from "lucide-react"
import { motion } from "framer-motion"
import Modal from "./components/Modal"
function App() {
  const folders = [
    { id: 1, title: "About", tab: "about", classes: "absolute bottom-20 right-7" },
    { id: 2, title: "Stack", tab: "stack", classes: "absolute bottom-1/2 left-7" },
    { id: 3, title: "Projects", tab: "projects", classes: "absolute bottom-50 left-3" },
    { id: 4, title: "Experiences", tab: "experiences", classes: "absolute bottom-2 right-7" },
    { id: 5, title: "Education", tab: "education", classes: "absolute bottom-2 left-7" },
    { id: 6, title: "Achievements", tab: "achievements", classes: "absolute bottom-10 left-40" },
    { id: 7, title: "Contact", tab: "contact", classes: "absolute bottom-50 right-7" },
  ]

  const [activeTab, setActiveTab] = useState("about")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <>
      {isOpen && <Modal isOpen={isOpen} selectedId={selectedId} setIsOpen={setIsOpen} activeTab={activeTab} />}

      <main className="relative h-screen overflow-hidden bg-[#f3f3f3]">
        <div className="grid-background relative top-0 z-10 h-70 w-full lg:static" />

        <section className="absolute inset-0 z-10 h-screen w-full lg:grid lg:grid-cols-[620px_minmax(0,1fr)]">
          <div className="hidden h-full grid-cols-2 py-10 px-10 lg:grid">
            {folders.map(({ id, title, tab }) => (
              <motion.div key={`folder-${id}`} className=""
                // layoutId="modal"
                layoutId={`folder-${id}`}
              >
                <Folder
                  className="folder-icon h-12 w-12 lg:h-15 lg:w-15"
                  strokeWidth={2.2}
                  fill="black"
                  onClick={() => {
                    setIsOpen(true)
                    setActiveTab(tab)
                    setSelectedId(id)
                  }}
                />
                <p className="folder-label">{title}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center pt-20 lg:absolute lg:right-0 lg:top-0">
            <div className="space-y-4">
              <h1 className="text-6xl">푸트폴리오</h1>
              <p className="text-end text-sm font-uppercase">[Puurtfolio]</p>
            </div>
            <img src="/images/catt.svg" alt="A cute cat" className="h-100 w-100 lg:h-170 lg:w-170" />
          </div>

          <div className="block h-full w-full p-3 lg:hidden">
            {folders.map(({ title, classes, tab }) => (
              <FolderComp
                key={title}
                title={title}
                classes={classes}
                tab={tab}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
