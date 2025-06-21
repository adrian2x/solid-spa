export function Tab({ group, label, children, active }) {
  return (
    <>
      <input
        type='radio'
        name={group}
        class='tab'
        aria-label={label}
        checked={active ? 'checked' : undefined}
      />
      <div class='tab-content bg-base-100 border-base-300 p-6'>{children}</div>
    </>
  )
}

export function Tabs({ box, children }) {
  const border = !box
  return (
    <>
      <div classList={{ tabs: true, 'tabs-box': box, 'tabs-border': border }}>{children}</div>
    </>
  )
}
