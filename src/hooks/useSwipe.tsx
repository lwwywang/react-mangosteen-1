import { useEffect, useState } from 'react'

const useSwipe = (element: HTMLElement | null) => {
    const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
    const onTouchstart = (e: TouchEvent) => { }
    const onTouchmove = (e: TouchEvent) => { }
    const onTouchend = (e: TouchEvent) => { }
    useEffect(() => {
        if (!element) { return }
        element.addEventListener('touchstart', onTouchstart)
        element.addEventListener('touchmove', onTouchmove)
        element.addEventListener('touchend', onTouchend)
        return () => {
            if (!element) { return }
            element.removeEventListener('touchstart', onTouchstart)
            element.removeEventListener('touchmove', onTouchmove)
            element.removeEventListener('touchend', onTouchend)
        }
    }, [])

    return { direction }
}
