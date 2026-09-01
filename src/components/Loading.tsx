import AboutLoading from "./LoadingScreens/AboutLoading";


function Loading({ image, activeTab }: { image?: string; activeTab: string }) {
    // const loadingImages = [
    //     {
    //         title: "About",
    //         image: "/images/cat-gif.gif"
    //     },
    //     {
    //         title: "Stack",
    //         image: "/images/cat-gif.gif"
    //     },
    //     {
    //         title: "Projects",
    //         image: "/images/cat-gif.gif"
    //     },
    //     {
    //         title: "Experiences",
    //         image: "/images/cat-gif.gif"
    //     },
    //     {
    //         title: "Education",
    //         image: "/images/cat-gif.gif"
    //     },
    //     {
    //         title: "Achievements",
    //         image: "/images/cat-gif.gif"
    //     },
    //     {
    //         title: "Contact",
    //         image: "/images/contact-cat2.gif"
    //     }
    // ]
    return (
        <div className="h-full w-full flex items-center justify-center ">
            {activeTab && (<AboutLoading />)}
            {/* <img src={image || "/images/cat-gif.gif"} alt="loading-cat" className="h-100 w-100 " /> */}
        </div>
    )
}

export default Loading