import { Tab, Tabs } from '../components/Tabs'

export default function TabsPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Tabs border with content</h3>
        <div class='row gap-2'>
          <Tabs>
            <Tab group='tabs1' label='Tab 1' active>
              <p>Content for Tab 1</p>
            </Tab>
            <Tab group='tabs1' label='Tab 2'>
              <p>Content for Tab 2</p>
            </Tab>
            <Tab group='tabs1' label='Tab 3'>
              <p>Content for Tab 3</p>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div class='example'>
        <h3>Tabs box</h3>
        <div class='row gap-2'>
          <Tabs box>
            <Tab group='tabs2' label='Tab 1' active>
              <p>Content for Tab 1</p>
            </Tab>
            <Tab group='tabs2' label='Tab 2'>
              <p>Content for Tab 2</p>
            </Tab>
            <Tab group='tabs2' label='Tab 3'>
              <p>Content for Tab 3</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
