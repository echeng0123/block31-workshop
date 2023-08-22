//get the ul element
const ul = document.querySelector("ul");

console.log("i'm in the script");

//GET array of pets from localhost:8080/api/v1/pets
fetch("http://localhost:8080/api/v1/pets/")
	.then((response) => response.json())
	.then((pets) => {
		//loop through the array of pets
		pets.forEach((pet) => {
			//create a new li element
			const li = document.createElement("li");
			//set the text of the li element to the pet's name
			li.textContent = pet.name;
			//append the li element to the ul element
			ul.appendChild(li);
		});
	});
