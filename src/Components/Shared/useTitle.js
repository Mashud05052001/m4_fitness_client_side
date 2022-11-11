import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `M4 Fitness-${title}`;
    }, [title])
}
export default useTitle;