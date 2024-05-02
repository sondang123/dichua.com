import React from 'react'
import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'

import { AppResource } from '~/const/AppResource'
import { cn } from '~/lib/utils'
import { ButtonOutline } from '../AppButton/ButtonOutline'

interface IButtonStoreProps {
  className?: string
}

export const ButtonStore: React.FC<IButtonStoreProps> = ({ className }) => (
  <div className={cn('flex items-center ', className)}>
    <a
      href="https://play.google.com/store/search?q=GODHITECH%20JSC&c=apps&hl=vi-VN"
      target="_blank"
      rel="noreferrer"
    >
      <ButtonFullBg
        title={<p className="typo-s16-w500 text-white">Google Play</p>}
        iconLeft={
          <img
            src={AppResource.icons.ic_chPlay}
            alt="chPlay"
            width="20px"
            className="me-3"
          />
        }
        className="me-3 h-[44px] "
        onClick={() => {}}
      />
    </a>
    <a
      href="https://apps.apple.com/us/developer/godhitech-jsc/id1722381618"
      target="_blank"
      rel="noreferrer"
    >
      <ButtonOutline
        title={<p className="typo-s16-w500 text-main-primary ">Apple Store</p>}
        iconLeft={
          <img
            src={AppResource.icons.ic_AppleStore}
            alt="chPlay"
            width="20px"
            className="me-3 "
          />
        }
        onClick={() => {}}
        className="h-[40px]"
      />
    </a>
  </div>
)
