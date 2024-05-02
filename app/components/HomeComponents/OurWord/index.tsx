import React from 'react'
import { WrapperTextTitle } from '../WrapperTextTitle'
import { AppResource } from '~/const/AppResource'
import { DesktopContainer, MobileContainer } from '~/const/StyleGlobal'

interface IOurWordProps {}

export const OurWord: React.FC<IOurWordProps> = () => {
  return (
    <div className="container mx-auto py-10 lg:py-20">
      <WrapperTextTitle
        nameSection="Our Products"
        title="Checkout our Recently Completed Projects"
        subTitle={
          'Explore Our Latest Completed Projects: A Journey of Creativity, Effectiveness, and Excellence'
        }
        textLeft={false}
        classNameTitle="lg:px-3 mx-auto"
        classNameSubTitle="px-3 lg:px-0s"
      />
      <div className="grid grid-cols-12 gap-4 lg:gap-8 mt-10">
        <div className="col-span-12 lg:col-span-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.godhitech.diary.journal.lock.mood&hl=vi-VN"
            target="_blank"
            rel="noreferrer"
          >
            <DesktopContainer>
              <img
                src={AppResource.images.img_home_downLoad_1}
                alt="img_home_downLoad_1"
                className="w-full rounded-lg hover:opacity-90 transition"
              />
            </DesktopContainer>
            <MobileContainer>
              <img
                src={AppResource.images.img_diary_me_mobile}
                alt="img_home_downLoad_1"
                className="w-full rounded-lg hover:opacity-90 transition"
              />
            </MobileContainer>
          </a>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="grid grid-cols-12 gap-4 lg:gap-8">
            <div className="col-span-6 lg:col-span-12">
              <a
                href="https://play.google.com/store/apps/details?id=com.godhitech.screencast&hl=vi-VN"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={AppResource.images.img_home_downLoad_2}
                  alt="img_home_downLoad_1"
                  className="w-full rounded-lg hover:opacity-90 transition"
                />
              </a>
            </div>
            <div className="col-span-6 lg:col-span-12">
              <a
                href="https://play.google.com/store/apps/details?id=com.godhitech.todolist.planner.schedule.reminder&hl=vi-VN"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={AppResource.images.img_home_downLoad_3}
                  alt="img_home_downLoad_1"
                  className="w-full rounded-lg hover:opacity-90 transition"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="grid grid-row-12 gap-8 ">
            <div className="row-span-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.godhitech.voicechanger&hl=vi-VN"
                target="_blank"
                rel="noreferrer"
              >
                <DesktopContainer>
                  <img
                    src={AppResource.images.img_home_downLoad_4}
                    alt="img_home_downLoad_1"
                    className="w-full rounded-lg hover:opacity-90 transition"
                  />
                </DesktopContainer>
                <MobileContainer>
                  <img
                    src={AppResource.images.img_voice_changer_mobile}
                    alt="img_home_downLoad_1"
                    className="w-full rounded-lg hover:opacity-90 transition"
                  />
                </MobileContainer>
              </a>
            </div>
            <div className="lg:row-span-4 ">
              <a
                href={
                  'https://play.google.com/store/apps/dev?id=7274700016482359155&hl=vi-VN'
                }
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center transform hover:-translate-y-2 transition duration-200 cursor-pointer hover-opacity-90">
                  <p
                    className={
                      'flex-1 shrink-1 typo-s24-w400 text-main-primary'
                    }
                  >
                    Explore more products
                  </p>
                  <i className="ri-arrow-right-line text-[24px] text-main-primary"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
