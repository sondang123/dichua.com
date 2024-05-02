import React from 'react'
import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'
import { AppData } from '~/const/AppData'

import { WrapperTextTitle } from '../WrapperTextTitle'

interface IWhoWeAreProps {}
export const WhoWeAre: React.FC<IWhoWeAreProps> = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5 text-center items-start mt-4">
        <div className="col-span-12 lg:col-span-6 md:pr-10 ">
          <WrapperTextTitle
            nameSection="Who We Are"
            title="We create stunning mobile applications"
            subTitle="We not only create stunning mobile applications but also awaken creativity, delivering a unique and refined experience for everyone."
            textLeft={true}
          />

          <ButtonFullBg
            title={<p className="typo-s16-w500 text-white">Learn more</p>}
            className="mt-10"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 mt-5 ">
          {AppData.dataMission?.map((item, index) => (
            <div key={index} className="flex items-start mb-8 lg:mb-10">
              <img
                src={item.icon}
                alt={item.title}
                className="shrink-1 object-contain me-4 w-[48px] lg:w-[56px]"
              />
              <div className="">
                <p className="typo-s24-w400 text-neutral-9 mb-3">
                  {item.title}
                </p>
                <p className="typo-s20-w400 text-neutral-5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
