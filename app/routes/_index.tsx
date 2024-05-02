import type { MetaFunction } from '@remix-run/cloudflare'
import { ButtonStore } from '~/components/ButtonStore'
import { Careers } from '~/components/HomeComponents/Careers'
import { CoreValue } from '~/components/HomeComponents/CoreValue'
import { DownLoadNow } from '~/components/HomeComponents/DownLoadNow'
import { LetTalk } from '~/components/HomeComponents/LetTalk'
import { OurWord } from '~/components/HomeComponents/OurWord'
import { Testimonials } from '~/components/HomeComponents/Testimonials'
import { WhoWeAre } from '~/components/HomeComponents/WhoWeAre'
import { AppResource } from '~/const/AppResource'

export const meta: MetaFunction = () => {
  return [
    { title: 'God Hitech' },
    {
      name: 'God Hitech',
      content: 'God Hitech vươn tầm thế giới',
    },
  ]
}

export default function Index() {
  return (
    <>
      <div className="mt-4 lg:mt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 text-center items-center">
            <div className="col-span-12 lg:col-span-6">
              <h1 className="typo-s64-w400 text-[#003B77]">
                Ignite Digital Success with
                <span className="text-sematic-2 ps-2 leading-[100%] text-krona-one">
                  GODHITECH
                </span>
              </h1>
              <p className={'typo-s20-w400 text-neutral-5 text-left mt-2'}>
                Each of our projects is an effort to harmonize performance and
                innovation, where every detail is a leap towards comprehensive
                success.
              </p>

              <div className="mt-5 lg:mt-10">
                <ButtonStore />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <img
                src={AppResource.images.img_banner_1}
                alt="graphics"
                className="w-[90%] mx-auto lg:ml-auto "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 lg:py-20">
        <WhoWeAre />
      </div>
      <CoreValue gapColumn={false} />
      <OurWord />
      <Testimonials />
      <Careers />
      <div className="py-10 lg:py-20">
        <LetTalk />
      </div>
      <DownLoadNow />
    </>
  )
}
