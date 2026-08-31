import { Folder } from "lucide-react"

interface FolderProps {
    title: string,
    classes: string
}

function FolderComp({ title, classes }: FolderProps) {
    return (
        <div className={`${classes} folder-item`}>
            <Folder className="folder-icon lg:h-15 lg:w-15 h-12 w-12" strokeWidth={2.2} fill="black" />
            <p className="folder-label">{title}</p>
        </div>
    )
}

export default FolderComp