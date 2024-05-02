import React from 'react'
import { WrapperTextTitle } from '../WrapperTextTitle'
import { CardJob } from '../CardJob'
import { AppData } from '~/const/AppData'
import { ButtonFullBg } from '~/components/AppButton/ButtonFullBg'
import { useNavigate } from '@remix-run/react'

interface ICareersProps {}

export const Careers: React.FC<ICareersProps> = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto ">
      <WrapperTextTitle
        nameSection="Careers"
        title="Join our team"
        subTitle="GODHITECH is expanding and we are looking for talented people to join our team."
        textLeft={false}
      />

      <div className="grid grid-cols-12 gap-5 mt-10 ">
        {AppData.dataJob?.map((item, index) => (
          <div className="col-span-12 lg:col-span-4" key={index}>
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
      </div>
      <div className="mt-5">
        <ButtonFullBg
          title={<p className="typo-s16-w500 text-white">View all jobs</p>}
          className="text-center mx-auto"
        />
      </div>
    </div>
  )
}
