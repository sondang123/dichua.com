import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { AppData } from '~/const/AppData'
import React from 'react'
interface props {}
export const OurPartner: React.FC<props> = () => {
  return (
    <div className="bg-main-1 py-10 lg:py-20">
      <div className="container mx-auto">
        <WrapperTextTitle
          nameSection="Our Partner"
          title="Our great partner"
          textLeft={false}
        />
        <div className="grid grid-cols-12 gap-5 mt-10">
          {AppData.dataGreatPartner?.map((item, index) => (
            <div className="col-span-6 lg:col-span-3 mb-3 lg:mb-0" key={index}>
              <img
                src={item?.icon}
                alt={`icon-${index}`}
                className="lg:p-5 lg:w-[90%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
