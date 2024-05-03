import type { MetaFunction } from '@remix-run/cloudflare'
export const meta: MetaFunction = () => {
  return [
    { title: 'dichua.com' },
    {
      name: 'Đi Chùa',
      content: '',
    },
  ]
}
export default function PrayerText() {
  return (
    <div className="h-[100vh]">
      <iframe
        src="https://file.nhasachmienphi.com/pdf/nhasachmienphi-van-khan-co-truyen-viet-nam.pdf"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        width="100%"
        height="100%"
      ></iframe>
    </div>
  )
}
