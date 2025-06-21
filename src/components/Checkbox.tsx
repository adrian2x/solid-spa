export function Checkbox({ xs, sm, md, lg, xl, ...props }) {
  return (
    <label class='label'>
      <input
        type='checkbox'
        {...props}
        class={['checkbox', props.class].join(' ')}
        classList={{
          'checkbox-xs': xs,
          'checkbox-sm': sm,
          'checkbox-md': md,
          'checkbox-lg': lg,
          'checkbox-xl': xl
        }}
      />
      {props.children}
    </label>
  )
}
