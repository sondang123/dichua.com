import { ButtonStore } from '~/components/ButtonStore'
import { WrapperTextTitle } from '../WrapperTextTitle'
import { AppResource } from '~/const/AppResource'

export const DownLoadNow = () => {
  return (
    <div className="bg-main-1 py-10 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto ">
        <WrapperTextTitle
          title="Download now"
          subTitle="Join 63,000+ people connect with us"
          textLeft={false}
        />
        <div className="flex-center mt-5 lg:mt-10">
          <ButtonStore />
        </div>
        <img
          src={AppResource.icons.icon_left_down_now}
          alt="icon-left"
          className="absolute top-0 left-0 w-[25%] z-0"
        />
        <img
          src={AppResource.icons.icon_right_down_now}
          alt="icon-right"
          className="absolute top-0 right-[-50px] bottom-0 w-[25%]"
        />
      </div>
    </div>
  )
}
