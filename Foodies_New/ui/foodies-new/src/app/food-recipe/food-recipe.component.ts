import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { RecipesService } from '../services/recipes.service';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from 'querystring';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-food-recipe',
  templateUrl: './food-recipe.component.html',
  styleUrls: ['./food-recipe.component.css']
})
export class FoodRecipeComponent implements OnInit {

  myData={
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 16,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 10,
    "cookingMinutes": 10,
    "aggregateLikes": 0,
    "spoonacularScore": 37,
    "healthScore": 7,
    "creditsText": "Simply Delicious Food",
    "sourceName": "Simply Delicious Food",
    "pricePerServing": 132.24,
    "extendedIngredients": [
        {
            "id": 11420421,
            "aisle": "Pasta and Rice",
            "image": "spaghetti.jpg",
            "consistency": "solid",
            "name": "spaghetti",
            "nameClean": "cooked spaghetti",
            "original": "500 g (1lb) spaghetti cooked, reserve 2 cups of cooking water",
            "originalString": "500 g (1lb) spaghetti cooked, reserve 2 cups of cooking water",
            "originalName": "500 g spaghetti cooked, reserve 2 cups of cooking water",
            "amount": 1,
            "unit": "lb",
            "meta": [
                "cooked"
            ],
            "metaInformation": [
                "cooked"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "lb",
                    "unitLong": "pound"
                },
                "metric": {
                    "amount": 453.592,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 10123,
            "aisle": "Meat",
            "image": "raw-bacon.png",
            "consistency": "solid",
            "name": "pancetta / guanciale / bacon",
            "nameClean": "applewood smoked bacon",
            "original": "100 g (3.5oz) pancetta / guanciale / bacon cubed",
            "originalString": "100 g (3.5oz) pancetta / guanciale / bacon cubed",
            "originalName": "100 g pancetta / guanciale / bacon cubed",
            "amount": 3.5,
            "unit": "oz",
            "meta": [
                "cubed"
            ],
            "metaInformation": [
                "cubed"
            ],
            "measures": {
                "us": {
                    "amount": 3.5,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 99.223,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "liquid",
            "name": "olive oil",
            "nameClean": "olive oil",
            "original": "2 tbsp olive oil",
            "originalString": "2 tbsp olive oil",
            "originalName": "olive oil",
            "amount": 2,
            "unit": "tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 2,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "solid",
            "name": "egg",
            "nameClean": "egg",
            "original": "1 egg",
            "originalString": "1 egg",
            "originalName": "egg",
            "amount": 1,
            "unit": "",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 1125,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg-yolk.jpg",
            "consistency": "solid",
            "name": "egg yolks",
            "nameClean": "egg yolk",
            "original": "4 egg yolks",
            "originalString": "4 egg yolks",
            "originalName": "egg yolks",
            "amount": 4,
            "unit": "",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 4,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 4,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 1032,
            "aisle": "Cheese",
            "image": "parmesan.jpg",
            "consistency": "solid",
            "name": "parmesan cheese",
            "nameClean": "grated parmesan cheese",
            "original": "½ cup grated Parmesan cheese",
            "originalString": "½ cup grated Parmesan cheese",
            "originalName": "grated Parmesan cheese",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "grated"
            ],
            "metaInformation": [
                "grated"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1011033,
            "aisle": "Cheese",
            "image": "parmesan.jpg",
            "consistency": "solid",
            "name": "pecorino romano / grana padano",
            "nameClean": "grana padano",
            "original": "½ cup grated Pecorino Romano / Grana padano",
            "originalString": "½ cup grated Pecorino Romano / Grana padano",
            "originalName": "grated Pecorino Romano / Grana padano",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "grated"
            ],
            "metaInformation": [
                "grated"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1102047,
            "aisle": "Spices and Seasonings",
            "image": "salt-and-pepper.jpg",
            "consistency": "solid",
            "name": "salt and pepper",
            "nameClean": "salt and pepper",
            "original": "salt and pepper to taste",
            "originalString": "salt and pepper to taste",
            "originalName": "salt and pepper to taste",
            "amount": 1,
            "unit": "serving",
            "meta": [
                "to taste"
            ],
            "metaInformation": [
                "to taste"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "serving",
                    "unitLong": "serving"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "serving",
                    "unitLong": "serving"
                }
            }
        }
    ],
    "id": 1528053,
    "title": "Spaghetti Carbonara",
    "readyInMinutes": 20,
    "servings": 4,
    "sourceUrl": "https://simply-delicious-food.com/spaghetti-carbonara/",
    "image": "https://spoonacular.com/recipeImages/1528053-556x370.jpg",
    "imageType": "jpg",
    "summary": "Spaghetti Carbonaran is a Mediterranean recipe that serves 4. One portion of this dish contains approximately <b>23g of protein</b>, <b>31g of fat</b>, and a total of <b>521 calories</b>. For <b>$1.32 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>20 minutes</b>. It works well as a main course. Head to the store and pick up spaghetti, pancetta / guanciale / bacon, salt and pepper, and a few other things to make it today. It is brought to you by Simply Delicious Food. Taking all factors into account, this recipe <b>earns a spoonacular score of 0%</b>, which is very bad (but still fixable). If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/spaghetti-carbonara-1350363\">Spaghetti Carbonara</a>, <a href=\"https://spoonacular.com/recipes/spaghetti-carbonara-18420\">Spaghetti Carbonara</a>, and <a href=\"https://spoonacular.com/recipes/spaghetti-carbonara-1312733\">Spaghetti Carbonara</a>.",
    "cuisines": [
        "Mediterranean",
        "Italian",
        "European"
    ],
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [],
    "occasions": [],
    "winePairing": {
        "pairedWines": [
            "frascati",
            "chablis",
            "pinot grigio"
        ],
        "pairingText": "Frascati, Chablis, and Pinot Grigio are my top picks for Spaghetti Carbonara. A crisp dry white wine balances out the richness of a creamy carbonara. Frascati is a Roman wine, which makes it an especially fitting choice to the Roman dish. The Principe Pallavicini Poggio Verde Frascati Superiore with a 4.3 out of 5 star rating seems like a good match. It costs about 13 dollars per bottle.",
        "productMatches": [
            {
                "id": 444009,
                "title": "Principe Pallavicini Poggio Verde Frascati Superiore",
                "description": "Bright, brilliant straw yellow. It has a broad and intense nose with notes of blossoms and tropical fruit. A full, soft palate with lingering aftertaste. Suitable for first courses, shellfish, white meats and fresh cheeses",
                "price": "$12.98",
                "imageUrl": "https://spoonacular.com/productImages/444009-312x231.jpg",
                "averageRating": 0.86,
                "ratingCount": 5,
                "score": 0.7975,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fprincipe-pallavicini-poggio-verde-frascati-superiore-2013%2F149288"
            }
        ]
    },
    "instructions": "Instructions\n\nBring a large pot of water to a boil and season generously with salt.\n\nAdd the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. \n\nWhile the pasta cooks, set a large pan over medium-high heat and add a few tablespoons of olive oil. Add the guanciale/pancetta/bacon and allow to cook until golden brown. \n\nWhisk together a whole egg, egg yolks and finely grated cheeses with a pinch of salt and pepper. \n\nOnce the pasta is cooked and the pancetta is golden brown, add the pasta to the pan with the pancetta and reduce the heat.\n\nPour the egg sauce over the pasta with 1 cup of pasta cooking water and toss continuously until the sauce starts to thicken and coat the pasta.\n\nAdd more pasta water if necessary. It's important to do this over low heat to prevent the egg from curdling. Once the sauce is thick and creamy and the pasta is coated, serve the pasta in bowls topped with grated Parmesan. ",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Bring a large pot of water to a boil and season generously with salt.",
                    "ingredients": [
                        {
                            "id": 14412,
                            "name": "water",
                            "localizedName": "water",
                            "image": "water.png"
                        },
                        {
                            "id": 2047,
                            "name": "salt",
                            "localizedName": "salt",
                            "image": "salt.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404752,
                            "name": "pot",
                            "localizedName": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. ",
                    "ingredients": [
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "fusilli.jpg"
                        },
                        {
                            "id": 14412,
                            "name": "water",
                            "localizedName": "water",
                            "image": "water.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "While the pasta cooks, set a large pan over medium-high heat and add a few tablespoons of olive oil.",
                    "ingredients": [
                        {
                            "id": 4053,
                            "name": "olive oil",
                            "localizedName": "olive oil",
                            "image": "olive-oil.jpg"
                        },
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "fusilli.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ]
                },
                {
                    "number": 4,
                    "step": "Add the guanciale/pancetta/bacon and allow to cook until golden brown. ",
                    "ingredients": [
                        {
                            "id": 93799,
                            "name": "guanciale",
                            "localizedName": "guanciale",
                            "image": "guanciale.jpg"
                        },
                        {
                            "id": 10410123,
                            "name": "pancetta",
                            "localizedName": "pancetta",
                            "image": "pancetta.png"
                        },
                        {
                            "id": 10123,
                            "name": "bacon",
                            "localizedName": "bacon",
                            "image": "raw-bacon.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Whisk together a whole egg, egg yolks and finely grated cheeses with a pinch of salt and pepper. ",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "localizedName": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        },
                        {
                            "id": 1125,
                            "name": "egg yolk",
                            "localizedName": "egg yolk",
                            "image": "egg-yolk.jpg"
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404661,
                            "name": "whisk",
                            "localizedName": "whisk",
                            "image": "whisk.png"
                        }
                    ]
                },
                {
                    "number": 6,
                    "step": "Once the pasta is cooked and the pancetta is golden brown, add the pasta to the pan with the pancetta and reduce the heat.",
                    "ingredients": [
                        {
                            "id": 10410123,
                            "name": "pancetta",
                            "localizedName": "pancetta",
                            "image": "pancetta.png"
                        },
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "fusilli.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ]
                },
                {
                    "number": 7,
                    "step": "Pour the egg sauce over the pasta with 1 cup of pasta cooking water and toss continuously until the sauce starts to thicken and coat the pasta.",
                    "ingredients": [
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "fusilli.jpg"
                        },
                        {
                            "id": 0,
                            "name": "sauce",
                            "localizedName": "sauce",
                            "image": ""
                        },
                        {
                            "id": 14412,
                            "name": "water",
                            "localizedName": "water",
                            "image": "water.png"
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 8,
                    "step": "Add more pasta water if necessary. It's important to do this over low heat to prevent the egg from curdling. Once the sauce is thick and creamy and the pasta is coated, serve the pasta in bowls topped with grated Parmesan. ",
                    "ingredients": [
                        {
                            "id": 14412,
                            "name": "water",
                            "localizedName": "water",
                            "image": "water.png"
                        },
                        {
                            "id": 1033,
                            "name": "parmesan",
                            "localizedName": "parmesan",
                            "image": "parmesan.jpg"
                        },
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "fusilli.jpg"
                        },
                        {
                            "id": 0,
                            "name": "sauce",
                            "localizedName": "sauce",
                            "image": ""
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404783,
                            "name": "bowl",
                            "localizedName": "bowl",
                            "image": "bowl.jpg"
                        }
                    ]
                }
            ]
        }
    ],
    "originalId": null
}


    recipe_data:any;
    recipe_object:any;
    array1:any;

    name:any;
    image:any;

    healthy:boolean;
    veg:boolean;
    glutenFree:boolean;
    dairyFree:boolean;

    servings:number;
    readyInMinutes:number;
    numberOfIngredients:number;
    price:number;

    ingredientsNameList=new Array;
    ingredientsQunatityList=new Array;
    equipmentList=new Array;
    recipeInstrucations=new Array;
    recipeTag=new Array;
    cuisines=new Array;


    i:number;
    j:number;

  
  constructor(private recipe:RecipesService,private sanitizer:DomSanitizer, private http:HttpClient) {
  }

   
  ngOnInit():void{
    /*this.recipe.getData(this.recipe.recipe_id).subscribe(data=>{
    this.recipe.getData('1528053').subscribe(data=>{  
      console.log(data);
      //console.log(data.toString());
      this.recipe_data=JSON.stringify(data);
      this.recipe_object=JSON.parse(this.recipe_data);
      this.fun()
    })*/
    this.recipe.getData(this.recipe.recipe_id).subscribe(data=>{
        console.warn(this.recipe.recipe_id);
        console.log(data);
        this.recipe_data=JSON.stringify(data);
        this.recipe_object=JSON.parse(this.recipe_data);
        this.data_retrieval_api();
    })
    /*console.log(this.myData);
    this.recipe_data=JSON.stringify(this.myData);
    this.recipe_object=JSON.parse(this.recipe_data);
    this.data_retrieval_json();*/
    
  }
  data_retrieval_api(){
    this.name=this.recipe_object.title;
    this.image=this.recipe_object.image;
    this.healthy=this.recipe_object.veryHealthy;
    this.veg=this.recipe_object.veryHealthy;
    this.glutenFree=this.recipe_object.glutenFree;
    this.dairyFree=this.recipe_object.dairyFree;

    var str = this.recipe_object.summary;
    //var str1 = document.createElement('str1');
    //str1.innerHTML = str;
    document.getElementById('summary').innerHTML=str;
    //alert(str1.textContent);
    //alert(str1.innerText);

    this.servings=this.recipe_object.servings;
    console.log(this.recipe_object.extendedIngredients.length);
    this.numberOfIngredients=this.recipe_object.extendedIngredients.length;
    this.readyInMinutes=this.recipe_object.readyInMinutes;
    this.price=Math.round(((this.recipe_object.pricePerServing)*0.75)*this.servings);

    //console.log(this.recipe_object.extendedIngredients);
    for(this.i=0;this.i<this.recipe_object.extendedIngredients.length;this.i++){
        //console.log(this.recipe_object.extendedIngredients[this.i].nameClean);
        //console.log(this.recipe_object.extendedIngredients[this.i].amount+' '+
          //          this.recipe_object.extendedIngredients[this.i].unit);
        //console.log(this.recipe_object.analyzedInstructions[0].steps.length);
        this.ingredientsNameList.push(' '+this.recipe_object.extendedIngredients[this.i].nameClean);
        this.ingredientsQunatityList.push(this.recipe_object.extendedIngredients[this.i].amount+' '+
                                            this.recipe_object.extendedIngredients[this.i].unit)
    }
    for(this.i=0;this.i<this.recipe_object.analyzedInstructions[0].steps.length;this.i++){
        this.recipeInstrucations.push(this.recipe_object.analyzedInstructions[0].steps[this.i].step);
        if(this.recipe_object.analyzedInstructions[0].steps[this.i].equipment.length!=0){
            for(this.j=0;this.j<this.recipe_object.analyzedInstructions[0].steps[this.i].equipment.length;this.j++){
                console.log(this.recipe_object.analyzedInstructions[0].steps[this.i].equipment[this.j].localizedName);
                this.equipmentList.push(this.recipe_object.analyzedInstructions[0].steps[this.i].equipment[this.j].localizedName);
        }
    }
    /*for(this.i=0;this.i<this.recipe_object.cuisines.length;this.i++){
        this.recipeTag.push(this.recipe_object.cuisines)
    }*/

    
  }
    for(this.i=0;this.i<this.recipe_object.cuisines.length;this.i++)
        this.cuisines.push(this.recipe_object.cuisines[this.i]);

    console.log(this.recipe_object.dishTypes);
    for(this.i=0;this.i<this.recipe_object.dishTypes.length;this.i++)
        this.recipeTag.push(this.recipe_object.dishTypes[this.i]);
  
    
  }

  
  data_retrieval_json(){
    this.name=this.recipe_object.title;
    this.image=this.recipe_object.image
    this.healthy=this.recipe_object.veryHealthy;
    this.veg=this.recipe_object.veryHealthy;
    this.glutenFree=this.recipe_object.glutenFree;
    this.dairyFree=this.recipe_object.dairyFree;

    var str = this.recipe_object.summary;
    //var str1 = document.createElement('str1');
    //str1.innerHTML = str;
    document.getElementById('summary').innerHTML=str;
    //alert(str1.textContent);
    //alert(str1.innerText);

    this.servings=this.recipe_object.servings;
    console.log(this.recipe_object.extendedIngredients.length);
    this.numberOfIngredients=this.recipe_object.extendedIngredients.length;
    this.readyInMinutes=this.recipe_object.readyInMinutes;
    this.price=Math.round(((this.recipe_object.pricePerServing)*0.75)*this.servings);

    //console.log(this.recipe_object.extendedIngredients);
    for(this.i=0;this.i<this.recipe_object.extendedIngredients.length;this.i++){
        //console.log(this.recipe_object.extendedIngredients[this.i].nameClean);
        //console.log(this.recipe_object.extendedIngredients[this.i].amount+' '+
          //          this.recipe_object.extendedIngredients[this.i].unit);
        //console.log(this.recipe_object.analyzedInstructions[0].steps.length);
        this.ingredientsNameList.push(' '+this.recipe_object.extendedIngredients[this.i].nameClean);
        this.ingredientsQunatityList.push(this.recipe_object.extendedIngredients[this.i].amount+' '+
                                            this.recipe_object.extendedIngredients[this.i].unit)
    }
    for(this.i=0;this.i<this.recipe_object.analyzedInstructions[0].steps.length;this.i++){
        this.recipeInstrucations.push(this.recipe_object.analyzedInstructions[0].steps[this.i].step);
        if(this.recipe_object.analyzedInstructions[0].steps[this.i].equipment.length!=0){
            for(this.j=0;this.j<this.recipe_object.analyzedInstructions[0].steps[this.i].equipment.length;this.j++){
                console.log(this.recipe_object.analyzedInstructions[0].steps[this.i].equipment[this.j].localizedName);
                this.equipmentList.push(this.recipe_object.analyzedInstructions[0].steps[this.i].equipment[this.j].localizedName);
        }
    }
    /*for(this.i=0;this.i<this.recipe_object.cuisines.length;this.i++){
        this.recipeTag.push(this.recipe_object.cuisines)
    }*/

    
  }
  for(this.i=0;this.i<this.recipe_object.cuisines.length;this.i++)
    this.cuisines.push(this.recipe_object.cuisines[this.i]);

  console.log(this.recipe_object.dishTypes);
  for(this.i=0;this.i<this.recipe_object.dishTypes.length;this.i++)
    this.recipeTag.push(this.recipe_object.dishTypes[this.i]);
  }
}
