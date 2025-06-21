import { Alert } from '../components/Alert'
import { Button } from '../components/Button'

export default function AlertPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Responsive Alert with actions</h3>
        <div class='row gap-2'>
          <Alert>
            <span>We may use cookies for no reason.</span>
          </Alert>
        </div>
      </div>

      <div class='example'>
        <h3>Success color</h3>
        <div class='row gap-2'>
          <Alert success>
            <span>Your purchase has been confirmed!</span>
          </Alert>
        </div>
      </div>

      <div class='example'>
        <h3>Alert with title and description</h3>
        <div class='row gap-2'>
          <Alert>
            <>
              <div>
                <h3 class='font-bold'>New message!</h3>
                <div class='text-xs'>You have 1 unread message</div>
              </div>

              <div>
                <Button sm primary>
                  View
                </Button>
              </div>
            </>
          </Alert>
        </div>
      </div>
    </div>
  )
}
