// import { AppResource } from '~/const/AppResource'
import React from 'react'
interface typeItem {
  avatar?: string
  name?: string
  position?: string
  facebook?: string
  zalo?: string
  email?: string
}

interface props {
  itemCell?: typeItem
}

export const CardMember: React.FC<props> = ({ itemCell }) => {
  return (
    <div className="border border-shapes-2 rounded-lg flex items-center justify-center px-5 py-5 lg:py-10 flex-col ">
      <div>
        {itemCell?.avatar ? (
          <img
            className="w-[70%] rounded-full ring-2 ring-white mx-auto pt-5"
            src={itemCell?.avatar}
            alt="avatar"
          />
        ) : null}
      </div>
      <p className="typo-s24-w700 text-neutral-7 pb-2 lg:pb-4 pt-5 lg:pt-10 text-center font-mulish">
        {itemCell?.name}
      </p>
      <p className="typo-s16-w500 text-neutral-6 pb-5 font-mulish text-center">
        {itemCell?.position}
      </p>
      {/* <div className="flex items-center mt-3">
        <i className="ri-facebook-circle-fill text-[30px] cursor-pointer hover:opacity-80"></i>
        <img
          src={AppResource.icons.icon_zalo}
          alt="zalo"
          className="w-[27px] mx-5 cursor-pointer hover:opacity-80"
        />
        <img
          src={AppResource.icons.icon_mail}
          alt="mail"
          className="w-[27px] cursor-pointer hover:opacity-80"
        />
      </div> */}
    </div>
  )
}
