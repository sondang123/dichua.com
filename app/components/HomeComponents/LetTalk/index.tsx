import React from 'react'
import { WrapperTextTitle } from '../WrapperTextTitle'
import { AppResource } from '~/const/AppResource'
import { BaseInput } from '~/components/CustomUi/Common/Input/BaseInput'

import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'

import { useToast } from '~/components/ui/use-toast'
import { Textarea } from '~/components/ui/textarea'

// interface props {}
export const LetTalk: React.FC = () => {
  const { toast } = useToast()
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5 ">
        <div className="col-span-12 lg:col-span-6">
          <WrapperTextTitle
            nameSection="Let’s Talk"
            title="Get in touch with us"
            // subTitle={
            //   'Explore Our Latest Completed Projects: A Journey of Creativity, Effectiveness, and Excellence'
            // }
            textLeft={true}
          />
          <div>
            <div className="grid grid-cols-12 gap-5 mt-10 lg:mt-20">
              <div className="col-span-12 lg:col-span-6">
                <BaseInput placeholder="Your name" />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <BaseInput placeholder="Your email" />
              </div>
            </div>
            <div className="mt-5">
              <Textarea placeholder="Let us know what you need" rows={10} />
            </div>

            <ButtonFullBg
              onClick={() => {
                toast({
                  title: 'Đã gửi thành công! ',
                  variant: 'success',
                })
              }}
              title={<p className="text-white typo-s16-w500">Send Message</p>}
              className="py-3 lg:py-4 px-8 mt-5 w-full"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <img
            src={AppResource.images.img_let_talk}
            alt="img_let_talk"
            className=" mx-auto"
          />
        </div>
      </div>
    </div>
  )
}
