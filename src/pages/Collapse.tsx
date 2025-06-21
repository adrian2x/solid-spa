import { Button } from '../components/Button'
import { Collapse } from '../components/Collapse'

export default function CollapsePage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Collapse with arrow icon</h3>
        <div class='row gap-2'>
          <Collapse title='How do I create an account?'>
            Click the "Sign Up" button in the top right corner and follow the registration process.
          </Collapse>
        </div>
      </div>

      <div class='example'>
        <h3>Without border and background</h3>
        <div class='row gap-2'>
          <Collapse ghost title='How do I create an account?'>
            Click the "Sign Up" button in the top right corner and follow the registration process.
          </Collapse>
        </div>
      </div>

      <div class='example'>
        <h3>Force open</h3>
        <div class='row gap-2'>
          <Collapse open title='How do I create an account?'>
            Click the "Sign Up" button in the top right corner and follow the registration process.
          </Collapse>
        </div>
      </div>
    </div>
  )
}
