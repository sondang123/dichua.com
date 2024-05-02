import React from 'react'
import { cn } from '~/lib/utils'

interface IDesktopContainerProps {
  children?: React.ReactNode
  className?: string
}
interface IMobileContainerProps {
  children?: React.ReactNode
  className?: string
}

export const DesktopContainer: React.FC<IDesktopContainerProps> = ({
  className,
  children,
}) => {
  return <div className={cn('hidden lg:block ', className)}>{children}</div>
}

export const MobileContainer: React.FC<IMobileContainerProps> = ({
  className,
  children,
}) => {
  return <div className={cn('block lg:hidden ', className)}>{children}</div>
}
