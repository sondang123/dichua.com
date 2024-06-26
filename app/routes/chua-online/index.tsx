import type { MetaFunction } from '@remix-run/cloudflare'
import { useState } from 'react'
import { AppBreadcrumb } from '~/components/AppBreadcrumb'
import { Meditate } from '~/components/PagodaOnlineComponents/Meditate'
import { ModalOffering } from '~/components/PagodaOnlineComponents/ModalOffering'
import { ModalShop } from '~/components/PagodaOnlineComponents/ModalShop'
import { ReadBuddhist } from '~/components/PagodaOnlineComponents/ReadBuddhist'
import { Button } from '~/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '~/components/ui/dialog'
import { AppResource } from '~/const/AppResource'
import { cn } from '~/lib/utils'
export const meta: MetaFunction = () => {
  return [
    { title: 'dichua.com' },
    {
      name: 'Đi Chùa',
      content: '',
    },
  ]
}

enum typeSelect {
  'THAP_HUONG' = 'THAP_HUONG',
  'CONG_DUC' = 'CONG_DUC',
  'GIEO_QUE' = 'GIEO_QUE',
  'DOC_KINH' = 'DOC_KINH',
  'NGOI_THIEN' = 'NGOI_THIEN',
}
export default function PagodaOnline() {
  const [selectStatus, setSelectStatus] = useState<typeSelect>()
  const [showModalShop, setShowModalShop] = useState<boolean>(false)
  const [showModalFile, setShowModalFile] = useState<boolean>(false)
  const [showModalForm, setShowModalForm] = useState<boolean>(false)
  const [valueForm, setValueForm] = useState<{
    username?: string
    money?: string
    address?: string
  } | null>()

  const [selectShop, setSelectShop] = useState<
    {
      img?: string
      name?: string
      price?: string
    }[]
  >([])

  return (
    <div>
      <div className="container mx-auto overflow-hidden ">
        <div className="py-5 pt-10">
          <AppBreadcrumb
            listBreadcrumb={[
              { name: 'Trang chủ', link: '/' },
              { name: 'Chùa online' },
            ]}
          />
          <div className="relative mt-5">
            <img
              src={AppResource.images.img_tam_bao_2}
              alt=""
              className="aspect-[21/9] w-full object-cover object-bottom "
            />
            {selectStatus === typeSelect?.THAP_HUONG ? (
              <div>
                <img
                  src={AppResource.images.img_lu_huong}
                  alt=""
                  className={cn(
                    'tr absolute left-[50%] w-[60px] translate-x-[-50%] transform duration-500 animate-in slide-in-from-top lg:w-[170px]',
                    selectShop?.length > 0
                      ? 'bottom-[10px] lg:bottom-[97px]'
                      : 'bottom-[0px]'
                  )}
                />
                <div id="smoke">
                  <span className="s0"></span>
                  <span className="s1"></span>
                  <span className="s2"></span>
                  <span className="s3"></span>
                  <span className="s4"></span>
                  <span className="s5"></span>
                  <span className="s6"></span>
                  <span className="s7"></span>
                  <span className="s8"></span>
                  <span className="s9"></span>
                </div>
              </div>
            ) : null}
            <div className="absolute bottom-[10px] left-[10px] lg:bottom-[120px] ">
              <Dialog open={showModalShop} onOpenChange={setShowModalShop}>
                <DialogTrigger>
                  <i className="ri-store-fill lg:ri-2x cursor-pointer rounded-[50%] bg-white p-2 hover:opacity-80 lg:p-3"></i>
                </DialogTrigger>
                <ModalShop
                  open={showModalShop}
                  onOpenChange={() => setShowModalShop(false)}
                  onSubmit={(item) => {
                    setSelectShop([...selectShop, item])
                    setShowModalShop(false)
                  }}
                  selectShop={selectShop}
                />
              </Dialog>
            </div>
            <div className=" bg-gray-200">
              <div className="grid grid-cols-12 justify-center justify-items-center">
                {selectShop?.map((item, index) => (
                  <div className="col-span-1" key={index}>
                    <img
                      src={item?.img}
                      alt=""
                      className="h-[90px] w-full object-contain animate-in slide-in-from-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="scrolling-text  mt-3 ">
            <p className="typo-s20-w700 text-yellow">
              Xin thường niệm Nam mô a di đà phật
            </p>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => {
                setSelectStatus(typeSelect?.THAP_HUONG)
              }}
              className="bg-orange-600"
            >
              Thắp hương
            </Button>

            <Dialog open={showModalForm} onOpenChange={setShowModalForm}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500">Công đức</Button>
              </DialogTrigger>
              <ModalOffering
                handleSubmit={(value) => {
                  setValueForm(value)
                  setShowModalFile(true)
                  setShowModalForm(false)
                }}
              />
            </Dialog>
            <Dialog open={showModalFile} onOpenChange={setShowModalFile}>
              <DialogContent>
                <div>
                  <div
                    className="mt-1 grid grid-cols-12 gap-5 overflow-x-auto "
                    id="phieu"
                  >
                    <div className="col-span-12 mb-3 pt-5">
                      <h3 className="typo-s32-w400 border-b pb-2 text-center font-plus-jakarta-sans font-bold">
                        Phiếu ghi nhận công đức
                      </h3>

                      <p className="typo-s18-w500 py-2 text-center">
                        <span className="text-sematic-1">
                          Ngày 03 tháng 05 năm 2024
                        </span>
                      </p>
                      <div>
                        <p>Họ và tên: {valueForm?.username}</p>
                        <p>Số tiền: {valueForm?.money}đ</p>
                        <p>Địa chỉ : {valueForm?.address}</p>
                      </div>
                      <div>
                        {' '}
                        <p className="pt-2 italic text-error">
                          Xin trân thành cảm ơn bạn {valueForm?.username} đã
                          công đức số tiền {valueForm?.money}đ về dichua.com ,
                          kính chúc bạn và gia đình hạnh phúc .
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <img
                        src={AppResource.images.img_anh_phat}
                        alt=""
                        className="w-full object-cover "
                      />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button className="bg-orange-400">Gieo quẻ</Button>
            <Button
              className="bg-orange-300"
              onClick={() => {
                setSelectStatus(typeSelect?.DOC_KINH)
              }}
            >
              Đọc kinh
            </Button>
            <Button
              className="bg-orange-200"
              onClick={() => {
                setSelectStatus(typeSelect?.NGOI_THIEN)
              }}
            >
              Ngồi thiền
            </Button>
          </div>
          <div>
            {selectStatus === typeSelect?.NGOI_THIEN ? <Meditate /> : null}
            {selectStatus === typeSelect?.DOC_KINH ? <ReadBuddhist /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
