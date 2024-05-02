import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { AppData } from '~/const/AppData'
import { CardMember } from '../CardMember'
import React from 'react'
import { DesktopContainer, MobileContainer } from '~/const/StyleGlobal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '~/components/ui/carousel'
interface props {}

export const OurBest: React.FC<props> = () => {
  return (
    <div className="container mx-auto py-10 lg:py-20">
      <WrapperTextTitle
        nameSection="Our Best"
        title="Meet Our Team"
        subTitle="We commit to continuously exerting effort and innovating to bring about genuine value"
        textLeft={false}
      />
      <div>
        <DesktopContainer>
          <div className="grid grid-cols-12 gap-5 mt-10">
            {AppData?.listInfoMember?.map((item, index) => (
              <div key={index} className="col-span-4 ">
                <CardMember itemCell={item} />
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
              {AppData?.listInfoMember?.map((item, index) => (
                <CarouselItem key={index} className="basis-4/5">
                  <CardMember itemCell={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </MobileContainer>
      </div>
    </div>
  )
}
