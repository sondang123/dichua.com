import type { MetaFunction } from '@remix-run/cloudflare'
import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { TextTitle } from '~/components/TitleComponent'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'

import { AppData } from '~/const/AppData'
import { AppResource } from '~/const/AppResource'
import { DesktopContainer } from '~/const/StyleGlobal'
export const meta: MetaFunction = () => {
  return [
    { title: 'dichua.com' },
    {
      name: 'Đi Chùa',
      content: '',
    },
  ]
}

export default function Index() {
  return (
    <>
      <div className="mt-4 lg:mt-0">
        <div className="container mx-auto">
          <div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="mb-5 mt-5 "
            >
              <CarouselContent className="">
                {AppData.dataBanner?.map((item, index) => (
                  <CarouselItem key={index} className="base-1 lg:basis-2/4">
                    <img
                      src={item?.img}
                      alt=""
                      className="aspect-[16/9] w-full object-cover "
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <DesktopContainer>
                <CarouselPrevious />
                <CarouselNext />
              </DesktopContainer>
            </Carousel>
          </div>
          <TextTitle title="Video Nổi bật" />
          <div className="my-10">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/J1iDHj8ONiA?si=rYJ85Az-I5tVJbIN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="100%"
                    height="100%"
                  ></iframe>
                  <p className="typo-s18-w600 mt-2">
                    Cười Xỉu với bài giảng - Thầy Thích Pháp Hòa (Vui quá)
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/HA7Cc7jziiQ?si=OFm0etDHGm4XgUSA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="100%"
                    height="100%"
                  ></iframe>
                  <p className="typo-s18-w600 mt-2">
                    Cách để mọi việc thuận theo ý mình - Thầy Thích Pháp Hòa
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/uY0f7cwHOgw?si=q6jiASSeAtKCq31u"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="100%"
                    height="100%"
                  ></iframe>
                  <p className="typo-s18-w600 mt-2">
                    Để nhân quả trả lời - Thầy Thích Pháp Hòa
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/atZhgEMAVHY?si=zkrLYd_B-K1Ly8R6"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="100%"
                    height="100%"
                  ></iframe>
                  <p className="typo-s18-w600 mt-2">
                    Giữ phước báu cho gia đình - Thầy Thích Pháp Hòa (quá hay)
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6"></div>
            </div>
          </div>
          <TextTitle title="Nghe kinh mỗi ngày" />

          <div className="mb-5">
            <WrapperTextTitle
              // nameSection="Our Company"
              title="Ngày 03/05/2024"
              // subTitle="Chùa Bái Đính là một quần thể chùa lớn với nhiều kỷ lục châu Á và Việt Nam được xác lập như chùa có tượng Phật bằng đồng dát vàng lớn nhất châu Á, chùa có hành lang La Hán dài nhất châu Á,[2][3] có tượng Di lặc bằng đồng lớn nhất Đông Nam Á... "
              textLeft={false}
              classNameSubTitle="lg:w-full mx-auto"
            />
            <div className="mt-3 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NN9rFCbtUvM?si=pIkB1idrWXDE_4ee"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <TextTitle title="Top Địa Điểm Nổi Bật" />

          <div className="my-10">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-6">
                <img
                  src={AppResource.images.img_chua_mot_cot}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <WrapperTextTitle
                  // nameSection="Our Company"
                  title="Chùa một cột"
                  subTitle="Chùa Một Cột có tên ban đầu là Liên Hoa Đài (蓮花臺)[1][2][3] tức là Đài Hoa Sen với lối kiến trúc độc đáo: một điện thờ đặt trên một cột trụ duy nhất. Liên Hoa Đài là công trình nổi tiếng nhất nằm trong quần thể kiến trúc Chùa Diên Hựu (延祐寺)[1][4], có nghĩa là ngôi chùa Phúc lành dài lâu"
                  textLeft={false}
                  classNameSubTitle="lg:w-full mx-auto"
                />
              </div>
            </div>
            <div className="mt-10  grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-6">
                <WrapperTextTitle
                  // nameSection="Our Company"
                  title="Chùa bãi đính"
                  subTitle="Chùa Bái Đính là một quần thể chùa lớn với nhiều kỷ lục châu Á và Việt Nam được xác lập như chùa có tượng Phật bằng đồng dát vàng lớn nhất châu Á, chùa có hành lang La Hán dài nhất châu Á,[2][3] có tượng Di lặc bằng đồng lớn nhất Đông Nam Á... "
                  textLeft={false}
                  classNameSubTitle="lg:w-full mx-auto"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <img
                  src={AppResource.images.img_chua_ba_dinh}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
