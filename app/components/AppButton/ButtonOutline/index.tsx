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

export const ButtonOutline: React.FC<Props> = ({
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
}) => {
  return (
    <span>
      {(() => {
        if (!to || disabled) {
          return (
            <button
              onClick={onClick}
              type={type}
              disabled={disabled}
              className={cn(
                'px-3 py-2 rounded-[6px] flex-center text-main-primary outline outline-2',
                disabled ? '' : 'hover:opacity-80 transition',
                className,
              )}
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
    </span>
  )
}
