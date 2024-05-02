import React, { MouseEventHandler } from 'react'

import { Button } from '~/components/ui/button'

interface ICardJobProps {
  name: string
  typeDate: string
  date: string
  address: string
  from: string
  to: string
  unit: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const CardJob: React.FC<ICardJobProps> = ({
  name,
  typeDate,
  date,
  address,
  from,
  to,
  unit,
  onClick = () => {},
}) => {
  return (
    <div className="border border-shapes-2 p-5 rounded-lg bg-shapes-1 shadow-sm ">
      <p className="typo-s20-w700 text-neutral-8">{name}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center ">
          <i className="ri-briefcase-line mr-2"></i>
          <p className="typo-s14-w400 text-neutral-7">{typeDate}</p>
        </div>
        <div className="flex items-center ">
          <i className="ri-time-line mr-2"></i>

          <p className="typo-s14-w400 text-neutral-7">{date}</p>
        </div>
      </div>
      <div className="flex mt-3 items-center">
        <i className="ri-map-pin-line mr-2"></i>
        <p className="typo-s14-w400 text-neutral-7">{address}</p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="typo-s16-w500 text-neutral-7">
          ${from}-${to}
          <span className="text-neutral-5 font-normal">/{unit}</span>
        </p>

        <Button
          className="bg-shapes-2 hover:opacity-80 hover:bg-shapes-2 transition"
          onClick={onClick}
        >
          <p className="typo-s16-w500 text-main-primary">Apply Now</p>
        </Button>
      </div>
    </div>
  )
}
