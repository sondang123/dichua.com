import React from 'react'
import { Button } from '~/components/ui/button'
import { AppResource } from '~/const/AppResource'

export const FilePrint: React.FC = () => {
  const handlePrint = () => {
    const printContents = document.getElementById('phieu')
    const content = printContents?.innerHTML
    const originalContents = document.body.innerHTML

    document.body.innerHTML = content ?? ''

    window.print()
    document.body.innerHTML = originalContents
  }
  return (
    <div>
      <div className="mt-5 grid grid-cols-12 gap-5 " id="phieu">
        <div className="col-span-6 mb-3 pt-5">
          <h3 className="typo-s32-w400 border-b pb-2 text-center font-plus-jakarta-sans font-bold">
            Phiếu ghi nhận công đức
          </h3>

          <p className="typo-s18-w500 pt-2 text-center">
            <span className="text-sematic-1">Ngày 20 tháng 12 năm 2020</span>
          </p>
          <div>
            <p>Họ và tên:</p>
            <p>Số tiền: </p>
            <p>Địa chỉ :</p>
          </div>
          <div>
            {' '}
            <p className="italic text-error">
              Xin trân thành cảm ơn bạn ... đã công đức .... về dichua.com ,
              kính chúc bạn và gia đình hạnh phúc .<br />
            </p>
          </div>
        </div>
        <div className="col-span-6">
          <img
            src={AppResource.images.img_anh_phat}
            alt=""
            className="w-full object-cover "
          />
        </div>
      </div>
      <Button
        onClick={() => {
          handlePrint()
        }}
      >
        print
      </Button>
    </div>
  )
}
