import { Link } from '@remix-run/react'
import React, { Fragment } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'

interface itemBreadCrumb {
  name: string
  link?: string | undefined
}
interface props {
  listBreadcrumb?: Array<itemBreadCrumb>
}

export const AppBreadcrumb: React.FC<props> = ({ listBreadcrumb }) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {listBreadcrumb?.map((item, index) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {item?.link ? (
                    <Link to={item?.link}>
                      <p
                        className={
                          'typo-s14-w500 text-neutral-5 hover:opacity-80 transition'
                        }
                      >
                        {item?.name}
                      </p>
                    </Link>
                  ) : (
                    <p className="typo-s14-w500 text-sematic-1">{item?.name}</p>
                  )}
                </BreadcrumbPage>
              </BreadcrumbItem>
              {listBreadcrumb?.length !== index + 1 ? (
                <BreadcrumbSeparator />
              ) : null}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
