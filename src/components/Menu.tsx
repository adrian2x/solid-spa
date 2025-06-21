export function Menu({ horizontal, xs, sm, md, lg, xl, ...props }) {
  return (
    <ul
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
    </ul>
  )
}

export function Item({ disabled, title, active, ...props }) {
  return (
    <li
      {...props}
      classList={{
        ...props.classList,
        'menu-disabled': disabled,
        'menu-title': title,
        'menu-active': active
      }}>
      {props.children}
    </li>
  )
}
