import { useRef, useEffect } from 'react';
import { useOnScreen } from './useOnScreen';

export const useSection = (section, setSection) => {

  const ref = useRef()
  const isIntersecting = useOnScreen(ref)

  useEffect(() => {

    if (isIntersecting) {
      setSection(`#${section}`)
    }

  },[isIntersecting])

  return { ref }
}
