import React from 'react'
import { cn } from '~/lib/utils'
interface IWrapperTextTitleProps {
  textLeft?: boolean
  nameSection?: string
  title?: string | React.ReactNode
  subTitle?: string | React.ReactNode
  classNameTitle?: string
  classNameSubTitle?: string
}
export const WrapperTextTitle: React.FC<IWrapperTextTitleProps> = ({
  textLeft = true,
  nameSection,
  title,
  subTitle,
  classNameTitle,
  classNameSubTitle,
}) => {
  return (
    <div>
      {nameSection ? (
        <p
          className={cn(
            'typo-s20-w400 mb-3 text-main-primary',
            textLeft ? 'text-left' : 'text-center'
          )}
        >
          {nameSection}
        </p>
      ) : null}
      {title ? (
        <h3
          className={cn(
            'typo-s48-w400 ',
            textLeft ? 'text-left' : 'mx-auto text-center',
            classNameTitle
          )}
        >
          {title}
        </h3>
      ) : null}
      {subTitle ? (
        <p
          className={cn(
            'typo-s20-w400 mt-3 text-neutral-5',
            textLeft
              ? ' text-left lg:w-[90%]'
              : 'mx-auto text-center lg:w-[40%]',
            classNameSubTitle
          )}
        >
          {subTitle}
        </p>
      ) : null}
    </div>
  )
}
