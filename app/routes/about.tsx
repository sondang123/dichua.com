import type { MetaFunction } from '@remix-run/cloudflare'
import { OurBest } from '~/components/AboutComponents/OurBest'
import { OurPartner } from '~/components/AboutComponents/OurPartner'
import { AppBreadcrumb } from '~/components/AppBreadcrumb'

import { CoreValue } from '~/components/HomeComponents/CoreValue'
import { OurWord } from '~/components/HomeComponents/OurWord'
import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { AppData } from '~/const/AppData'
import { AppResource } from '~/const/AppResource'
import { useWindowWidth } from '@react-hook/window-size'
export const meta: MetaFunction = () => {
  return [
    { title: 'God Hitech' },
    {
      name: 'God Hitech',
      content: 'God Hitech vươn tầm thế giới',
    },
  ]
}
export default function About() {
  const onlyWidth = useWindowWidth()
  return (
    <div>
      <div className="container mx-auto ">
        <div className="pt-10 py-5">
          <AppBreadcrumb
            listBreadcrumb={[{ name: 'Home', link: '/' }, { name: 'About us' }]}
          />
        </div>
        <WrapperTextTitle
          nameSection="Our Company"
          title="About Our Company"
          subTitle="GOD HITECH was established in 9/2023 and is a leading company primarily engaged in the production and development of mobile applications. "
          textLeft={false}
          classNameSubTitle="lg:w-[80%] mx-auto"
        />
        <div className="grid grid-cols-12 gap-8 mt-10 ">
          <div className="col-span-12 lg:col-span-6 ">
            <img
              src={AppResource.images.img_about_1}
              alt="img_about_1"
              className="w-full rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 ">
            <h4 className="typo-s32-w400 text-sematic-1">What can we do ?</h4>
            <br />
            <p className="typo-s18-w500 text-neutral-6">
              We position ourselves at the forefront of innovation and
              creativity. We are committed to delivering the best technology
              applications to our customers. With a team of experienced and
              dedicated experts, we continually strive to meet and exceed all
              expectations.
            </p>
            <br />
            <p className="typo-s18-w500 text-neutral-6">
              {`We don't just build applications; we build a community. Infused
              with creativity and an innovative spirit, our team continually
              strives to provide advanced and tailored solutions that best meet
              the specific needs of each client.`}
            </p>
            <br />
            <p className="typo-s18-w500 text-neutral-6">
              Unity and commitment are powerful motivators for every member of
              our team, enabling us to be not only an ideal partner but also a
              reliable companion. With professionalism and dedication, we build
              technology applications to connect everyone, highlighting the
              mission and values of each project.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-10 gap-4">
          {AppData.dataMission?.map((item, index) => (
            <div className="col-span-12 lg:col-span-6" key={index}>
              <div className="flex items-start mb-5 lg:mb-10 flex-row lg:flex-col gap-y-5 gap-x-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="shrink-1 object-contain me-4 w-[48px] lg:w-[56]"
                />
                <div className="">
                  <p className="typo-s24-w400 text-neutral-8 mb-3">
                    {item.title}
                  </p>
                  <p className="typo-s20-w400 text-neutral-5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CoreValue
        nameSection="Our Value"
        gapColumn={onlyWidth > 1024 ? true : false}
      />
      <OurBest />

      <OurWord />
      <OurPartner />
    </div>
  )
}
