import { JSX } from 'solid-js'

export function Button({
  primary,
  soft,
  outline,
  xs,
  sm,
  lg,
  xl,
  secondary,
  neutral,
  warning,
  success,
  error,
  accent,
  info,
  wide,
  block,
  ghost,
  link,
  square,
  circle,
  spinner,
  ...props
}: {
  primary?: boolean
  soft?: boolean
  outline?: boolean
  xs?: boolean
  sm?: boolean
  lg?: boolean
  xl?: boolean
  secondary?: boolean
  neutral?: boolean
  warning?: boolean
  success?: boolean
  error?: boolean
  accent?: boolean
  info?: boolean
  wide?: boolean
  block?: boolean
  ghost?: boolean
  link?: boolean
  square?: boolean
  circle?: boolean
  spinner?: boolean
} & JSX.HTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean // Optional disabled prop
  }) {
  return (
    <button
      {...props}
      classList={{
        ...props.classList,
        btn: true,
        'btn-primary': primary,
        'btn-soft': soft,
        'btn-outline': outline,
        'btn-xs': xs,
        'btn-sm': sm,
        'btn-lg': lg,
        'btn-xl': xl,
        'btn-secondary': secondary,
        'btn-neutral': neutral,
        'btn-warning': warning,
        'btn-success': success,
        'btn-error': error,
        'btn-accent': accent,
        'btn-info': info,
        'btn-wide': wide,
        'btn-block': block,
        'btn-ghost': ghost,
        'btn-link': link,
        'btn-square': square,
        'btn-circle': circle,
        'btn-disabled': props.disabled
      }}>
      {spinner && <span class='loading loading-spinner'></span>}
      {props.children}
    </button>
  )
}
