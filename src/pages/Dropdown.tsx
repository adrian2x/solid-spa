import { Button } from '../components/Button'
import { Dropdown } from '../components/Dropdown'

export default function DropdownPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Dropdown using Popover API</h3>
        <div class='row gap-2'>
          <Dropdown id='dropdown_1' target='Button'>
            <a href=''>Item 1</a>
            <a href=''>Item 2</a>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
