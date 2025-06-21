import { Button } from '../components/Button'
import { Modal } from '../components/Modal'

export default function ModalPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Dialog with backdrop</h3>
        <div class='row gap-2'>
          <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
          <Modal id='my_modal_1' backdrop>
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
          </Modal>
        </div>
      </div>

      <div class='example'>
        <h3>Dialog with close button</h3>
        <div class='row gap-2'>
          <button class="btn" onclick="my_modal_2.showModal()">open modal</button>
          <Modal id='my_modal_2'>
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
          </Modal>
        </div>
      </div>

      <div class='example'>
        <h3>Dialog with custom width</h3>
        <div class='row gap-2'>
          <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
          <Modal id='my_modal_3' wide actions={<>
            <Button>Close</Button>
            </>}>
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
          </Modal>
        </div>
      </div>

      <div class='example'>
        <h3>Responsive</h3>
        <p>Modal goes bottom on SM screen size, goes middle on MD screen size</p>
        <div class='row gap-2'>
          <button class="btn" onclick="my_modal_4.showModal()">open modal</button>
          <Modal id='my_modal_4' bottom>
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
          </Modal>
        </div>
      </div>
    </div>
  )
}
