import { Link } from '@remix-run/react'
import React, { Fragment, MouseEventHandler, ReactNode } from 'react'
import { cn } from '~/lib/utils'

interface Props {
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  to?: string
  target?: string
  disabled?: boolean
  isExternal?: boolean
  title: ReactNode | string
  onClick?: MouseEventHandler<HTMLButtonElement>
  iconLeft?: ReactNode | undefined
  iconRight?: ReactNode | undefined
}

export const ButtonFullBg: React.FC<Props> = ({
  className = '',
  type = 'button',
  onClick,
  disabled,
  to,
  target,
  isExternal = false,
  title,
  iconLeft,
  iconRight,
  ...props
}) => {
  return (
    <Fragment>
      {(() => {
        if (!to || disabled) {
          return (
            <button
              onClick={onClick}
              type={type}
              disabled={disabled}
              className={cn(
                'px-3 py-2 border bg-gradient-to-r from-[#62A5FF] to-[#2E64EE] rounded-[6px] flex-center transition',
                disabled
                  ? ''
                  : 'hover:bg-gradient-to-l hover:from-[#62A5FF] hover:to-[#2E64EE]',
                className,
              )}
              {...props}
            >
              {iconLeft ? iconLeft : null}
              {title}
              {iconRight ? iconRight : null}
            </button>
          )
        } else if (to && isExternal) {
          return (
            <a href={to} className={className} target={target}>
              {title}
            </a>
          )
        } else {
          return (
            <Fragment>
              {to.startsWith('http') ? (
                <a href={to} target={target} className="btn">
                  {title}
                </a>
              ) : (
                <Link
                  reloadDocument
                  to={disabled ? '' : to}
                  target={target}
                  className="btn"
                >
                  {title}
                </Link>
              )}
            </Fragment>
          )
        }
      })()}
    </Fragment>
  )
}
