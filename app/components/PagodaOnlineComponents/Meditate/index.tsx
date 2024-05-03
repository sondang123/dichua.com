import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'
import { Label } from '~/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { AppData } from '~/const/AppData'
import { AppResource } from '~/const/AppResource'
interface typeAudio {
  name?: string
  link?: string
}
export const Meditate: React.FC = () => {
  const [dataValueAudio, setDataValueAudio] = useState<typeAudio>()
  const [isServer, setIsServer] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsServer(true)
    }
  }, [])
  //   const renderAudio = useMemo(() => {
  //     return (
  //       //   <audio controls loop={true} preload="none" ref={refAudio}>
  //       //     <source src={dataValueAudio?.link} type="audio/mp3" />
  //       //     <track src="captions.vtt" kind="captions" label="English" default />
  //       //     Your browser does not support the audio element.
  //       //     </audio>
  //       //   <ReactPlayer url={dataValueAudio?.link} />
  //       <></>
  //     )
  //   }, [dataValueAudio])

  return (
    <div className="mb-5 mt-5">
      <div className="flex items-center justify-center gap-3">
        <Label>Chọn nhạc</Label>
        <Select
          onValueChange={(e) => {
            const data = AppData?.dataAudio?.find((item) => item?.name === e)

            setDataValueAudio(data)
          }}
          //   defaultValue={AppData?.dataAudio?.[0]?.name}
        >
          <SelectTrigger className="w-[50%]">
            <SelectValue placeholder="Chọn bài nhạc" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Chọn nhạc</SelectLabel>
              {AppData?.dataAudio?.map((item, index) => (
                <SelectItem value={item?.name} key={index}>
                  {item?.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* <Button>Bắt đầu</Button>
        <Button>Kết thúc</Button> */}
      </div>
      <img
        src={AppResource.images.img_ngoi_thien}
        alt=""
        className="mx-auto mt-4 w-[50%]"
      />
      <div className="flex-center mt-5">
        {isServer ? (
          <ReactPlayer
            url={dataValueAudio?.link}
            controls={true}
            height={90}
            loop={true}
          />
        ) : null}
      </div>
    </div>
  )
}
