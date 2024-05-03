import React from 'react'
import { Button } from '~/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog'
import { AppData } from '~/const/AppData'
interface props {
  open?: boolean
  onOpenChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (item: { img?: string; name?: string; price?: string }) => void
  selectShop?: {
    img?: string
    name?: string
    price?: string
  }[]
}
export const ModalShop: React.FC<props> = ({ onSubmit = () => {} }) => {
  return (
    <DialogContent className="sm:max-w-[700px]">
      <DialogHeader>
        <DialogTitle className="text-center">Cửa hàng</DialogTitle>
        <div className="max-h-[50vh] overflow-auto">
          {AppData.dataShop?.map((item, index) => (
            <div key={index} className="mb-5">
              <h3 className="mb-3 ">{item?.title}</h3>
              <div className="grid grid-cols-12 gap-4">
                {item?.list?.map((itemList, index) => (
                  <div
                    className={
                      'col-span-4 flex h-full cursor-pointer flex-col border'
                    }
                    key={index}
                  >
                    <img
                      src={itemList?.img}
                      alt=""
                      className="mb-2 w-full flex-1 object-contain"
                    />
                    <div className="mx-auto py-2 text-center">
                      <p className="text-center ">{itemList?.name}</p>
                      <p className="text-center ">{itemList?.price}</p>
                      <Button
                        className="mt-2 h-[30px] bg-main-primary"
                        type="submit"
                        onClick={() => {
                          onSubmit(itemList)
                        }}
                      >
                        Mua ngay
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogHeader>{' '}
    </DialogContent>
  )
}
