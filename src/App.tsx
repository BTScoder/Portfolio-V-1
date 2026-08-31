import FolderComp from "./components/Folder"
import { Folder } from "lucide-react"
function App() {
  return (
    <>

      <main className="relative h-screen overflow-hidden bg-[#f3f3f3]">
        <div className="grid-background relative top-0 z-10 h-70 w-full lg:static" />

        <section className="absolute inset-0 z-10 h-screen w-full lg:grid lg:grid-cols-[620px_minmax(0,1fr)]">
          <div className="hidden h-full lg:grid grid-cols-2 py-10 px-10">

            <div className="">
              <Folder className="folder-icon lg:h-15 lg:w-15 h-12 w-12" strokeWidth={2.2} fill="black" />
              <p className="folder-label">About</p>
            </div>
            <div className="">
              <Folder className="folder-icon lg:h-15 lg:w-15 h-12 w-12" strokeWidth={2.2} fill="black" />
              <p className="folder-label">Stack</p>
            </div>
            <div className="">
              <Folder className="folder-icon lg:h-15 lg:w-15 h-12 w-12" strokeWidth={2.2} fill="black" />
              <p className="folder-label">Projects</p>
            </div>
            <div className="">
              <Folder className="folder-icon lg:h-15 lg:w-15 h-12 w-12" strokeWidth={2.2} fill="black" />
              <p className="folder-label">Experiences</p>
            </div>
            <div className="">
              <Folder className="folder-icon lg:h-15 lg:w-15 h-12 w-12" strokeWidth={2.2} fill="black" />
              <p className="folder-label">Education</p>
            </div>
            <div className="">
              <Folder className="folder-icon lg:h-15 lg:w-15 h-12 w-12" strokeWidth={2.2} fill="black" />
              <p className="folder-label">Achievements</p>
            </div>
            <div className="">
              <Folder className="folder-icon lg:h-15 lg:w-15 h-12 w-12" strokeWidth={2.2} fill="black" />
              <p className="folder-label">Contact</p>
            </div>

          </div>

          <div className="flex flex-col items-center pt-20 lg:absolute lg:right-0 lg:top-0">
            <div className="space-y-4">
              <h1 className="text-6xl">푸트폴리오</h1>
              <p className="text-end text-sm font-uppercase">[Puurtfolio]</p>
            </div>
            <img src="/images/catt.svg" alt="A cute cat" className="h-100 w-100 lg:h-170 lg:w-170" />
          </div>

          <div className="block h-full w-full p-3 lg:hidden">
            <FolderComp title="About" classes="absolute bottom-20 right-7" />
            <FolderComp title="Stack" classes="absolute bottom-1/2 left-7" />
            <FolderComp title="Projects" classes="absolute bottom-50 left-3" />
            <FolderComp title="Experience" classes="absolute bottom-2 right-7" />
            <FolderComp title="Education" classes="absolute bottom-2 left-7" />
            <FolderComp title="Achievements" classes="absolute bottom-10 left-40" />
            <FolderComp title="Contact" classes="absolute bottom-50 right-7" />
          </div>
        </section>
      </main>


    </>
  )
}

export default App
