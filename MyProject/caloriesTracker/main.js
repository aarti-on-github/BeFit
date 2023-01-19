const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d2b4c4f92msh0b4f4f0d7da18cap1015cfjsna685b4105dd1',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

const userInput = document.querySelector('input');
const btn =document.querySelector('button');
let params= ""

const callParams = () =>{
    console.log(userInput.value)
    params= userInput.value
    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${params}`, options)
	.then(response => response.json())
    // console.log(data.hints[0].food.nutrients.CHOCDF)
	.then(data => {
        let output = '';
        
            output+=`<h1>Enery(kcal):${data.hints[0].food.nutrients.ENERC_KCAL}</h1>
            <h1>Protein(g):${data.hints[0].food.nutrients.PROCNT}</h1>
            <h1>Fats(g):${data.hints[0].food.nutrients.FAT}</h1>
            <h1>Carbohydrates(g):${data.hints[0].food.nutrients.CHOCDF}</h1>
            <h1>Fibre(g):${data.hints[0].food.nutrients.FIBTG}</h1>


            
            <img style="padding-top:10px; box-shadow: 0 20px 30px rgba(0,0,0,0.4);
            border-radius:10px;" src="${data.hints[0].food.image}">
            
            `;
            
            
            
            
    
        document.querySelector('.result').innerHTML = output;
    })
	.catch(err => console.error(err));

    userInput.value="";
}


btn.addEventListener('click',callParams)

// console.log(hints[0].food.nutrients