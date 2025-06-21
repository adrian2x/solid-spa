import { Toggle } from '../components/Toggle'

export default function TogglePage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Toggle</h3>
        <div class='row gap-2'>
          <Toggle />
        </div>
      </div>

      <div class='example'>
        <h3>With fieldset and label</h3>
        <div class='row gap-2'>
          <fieldset class='fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4'>
            <legend class='fieldset-legend'>Login options</legend>
            <label class='label'>
              <Toggle checked />
              Remember me
            </label>
          </fieldset>
        </div>
      </div>

      <div class='example'>
        <h3>Sizes</h3>
        <div class='row gap-2'>
          <Toggle xs />
          <Toggle sm />
          <Toggle md />
          <Toggle lg />
          <Toggle xl />
        </div>
      </div>

      <div class='example'>
        <h3>Colors</h3>
        <div class='row gap-2'>
          <Toggle checked primary />
          <Toggle checked secondary />
          <Toggle checked accent />
          <Toggle checked neutral />
          <Toggle checked info />
          <Toggle checked success />
          <Toggle checked warning />
          <Toggle checked error />
        </div>
      </div>

      <div class='example'>
        <h3>Disabled</h3>
        <div class='row gap-2'>
          <Toggle disabled />
          <Toggle checked disabled />
        </div>
      </div>
    </div>
  )
}
