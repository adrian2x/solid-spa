import { Spinner } from '../components/Spinner'

export default function LoadingPage() {
  return (
    <div class='prose pt-10'>
      <div class='example'>
        <h3>Loading Spinner</h3>
        <div class='row gap-2'>
          <Spinner xs />
          <Spinner sm />
          <Spinner md />
          <Spinner lg />
          <Spinner xl />
        </div>
      </div>
    </div>
  )
}
