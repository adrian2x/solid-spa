import { Button } from '../components/Button'

export default function ButtonPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Button sizes</h3>
        <div class='row gap-2'>
          <Button xs>Xsmall</Button>
          <Button sm>Small</Button>
          <Button>Medium</Button>
          <Button lg>Large</Button>
          <Button xl>XLarge</Button>
        </div>
      </div>

      <div class='example'>
        <h3>Button colors</h3>
        <div class='row gap-2'>
          <Button neutral>Neutral</Button>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button accent>Accent</Button>
          <Button info>Info</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button error>Error</Button>
        </div>
      </div>

      <div class='example'>
        <h3>Soft buttons</h3>
        <div class='row gap-2'>
          <Button soft>Default</Button>
          <Button soft primary>
            Primary
          </Button>
          <Button soft secondary>
            Secondary
          </Button>
          <Button soft accent>
            Accent
          </Button>
          <Button soft info>
            Info
          </Button>
          <Button soft success>
            Success
          </Button>
          <Button soft warning>
            Warning
          </Button>
          <Button soft error>
            Error
          </Button>
        </div>
      </div>

      <div class='example'>
        <h3>Outline buttons</h3>
        <div class='row gap-2'>
          <Button outline>Default</Button>
          <Button outline primary>
            Primary
          </Button>
          <Button outline secondary>
            Secondary
          </Button>
          <Button outline accent>
            Accent
          </Button>
          <Button outline info>
            Info
          </Button>
          <Button outline success>
            Success
          </Button>
          <Button outline warning>
            Warning
          </Button>
          <Button outline error>
            Error
          </Button>
        </div>
      </div>

      <div class='example'>
        <h3>Ghost and link buttons</h3>
        <div class='row gap-2'>
          <Button ghost>Ghost</Button>
          <Button link>Link</Button>
        </div>
      </div>

      <div class='example'>
        <h3>Wide button</h3>
        <div class='row gap-2'>
          <Button wide>Wide</Button>
        </div>
      </div>

      <div class='example'>
        <h3>Block button</h3>
        <div class='row gap-2'>
          <Button block>Block</Button>
        </div>
      </div>

      <div class='example'>
        <h3>Disabled</h3>
        <div class='row gap-2'>
          <Button disabled='disabled'>Disabled using attribute</Button>
          <Button disabled>Disabled using class</Button>
        </div>
      </div>

      <div class='example'>
        <h3>Square and circle buttons</h3>
        <div class='row gap-2'>
          <Button square>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='2.5'
              stroke='currentColor'
              class='size-[1.2em]'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </Button>
          <Button circle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='2.5'
              stroke='currentColor'
              class='size-[1.2em]'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </Button>
        </div>
      </div>

      <div class='example'>
        <h3>Button with icon</h3>
        <div class='row gap-2'>
          <Button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='2.5'
              stroke='currentColor'
              class='size-[1.2em]'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
            Like
          </Button>
          <Button>
            Like
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='2.5'
              stroke='currentColor'
              class='size-[1.2em]'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </Button>
        </div>
      </div>

      <div class='example'>
        <h3>Button with loading spinner</h3>
        <div class='row gap-2'>
          <Button square spinner></Button>

          <Button spinner>loading</Button>
        </div>
      </div>
    </div>
  )
}
