import { Checkbox } from '../components/Checkbox'

export default function CheckboxPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Checkbox</h3>
        <div class='row gap-2'>
          <Checkbox></Checkbox>
        </div>
      </div>

      <div class='example'>
        <h3>Fieldset and label</h3>
        <div class='row gap-2'>
          <fieldset class='fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4'>
            <legend class='fieldset-legend'>Login options</legend>
            <Checkbox>Remeber me</Checkbox>
          </fieldset>
        </div>
      </div>

      <div class='example'>
        <h3>Sizes</h3>
        <div class='row gap-2'>
          <Checkbox xs />
          <Checkbox sm />
          <Checkbox md />
          <Checkbox lg />
          <Checkbox xl />
        </div>
      </div>
    </div>
  )
}
