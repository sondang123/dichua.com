import { Link } from '@remix-run/react'
import React from 'react'
import { AppData } from '~/const/AppData'
import { AppResource } from '~/const/AppResource'
export interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className="bg-neutral-9  ">
      <div
        className="bg-size-50 container mx-auto bg-cover bg-center bg-no-repeat pt-10"
        style={{
          backgroundImage: `url(${AppResource.images.img_map_footer})`,
          backgroundSize: '65%',
        }}
      >

        <div className="grid grid-cols-12 gap-5 gap-y-10 mt-10  border-b-2 border-neutral-7 pb-10">
          <div className="col-span-12 lg:col-span-8 ">
            <div>
              <img
                src={AppResource.images.img_logo_white}
                alt="logo"
                className="w-[50%] lg:w-[30%]"
              />
            </div>
            <h5 className="typo-s24-w500 mt-10 text-neutral-2">
              GODHITECH JOINT STOCK COMPANY
            </h5>
            <div className="mt-5 flex items-start">
              <p className="typo-s18-w700 w-[100px] text-neutral-4">Email:</p>
              <p className="typo-s18-w500 text-neutral-4">
                <a
                  href="mailto:contact@godhitech.com"
                  className="hover:opacity-80 transition"
                >
                  contact@godhitech.com
                </a>
              </p>
            </div>
            <div className="mt-5 flex items-start">
              <p className="typo-s18-w700 w-[100px] text-neutral-4">Website:</p>
              <p className="typo-s18-w500 text-neutral-4">
                <a
                  href="https://godhitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  https://godhitech.com
                </a>
              </p>
            </div>
            <div className="mt-5 flex items-start">
              <p className="typo-s18-w700 w-[100px]  text-neutral-4">
                Address:
              </p>
              <p className="typo-s18-w500 flex-1 text-neutral-4">
                4th floor, Viet Long Complex building, 30 Ly Thai To, Ninh Xa
                ward, Bac Ninh city, Bac Ninh province, Viet Nam
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:ml-auto">
            <span className="text-white typo-s24-w500">Menu</span>
            <div className="h-[2px] w-[50px] bg-main-primary mt-2"></div>
            {AppData.dataMenu?.map((item, index) => (
              <div key={index} className="mt-5">
                <Link to={item?.link} className="hover:opacity-80 transition">
                  <p className="text-neutral-4 typo-s18-w500">{item?.title}</p>
                </Link>
              </div>
            ))}
          </div>

          {/* <div className="col-span-3 ml-auto">
            <h3 className="text-white typo-s24-w400">FaceBook</h3>
            <div className="h-[2px] w-[50px] bg-main-primary mt-2"></div>
            <div
              className="fb-page mt-5"
              data-href="https://www.facebook.com/godgroup.llc?mibextid=ZbWKwL"
              data-tabs="timeline"
              data-width=""
              data-height="100"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/godgroup.llc?mibextid=ZbWKwL"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/godgroup.llc?mibextid=ZbWKwL">
                  GOD Group
                </a>
              </blockquote>
            </div>
          </div> */}
        </div>
        <div className="py-10">
          <p className="typo-s12-w500 text-center text-neutral-5">
            <i className="ri-copyright-line"></i> 2023 GOD HITECH. All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  )
}
