const DEFAULT_LANG = 'zh'

let  translations = {
    "fr": {
        "title": "calculatrice pain au levain",
        "ingredients": "ingrédients",
        "bread": "pain",
        "flour": "farine",
        "water": "eau",
        "hydration": "hydratation souhaitée",
        "starter": "levain",
        "starter_weight": "poids",
        "starter_hydration": "hydratation du levain",
        "salt": "sel",
        "total_weight": "poids final du pain",
        "time": "temps",
        "cold": "frigo",
        "ambiant_temp": "temp. ambiante",
        "ready_at": "prêt à",
        "cooking_time": "temps de cuisson",
        "second_ferm": "2nde fermentat°",
        "first_ferm": "1re fermentat°",
        "starter_feed_time": "rafraîchi levain",
        "to_add" : "à ajouter",
        "etc" : "—",
    },
    "en": {
        "title": "sourdough calculator",
        "ingredients": "ingredients",
        "bread": "bread",
        "flour": "flour",
        "water": "water",
        "hydration": "desired hydration",
        "starter": "starter",
        "starter_weight": "weight",
        "starter_hydration": "starter hydration",
        "salt": "salt",
        "total_weight": "total weight",
        "time": "time",
        "cold": "cold",
        "ambiant_temp": "ambiant temperature",
        "ready_at": "ready at",
        "cooking_time": "cooking time",
        "second_ferm": "second fermt°",
        "first_ferm": "first fermt°",
        "starter_feed_time": "starter feed",
        "to_add" : "to add",
        "etc" : "—",
    },
    "zh": {
        "title": "酸面团计算器",
        "ingredients": "材料",
        "bread": "面包",
        "flour": "面粉",
        "water": "水",
        "hydration": "含水量",
        "starter": "酵头",
        "starter_weight": "酵头重量",
        "starter_hydration": "酵头含水量",
        "salt": "盐",
        "total_weight": "面团重量",
        "time": "时间",
        "cold": "冷",
        "ambiant_temp": "室温",
        "ready_at": "开始",
        "cooking_time": "烧烤时间",
        "second_ferm": "第二次发酵",
        "first_ferm": "第一次发酵",
        "starter_feed_time": "酵头喂养时间",
        "to_add" : "添加",
        "etc" : "—",
    }
};

/**
 * Replace words
 */
let  langUrl = document.URL.match(/[&?]lang=([a-z]+)/);
let  lang = langUrl ? langUrl[1] : DEFAULT_LANG;
let  nodes = document.querySelectorAll('.translate');

for (let  i = 0, n = nodes.length; i < n; i++) {
    let translation = translations[lang][nodes[i].textContent.replace(/[{}]/g, '')];
    if (translation === undefined) {
        console.error('Missing translation for ' + nodes[i].textContent)
    } else {
        nodes[i].textContent = translation
    }
}
