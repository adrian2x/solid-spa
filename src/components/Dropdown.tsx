import { Button } from './Button'

export function Dropdown({ id, target, ...props }) {
  return (
    <div>
      <Button popovertarget={id} style='anchor-name:--anchor-1'>
        {target}
      </Button>
      <ul
        class={[
          'not-prose dropdown menu w-52 rounded-box bg-base-100 shadow-sm',
          props.class || ''
        ].join(' ')}
        popover
        id={id}
        style='position-anchor:--anchor-1'>
        {Array.from(props.children).map((child, index) => {
          return (
            <li key={index} class='min-h-[40px]'>
              {child}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
