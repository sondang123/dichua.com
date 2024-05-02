import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'
import { Input } from '~/components/ui/input'
import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { AppResource } from '~/const/AppResource'
import React from 'react'
export const LeaveYourResume: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 lg:gap-10 py-10">
        <div className="col-span-12 lg:col-span-6">
          <WrapperTextTitle
            nameSection="Can’t find the right position"
            title="Leave your resume to help you find the right job"
            textLeft={true}
          />
          <div className="grid grid-cols-12 gap-5 mt-10">
            <div className="col-span-12 lg:col-span-6">
              <Input placeholder="Name *" type="text" />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Input placeholder="Email *" type="email" />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Input placeholder="Phone number *" type="text" />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Input placeholder="Your position*" type="text" />
            </div>
            <div className="col-span-12 relative z-2">
              <div className="bg-neutral-2 h-full w-full absolute top-0 right-0 left-0 bottom-0 z-0 rounded border border-dashed border-neutral-4 cursor-pointer ">
                <p className="text-neutral-6 typo-s16-w500 text-center h-full flex-center">
                  Upload file
                  <span className="typo-shapes-3 typo-s16-w50 my-auto ml-2">
                    (.doc, .docx, .pdf) *
                  </span>
                </p>
              </div>
              <Input
                id="picture"
                type="file"
                className="opacity-0 z-2 cursor-pointer"
                accept=".doc,.docx,.pdf"
              />
            </div>
            <div className="col-span-12">
              <ButtonFullBg
                title={<p className="typo-s16-w500 text-white">Submit now</p>}
                className="py-3 px-5 w-full lg:w-[auto]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <img
            src={AppResource.images.img_careers_1}
            alt="img"
            className="w-full object-contain"
          />
        </div>
      </div>
    </>
  )
}
