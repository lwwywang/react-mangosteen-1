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
    w?: string
    h?: string
    bg?: string
    rounded?: string
    fixed?: boolean
  }
<<<<<<< HEAD
=======
  interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    w?: string
    h?: string
  }
>>>>>>> 9987b62 (deploy)
}
