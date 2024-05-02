import { Link, useLocation, useNavigate } from '@remix-run/react'
import React, { useEffect, useState } from 'react'
import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import { AppData } from '~/const/AppData'
import { AppResource } from '~/const/AppResource'
import { DesktopContainer, MobileContainer } from '~/const/StyleGlobal'
import { cn } from '~/lib/utils'

export interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [isSticky, setIsSticky] = useState(false)
  const [open, setOpen] = React.useState(false)
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <DesktopContainer
        className={cn(
          ' sticky top-0  z-40 bg-white',
          isSticky ? 'shadow-lg duration-200 ease-in' : ''
        )}
      >
        <div>
          <div className="container mx-auto ">
            <nav className="flex h-[80px] items-center justify-between ">
              <Link to="/">
                <img
                  src={AppResource.images.img_logo}
                  alt="logo"
                  className="h-[44px] object-contain"
                />
              </Link>
              <div className="flex items-center">
                {AppData.dataMenu?.map((item, index) => {
                  if (
                    pathname === item?.link ||
                    (pathname === '/detail' && item?.link === '/careers')
                  ) {
                    return (
                      <Link
                        to={item?.link}
                        className="hover:opacity-80 p-3 mr-3 border-b-2 border-main-primary transition"
                        key={index}
                      >
                        <p className="typo-s16-w700 text-main-primary">
                          {item?.title}
                        </p>
                      </Link>
                    )
                  } else {
                    return (
                      <Link
                        to={item?.link}
                        className="hover:opacity-80 p-5 mr-3 transition"
                        key={index}
                      >
                        <p className="typo-s16-w500 text-neutral-5">
                          {item?.title}
                        </p>
                      </Link>
                    )
                  }
                })}
              </div>
              <div>
                <ButtonFullBg
                  title={<p className="typo-s16-w500 text-white">Let’s talk</p>}
                  onClick={() => {
                    navigate('/contact')
                  }}
                />
              </div>
            </nav>
          </div>
        </div>
      </DesktopContainer>
      <MobileContainer
        className={cn(
          ' sticky top-0  z-40 bg-white',
          isSticky ? 'shadow-lg  duration-200 ease-in' : ''
        )}
      >
        <div>
          <div className="container mx-auto ">
            <nav className="flex  h-[56px] items-center justify-between ">
              <Link to="/">
                <img
                  src={AppResource.images.img_logo}
                  alt="logo"
                  className="h-[32px] object-contain"
                />
              </Link>

              <div>
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <i className="ri-menu-line ri-2x"></i>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[70%]">
                    {/* <SheetHeader></SheetHeader> */}
                    <div>
                      <Link
                        to="/"
                        onClick={() => {
                          setOpen(false)
                        }}
                      >
                        <img
                          src={AppResource.images.img_logo}
                          alt="logo"
                          className="h-[32px] object-contain"
                        />
                      </Link>
                    </div>
                    <div className="mt-3">
                      {AppData.dataMenu?.map((item, index) => {
                        if (
                          pathname === item?.link ||
                          (pathname === '/detail' && item?.link === '/careers')
                        ) {
                          return (
                            <Link
                              to={item?.link}
                              className="hover:opacity-80 transition"
                              key={index}
                              onClick={() => {
                                setOpen(false)
                              }}
                            >
                              <p className="typo-s16-w700 text-main-primary py-3 border-b border-shapes-2">
                                {item?.title}
                              </p>
                            </Link>
                          )
                        } else {
                          return (
                            <Link
                              to={item?.link}
                              className="hover:opacity-80 transition"
                              key={index}
                              onClick={() => {
                                setOpen(false)
                              }}
                            >
                              <p className="typo-s16-w500 text-neutral-5 py-3 border-b border-shapes-2">            
                                {item?.title}
                              </p>
                            </Link>
                          )
                        }
                      })}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </nav>
          </div>
        </div>
      </MobileContainer>
    </>
  )
}
