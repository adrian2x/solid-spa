export function Collapse({ title, ghost, open, ...props }) {
  const isGhost = ghost ? '' : ' bg-base-100 border-base-300 border'
  return (
    <>
      <div
        tabindex='0'
        class={['collapse collapse-arrow', isGhost, props.class].join(' ')}
        classList={{ ...props.classList, 'collapse-open': open }}>
        <div class='collapse-title font-semibold'>{title}</div>
        <div class='collapse-content'>{props.children}</div>
      </div>
    </>
  )
}
