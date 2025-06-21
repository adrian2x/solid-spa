export function Select({ ghost, error, success, xs, sm, md, lg, xl, ...props }) {
  return (
    <select
      {...props}
      class={['select', props.class || ''].join(' ')}
      classList={{
        ...props.classList,
        'select-ghost': ghost,
        'select-error': error,
        'select-success': success,
        'select-xs': xs,
        'select-sm': sm,
        'select-md': md,
        'select-lg': lg,
        'select-xl': xl
      }}>
      {props.children}
    </select>
  )
}
