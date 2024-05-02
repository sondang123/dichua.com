import React from 'react'

import { AppData } from '~/const/AppData'
import { WrapperTextTitle } from '../WrapperTextTitle'
import { cn } from '~/lib/utils'
interface ICoreValueProps {
  gapColumn?: boolean
  nameSection?: string
}

export const CoreValue: React.FC<ICoreValueProps> = ({
  gapColumn = true,
  nameSection = 'Core Value',
}) => {
  return (
    <div className="bg-main-1 py-10 lg:py-20">
      <div className="container mx-auto">
        <div
          className={`grid ${
            gapColumn ? 'grid-cols-12 ' : 'grid-row-12 '
          } gap-5 `}
        >
          <div
            className={cn(
              'col-span-6',
              gapColumn ? '' : 'flex-center flex-col item-center mb-5 lg:mb-10',
            )}
          >
            <WrapperTextTitle
              nameSection={nameSection}
              title={'Shaping the Future, Harnessing Technology'}
              subTitle={`All of our products are based on our core values
                build and develop, thereby fulfilling its mission.`}
              textLeft={gapColumn ? true : false}
              classNameTitle={
                gapColumn ? 'w-full text-left tracking-tight' : ''
              }
              classNameSubTitle={
                gapColumn ? 'w-full text-left tracking-tight pr-5' : ''
              }
            />
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-12 gap-5 ">
              {AppData?.dataCoreValue?.map((item, index) => (
                <div
                  className="col-span-6 lg:col-span-4 bg-white px-5 py-5 lg:py-10 flex-center flex-col rounded-lg"
                  key={index}
                >
                  <img
                    src={item?.icon}
                    alt={`img-value-${index}`}
                    width={gapColumn ? '50%' : '72px'}
                  />
                  <p className={'typo-s20-w700 text-neutral-7 mt-4 '}>
                    {item?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
