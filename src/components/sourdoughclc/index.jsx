import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

// 这是的four是指面团重量
const App = ({ recipe}) => {
  const defaultRecipe = {flour:500,water:80,levain:20,salt:2}
  let data={...defaultRecipe,...recipe}
  const round = (number, scale = 0) =>
    scale === 0 ? Math.round(number) : Math.round(number * 10) / 10;

  let allPercenTage = (100 + data.water + data.levain + data.salt) / 100;
  let flour_temp = round(data.flour / allPercenTage);

  let names = {
    flour: { name: "面粉", value: flour_temp, defaultValue: data.flour },
    water: {
      name: "水",
      value: round((data.water / 100) * flour_temp),
      defaultValue: data.water,
    },
    levain: {
      name: "酵头",
      value: round((data.levain / 100) * flour_temp),
      defaultValue: data.levain,
    },
    salt: {
      name: "盐",
      value: round((data.salt / 100) * flour_temp, 0.1),
      defaultValue: data.salt,
    },
  };

  const [flour, setFlour] = useState(names["flour"].value);
  const [water, setWater] = useState(names["water"].value);
  const [levain, setLevain] = useState(names["levain"].value);
  const [salt, setSalt] = useState(names["salt"].value);
  const [curRecipe,setRecipe]=useState({
    dough:{name:"面团",weight:0,pern:0},
    flour:{name:"面粉",weight:0,pern:1},
    water:{name:"水",weight:0,pern:0.8},
    levain:{name:"酵种",weight:0,pern:0.2},
    salt:{name:"盐",weight:0,pern:0.02}})

   const get = (name) => {
    let value = parseFloat(document.getElementsByName(name)[0].value);
    return isNaN(value) ? 0 : value;
  };

  const calculate = () => {
    let _flour = get("flour");
    let _water = get("water");
    let _levain = get("levain");
    let _salt = get("salt");
    if (_flour === 0 || _water === 0) {
      return;
    }
    // 面团重量转换为面粉重量

    let _dough = _flour;
    _flour = _dough / (1 + _water / 100);
    setFlour(_flour);
    setWater((_water / 100) * _flour);
    setLevain((_levain / 100) * _flour);
    setSalt((_salt / 100) * _flour);
    names = {
      flour: { name: "面粉", value: flour, defaultValue: data.flour },
      water: {
        name: "水",
        value: round((data.water / 100) * flour_temp),
        defaultValue: data.water,
      },
      levain: {
        name: "酵头",
        value: round((data.levain / 100) * flour_temp),
        defaultValue: data.levain,
      },
      salt: {
        name: "盐",
        value: round((data.salt / 100) * flour_temp, 0.1),
        defaultValue: data.salt,
      },
    };
    console.log(flour,water,levain,salt)
  };
  const recipes = { flour, water, levain, salt };

  return (
    <>
      <StaticImage className=" bg-cover w-full h-screen" src="./bread_bg.jpg"  alt="bread"/>
      <section
        className="backdrop-blur-[10px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[10px] 
    w-[350px] justify-center bg-black/50 text-[2em] text-gray-500"
      >
        <div className="block text-white w-full float-left">
          {Object.entries(recipes).map(([key, _], index) => (
            <div key={index}>
              {names[key].name}
              <span className=" float-right">
                {round(names[key].value, key === "salt" ? 0.1 : 0)} 克
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <form onInput={calculate}>
            {Object.entries(recipes).map(([key, value], index) => (
              <div key={index}>
                <label htmlFor={key} className=" float-left">
                  {key === "flour" ? "面团(克)" : `${names[key].name}%`}:
                  <input
                    defaultValue={names[key].defaultValue}
                    type="text"
                    name={key}
                    maxLength={"5"}
                    className="float-right text-4xl w-[30%] border border-gray-950 text-gray-900"
                  />
                </label>
              </div>
            ))}
          </form>
        </div>
      </section>
    </>
  );
};

export default App;
