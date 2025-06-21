import type { JSX } from 'solid-js'
import { Button } from './Button'

export function Modal({
  id,
  wide,
  backdrop,
  bottom,
  actions,
  ...props
}: {
  id: string
  wide?: boolean
  backdrop?: boolean
  bottom?: boolean
} & JSX.HTMLAttributes<HTMLDialogElement>) {
  return (
    <div>
      <dialog
        id={id}
        class='modal'
        classList={{ 'modal-bottom': bottom, 'sm:modal-middle': bottom }}
        {...props}>
        <div class='modal-box' classList={{ 'max-w-5xl': wide, 'w-11/12': wide }}>
          <form method='dialog'>
            <Button sm circle ghost class='absolute right-2 top-2'>
              ✕
            </Button>
          </form>
          {props.children}
          {actions && (
            <div class='modal-action'>
              <form method='dialog'>{actions}</form>
            </div>
          )}
        </div>
        {backdrop && (
          <form method='dialog' class='modal-backdrop'>
            <button>close</button>
          </form>
        )}
      </dialog>
    </div>
  )
}
