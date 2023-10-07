import React from 'react'
import { DebounceInput } from 'react-debounce-input'


const Input = ({ name,type, title, weight, pct, volume,hydration,unit, tabindex, handleOnChage }) => {
  return (
  <>
    <div className="  input-group clearfix after:block after:content-[' '] after:clear-both ">
      <div className="clearfix block mt-2 p-0 after:block after:content-[' '] after:clear-both ">
        <label
          className=" inline-block float-left  text-gray-900"
          id={`${name}-label`}
          htmlFor={`${name}-grams`}
        >
          {title}
        </label>
        {type==='starter'&&<p
          title='含水量'
          className=" cursor-pointer inline-block   text-gray-400  border border-solid border-gray-300 rounded-full py-1 px-2"
          id={`${name}-hydration`}
          onClick={()=>handleOnChage({name,hydration,type:'hyd'})}
        >{`${hydration} %`}</p>}
        
        <p
          className=" cursor-pointer float-right inline-block  text-xs text-gray-400  border border-solid border-gray-300 rounded-full py-1 px-2"
          id={`${name}-volume`}
        >{`${volume} ${unit}`}</p>
      </div>
      <div className="input-wrapper float-left w-[49%] flex bg-white  ">
        <input
          className="remove-arrow flex-grow min-w-[20%]  text-xs   text-right  border-none outline-none  p-1 focus:outline-none  focus:border-none"
          tabIndex={tabindex + 1}
          id={name}
          type="number"
          name={name}
          // onclick="this.select();"
          value={pct}
          readOnly={name.includes('flour_')}
          onChange={({target:{value}})=>handleOnChage({name,value,type:'pct'})}
        />
        <p className=" inline-block text-right py-0 pr-2  m-auto text-gray-400 ">
          %
        </p>
      </div>
      <div className="input-wrapper  float-right w-[49%] flex bg-white ">
        <DebounceInput
          className="remove-arrow flex-grow min-w-[20%]  text-xs  text-right  border-none outline-none  p-1 focus:outline-none  focus:border-none"
          tabIndex={tabindex}
          debounceTimeout={300}
          id={`${name}-grams`}
          type="number"
          name={`${name}-grams`}
          // onclick="this.select();"
          value={weight}
          onChange={({target:{value}})=>handleOnChage({name,value,type:'grams'})}
        />
        <p className=" inline-block text-right m-auto text-gray-400">g</p>
        
      </div>
    </div>
  </>
);}

export default Input