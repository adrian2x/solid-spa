import { Radio } from '../components/Radio'

export default function RadioPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Radio</h3>
        <div class='row gap-2'>
          <Radio name='radio-1' checked />
          <Radio name='radio-1' />
        </div>
      </div>

      <div class='example'>
        <h3>Radio sizes</h3>
        <div class='row gap-2'>
          <Radio name='radio-3' xs />
          <Radio name='radio-3' sm />
          <Radio name='radio-3' md />
          <Radio name='radio-3' lg />
          <Radio name='radio-3' xl />
        </div>
      </div>
    </div>
  )
}
