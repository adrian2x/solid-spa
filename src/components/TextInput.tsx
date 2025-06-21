export function Input({
  xs,
  sm,
  md,
  lg,
  xl,
  ghost,
  neutral,
  primary,
  secondary,
  accent,
  info,
  success,
  error,
  warning,
  validator,
  ...props
}) {
  return (
    <input
      type='text'
      {...props}
      classList={{
        input: true,
        'input-xs': xs,
        'input-sm': sm,
        'input-md': md,
        'input-lg': lg,
        'input-xl': xl,
        'input-ghost': ghost,
        'input-neutral': neutral,
        'input-primary': primary,
        'input-secondary': secondary,
        'input-accent': accent,
        'input-info': info,
        'input-success': success,
        'input-error': error,
        'input-warning': warning,
        validator: validator
      }}
    />
  )
}

export function TextInput({
  xs,
  sm,
  md,
  lg,
  xl,
  ghost,
  neutral,
  primary,
  secondary,
  accent,
  info,
  success,
  error,
  warning,
  start,
  validator,
  ...props
}) {
  let inputMode = ghost || xs || sm || md || lg || xl || validator ? 'input' : 'label'

  return (
    <label
      classList={{
        label: inputMode === 'input',
        'label-ghost': ghost,
        input: inputMode === 'label'
      }}>
      {start}
      <input
        type='text'
        {...props}
        classList={{
          grow: true,
          input: inputMode === 'input',
          'input-xs': xs,
          'input-sm': sm,
          'input-md': md,
          'input-lg': lg,
          'input-xl': xl,
          'input-ghost': ghost,
          'input-neutral': neutral,
          'input-primary': primary,
          'input-secondary': secondary,
          'input-accent': accent,
          'input-info': info,
          'input-success': success,
          'input-error': error,
          'input-warning': warning,
          validator: validator
        }}
      />
      {props.children}
    </label>
  )
}
