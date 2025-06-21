export function Radio({ xs, sm, md, lg, xl, ...props }) {
  return (
    <>
      <input
        type='radio'
        classList={{
          radio: true,
          'radio-neutral': true,
          'radio-xs': xs,
          'radio-sm': sm,
          'radio-md': md,
          'radio-lg': lg,
          'radio-xl': xl
        }}
        {...props}
      />
    </>
  )
}
