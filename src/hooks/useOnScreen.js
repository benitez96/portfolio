import {useEffect, useState} from "react"

export function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => {
      // console.log(entry.target)
      setIntersecting(entry.isIntersecting)
    }, { rootMargin: "0px 0px -25px 0px" }
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}
