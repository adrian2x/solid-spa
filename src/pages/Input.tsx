import { Input, TextInput } from '../components/Input'

export default function InputPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Default input</h3>
        <div class='row gap-2'>
          <TextInput placeholder='Type here...' />
        </div>
      </div>

      <div class='example'>
        <h3>Text with label inside</h3>
        <div class='row gap-2'>
          <TextInput
            class='grow'
            placeholder='Search'
            start={
              <svg
                class='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <g
                  stroke-linejoin='round'
                  stroke-linecap='round'
                  stroke-width='2.5'
                  fill='none'
                  stroke='currentColor'>
                  <circle cx='11' cy='11' r='8'></circle>
                  <path d='m21 21-4.3-4.3'></path>
                </g>
              </svg>
            }>
            <kbd class='kbd kbd-sm'>⌘</kbd>
            <kbd class='kbd kbd-sm'>K</kbd>
          </TextInput>

          <TextInput
            class='grow'
            placeholder='index.php'
            start={
              <svg
                class='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <g
                  stroke-linejoin='round'
                  stroke-linecap='round'
                  stroke-width='2.5'
                  fill='none'
                  stroke='currentColor'>
                  <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'></path>
                  <path d='M14 2v4a2 2 0 0 0 2 2h4'></path>
                </g>
              </svg>
            }>
            <kbd class='kbd kbd-sm'>⌘</kbd>
            <kbd class='kbd kbd-sm'>K</kbd>
          </TextInput>

          <TextInput class='grow' placeholder='src/app/'>
            Path
            <span class='badge badge-neutral badge-xs'>Optional</span>
          </TextInput>
        </div>
      </div>

      <div class='example'>
        <h3>Ghost style</h3>
        <div class='row gap-2'>
          <TextInput ghost placeholder='Type here...' />
        </div>
      </div>

      <div class='example'>
        <h3>Sizes</h3>
        <div class='row gap-2'>
          <TextInput xs placeholder='xsmall' />
          <TextInput sm placeholder='small' />
          <TextInput md placeholder='Medium' />
          <TextInput lg placeholder='Large' />
          <TextInput xl placeholder='XLarge' />
        </div>
      </div>

      <div class='example'>
        <h3>Date input</h3>
        <div class='row gap-2'>
          <TextInput type='date' />
        </div>
      </div>

      <div class='example'>
        <h3>Search input with icon</h3>
        <div class='row gap-2'>
          <TextInput
            type='search'
            start={
              <svg
                class='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <g
                  stroke-linejoin='round'
                  stroke-linecap='round'
                  stroke-width='2.5'
                  fill='none'
                  stroke='currentColor'>
                  <circle cx='11' cy='11' r='8'></circle>
                  <path d='m21 21-4.3-4.3'></path>
                </g>
              </svg>
            }
            placeholder='Search'
          />
        </div>
      </div>

      <div class='example'>
        <h3>Number input</h3>
        <div class='row gap-2'>
          <Input
            type='number'
            placeholder='Number between 1 and 10'
            validator
            min='1'
            max='10'
            title='Must be between 1 and 10'></Input>
          <p class='validator-hint'>Must be between be 1 to 10</p>
        </div>
      </div>
    </div>
  )
}
