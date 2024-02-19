import * as React from 'react'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    flex?: boolean
    relative?: boolean
    text?: string
    grid?: boolean
    before?: string
    after?: string
    shadow?: boolean
<<<<<<< HEAD
    w?: string
    h?: string
    bg?: string
    rounded?: string
    fixed?: boolean
=======
>>>>>>> 4b5a979a776b5e130f464b0520107a95b725325e
  }
}
