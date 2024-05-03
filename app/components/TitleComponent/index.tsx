import React from 'react'
interface props {
  title?: string
}
export const TextTitle: React.FC<props> = ({ title }) => {
  return (
    <div className="mb-5">
      <span className="typo-s20-w600 border-b-2 border-main-primary pb-3">
        {title}
      </span>
    </div>
  )
}
