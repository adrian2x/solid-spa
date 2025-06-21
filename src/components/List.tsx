export function ListTitle({ ...props }) {
  return <li class='p-4 pb-2 text-xs opacity-60 tracking-wide'>{props.children}</li>
}

export function ListItem({ ...props }) {
  return <li class={['list-row', props.class || ''].join(' ')}>{props.children}</li>
}

export function List({ ...props }) {
  return (
    <ul class={['not-prose list bg-base-100 rounded-box shadow-md', props.class || ''].join(' ')}>
      {props.children}
    </ul>
  )
}
