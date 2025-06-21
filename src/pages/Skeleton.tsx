import { Skeleton } from '../components/Skeleton'

export default function SkeletonPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Skeleton</h3>
        <div class='row gap-2'>
          <Skeleton class='w-32 h-32' />
        </div>
      </div>

      <div class='example'>
        <h3>Skeleton with content</h3>

        <div class='flex w-52 flex-col gap-4'>
          <Skeleton class='h-32 w-full' />
          <Skeleton class='h-4 w-28' />
          <Skeleton class='h-4 w-full' />
          <Skeleton class='h-4 w-full' />
        </div>
      </div>
    </div>
  )
}
