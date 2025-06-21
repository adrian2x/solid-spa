export function Spinner({
  xs,
  sm,
  md,
  lg,
  xl,
  classList
}: {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  class?: string
  classList?: Record<string, boolean>
}) {
  return (
    <span
      class='loading loading-spinner'
      classList={{
        ...classList,
        'loading-xs': xs,
        'loading-sm': sm,
        'loading-md': md,
        'loading-lg': lg,
        'loading-xl': xl
      }}></span>
  )
}
