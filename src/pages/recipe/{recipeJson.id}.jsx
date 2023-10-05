import React,{useEffect, useState} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

function round(num,p=10){
  return Math.round(num*p)/p
}

/**
 * 
 * @param {*} final_weight The dough weight
 * @param {*} hydration the dough hydration
 * @param {*} pct_starter the starter baker's percentage
 * @param {*} starter_hydration the starter hydration
 * @param {*} pct_salt the salt baker's percentage
 * @returns 
 */
export function buildRecipe(final_weight, hydration = 0.7,
  pct_starter = 0.2, starter_hydration = 1,
  pct_salt = 0.02){
    const total_water =round((final_weight*hydration)/(1+hydration+pct_salt))
    const total_flour = final_weight - total_water

    const salt = round(total_flour * pct_salt,10)

    const starter = round(total_flour*pct_starter)
    const starter_water = round((starter*starter_hydration)/(1+starter_hydration))
    const starter_flour = round(starter - starter_water)
    
    const water = round(total_water - starter_water)
    const flour = round(total_flour - starter_flour)

    const dough = round(total_water + total_flour + salt)
    return {
      flour, total_flour, water, total_water,
  starter, starter_hydration, starter_flour,
  starter_water, pct_starter, salt, pct_salt,
  hydration, dough
    }

}

export function calculate_recipe(flour, water, starter, starter_hydration, salt){
  const starter_water = (starter * starter_hydration) / (100+starter_hydration)
  const starter_flour = starter - starter_water
  const total_water = water + starter_water
  const total_flour = flour + starter_flour

  const final_hydration = total_water / total_flour
  const pct_salt = salt / total_flour
  const pct_starter = starter / total_flour

  const actual_final_weight = total_water+total_flour+salt

}


const RecipePost = ({data}) => {

  const [sections,setSections]=useState(sectionTotalWeight(data.recipeJson.sections))
  const {name,permanent_url,author,quantity} = data.recipeJson


  function sectionTotalWeight(sections){
    return sections.map(({name,type,ingredients})=>{
      let doughWeight=ingredients.reduce((pre,obj)=>(pre+obj.weight),0)
      let totalPct=ingredients.reduce((pre,obj)=>(pre+ obj.bakers_pct),0)
      let flourWeight=ingredients.filter((obj)=>obj.type==='flour').reduce((pre,obj)=>(pre+obj.weight),0)
      let fluidWeight=ingredients.filter((obj)=>obj.type==='fluid').reduce((pre,obj)=>(pre+obj.weight),0)
      let starter = ingredients.find(obj=>obj.type==='starter')
      let starter_fluidWeight=starter?starter.weight/(1+100/starter.hydration):0
      let starter_flourWeight=starter? starter.weight/(1+starter.hydration/100):0
      console.log(starter_fluidWeight)
      let totalFluitWeight = ingredients
        .filter(obj=>obj.type!=='starter')
        .reduce((pre,obj)=>(pre+(obj.weight*obj.hydration/100)),fluidWeight+starter_fluidWeight)
      let totalHydration =Math.round(1000*(fluidWeight + starter_fluidWeight)/(flourWeight+starter_flourWeight)) /10
      return {name,type,doughWeight,totalHydration,starter_fluidWeight,totalPct,totalFluitWeight,ingredients}

    })
  }

  const upload = e=>{
    
    console.log(e.target.files[0])
    const fileName = e.target.files[0]
    const fileReader = new FileReader();
    fileReader.readAsText(fileName, "UTF-8");
    fileReader.onload = e=>{
      const data = JSON.parse(e.target?.result)
      console.log(fileName)
      // console.log(sectionTotalWeight(data.sections))
      
    }
  }
  
  // const totalWeight = (ingredients)=>{
  //   return ingredients.reduce((pre,obj)=>(pre+obj.weight),0)
  // }
  // const totalHydration = (ingredients)=>{
  //   return ingredients.reduce((pre,obj)=>(obj.type==='fluid'? pre+ obj.bakers_pct: pre+ obj.hydration),0)
  // } 
  let sum=0;
  return (
   <Layout  pageTitle={name}>
    <center>
   <p className="text-sm"><span>作者: {author} </span><span>数量: {quantity} </span> <span><a href={permanent_url}>
       参考
   </a></span></p>
   <input type="file" name="file" id="fileInput" accept=".json,application/json" onChange={upload} />
   <div className=" mt-4">
    {
    //  sections.map(({name,type,weight,ingredients},index)=>
    //  <div key={index}>
    //    <p className=" text-lg text-red-700">
    //       <strong>{name} ({type}): </strong>
    //       <span>{weight}克   </span> 
    //       <span><strong>水合度：</strong>{totalHydration(ingredients)}%</span>
    //   </p>
    //   <p className="my-3">
    //     {
    //       ingredients.map(({bakers_pct,name,weight,hydration},index)=>
    //       <span className="ml-2" key={index}>
    //         <strong>{name}{hydration&&`(${hydration}%)`}: </strong>{weight}克 ({bakers_pct}%), 
    //       </span>)
    //     }
    //     </p>
    //  </div>)
    
    }
   </div>
   </center>
   
   <div><pre><code>{JSON.stringify(buildRecipe(1010,0.8),null,2)}</code></pre></div>
   <div><pre><code>{JSON.stringify(sections,null,2)}</code></pre></div>

   </Layout>
  )
}

export default RecipePost

export const Head = ({data}) => <Seo title={data.recipeJson.name}/>

export const query = graphql`
query ($id: String) {
  recipeJson(id: {eq: $id}) {
    author
    name
    quantity
    notes
    permanent_url
    sections {
      name
      type
      ingredients {
        bakers_pct
        name
        type
        weight
        hydration
        sugars
        salt
      }
    }
  }
}
`