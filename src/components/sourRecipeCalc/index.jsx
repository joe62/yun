import React, { useState } from 'react';


const Input = ({name,value,des,callback,readOnly=false}) => <div className='mb-1'>
<label htmlFor={name} className='block font-bold'>
  {des}:
</label>
<input
  type='number'
  name={name}
  id={name}
  value={value}
  readOnly={readOnly}
  onChange={callback}
  className='border rounded w-full  px-3 text-gray-700  focus:outline-none'
/>
</div>

const Submit = ({children})=><button
  type='submit'
  className='items-center bg-blue-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
>
 {children}
</button>

const SourRecipeCalc = () => {
  const [formData, setFormData] = useState({
    flourWeight: 400,
    hydrationLevel: 80,
    waterWeight: 312,
    saltWeight: 8,
    starterWeight: 80
  });
  
  const handleChange = (event)=> {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseInt(value)
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { flourWeight, hydrationLevel } = formData;
    setFormData({
      flourWeight,
      hydrationLevel,
      waterWeight: Math.round(flourWeight*((1+0.1)*hydrationLevel/100 - 0.1)),
      saltWeight: flourWeight * 0.02,
      starterWeight: flourWeight* 0.2
    });
  };
  const pct= name=>{
    return Math.round(formData[name] / formData['flourWeight'] * 100) 
  }
  const Dics={hydrationLevel:{ ptc:0.8,des:'水合度(%)'}, flourWeight:{ ptc:1,des:'面粉'},waterWeight:{ ptc:0.78,des:`水(${pct('waterWeight')}%)`},saltWeight:{ ptc:0.02,des:`盐(${pct('saltWeight')}%)`},starterWeight:{ ptc:0.2,des:`酵头(${pct('starterWeight')}%)`}}
  return (
    <form onSubmit={handleSubmit} className='flex flex-col max-w-lg mx-auto text-blue-900'>
      <h2 className='text-4xl mt-2 font-bold mb-2 text-cyan-700 '>酸面团配方计算器</h2>
   
      {Object.entries(formData).map(([key,value],index)=><>
        <Input name={key} des={Dics[key].des} value={value} callback={handleChange} readOnly={index>1}  />
        {index==1&&<Submit>计算</Submit>}
      </>)}
      {/* <Input name='flourWeight' des='面粉' value={formData.flourWeight} callback={handleChange}/> */}
      {/* <div className='mb-4'>
        <label htmlFor='flourWeight' className='block font-bold mb-2'>
          面粉:
        </label>
        <input
          type='number'
          name='flourWeight'
          id='flourWeight'
          value={formData.flourWeight}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div> */}
      {/* <div className='mb-4'>
        <label htmlFor='hydrationLevel' className='block font-bold mb-2'>
          水合度 (%):
        </label>
        <input
          type='number'
          name='hydrationLevel'
          id='hydrationLevel'
          value={formData.hydrationLevel}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <button
        type='submit'
        className='items-center bg-blue-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        计算
      </button>
      <div className='mb-4 mt-6'>
        <label htmlFor='waterWeight' className='block font-bold mb-2'>
          水 ({formData.hydrationLevel >= 0 ? formData.hydrationLevel : 0}%):
        </label>
        <input
          type='number'
          name='waterWeight'
          id='waterWeight'
          value={formData.waterWeight}
          readOnly
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='saltWeight' className='block font-bold mb-2'>
          盐 (2.5%):
        </label>
        <input
          type='number'
          name='saltWeight'
          id='saltWeight'
          value={formData.saltWeight}
          readOnly
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='starterWeight' className='block font-bold mb-2'>
          酵头 (23%):
        </label>
        <input
          type='number'
          name='starterWeight'
          id='starterWeight'
          value={formData.starterWeight}
          readOnly
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div> */}
    </form>
  );
};

export default SourRecipeCalc;