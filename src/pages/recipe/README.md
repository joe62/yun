## 食材类型

```html
<select id="fbbc_ingredient_type" class="fbbc_type"><option value="none">Select type...</option><option value="flour">Flour</option><option value="fluid">Fluid</option><option value="starter">Starter</option><option value="salt">Salt</option><option value="yeast">Yeast</option><option disabled="disabled">──────────</option><option value="fat">Fat</option><option value="sugar">Sugar</option><option value="dairy">Dairy</option><option value="egg">Egg</option><option value="misc">Miscellaneous</option><option value="extra">Other extras</option></select>
```

```
INGREDIENTS:
130g water @ 100 degrees Fahrenheit
6g active dry yeast
250g bread flour
30g granulated sugar
5g fine sea salt
25g unsalted butter, melted
1 egg yolk (about 18g)

Beurrage (butter block):
138g unsalted butter (ideally high butter fat European style butter like plugra, wuthrich, etc.)

Sample Schedule:
Day 1: (the night before around 8 or 9 p.m.): 
Make your dough and prepare it for it's overnight rest. 
Day 2: 
9am-Make beurrage
9:25am - Encase butter in dough, roll and fold
10:30am - Second fold
11:30am - Roll dough out to correct size for slicing and shaping. Rest in the fridge.
12:30am - Cut dough and shape croissants. Brush with egg wash and proof.
2:30P.M - Brush again with Egg wash
2:35 P.M - Bake
```


## sourr/README.md

Example
Suppose you want to bake a 75% hydration loaf that weighs 900 grams using 100% hydration sourdough starter (i.e. you feed it a 1:1 ratio of flour and water). Use the build_recipe() function to generate the appropriate recipe:

library(sourrr)
build_recipe(final_weight = 900, hydration = 0.75)
#> 450g flour (514.3g total; 64.3g from starter)
#> 321g water (385.7g total; 64.3g from starter)
#> 129g starter (25%; 100% hydration)
#> 10g salt (2%)
#> ---
#> 75% hydration
#> 910g final loaf
You can set all the arguments:

build_recipe(final_weight = 900, hydration = 0.90,
             pct_starter = 0.25, starter_hydration = 1,
             pct_salt = 0.02)
#> 414g flour (473.7g total; 59.2g from starter)
#> 367g water (426.3g total; 59.2g from starter)
#> 118g starter (25%; 100% hydration)
#> 9g salt (2%)
#> ---
#> 90% hydration
#> 909g final loaf
For now, it’s not 100% correct because I add the salt to the final loaf weight. The math is too tricky and I can’t figure it out right now with, like, the ongoing global pandemic 🤷.

If you have an existing recipe, you can use the calculate_recipe() function to determine the hydration level:

calculate_recipe(flour = 450, water = 320,
                 starter = 100, starter_hydration = 1, salt = 8)
#> 450g flour (500g total; 50g from starter)
#> 320g water (370g total; 50g from starter)
#> 100g starter (20%; 100% hydration)
#> 8g salt (1.6%)
#> ---
#> 74% hydration
#> 878g final loaf