// list 
$('.nav-icon i').click(function(){
    let listWidth=$('.list').outerWidth();
    let leftlist=$('.contain-side').offset().left;
    console.log(listWidth)
    console.log(leftlist)
    if(leftlist == 0){
        $('.contain-side').css({
            left:`-200px`,
            transition:'all 1s'
        })
    }else{
        $('.contain-side').css({
            left:`0px`,
            transition:'all 1s'
        })   
    }
})

let links=document.querySelectorAll(".list li")
console.log(links)
for(let i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
        let x=e.target.innerText;
        console.log(x)
        if(x == 'Search'){
            diplaySearch()
        }
        else if(x == 'Categories'){
            start1()  
        }
        else if(x == 'Area'){
            start2()
        }
        else if(x == 'Ingredinets'){
            start3()
        }
        else if(x == 'Contact Us'){
            contact()
        }
    })
}
$('.nav-icon i').click(function(){
    $('.list li').css({
        padding: '10px',
        transition:'all 1.5s'
    })
})
function diplaySearch(){
    let cartona='';
    cartona+=`
    <input type="text" placeholder="Search By Name" id="search1" class="text-muted rounded border border-muted border-3" onclick="startsearch()"/>
    <input type="text" placeholder="Search By Frist Letter" id="search2" class="text-muted rounded border border-muted border-3"/>
       `
       document.getElementById("search").innerHTML=cartona
    }
//
$(window).ready(function(){
    $('#louding').fadeOut(2000)
})
//
function contact(){
    let cartona=''
    cartona+=`
    <div class="col-md-6">
                    <input type="text" placeholder="Enter Your Name" class="border border-muted text-muted border-2"> 
                </div>
                <div class="col-md-6">
                    <input type="email" placeholder="Enter Your Email" class="border border-muted text-muted border-2"> 
                </div>
                <div class="col-md-6">
                    <input type="number" placeholder="Enter Your Phone" class="border border-muted text-muted border-2"> 
                </div>
                <div class="col-md-6">
                    <input type="text" placeholder="Enter Your Age" class="border border-muted text-muted border-2"> 
                </div>
                <div class="col-md-6">
                    <input type="number" placeholder="Enter Your Paaword" class="border border-muted text-muted border-2"> 
                </div>
                <div class="col-md-6">
                    <input type="number" placeholder="Repassword" class="border border-muted text-muted border-2"> 
                </div>
               </div>
               <div class="text-center"> 
               <button class="btn btn-outline-danger px-2 my-2 w-25">Submit</button>
               </div>
    `
    document.getElementById("contact").innerHTML=cartona;
}
function displaying(x){
    let cartona='';
    arr=x.categories
    for(let i=0 ;i<arr.length;i++){
        cartona+=`
        <div class="col-md-3">
                <div class="ing-cont p-3">
                    <div class="ing-contain" onclick="Area2(${[i]})">
                        <img src="${arr[i].strCategoryThumb}" class="w-100 rounded"/>
                    <div class="layer text-center">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription}</p>
                    </div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById("home").innerHTML=cartona;
}
function displaycat(x){
    let cartona='';
    arr=x.meals;
    for(let i=0 ;i<arr.length;i++){
        if(arr[i].strDescription != null){
            cartona+=`
            <div class="col-md-3">
            <div class="cat-cont text-center" onclick="Area3(${[i]})">
                <i class="fa-solid fa-drumstick-bite"></i>
                <h3 class="py-1">${arr[i].strIngredient}</h3>
                <p class="py-1">${arr[i].strDescription}</p>
            </div>
        </div>
            ` 
        }else{
            cartona=''
        }
    }
    document.getElementById("home").innerHTML=cartona;
}
function displayArea(x){
    let cartona='';
    arr=x.meals;
    for(let i=0 ;i<arr.length;i++){
        cartona+=`
        <div class="col-md-3">
                <div class="area-icon text-center "onclick="Area1(${[i]})" >
                    <i class="fa-solid fa-house-laptop"></i>
                    <h2>${arr[i].strArea}</h2>
                </div>
            </div>
        `
    }
    document.getElementById("home").innerHTML=cartona;
}
function displayrand(x){
    let cartona='';
    arr=x.meals
    for(let i=0 ;i<20;i++){
        cartona+=`
        <div class="col-md-3">
                <div class="ing-cont p-3">
                    <div class="ing-contain" onclick="Area5(${[i]})">
                        <img src="${arr[i].strMealThumb}" class="w-100 rounded"/>
                    <div class="layer text-center w-100">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById("home").innerHTML=cartona;
}
function sayhi(){
    console.log("hi")
}
async function getdata1(){
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let result =await data.json()
        // console.log(result.categories)
        return (result)
    }
async function start1(){
    let data=await getdata1();
    displaying(data)

}

async function getdata2(){
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let result =await data.json()
    console.log(result)
    return (result)
}
getdata2()
async function start2(){
    let data=await getdata2();
    displayArea(data)
}

async function getdata3(){
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let result =await data.json()
    // console.log(result.categories)
    return (result)
}
async function start3(){
let data=await getdata3();
displaycat(data)
}
async function getdata4(){
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let result =await data.json()
    // console.log(result.categories)
    return (result)
}
async function start4(){
let data=await getdata4();
displayrand(data)

}

start4()
async function Area1(x){
    let data= await getdata2()
    let y=data.meals
    let response=y[x].strArea;
    FetchArea(response)
    compfetchArea(response)
    
}
Area1()
async function FetchArea(z){
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${z}`)
    let result= await data.json()
    console.log(result)
    return(result)
}
async function compfetchArea(x){
   let data=await FetchArea(x)
   console.log(data)
   diplayspecialArea(data)
   }
function diplayspecialArea(x){
    let arr=x.meals
    let cartona=''
    for(let i=0 ;i<arr.length;i++){
        cartona+=`
        <div class="col-md-3">
                <div class="ing-cont p-3">
                    <div class="ing-contain" onclick="sayhi()">
                        <img src="${arr[i].strMealThumb}" class="w-100 rounded"/>
                    <div class="layer text-center w-100">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById("home").innerHTML=cartona;

}


// sec fetch
async function Area2(x){
    let data= await getdata1()
    let y=data.categories
    let response=y[x].strCategory;
    console.log(x)
    console.log(response)
    FetchArea2(response)
    compfetchArea2(response)
    
}
Area2()
async function FetchArea2(z){
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${z}`)
    let result= await data.json()
    console.log(result)
    return(result)
}
async function compfetchArea2(x){
   let data=await FetchArea2(x)
   console.log(data)
   diplayspecialArea2(data)
   }
function diplayspecialArea2(x){
    let arr=x.meals
    let cartona=''
    for(let i=0 ;i<arr.length;i++){
        cartona+=`
        <div class="col-md-3">
                <div class="ing-cont p-3">
                    <div class="ing-contain" onclick="sayhi()">
                        <img src="${arr[i].strMealThumb}" class="w-100 rounded"/>
                    <div class="layer text-center w-100">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById("home").innerHTML=cartona;

}

$(window).ready(function(){
    $("louding").show(5000)
})
//third fetch
async function Area3(x){
    let data= await getdata3()
    let y=data.meals
    let response=y[x].strIngredient;
    console.log(x)
    console.log(response)
    FetchArea3(response)
    compfetchArea3(response)
    
}
Area3()
async function FetchArea3(z){
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${z}`)
    let result= await data.json()
    console.log(result)
    return(result)
}
async function compfetchArea3(x){
   let data=await FetchArea3(x)
   console.log(data)
   diplayspecialArea3(data)
   }
function diplayspecialArea3(x){
    let arr=x.meals
    let cartona=''
    for(let i=0 ;i<arr.length;i++){
        cartona+=`
        <div class="col-md-3">
                <div class="ing-cont p-3">
                    <div class="ing-contain" onclick="Area5(${[i]})" >
                        <img src="${arr[i].strMealThumb}" class="w-100 rounded"/>
                    <div class="layer text-center w-100">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById("home").innerHTML=cartona;

}


//fourth fetach

async function Area5(x){
    let data= await getdata4()
    let y=data.meals
    let response=y[x].idMeal;
    console.log(x)
    console.log(response)
    FetchArea5(response)
    compfetchArea5(response)
    
}
Area5()
async function FetchArea5(z){
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${z}`)
    let result= await data.json()
    console.log(result)
    return(result)
}
async function compfetchArea5(x){
   let data=await FetchArea5(x)
   console.log(data)
   diplayspecialArea5(data)
   }
function diplayspecialArea5(x){
    let arr=x.meals
    let cartona=''
    for(let i=0 ;i<arr.length;i++){
        cartona+=`
        <div class="col-md-4">
        <div class="side">
            <img src="${arr[i].strMealThumb}" class="w-100 rounded mb-3"/>
            <h3>${arr[i].strMeal}</h3>
        </div>
    </div>
    <div class="col-md-8">
        <div class="inner-cont">
            <h3>Instructions</h3>
            <p>${arr[i].strInstructions}</p>
            <p class="inner-bold">Area : ${arr[i].strArea}</p>
            <p class="inner-bold">Category : ${arr[i].strCategory}</p>
            <p class="inner-bold">Recipes : </p>
            <span class="bg-info rounded p-2 m-2">${arr[i].strIngredient1}</span>
            <span class="bg-info rounded p-2 m-2">${arr[i].strIngredient2}</span>
            <span class="bg-info rounded p-2 m-2">${arr[i].strIngredient3}</span>
            <span class="bg-info rounded p-2 m-2">${arr[i].strIngredient4}</span>
            <span class="bg-info rounded p-2 m-2">${arr[i].strIngredient5}</span>
            <span class="bg-info rounded p-2 m-2 ">${arr[i].strIngredient6}</span>
            <br>
            <br>
            <p class="inner-bold">Tags</p>
            <p>${arr[i].strTags}</p>
            <button class=" btn btn-success">Source</button>
            <button class="btn btn-danger" onclick="document.location='${arr[i].strYoutube}'">Youtube</button>
        </div>
    </div>
      `
    }
    document.getElementById("home").innerHTML=cartona;

}