import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

export const useSwipe = (elementRef: RefObject<HTMLElement>) => {
    const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
    const onTouchstart = (e: TouchEvent) => {
    }
    const onTouchmove = (e: TouchEvent) => { }
    const onTouchend = (e: TouchEvent) => { }
    useEffect(() => {
        if (!elementRef.current) { return }
        elementRef.current.addEventListener('touchstart', onTouchstart)
        elementRef.current.addEventListener('touchmove', onTouchmove)
        elementRef.current.addEventListener('touchend', onTouchend)
        return () => {
            if (!elementRef.current) { return }
            elementRef.current.removeEventListener('touchstart', onTouchstart)
            elementRef.current.removeEventListener('touchmove', onTouchmove)
            elementRef.current.removeEventListener('touchend', onTouchend)
        }
    }, [])

    return { direction }
}
