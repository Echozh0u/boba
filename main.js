const baseUrl = "https://bobas-advisors.onrender.com"

// milk
const makeRequest = async function() {
    try {
        const response = await fetch(`${baseUrl}/?ingredient=milk`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        displayDrinks(json);
    } catch (error) {
        console.error("请求出错:", error);
    }
}
//black tea
const makeBlackteaRequest = async function() {
    try {
        const response = await fetch(`${baseUrl}/?ingredient=black tea`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        displayDrinks(json);
    } catch (error) {
        console.error("请求出错:", error);
    }
}
// condensed milk
const makeCondensedmilkRequest = async function() {
    try {
		const response = await fetch(`${baseUrl}/?ingredient=condensed milk`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        displayDrinks(json);
    } catch (error) {
        console.error("请求出错:", error);
    }
}


// boba
const makeBobaRequest = async function() {
    try {
		const response = await fetch(`${baseUrl}/?ingredient=boba`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        displayDrinks(json);
    } catch (error) {
        console.error("请求出错:", error);
    }
}


// thai
const makeThaiRequest = async function() {
    try {
		const response = await fetch(`${baseUrl}/?ingredient=thai ice tea`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        displayDrinks(json);
    } catch (error) {
        console.error("请求出错:", error);
    }
}
// jelly
const makeGrassRequest = async function() {
    try {
		const response = await fetch(`${baseUrl}/?ingredient=grass jelly`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        displayDrinks(json);
    } catch (error) {
        console.error("请求出错:", error);
    }
}
// pudding
const makePuddingRequest = async function() {
    try {
		const response = await fetch(`${baseUrl}/?ingredient=pudding`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        displayDrinks(json);
    } catch (error) {
        console.error("请求出错:", error);
    }
}
// canesugar
const makeSugarRequest = async function() {
    try {
		const response = await fetch(`${baseUrl}/?ingredient=cane sugar`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        displayDrinks(json);
    } catch (error) {
        console.error("请求出错:", error);
    }
}
// .
function displayDrinks(drinks) {
    const drinksList = document.getElementById('flavorList');
    drinksList.innerHTML = ''; 
    drinks.forEach(drink => {
        const listItem = document.createElement('li');
        listItem.textContent = drink.name 
        drinksList.appendChild(listItem);
    });
}

// .
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('milkButton').addEventListener('click', makeRequest);
	document.getElementById('blackteaButton').addEventListener('click', makeBlackteaRequest);
	document.getElementById('condensedmilkButton').addEventListener('click', makeCondensedmilkRequest);
	document.getElementById('bobaButton').addEventListener('click', makeBobaRequest);
	document.getElementById('thaiButton').addEventListener('click', makeThaiRequest);
	document.getElementById('grassButton').addEventListener('click', makeGrassRequest);
	document.getElementById('puddingButton').addEventListener('click', makePuddingRequest);
	document.getElementById('sugarButton').addEventListener('click', makeSugarRequest);
});

