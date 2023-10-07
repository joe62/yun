 const BreadCalcultor={
  doughTotalWeigh:0,
   flourTotalWeight:0,
   decimals:0,
   IngredientsDefaults:{
    flour_purpose:{  title: "面粉",type:'flour',hydration:0,weight:210,pct:70,volume:2, step:1,oneVolume:125,unit:"cup", checked: true,disabled: true},
    flour_wheat:{  title: "全麦粉",type:'flour',hydration:0,weight:60,pct:20,volume:2, step:1,oneVolume:125,unit:"cup", checked: true,disabled: false},
    flour_rye:{  title: "黑麦粉",type:'flour',hydration:0,weight:30,pct:10,volume:2, step:1,oneVolume:125,unit:"cup", checked: true,disabled: false},
    water:{  title: "水",type:'fluid',hydration:100, weight:240,pct:80,volume:0.85,step:1,oneVolume:235.59,unit:"cup", checked: true,disabled:true },
    salt:{  title: "细盐" ,type:'salt',hydration:0,weight: 6, pct: 2, volume: 1, step:0.1,oneVolume:5,unit: "tsp", checked: true,disabled: true},
    starter:{  title: "酵头" ,type:'starter',hydration:100,weight: 60, pct: 20, volume: 1, step:1,oneVolume:50,unit: "tbsp", checked: true,disabled: false},
    yeast:{  title: "干酵母" ,type:'yeast',hydration:0,weight: 3, pct: 1, volume: 0.71, step:0.1,oneVolume:3.5,unit: "tsp", checked: false,disabled: false},
    bakingPowder:{title: "泡打粉",type:'bakingPowder',hydration:0,weight: 3, pct: 1, volume: 0.63, step:0.1,oneVolume:4,unit: "tsp", checked: false,disabled: false},
    leaven:{  title: "酵种",type:'starter',hydration:100,weight: 20, pct: 20, volume: 0.25, step:1,oneVolume:200,unit: "cup", checked: false,disabled: false},
    poolish:{  title: "波兰种",type:'starter',hydration:100,weight: 50, pct: 20, volume: 0.25,step:1,oneVolume:200, unit: "cup", checked: false,disabled: false},
    milk:{  title: "牛奶" ,type:'daily',hydration:87.5, weight:228.5,pct:91.2,volume:0.94,step:1,oneVolume:243.69,unit:"cup", checked: false,disabled: false},
    oil:{  title: "橄榄油",type:'oil',hydration:0,weight: 14, pct: 5.49, volume: 0.91, step:1,oneVolume:13.725,unit: "tbsp", checked: false,disabled: false},
    sugar:{  title: "砂糖" ,type:'sugar',hydration:0,sugarPct:57,weight: 25, pct: 10, volume: 0.13, step:1,oneVolume:200,unit: "cup", checked: false,disabled: false},
    butter:{  title: "黄油" ,type:'dairy',hydration:16.5,weight: 25, pct: 10, volume: 1.77, step:1,oneVolume:14.125,unit: "tbsp", checked: false,disabled: false},
    cream:{  title: "淡奶油" ,type:'dairy',hydration:61.1,weight: 25, pct: 10, volume: 1.77, step:1,oneVolume:14.125,unit: "tbsp", checked: false,disabled: false},
    whole:{  title: "全蛋" ,type:'egg',hydration:75,weight: 25, pct: 10, volume: 0.5, step:1,oneVolume:50,unit: "large egg", checked: false,disabled: false},
    yolk:{  title: "蛋黄" ,type:'egg',hydration:49,weight: 25, pct: 10, volume: 0.5, step:1,oneVolume:50,unit: "large egg", checked: false,disabled: false},
    white:{  title: "蛋白" ,type:'egg',hydration:89,weight: 25, pct: 10, volume: 0.5, step:1,oneVolume:50,unit: "large egg", checked: false,disabled: false},
    condensedMilk:{  title: "炼乳",type:'sugar',hydration:27,sugarPct:57,weight: 13, pct: 5, volume: 0.04, step:1,oneVolume:340,unit: "cup", checked: false,disabled: false},
    honey:{  title: "蜂蜜",type:'sugar',hydration:18,sugarPct:82,weight: 13, pct: 5, volume: 0.04, step:1,oneVolume:340,unit: "cup", checked: false,disabled: false},
    extra1:{  title: "层压黄油" ,type:'extra',hydration:0,weight: 250, pct: 61, volume: 1.1, step:1,oneVolume:227,unit: "cup", checked: false,disabled: false},
    extra:{  title: "其它" ,type:'extra',hydration:0,weight: 0, pct: 10, volume: 0, step:1,oneVolume:0,unit: "cup", checked: false,disabled: false},
  },
  toNumber: function (value) {
    if (typeof value === "number") {
      return value;
    }
    
    return Number(value);
  },
  round:function (number) {
    number = this.toNumber(number);
    let point = Math.pow(10, this.decimals)
    return Math.round(number * point)/point
  },
    // Add values to query string
    updateQueryStringParam:function(key, value) {
      let baseUrl = [document.location.protocol, '//', document.location.host, document.location.pathname].join('');
      let urlQueryString = document.location.search;
      let newParam = key + '=' + value
      let  params = '?' + newParam;
      // If the "search" string exists, then build params from it
      if (urlQueryString) {
        let keyRegex = new RegExp('([\?&])' + key + '[^&]*');
        // If param exists already, update it
        if (urlQueryString.match(keyRegex) !== null) {
          params = urlQueryString.replace(keyRegex, "$1" + newParam);
        } else { // Otherwise, add it to end of query string
          params = urlQueryString + '&' + newParam;
        }
      }
      window.history.replaceState({}, "", baseUrl + params);
    },
     removeParameterByName:function(parameter) {
      let  url = document.location.href;
      let  urlparts = url.split('?');

      if (urlparts.length >= 2) {
        let  urlBase = urlparts.shift();
        let  queryString = urlparts.join("?");

        let  prefix = encodeURIComponent(parameter) + '=';
        let  pars = queryString.split(/[&;]/g);
        for (let  i = pars.length; i-- >0;)
              if (pars[i].lastIndexOf(prefix, 0) !== -1)
            pars.splice(i, 1);
        url = urlBase + '?' + pars.join('&');
        window.history.replaceState('', document.title, url); // added this line to push the new url directly to url bar .
      }
      return url;
    },
    updateWeightFromPct:function(value){
      return this.round(this.flourTotalWeight*value/100)
    },
    updatePctFromWeight:function(value){
      return this.round(100*value/this.flourTotalWeight)
    },
    updateDoughHydration:function(ingredients){
      let total_hydrationNew = prompt(`更改面团含水量%:`, this.getDoughHydration(ingredients))
      if (total_hydrationNew != null) {
        let doughWeight = this.getDoughWeigh(ingredients)
        let total_pct = 0
        Object.entries(ingredients).filter(([_,obj])=>obj.checked).forEach(([key,{title,weight,type,pct}])=>{
          total_pct+=pct
        })
        let total_flour = doughWeight/(total_pct/100)
        let total_hydration = this.getDoughHydration(ingredients)
        let total_water = total_flour*total_hydration/100
        let total_waterNew = total_flour*total_hydrationNew/100
        let [name,ingredient_fluid] = Object.entries(ingredients).find(([_,obj])=>obj.checked&&obj.type==='fluid')
        let water_AID = total_water - total_waterNew // 水增减量
        if((ingredient_fluid.weight - water_AID)>0){
          ingredients[name].weight -=water_AID
          ingredients[name].pct =this.round(100*ingredients[name].weight/total_flour,0)
        }

       
      }
    },
    updateDoughWeight:function(ingredients){
      let newDoughWeight = prompt(`更改面团重量(克):`, this.getDoughWeigh(ingredients))
        if (newDoughWeight != null) {
          
          let total_pct = 0
          Object.entries(ingredients).filter(([_,obj])=>obj.checked).forEach(([_,{pct}])=>{
            total_pct+=pct
          })
          let total_flour = newDoughWeight/(total_pct/100)
          Object.entries(ingredients).filter(([_,obj])=>obj.checked).forEach(([key,{type}])=>{
            
            ingredients[key].weight=this.round(total_flour*ingredients[key].pct/100)
          })

        
        }
    
    },
    getDoughWeigh:function(ingredients){
      this.doughTotalWeigh=0
      Object.entries(ingredients).filter(([_,obj])=>obj.checked).forEach(([key,{title,weight,type,pct}])=>{
        this.doughTotalWeigh+=weight
        
      })
      return this.round(this.doughTotalWeigh,0)
    },
    getDoughHydration:function(ingredients){
      let totalFlourWeight =0
      let totalWaterWeight = 0
      Object.entries(ingredients).filter(([_,obj])=>obj.checked).forEach(([key,{title,weight,type,hydration}])=>{
        if(type==='flour'){
          totalFlourWeight+=weight
        }
        if (hydration!==0) {
          if(type==='starter'){
           
            totalFlourWeight += weight/(1+hydration/100)
            totalWaterWeight += weight - weight/(1+hydration/100)
          } else {
            totalWaterWeight +=weight*hydration/100
          }
          
        }
       
      })
      this.decimals=2
      
      return this.round(100*totalWaterWeight/totalFlourWeight)
    },
    updateValues:function(ingredients){
      let recipes
      let i=1
      if(ingredients === undefined){
        if(window.location.search){
          let urlObj = this.parseQueryStringToObj()
          this.flourTotalWeight=0
          Object.entries(urlObj).filter(([key,_])=>key.includes('flour_')).forEach(([_,value])=>{
            this.flourTotalWeight +=value
          })
  
          recipes=ingredients===undefined?{...this.IngredientsDefaults}:{...ingredients}
          Object.entries(recipes).forEach(([key,value])=>{
            recipes[key].checked=false
          })
  
          Object.entries(urlObj).forEach(([key,value])=>{
            
            if(key.includes('_hydration')){
              key=key.replace('_hydration','')
              recipes[key].hydration=this.round(value)
            }
            else {
              recipes[key].checked=true
              if(key.includes('flour_')){
                recipes[key].pct = this.round(value/this.flourTotalWeight,0)*100
                recipes[key].weight = this.round(value,0)
                recipes[key].volume= this.round(value/recipes[key].oneVolume)
              } 
              
              else 
              {
                let decimal = recipes[key].type==='flour'||recipes[key].type==='fluit'?0:2
                recipes[key].weight = this.round(this.flourTotalWeight*value/100,decimal)
                recipes[key].pct=this.round(value,decimal)
                recipes[key].volume= this.round(recipes[key].weight/recipes[key].oneVolume,2)
              }
            }
            
          })
          
          
         
        } else{
          recipes = {...this.IngredientsDefaults}
          
         
        }
      } else {
        recipes = {...ingredients}
      }


      
      let decimal = 0
      this.flourTotalWeight=0
      Object.entries(recipes).filter(([_,obj])=>obj.checked && obj.type==='flour').forEach(([key,{title,weight}])=>{
        this.flourTotalWeight += weight
      })
      this.doughTotalWeigh=0
      Object.entries(recipes).filter(([_,obj])=>obj.checked).forEach(([key,{title,weight,type,pct}])=>{
        this.doughTotalWeigh+=weight
        if(type==='flour'){
          this.updateQueryStringParam(key,recipes[key].weight)
          recipes[key].pct = this.round(100*weight/this.flourTotalWeight,0)
         
        } else {
          if(recipes[key].type==='salt'||recipes[key].type==='yeast'){
            decimal=2
          }
          this.updateQueryStringParam(key,recipes[key].pct)
          recipes[key].weight = this.round(this.flourTotalWeight*pct/100,decimal)
         
          if (recipes[key].type==='starter') {
            this.updateQueryStringParam(`${key}_hydration`,recipes[key].hydration)
          }
        }
      })

      return recipes

    },
    updateTotalFlour:function(ingredients){
      BreadCalcultor.flourTotalWeight=0
      Object.entries(ingredients).filter(([_,obj])=>obj.checked&&obj.type==='flour'&&obj.weight>0).forEach(([key,{title,weight}])=>{
        BreadCalcultor.flourTotalWeight += weight
      })
    },
    getParameterByName: function(name, url) {
      if (!url) {
        url = window.location.href;
      }
      name = name.replace(/[\[\]]/g, "\\$&");
      let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
     parseQueryStringToObj:function(url) {
      if (!url) {
        url = window.location.href;
      }
      let obj = {};
    let keyvalue = [];
    let key = "",
        value = "";
    let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    for (let i in paraString) {
        keyvalue = paraString[i].split("=");
        key = keyvalue[0];
        value = this.toNumber(keyvalue[1]);
        obj[key] = value;
    }
    return obj;
  },
  // http://jsfiddle.net/5QrhQ/5/
   fractionFromDecimal:function(fraction) {
    let gcd = function (a, b) {
      if (b < 0.0000001) return a;

      return gcd(b, Math.floor(a % b));
    };

    let len = fraction.toString().length - 2;

    let denominator = Math.pow(10, len);
    let numerator = fraction * denominator;

    let divisor = gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    if (fraction == 0) {
      return ""
    } else {
      return Math.floor(numerator) + '/' + Math.floor(denominator);
    }
  },

  gramsToMeasurement:function (grams, gramsInNewMeasurement, newMeasurementNameSingular, newMeasurementNamePlural) {
    let newMeasurement = Math.round((grams / gramsInNewMeasurement) * 100) / 100
    let wholeUnit = (newMeasurement).toString().split(".")[0]
    let decimal = Math.round((newMeasurement % 1) * 10) / 10
    let fraction = this.fractionFromDecimal(decimal)
    let measurementName
    if (parseInt(wholeUnit) == 0) {
      wholeUnit = ""
    } else {
      wholeUnit = parseInt(wholeUnit).toLocaleString()
    }
    if (newMeasurement <= 1) {
       measurementName = newMeasurementNameSingular
    } else {
       measurementName = newMeasurementNamePlural
    }
    if (newMeasurement == 0) {
       measurementName = newMeasurementNamePlural
    }

    // return (wholeUnit + " " + fraction + " " + measurementName).replace("  ", " ").trim()
    return (newMeasurement + " " + measurementName).replace("  ", " ").trim()
  },
  copyURLToClipboard: function () {
    let url = document.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("复制链接！");
    });

  },
  hoursToFerment: function (ingredients,proofTemp=24) {
    if (this.inoculation == 0||ingredients===undefined) return 0;
    let f = (proofTemp * 9) / 5 + 32;
    let inoculation=0
    Object.entries(ingredients).filter(([_,obj])=>obj.checked && obj.type==='starter').forEach(([key,{pct}])=>{
      inoculation += pct
    })

    let hours = Math.log(inoculation / 100 / 0.894) *
    (-0.0000336713 * f ** 4 +
      0.0105207916 * f ** 3 -
      1.2495985607 * f ** 2 +
      67.0024722564 * f -
      1374.6540546564)

    return this.round(hours,0)
  }
}

export default BreadCalcultor