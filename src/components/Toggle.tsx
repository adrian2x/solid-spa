export function Toggle({
  xs,
  sm,
  md,
  lg,
  xl,
  primary,
  secondary,
  accent,
  neutral,
  success,
  error,
  warning,
  info,
  ...props
}) {
  return (
    <>
      <input
        type='checkbox'
        classList={{
          toggle: true,
          'toggle-xs': xs,
          'toggle-sm': sm,
          'toggle-md': md,
          'toggle-lg': lg,
          'toggle-xl': xl,
          'toggle-primary': primary,
          'toggle-secondary': secondary,
          'toggle-accent': accent,
          'toggle-neutral': neutral,
          'toggle-info': info,
          'toggle-success': success,
          'toggle-warning': warning,
          'toggle-error': error
        }}
        {...props}
      />
    </>
  )
}
