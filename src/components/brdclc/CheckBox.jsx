import React from 'react'

const Checkbox = ({ name, title,handleOnChecked, checked = false,disabled=false }) => (
  <>
    <input
      className=" float-left mr-2"
      type="checkbox"
      name={name}
      id={`${name}-checkbox`}
      defaultChecked={checked}
      disabled={disabled}
      onChange={handleOnChecked}
    />
    <label
      className=" block mb-2 font-semibold  outline-none"
      htmlFor={`${name}-checkbox`}
    >
      {title}
    </label>
  </>
);

export default Checkbox