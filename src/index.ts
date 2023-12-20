import { string } from 'yup';
import './main.css';
let startButtonone = document.querySelector(".startButton") as HTMLElement;
let SearchBtn = document.querySelector(".startButton") as HTMLElement;
let bigDiv = document.querySelector(".displayedOne") as HTMLElement;
const isDisplayed = document.querySelector(".NodisplayedOne") as HTMLElement;

SearchBtn.onclick = function () {
    isDisplayed.style.display = 'grid';
    bigDiv.style.display = "none";
}

interface DataStorage {
    data1: string;
    data2: string;
    data3: string;
}

let userData1: string;
let userData2: string;
let userData3: string;

function saveData() {
    userData1 = (document.getElementById('user1') as HTMLInputElement).value;
    userData2 = (document.getElementById('user2') as HTMLInputElement).value;
    userData3 = (document.getElementById('user3') as HTMLInputElement).value;
}

let usernameforlist = document.querySelector('.usernameforList') as HTMLElement;
let repoforlist = document.querySelector(".repoforList") as HTMLElement;
let branchforList = document.querySelector(".branchforList") as HTMLElement;



startButtonone.addEventListener("click", () => {
    saveData(); 
    const usersObject: DataStorage = {
        data1: userData1,
        data2: userData2,
        data3: userData3
    };
    console.log(usersObject);
	console.log(usersObject.data1);
	usernameforlist.textContent = usersObject.data1;
	repoforlist.textContent = usersObject.data2;
	branchforList.textContent = usersObject.data3
});

const deleteButton = document.querySelector(".deleteBtn") as HTMLElement;
const repoList = document.querySelector(".listofusers") as HTMLElement;

function deleterepo(){
	isDisplayed.style.display = "none";
	bigDiv.style.display = "grid";
}

deleteButton.addEventListener("click",deleterepo);





