import React from 'react'

interface Props {
  label?: string
  prefixIcon?: React.ReactNode
  handlePrefixIcon?: React.FC
  suffixIcon?: React.ReactNode
  handleSuffixIcon?: React.FC
  placeholder?: string

  name?: string
  type?: string
}

export const BaseInput: React.FC<Props> = ({
  label,
  prefixIcon,
  suffixIcon,
  placeholder,
  type = 'text',
  //   handlePrefixIcon = () => {},
}) => {
  return (
    <div className="">
      {label ? (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <div>
        <input
          placeholder={placeholder}
          type={type}
          className=" appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight  focus:border-main-primary focus-visible:outline-none caret-main-primary "
        />
        {prefixIcon ? <div>{prefixIcon}</div> : null}
        {suffixIcon ? (
          <div
          // handleSuffixIcon={handleSuffixIcon}
          // onClick={() => handleSuffixIcon && handleSuffixIcon()}
          >
            {suffixIcon}
          </div>
        ) : null}
      </div>
      {/* {isError && (
        <div className="mt-1 message-error">{errors && errors[name]}</div>
      )} */}
    </div>
  )
}
