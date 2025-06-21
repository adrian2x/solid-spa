import { Button } from '../components/Button'
import { Select } from '../components/Select'

export default function SelectPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Select</h3>
        <div class='row gap-2'>
          <Select>
            <option disabled selected>
              Pick a color
            </option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </Select>
        </div>
      </div>

      <div class='example'>
        <h3>Ghost</h3>
        <div class='row gap-2'>
          <Select ghost>
            <option disabled selected>
              Pick a font
            </option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </Select>
        </div>
      </div>

      <div class='example'>
        <h3>Error color</h3>
        <div class='row gap-2'>
          <Select error>
            <option disabled selected>
              Pick a font
            </option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </Select>
        </div>
      </div>

      <div class='example'>
        <h3>Success color</h3>
        <div class='row gap-2'>
          <Select success>
            <option disabled selected>
              Pick a font
            </option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </Select>
        </div>
      </div>

      <div class='example'>
        <h3>Disabled</h3>
        <div class='row gap-2'>
          <Select disabled>
            <option disabled selected>
              Pick a font
            </option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </Select>
        </div>
      </div>

      <div class='example'>
        <h3>Sizes</h3>
        <div class='row gap-2'>
          <Select xs>
            <option disabled selected>
              Xsmall
            </option>
            <option>Xsmall Apple</option>
            <option>Xsmall Orange</option>
            <option>Xsmall Tomato</option>
          </Select>
          <Select sm>
            <option disabled selected>
              Small
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </Select>
          <Select md>
            <option disabled selected>
              Medium
            </option>
            <option>Medium Apple</option>
            <option>Medium Orange</option>
            <option>Medium Tomato</option>
          </Select>
          <Select lg>
            <option disabled selected>
              Large
            </option>
            <option>Large Apple</option>
            <option>Large Orange</option>
            <option>Large Tomato</option>
          </Select>
          <Select xl>
            <option disabled selected>
              Xlarge
            </option>
            <option>Xlarge Apple</option>
            <option>Xlarge Orange</option>
            <option>Xlarge Tomato</option>
          </Select>
        </div>
      </div>
    </div>
  )
}
