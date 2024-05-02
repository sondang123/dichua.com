import type { MetaFunction } from '@remix-run/cloudflare'
import { Fragment, useEffect, useState } from 'react'
import { AppBreadcrumb } from '~/components/AppBreadcrumb'
import { CardJob } from '~/components/HomeComponents/CardJob'
import { WrapperTextTitle } from '~/components/HomeComponents/WrapperTextTitle'
import { AppData } from '~/const/AppData'
import { useDebounce } from '@uidotdev/usehooks'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'
import { LeaveYourResume } from '~/components/HomeComponents/FindTheRightJob'
import { useNavigate } from '@remix-run/react'
export const meta: MetaFunction = () => {
  return [
    { title: 'God Hitech' },
    {
      name: 'God Hitech',
      content: 'God Hitech vươn tầm thế giới',
    },
  ]
}

interface typeSelectJob {
  name?: string
}

export default function Careers() {
  const [dataRenderJob, setDataRenderJob] = useState(AppData.dataJob)
  const [selectJob, setSelectJob] = useState<typeSelectJob>({
    name: 'All Jobs',
  })
  const [selectJobType, setSelectJobType] = useState<typeSelectJob>({
    name: 'All Jobs Type',
  })

  useEffect(() => {
    setDataRenderJob(AppData.dataJob)
  }, [AppData.dataJob])

  const navigate = useNavigate()
  const [textSearch, setTextSearch] = useState<string>('')
  const debouncedSearchTerm = useDebounce(textSearch, 300)
  const handleSearch = () => {
    if (debouncedSearchTerm) {
      const data = AppData.dataJob?.filter((item) =>
        item?.name
          ?.toLowerCase()
          ?.includes(debouncedSearchTerm?.toLocaleLowerCase()),
      )

      setDataRenderJob(data)
    } else if (
      !debouncedSearchTerm &&
      (selectJob?.name != 'All Jobs' || selectJobType?.name != 'All Jobs Type')
    ) {
      const data = AppData.dataJob?.filter(
        (item) =>
          item?.name === selectJob?.name ||
          item?.typeDate === selectJobType?.name,
      )

      setDataRenderJob(data)
    } else {
      setDataRenderJob(AppData.dataJob)
    }
  }

  return (
    <div>
      <div className="container mx-auto ">
        <div className="pt-10 py-5">
          <AppBreadcrumb
            listBreadcrumb={[{ name: 'Home', link: '/' }, { name: 'Careers' }]}
          />
        </div>
        <WrapperTextTitle
          nameSection="Careers"
          title="Find Your Perfect Job With Us"
          textLeft={false}
        />

        <div className="grid grid-cols-12 gap-5 lg:gap-8 lg:px-20 mt-5">
          <div className="col-span-12 lg:col-span-4">
            <Input
              type="text"
              placeholder="Keyword"
              onChange={(e) => {
                setTextSearch(e.target.value)
              }}
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full items-center justify-between py-3 lg:py-0 h-full focus:border-main-primary active:border-main-primary focus-visible:outline-none "
                >
                  {selectJob?.name === 'All Jobs' ? (
                    <p className="typo-s14-w500 text-neutral-4">All Jobs</p>
                  ) : (
                    <p className="text-neutral-7 typo-s14-w500">
                      {selectJob?.name}
                    </p>
                  )}
                  <i className="ri-arrow-drop-down-line ri-2x text-neutral-4"></i>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[350px] lg:w-[240px]">
                {AppData?.dataJob?.map((item, index) => (
                  <Fragment key={index}>
                    <DropdownMenuCheckboxItem
                      checked={selectJob?.name === item?.name}
                      onCheckedChange={() => {
                        if (selectJob?.name === item.name) {
                          setSelectJob({
                            name: 'All Jobs',
                          })
                        } else {
                          setSelectJob(item)
                        }
                      }}
                      className="cursor-pointer"
                    >
                      {item?.name}
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                  </Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full items-center justify-between  py-3 lg:py-0 h-full  focus:border-main-primary focus:outline-none"
                >
                  {selectJobType?.name === 'All Jobs Type' ? (
                    <p className="text-neutral-4 typo-s14-w500">
                      All Jobs Type
                    </p>
                  ) : (
                    <p className="text-neutral-7 typo-s14-w500">
                      {selectJobType?.name}
                    </p>
                  )}
                  <i className="ri-arrow-drop-down-line ri-2x text-neutral-4"></i>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[350px] lg:w-[240px]">
                {AppData?.jobType?.map((item, index) => (
                  <Fragment key={index}>
                    <DropdownMenuCheckboxItem
                      checked={selectJobType?.name === item?.name}
                      onCheckedChange={() => {
                        if (selectJobType?.name === item.name) {
                          setSelectJobType({
                            name: 'All Jobs Type',
                          })
                        } else {
                          setSelectJobType(item)
                        }
                      }}
                    >
                      {item?.name}
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                  </Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <ButtonFullBg
              title={<p className="text-white typo-s16-w500">Search</p>}
              iconLeft={<i className="ri-search-line text-white me-3"></i>}
              className="px-5 h-full w-full lg:w-[auto]"
              onClick={() => {
                handleSearch()
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 py-5 lg:py-10">
          {dataRenderJob?.length > 0 ? (
            <>
              {dataRenderJob?.map((item, index) => (
                <div className="col-span-12 lg:col-span-6" key={index}>
                  <CardJob
                    name={item.name}
                    date={item.date}
                    typeDate={item.typeDate}
                    address={item.address}
                    from={item.from}
                    to={item.to}
                    unit={item.unit}
                    onClick={() => {
                      navigate('/detail')
                    }}
                  />
                </div>
              ))}
            </>
          ) : (
            <div className="col-span-12 text-center">
              <p>Không có thông tin phù hợp</p>
            </div>
          )}
        </div>

        <LeaveYourResume />
      </div>
    </div>
  )
}
