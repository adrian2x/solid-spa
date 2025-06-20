export default function ButtonPage() {
  return (
    <div>
      <h3>Button sizes</h3>
      <div class='flex gap-2'>
        <button class='btn btn-xs'>Xsmall</button>
        <button class='btn btn-sm'>Small</button>
        <button class='btn'>Medium</button>
        <button class='btn btn-lg'>Large</button>
        <button class='btn btn-xl'>Xlarge</button>
      </div>

      <h3>Button colors</h3>
      <div class='flex gap-2'>
        <button class='btn btn-neutral'>Neutral</button>
        <button class='btn btn-primary'>Primary</button>
        <button class='btn btn-secondary'>Secondary</button>
        <button class='btn btn-accent'>Accent</button>
        <button class='btn btn-info'>Info</button>
        <button class='btn btn-success'>Success</button>
        <button class='btn btn-warning'>Warning</button>
        <button class='btn btn-error'>Error</button>
      </div>

      <h3>Soft buttons</h3>
      <div class='flex gap-2'>
        <button class='btn btn-soft'>Default</button>
        <button class='btn btn-soft btn-primary'>Primary</button>
        <button class='btn btn-soft btn-secondary'>Secondary</button>
        <button class='btn btn-soft btn-accent'>Accent</button>
        <button class='btn btn-soft btn-info'>Info</button>
        <button class='btn btn-soft btn-success'>Success</button>
        <button class='btn btn-soft btn-warning'>Warning</button>
        <button class='btn btn-soft btn-error'>Error</button>
      </div>

      <h3>Outline buttons</h3>
      <div class='flex gap-2'>
        <button class='btn btn-outline'>Default</button>
        <button class='btn btn-outline btn-primary'>Primary</button>
        <button class='btn btn-outline btn-secondary'>Secondary</button>
        <button class='btn btn-outline btn-accent'>Accent</button>
        <button class='btn btn-outline btn-info'>Info</button>
        <button class='btn btn-outline btn-success'>Success</button>
        <button class='btn btn-outline btn-warning'>Warning</button>
        <button class='btn btn-outline btn-error'>Error</button>
      </div>

      <h3>Ghost and link buttons</h3>
      <div class='flex gap-2'>
        <button class='btn btn-ghost'>Ghost</button>
        <button class='btn btn-link'>Link</button>
      </div>

      <h3>Wide button</h3>
      <div class='flex gap-2'>
        <button class='btn btn-wide'>Wide</button>
      </div>

      <h3>Block button</h3>
      <div class='flex gap-2'>
        <button class='btn btn-block'>Block</button>
      </div>

      <h3>Disabled</h3>
      <div class='flex gap-2'>
        <button class='btn' disabled='disabled'>
          Disabled using attribute
        </button>
        <button class='btn btn-disabled' tabindex='-1' role='button' aria-disabled='true'>
          Disabled using class name
        </button>
      </div>

      <h3>Square and circle buttons</h3>
      <div class='flex gap-2'>
        <button class='btn btn-square'>
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
        </button>
        <button class='btn btn-circle'>
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
        </button>
      </div>

      <h3>Button with icon</h3>
      <div class='flex gap-2'>
        <button class='btn'>
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
        </button>
        <button class='btn'>
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
        </button>
      </div>

      <h3>Button with loading spinner</h3>
      <div class='flex gap-2'>
        <button class='btn btn-square'>
          <span class='loading loading-spinner'></span>
        </button>

        <button class='btn'>
          <span class='loading loading-spinner'></span>
          loading
        </button>
      </div>
    </div>
  )
}
