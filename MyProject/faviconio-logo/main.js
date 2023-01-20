const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d2b4c4f92msh0b4f4f0d7da18cap1015cfjsna685b4105dd1',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

// fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

    const userInput = document.querySelector('input');
const btn =document.querySelector('button');
let params= ""

const callParams = () =>{
    console.log(userInput.value)
    params= userInput.value
    fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${params}`, options)
	.then(response => response.json())
    // .then(data=>console.log(data[0].difficulty))
    .then(data=>{
        let output ='';
                output+=`<div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">equipment to be used:${data[0].equipment}</h1>
                  <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">${data[0].difficulty}</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">${data[0].instructions}</p>
                </div>

                <div class="container px-5 py-2 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">${data[2].difficulty}</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">${data[1].instructions}</p>
                </div>
           
            
            `;
                    document.querySelector('.result').innerHTML = output;

    })
	// .then(data => {
    //     // let output = '';
        
    //     //     output+=`<h1>Enery(kcal):${data.hints[0].food.nutrients.ENERC_KCAL}</h1>
    //     //     <h1>Protein(g):${data.hints[0].food.nutrients.PROCNT}</h1>
    //     //     <h1>Fats(g):${data.hints[0].food.nutrients.FAT}</h1>
    //     //     <h1>Carbohydrates(g):${data.hints[0].food.nutrients.CHOCDF}</h1>
    //     //     <h1>Fibre(g):${data.hints[0].food.nutrients.FIBTG}</h1>



    //     //     <img src="${data.hints[0].food.image}">
            
    //     //     `;
            
            
            
            
    
    //     // document.querySelector('.result').innerHTML = output;
    // })
	.catch(err => console.error(err));

    userInput.value="";
}


btn.addEventListener('click',callParams)
