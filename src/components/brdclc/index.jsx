import React, { useEffect,useState } from "react";

import BreadCalcultor from './brdclc'
import Input from './input'
import Checkbox from './CheckBox'
import ModalNew from './modalNew'
import LogoIcon from "./noun_13673.svg";
import "./index.css";

const BrdCalc = ({showTitle=false}) => {
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState();
  const [temperature,setTemperature]=useState(24)

  useEffect(() => {
    setIngredients(BreadCalcultor.updateValues())
  }, [])
  

  const handleOnChecked = ({target:{name,checked}}) => {
    ingredients[name].checked=checked
    
    if (checked) {
      BreadCalcultor.updateQueryStringParam(name,ingredients[name].pct)
    } else {
      BreadCalcultor.removeParameterByName(name)
      if(ingredients[name].type==='starter'){
        BreadCalcultor.removeParameterByName(`${name}_hydration`)
      }
    }
    let recipes = BreadCalcultor.updateValues(ingredients)
    setIngredients({
      ...recipes
    })
  };
  const handleOnChage=({name,value,type})=>{
    BreadCalcultor.decimals="salt,yeast,bakingPowder"
      .includes(ingredients[name].type)?2:0
      
    if(type === 'hyd'){
      var newValue = prompt(`${ingredients[name].title}的含水量`, ingredients[name].hydration)
        if (newValue != null) {
          ingredients[name].hydration=newValue
          BreadCalcultor.updateQueryStringParam(`${name}_hydration`,newValue)
        }

    } else {
      
      
      if (type === 'pct') {
      
        ingredients[name].pct=BreadCalcultor.round(value)
        ingredients[name].weight = BreadCalcultor.updateWeightFromPct(value)
        ingredients[name].volume= BreadCalcultor.round(ingredients[name].weight/ingredients[name].oneVolume,2)
  
        if (name.includes('flour_')) {
          BreadCalcultor.updateValues(ingredients)
        }
      } else if(type === 'grams'){
        
          ingredients[name].weight=BreadCalcultor.round(value)
         ingredients[name].volume= BreadCalcultor.round(value/ingredients[name].oneVolume)
  
        
          ingredients[name].pct=BreadCalcultor.updatePctFromWeight(value)
          BreadCalcultor.updateValues(ingredients)
          
      }
      if (name.includes('flour')) {
        BreadCalcultor.updateQueryStringParam(name,ingredients[name].weight)
      }
      else {
        BreadCalcultor.updateQueryStringParam(name,ingredients[name].pct)
      }
    }
    
      
    setIngredients({
      ...ingredients,
    })

  }


  return (
    <div className="w-full bg-[#f7f7f0] text-xs font-medium">
    <div className=" p-4  text-[#34321c]  font-[Avenir_Next,Avenir,sans-serif] mx-auto     max-w-[480px] min-w-[360px] ">
      {showTitle&&<header className=" text-center ">
        
        <div className=" bg-orange-600  inline-block w-[72px] h-[72px] rounded-full">
          <img className=" w-12 ml-3 mt-4  " src={LogoIcon} alt="" srcSet="" />
        </div>
        <h1 className=" text-orange-600 text-sm mb-8 tracking-[0.4em] uppercase">
          面包配方计算器
        </h1>
      </header>}
      
      <div className="my-4 p-2 border-b-2 border-dashed border-orange-800  clearfix after:block after:content-[' '] after:clear-both">
      <div className="flex text-orange-600 ">
        <div className="mr-4 ">
            <p>
            面团重量: <span  className=" cursor-pointer border border-solid border-orange-700 rounded-md px-2" 
             title="单击可调整面团重量"
             onClick={()=>{
              BreadCalcultor.updateDoughWeight(ingredients)
              setIngredients({...ingredients})
              BreadCalcultor.updateValues(ingredients)
            }}>{ingredients&&BreadCalcultor.getDoughWeigh(ingredients)} g</span>
            </p>
           
            
          </div>
          
          <div className="mr-4  ">
            <p>
           面团含水量:  <span className=" cursor-pointer border border-solid border-orange-900 rounded-md px-2" 
              title="单击可调整面团含水量"
              onClick={()=>{
                BreadCalcultor.updateDoughHydration(ingredients)
                setIngredients({...ingredients})
                BreadCalcultor.updateValues(ingredients)
            }}>{ingredients&&BreadCalcultor.getDoughHydration(ingredients)} %</span>
            </p>
           </div>
           <div className="">
            <p>
            发酵时间: <span className="  cursor-pointer border border-solid border-orange-900 rounded-md px-2" 
              title={`单击可调整环境温度${temperature}°C`}
              onClick={()=>{
               let newValue = prompt(`当前环境温度:`,temperature)
                setTemperature(newValue)
            }}>{BreadCalcultor.hoursToFerment(ingredients,temperature)} 小时</span>
            </p>
           </div>
           </div>
      </div>
      <div className="inputs">
        {ingredients&&Object.entries(ingredients).filter(([_,obj])=>obj.checked===true).map(([key,obj], i) => (
         <div  key={`${i}-${key}`}>
          <Input  {...obj} name={key} tabindex={i * 2} handleOnChage={handleOnChage}  />
         </div>
        ))}
      </div>
      <div
        className=" mt-4  clearfix after:block after:content-[' '] after:clear-both "
        
      >
     
        <button 
        className=" ingredients-button   flex float-left w-[47%]    py-2 px-12 font-semibold  rounded border border-solid border-gray-700 outline-none"
          type="button"
          onClick={() => setShowModal(true)}
          >添加/移除配料</button>
          <button 
        className=" ml-4 ingredients-button  flex float-right w-[47%]  py-2 px-12 font-semibold  rounded border border-solid border-gray-700"
          type="button"
          onClick={() => BreadCalcultor.copyURLToClipboard()}
          >复制配方链接</button>
      </div>

      
      {showModal&& (
        <ModalNew setOpenModal={setShowModal}>
 { Object.entries(ingredients).map(([key,obj], i) => (
  <div className=" float-left w-1/4"><Checkbox {...obj} name={key} handleOnChecked={handleOnChecked} /></div>
                 
                ))}
        </ModalNew>
      )}
    </div>
    </div>
  );
};

export default BrdCalc;
