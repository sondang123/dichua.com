import type { MetaFunction } from '@remix-run/cloudflare'
import { useNavigate } from '@remix-run/react'
import { AppBreadcrumb } from '~/components/AppBreadcrumb'
import { CardJob } from '~/components/HomeComponents/CardJob'
import { LeaveYourResume } from '~/components/HomeComponents/FindTheRightJob'
import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { AppData } from '~/const/AppData'
import { Textarea } from '~/components/ui/textarea'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'
// import { AppResource } from '~/const/AppResource'

export const meta: MetaFunction = () => {
  return [
    { title: 'God Hitech' },
    {
      name: 'God Hitech',
      content: 'God Hitech vươn tầm thế giới',
    },
  ]
}

export default function Detail() {
  const navigate = useNavigate()
  const formSchema = z.object({
    username: z.string().min(1, {
      message: 'Please enter username',
    }),
    email: z
      .string()
      .min(2, {
        message: 'please enter email',
      })
      .email({
        message: 'Please enter a valid email',
      }),
    phone: z.string().min(2, {
      message: 'Please enter the phone number',
    }),
    coverLetter: z.string().min(2, {
      message: 'Please enter ',
    }),
    file: z.any().refine(
      (files) => {
        if (!files) {
          return false
        }
        return Array.from(files).every((file) => file instanceof File)
      },
      { message: 'Expected a file' },
    ),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      coverLetter: '',
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>
      <div className="container mx-auto">
        <div className="pt-10 py-5">
          <AppBreadcrumb
            listBreadcrumb={[
              { name: 'Home', link: '/' },
              { name: 'Careers', link: '/careers' },
              { name: 'Job Detail' },
            ]}
          />
        </div>
        <div>
          <WrapperTextTitle title="UI/UX Designer" textLeft={false} />
          <div className="flex items-center justify-center gap-x-5 gap-y-2 flex-wrap border-b-2 border-shapes-2 pb-5 lg:pb-20 mb-10 lg:mb-20 mt-5">
            <div className="flex items-center mr-3">
              <i className="ri-briefcase-line mr-2"></i>
              <p className="typo-s18-w500 text-neutral-7 ">Full Time</p>
            </div>
            <div className="flex items-center ">
              <i className="ri-time-line mr-2"></i>

              <p className="typo-s18-w500 text-neutral-7">12/12/2024</p>
            </div>
            <div className="flex items-center mr-3">
              <i className="ri-map-pin-line mr-2"></i>
              <p className="typo-s18-w500 text-neutral-7">
                30 Ly Thai To, Ninh Xa, Bac Ninh
              </p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="typo-s18-w500 text-neutral-7">
                <i className="ri-money-dollar-circle-line text-[18px] mr-2"></i>
                ${500}-$
                {1000}
                <span className="text-neutral-5 font-normal">/Month</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 lg:gap-10 pb-5 lg:pb-10  ">
            <div className="col-span-12 lg:col-span-8">
              {AppData.dataDetailJobUX?.map((item, index) => (
                <div key={index}>
                  <p className="typo-s24-w700 text-neutral-9 mb-4 lg:mb-8">
                    {item?.title}
                  </p>
                  <ul className="list-disc ml-5 text-neutral-6">
                    {item?.content.map((itemContent, indexContent) => (
                      <li key={indexContent} className="">
                        <p className="typo-s16-w400 pb-2 lg:pb-4">
                          {itemContent?.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="border border-neutral-3 p-5 rounded-lg shadow-sm">
                <p className="typo-s24-w700 text-neutral-9 mb-5">Apply Now</p>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                  >
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <p className="typo-s14-w500 text-neutral-7">
                              Enter your name
                              <span className="text-error">*</span>
                            </p>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <p className="typo-s14-w500 text-neutral-7">
                              Email <span className="text-error">*</span>
                            </p>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <p className="typo-s14-w500 text-neutral-7">
                              Phone number <span className="text-error">*</span>
                            </p>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter phone number"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <p className="typo-s14-w500 text-neutral-7">
                              Cover letter
                              <span className="text-error">*</span>
                            </p>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cover letter"
                              {...field}
                              rows={7}
                              className="resize-none"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="file"
                      render={() => (
                        <FormItem>
                          <FormLabel>
                            <p className="typo-s14-w500 text-neutral-7">
                              Upload CV/Resume
                              <span className="text-error">*</span>
                            </p>
                          </FormLabel>
                          <FormControl>
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
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <ButtonFullBg
                      title={
                        <p className="typo-s16-w500 text-white py-1 ">
                          Submit now
                        </p>
                      }
                      className="w-full"
                      type="submit"
                    />
                  </form>
                </Form>
              </div>
              <div className="border border-neutral-3 p-5 rounded-lg mt-5 shadow-sm">
                <p className="typo-s24-w700 text-neutral-9 mb-3 lg:mb-5 font-plus-jakarta-sans">
                  Contact Info
                </p>
                <div className="flex items-center mb-2 lg:mb-3">
                  <i className="ri-user-line ri-2x text-neutral-6 mr-3"></i>
                  <p className="typo-s16-w700 text-neutral-9">Mrs. Hương</p>
                </div>
                <a
                  href="tel:0963526184"
                  className="hover:opacity-80 cursor-pointer transition"
                >
                  <div className="flex items-center mb-2 lg:mb-3">
                    <i className="ri-phone-line ri-2x text-neutral-6 mr-3"></i>
                    <p className="typo-s16-w700 text-neutral-9">0333.021.099</p>
                  </div>
                </a>
                <a
                  href="mailto:Hr@godhitech.com"
                  className="hover:opacity-80 cursor-pointer transition"
                >
                  <div className="flex items-center">
                    <i className="ri-mail-line ri-2x text-neutral-6 mr-3"></i>
                    <p className="typo-s16-w700 text-neutral-9">
                      hr@godgroup.com
                    </p>
                  </div>
                </a>
              </div>
              {/* <div className="border border-neutral-3 p-5 rounded-lg mt-5 shadow-sm">
                <p className="typo-s24-w700 text-neutral-9 mb-5 font-plus-jakarta-sans">
                  Share Job
                </p>
                <div className="grid grid-cols-10 gap-5 items-center px-5">
                  <div className="col-span-2">
                    <img
                      src={AppResource.icons.icon_facebook_color}
                      alt="facebook"
                      className="w-full object-contain hover:opacity-80 cursor-pointer"
                    />
                  </div>
                  <div className="col-span-2">
                    <img
                      src={AppResource.icons.icon_zalo_color}
                      alt="zalo"
                      className="w-full object-contain hover:opacity-80 cursor-pointer"
                    />
                  </div>
                  <div className="col-span-2">
                    <img
                      src={AppResource.icons.icon_mail_color}
                      alt="email"
                      className="w-full object-contain hover:opacity-80 cursor-pointer"
                    />
                  </div>
                  <div className="col-span-2">
                    <img
                      src={AppResource.icons.icon_instagram_color}
                      alt="instagram"
                      className="w-full object-contain hover:opacity-80 cursor-pointer"
                    />
                  </div>
                  <div className="col-span-2">
                    <img
                      src={AppResource.icons.icon_x_color}
                      alt="x"
                      className="w-full object-contain hover:opacity-80 cursor-pointer"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="">
            <p className="typo-s24-w500 text-gray-900 font-plus-jakarta-sans">
              More Job Openings
            </p>
            <div className="grid grid-cols-12 gap-5 py-10 ">
              {AppData?.dataJob?.map((item, index) => (
                <div className="col-span-12 lg:col-span-6" key={index}>
                  <CardJob
                    name={item.name}
                    date={item.date}
                    typeDate={item.typeDate}
                    address={item.address}
                    from={item.from}
                    to={item.to}
                    unit={item.unit}
                    onClick={() => {
                      navigate('/detail')
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="">
              <LeaveYourResume />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
