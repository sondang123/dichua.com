import React from 'react'
import { WrapperTextTitle } from '../WrapperTextTitle'

import { AppData } from '~/const/AppData'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '~/components/ui/carousel'
import { DesktopContainer, MobileContainer } from '~/const/StyleGlobal'

interface ITestimonialsProps {}

interface DataItemCard {
  content?: string
  userName?: string
  star?: number
  subTitle?: string
}

export const Testimonials: React.FC<ITestimonialsProps> = () => {
  const ItemCard = ({ content, userName, subTitle }: DataItemCard) => (
    <div className="p-4 lg:p-10 bg-neutral-2 rounded-lg h-full">
      <p className="typo-s18-w400 line-clamp-3 text-neutral-7">{content}</p>
      <p className="typo-s16-w700 mt-3 text-neutral-9">{userName}</p>
      <div>
        <i className="ri-star-fill text-yellow mr-1"></i>
        <i className="ri-star-fill text-yellow mr-1"></i>
        <i className="ri-star-fill text-yellow mr-1"></i>
        <i className="ri-star-fill text-yellow mr-1"></i>
        <i className="ri-star-fill text-yellow mr-1"></i>
      </div>
      {subTitle ? (
        <p className="typo-s14-w400 mt-1 text-neutral-6">{subTitle}</p>
      ) : null}
    </div>
  )
  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6">
          <WrapperTextTitle
            nameSection="Testimonials"
            title="Our great partner"
            subTitle="Quality partners and feedback from customers are the driving force behind our growth."
            textLeft={true}
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-12 gap-5">
            {AppData.dataGreatPartner?.map((item, index) => (
              <div className="col-span-6" key={index}>
                <img
                  src={item?.icon}
                  alt={`icon-${index}`}
                  width="90%"
                  className="pb-2 lg:p-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <DesktopContainer>
        <div className="grid grid-cols-12 gap-4 mt-10">
          {AppData?.dataRate?.map((item, index) => (
            <div className="col-span-12 lg:col-span-4" key={index}>
              <ItemCard
                content={item?.content}
                userName={item?.userName}
                subTitle={item?.subTitle}
              />
            </div>
          ))}
        </div>
      </DesktopContainer>
      <MobileContainer>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="mt-5 "
        >
          <CarouselContent>
            {AppData?.dataRate?.map((item, index) => (
              <CarouselItem key={index} className="basis-4/5">
                <ItemCard
                  content={item?.content}
                  userName={item?.userName}
                  subTitle={item?.subTitle}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </MobileContainer>
    </div>
  )
}
