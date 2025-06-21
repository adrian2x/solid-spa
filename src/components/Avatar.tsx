export function Avatar({ src }: { src?: string }) {
  return (
    <>
      <div tabindex='0' role='button' class='btn btn-ghost btn-circle avatar'>
        <div class='w-10 rounded-full'>
          <img src={src} referrerPolicy='no-referrer' style={{ margin: '0' }} />
        </div>
      </div>
    </>
  )
}
