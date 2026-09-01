import { useState, useEffect } from "react"
import Loading from "../components/Loading"
function Contact() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000)

        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            {/* {isLoading ? (<Loading image="/images/contact-cat2.gif" />) : (
                <p>Contact Me</p>
            )} */}
        </>
    )
}

export default Contact