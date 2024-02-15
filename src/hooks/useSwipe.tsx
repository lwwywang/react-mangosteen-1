import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

interface Config {
    onTouchStart?: (e: TouchEvent) => void
    onTouchMove?: (e: TouchEvent) => void
    onTouchEnd?: (e: TouchEvent) => void
}

export const useSwipe = (elementRef: RefObject<HTMLElement>, config?: Config) => {
    const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
    const x = useRef(-1)
    const onTouchstart = (e: TouchEvent) => {
        config?.onTouchStart?.(e)
        x.current = e.touches[0].clientX
        console.log('start')
    }
    const onTouchmove = (e: TouchEvent) => {
        config?.onTouchMove?.(e)
        const newX = e.touches[0].clientX
        const d = newX - x.current
        if (Math.abs(d) < 3) {
            setDirection('')
        }
        else if (d > 0) {
            setDirection('right')
        }
        else {
            setDirection('left')
        }
        console.log('move')
    }
    const onTouchend = (e: TouchEvent) => {
        config?.onTouchEnd?.(e)
        setDirection('')
        console.log('end')
    }
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
