import { Menu, MenuItem } from '../components/Menu'

export default function MenuPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Menu</h3>
        <div class='row gap-2'>
          <Menu class='w-56'>
            <MenuItem>
              <a href=''>Item 1</a>
            </MenuItem>
            <MenuItem>
              <a href=''>Item 2</a>
            </MenuItem>
            <MenuItem>
              <a href=''>Item 3</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div class='example'>
        <h3>Menu with title</h3>
        <div class='row gap-2'>
          <Menu class='w-56'>
            <MenuItem title>Title</MenuItem>
            <MenuItem>
              <a href=''>Item 1</a>
            </MenuItem>
            <MenuItem>
              <a href=''>Item 2</a>
            </MenuItem>
            <MenuItem>
              <a href=''>Item 3</a>
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div class='example'>
        <h3>Menu with icon only (horizontal)</h3>
        <div class='row gap-2'>
          <Menu horizontal>
            <MenuItem>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </a>
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div class='example'>
        <h3>Menu with tooltips</h3>
        <div class='row gap-2'>
          <Menu>
            <MenuItem>
              <a class='tooltip tooltip-right' data-tip='Home'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              </a>
            </MenuItem>
            <MenuItem>
              <a class='tooltip tooltip-right' data-tip='Details'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </a>
            </MenuItem>
            <MenuItem>
              <a class='tooltip tooltip-right' data-tip='Stats'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </a>
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div class='example'>
        <h3>Collapsible submenu</h3>
        <div class='row gap-2'>
          <Menu class='w-56'>
            <MenuItem>
              <a href=''>Item 1</a>
            </MenuItem>
            <MenuItem>
              <details open>
                <summary>Parent</summary>
                <Menu>
                  <MenuItem>
                    <a href=''>Subitem 1</a>
                  </MenuItem>
                  <MenuItem>
                    <a href=''>Subitem 2</a>
                  </MenuItem>
                  <MenuItem>
                    <details open>
                      <summary>Parent</summary>
                      <Menu>
                        <MenuItem>
                          <a href=''>Subitem 1</a>
                        </MenuItem>
                        <MenuItem>
                          <a href=''>Subitem 2</a>
                        </MenuItem>
                      </Menu>
                    </details>
                  </MenuItem>
                </Menu>
              </details>
            </MenuItem>
            <MenuItem>
              <a href=''>Item 3</a>
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div class='example'>
        <h3>Collapsible submenu (responsive)</h3>
        <div class='row gap-2'>
          <Menu class='lg:menu-horizontal bg-base-200 rounded-box lg:mb-64'>
            <MenuItem>
              <a href=''>Item 1</a>
            </MenuItem>
            <MenuItem>
              <details open>
                <summary>Parent item</summary>
                <Menu>
                  <MenuItem>
                    <a href=''>Subitem 1</a>
                  </MenuItem>
                  <MenuItem>
                    <a href=''>Subitem 2</a>
                  </MenuItem>
                  <MenuItem>
                    <details open>
                      <summary>Parent</summary>
                      <Menu>
                        <MenuItem>
                          <a href=''>Subitem 1</a>
                        </MenuItem>
                        <MenuItem>
                          <a href=''>Subitem 2</a>
                        </MenuItem>
                      </Menu>
                    </details>
                  </MenuItem>
                </Menu>
              </details>
            </MenuItem>
            <MenuItem>
              <a href=''>Item 3</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}
