import type { MetaFunction } from '@remix-run/cloudflare'
import { OurPartner } from '~/components/AboutComponents/OurPartner'
import { AppBreadcrumb } from '~/components/AppBreadcrumb'
import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { AppData } from '~/const/AppData'

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
  return (
    <div>
      <div className="container mx-auto ">
        <div className="pt-10 py-5">
          <AppBreadcrumb
            listBreadcrumb={[{ name: 'Home', link: '/' }, { name: 'Products' }]}
          />
        </div>
        <WrapperTextTitle
          nameSection="All Products"
          title="Take A Look Our Work Gallery"
          subTitle="Explore our work gallery to witness the creativity and quality in each project."
          textLeft={false}
        />
        <div className="grid grid-cols-12 gap-5 lg:gap-10 py-5 lg:py-10">
          {AppData?.dataProduct?.map((item, index) => (
            <div
              key={index}
              className="col-span-12 lg:col-span-6 transform hover:-translate-y-2 transition duration-200"
            >
              <a href={item?.link} target="_blank" rel="noreferrer">
                <div className="w-full aspect-[16/9]">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h6 className="font-krona-one text-neutral-7 typo-s20-w400">
                  {item?.title}
                </h6>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={
              'https://play.google.com/store/apps/dev?id=7274700016482359155&hl=vi-VN'
            }
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <div className="flex items-center justify-center pb-10 lg:pb-20 hover:-translate-y-2 transition duration-200 cursor-pointer hover-opacity-80">
              <h5 className="text-main-primary typo-s24-w400">
                Explore more products
              </h5>
              <i className="ri-arrow-right-line text-[30px] text-main-primary ml-3"></i>
            </div>
          </a>
        </div>
      </div>

      <OurPartner />
    </div>
  )
}
