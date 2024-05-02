import type { MetaFunction } from '@remix-run/cloudflare'
import { AppBreadcrumb } from '~/components/AppBreadcrumb'
import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'
import { BaseInput } from '~/components/CustomUi/Common/Input/BaseInput'

import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { Textarea } from '~/components/ui/textarea'
import { toast } from '~/components/ui/use-toast'

export const meta: MetaFunction = () => {
  return [
    { title: 'God Hitech' },
    {
      name: 'God Hitech',
      content: 'God Hitech vươn tầm thế giới',
    },
  ]
}

export default function Contact() {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="pt-10 py-5">
          <AppBreadcrumb
            listBreadcrumb={[
              { name: 'Home', link: '/' },
              { name: 'Contact us' },
            ]}
          />
        </div>
        <div className="grid grid-cols-12 gap-3 py-5 lg:py-10 ">
          <div className="col-span-12 lg:col-span-6 ">
            <WrapperTextTitle
              title="Get In Touch With Us"
              subTitle="Connect with us to explore more about the best services and solutions for your needs."
              textLeft={true}
              classNameTitle="tracking-[-3px]"
            />

            <div className="py-5 lg:py-10">
              <a href="mailto:contact@godhitech.com">
                <div className="flex items-center mb-3 hover:opacity-80 cursor-pointer transition">
                  <i className="ri-mail-line ri-2x mr-3 "></i>
                  <div>
                    <p className="text-neutral-6 typo-s16-w500">Email</p>
                    <p className="text-neutral-7 typo-s16-w700">
                      contact@godhitech.com
                    </p>
                  </div>
                </div>
              </a>

              <div className="flex items-center mb-3 hover:opacity-80 transition">
                <i className="ri-map-pin-line ri-2x mr-3"></i>
                <div>
                  <p className="text-neutral-6 typo-s16-w500">Address</p>
                  <p className="text-neutral-7 typo-s16-w700">
                    4th floor, Viet Long Complex building, 30 Ly Thai To Street,
                    Ninh Xa Ward, Bac Ninh City, Bac Ninh Province, Viet Nam
                  </p>
                </div>
              </div>

              <a href="tel:+84339064886">
                <div className="flex items-center hover:opacity-80 transition">
                  <i className="ri-phone-line ri-2x mr-3"></i>
                  <div>
                    <p className="text-neutral-6 typo-s16-w500">Phone Number</p>
                    <p className="text-neutral-7 typo-s16-w700">+84339064886</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 ">
            <iframe
              src={
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4261695277987!2d106.06316517551775!3d21.175222882731457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350d972e5d11f7%3A0xb99ba6229b35e3db!2sVIET%20LONG%20COMPLEX%20Residence!5e0!3m2!1sen!2s!4v1713864218674!5m2!1sen!2s'
              }
              title="GODHITECH"
              width="100%"
              height="100%"
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
              allowFullScreen={true}
              frameBorder={0}
              allow="fullscreen"
              className="shadow aspect-video"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="py-5 lg:py-10">
        <div className="container mx-auto">
          <WrapperTextTitle
            nameSection="Contact us"
            title="Write A Message"
            textLeft={false}
          />
          <div className="lg:w-[70%] mx-auto">
            <div className="grid grid-cols-12 gap-5 py-5 lg:py-10">
              <div className="col-span-12 lg:col-span-6">
                <BaseInput placeholder="Your name" />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <BaseInput placeholder="Enter email" />
              </div>
            </div>
            <div className="">
              <Textarea placeholder="Message" rows={10} />
            </div>

            <ButtonFullBg
              onClick={() => {
                toast({
                  title: 'Đã gửi thành công! ',
                  variant: 'success',
                })
              }}
              title={<p className="text-white typo-s16-w500">Send Message</p>}
              className="py-3 lg:py-4 px-8 mt-5 mx-auto w-full lg:w-[auto]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
