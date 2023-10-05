import React, { useEffect, useState } from "react";
import BreadCalcultor from './brdclc'
import Input from './input'
import Checkbox from './CheckBox'
import ModalNew from './modalNew'
import LogoIcon from "./noun_13673.svg";
//import "./index.css";

const BrdCalc = () => {
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState();
  const [sum,setSum]=useState({})

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
        ingredients[name].volume= BreadCalcultor.round(ingredients[name].weight/ingredients[name].oneVolume)
  
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
    <div className=" p-4  text-[#34321c]  font-[Avenir_Next,Avenir,sans-serif] mx-auto my-[8%] bg-[#f7f7f0] leading-5  max-w-[480px] min-w-[360px] ">
      <header className=" text-center">
        <div className=" bg-orange-600  inline-block w-[72px] h-[72px] rounded-full">
          <img className=" w-12 ml-3 mt-4  " src={LogoIcon} alt="" srcSet="" />
        </div>
        <h1 className=" text-orange-600 text-sm mb-8 tracking-[0.4em] uppercase">
          面包配方计算器
        </h1>
      </header>
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
      <div className="mt-6  clearfix after:block after:content-[' '] after:clear-both">
      <div className=" float-left w-[49%] text-left ">
            <p>
            <strong >面团重量: </strong> <span  className=" cursor-pointer border-b-2 border-solid border-orange-700" 
             title="单击可调整面团重量"
             onClick={()=>{
              BreadCalcultor.updateDoughWeight(ingredients)
              setIngredients({...ingredients})
              BreadCalcultor.updateValues(ingredients)
            }}>{ingredients&&BreadCalcultor.getDoughWeigh(ingredients)} g</span>
            </p>
           
            
          </div>
          <div className=" float-right w-[49%] text-right">
            <p>
            <strong >面团含水量: </strong> <span className=" cursor-pointer border-b-2 border-solid border-orange-700" 
              title="单击可调整面团含水量"
              onClick={()=>{
                BreadCalcultor.updateDoughHydration(ingredients)
                setIngredients({...ingredients})
                BreadCalcultor.updateValues(ingredients)
            }}>{ingredients&&BreadCalcultor.getDoughHydration(ingredients)} %</span>
            </p>
           </div>
      </div>
      
      {showModal&& (
        <ModalNew setOpenModal={setShowModal}>
 { Object.entries(ingredients).map(([key,obj], i) => (
  <div className=" float-left w-1/4"><Checkbox {...obj} name={key} handleOnChecked={handleOnChecked} /></div>
                 
                ))}
        </ModalNew>
      )}
    </div>
  );
};

export default BrdCalc;
