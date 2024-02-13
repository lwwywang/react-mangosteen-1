import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [, setExtraStyle] = useState({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      setExtraStyle({ position: 'relative' })
    }
  })
  return transitions((style, pathname) =>
    <animated.div key={pathname} style={style}>
      {map.current[pathname]}
    </animated.div>
  )
}

