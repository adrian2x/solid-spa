export function Skeleton({ ...props }) {
  return <div {...props} class={['skeleton', props.class].join(' ')}></div>
}
