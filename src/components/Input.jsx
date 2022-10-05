import React from 'react'

export default function Input({type,id,className,name,placeholder,onInput,onBlur,onChange}) {
  return (
    <div>
      <input
      
      id={id}
      name={name}
      placeholder={placeholder}
      onInput={onInput}
      className={className}
      type={type}
      onChange={onChange}
      onBlur={onBlur}

      />
    </div>
  )
}
