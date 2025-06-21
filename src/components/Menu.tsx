import type { JSX } from 'solid-js'

export function Menu({
  horizontal,
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}: {
  horizontal?: boolean
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  class?: string
  classList?: Record<string, boolean>
} & JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      class={['not-prose menu bg-base-200 rounded-box', props.class || ''].join(' ')}
      classList={{
        ...props.classList,
        'menu-horizontal': horizontal,
        'menu-xs': xs,
        'menu-sm': sm,
        'menu-lg': lg,
        'menu-xl': xl,
        'menu-md': md
      }}>
      {props.children}
    </div>
  )
}

export function MenuItem({
  disabled,
  title,
  active,
  ...props
}: {
  disabled?: boolean
  title?: boolean
  active?: boolean
} & JSX.HTMLAttributes<HTMLLIElement> & {
    class?: string
    classList?: Record<string, boolean>
  }) {
  return (
    <li
      {...props}
      classList={{
        ...props.classList,
        'menu-disabled': disabled,
        'menu-title': title,
        'menu-active': active,
        'min-h-[40px]': true
      }}>
      {props.children}
    </li>
  )
}
