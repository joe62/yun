import React from 'react'




const Input = ({ name,type, title, weight, pct, volume,hydration,unit, tabindex,handleOnChage }) => (
  <>
    <div className="input-group clearfix after:block after:content-[' '] after:clear-both ">
      <div className="clearfix block m-0 p-0 after:block after:content-[' '] after:clear-both ">
        <label
          className=" inline-block float-left   font-semibold mb-1 mt-2"
          id={`${name}-label`}
          htmlFor={`${name}-grams`}
        >
          {title}
        </label>
        {type==='starter'&&<p
          title='含水量'
          className=" ml-4 cursor-pointer inline-block font-normal text-xs text-gray-500 mb-1 mt-2 border border-solid border-gray-400 rounded-full py-1 px-2"
          id={`${name}-hydration`}
          onClick={()=>handleOnChage({name,hydration,type:'hyd'})}
        >{`${hydration} %`}</p>}
        
        <p
          className=" cursor-pointer float-right inline-block font-normal text-xs text-gray-500 mb-1 mt-2 border border-solid border-gray-400 rounded-full py-1 px-2"
          id={`${name}-volume`}
        >{`${volume} ${unit}`}</p>
      </div>
      <div className="input-wrapper float-left w-[49%] flex bg-white  ">
        <input
          className="remove-arrow flex-grow min-w-[25%]  font-medium text-right  border-none"
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
        <input
          className="remove-arrow flex-grow min-w-[25%]  font-medium text-right  border-none outline-none p-2 pr-1 focus:outline-none  focus:border-none"
          tabIndex={tabindex}
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
);

export default Input