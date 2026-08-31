import { Folder } from "lucide-react"

interface FolderProps {
    title: string,
    classes: string,
    tab: string,
    isOpen: boolean,
    // selectedId: number | null,
    setIsOpen: (isOpen: boolean) => void,
    setActiveTab: (tab: string) => void,
}

function FolderComp({ title, classes, tab, isOpen, setIsOpen, setActiveTab }: FolderProps) {
    return (
        <div
            className={`${classes} folder-item`}
            onClick={() => {
                if (!isOpen) setIsOpen(true)
                setActiveTab(tab)
            }}
        >
            <Folder className="folder-icon h-15 w-15" strokeWidth={2.2} fill="black" />
            <p className="folder-label">{title}</p>
        </div>
    )
}

export default FolderComp