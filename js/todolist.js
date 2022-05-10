const inputVal = document.getElementsByClassName("input")[0];
const addPlanBtn = document.getElementsByClassName("btn")[0];

addPlanBtn.addEventListener('click', () => {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if(localItems == null) {
        planList = []
    } else {
        planList = localItems;
    }
    planList.push(inputVal.value)
    localStorage.setItem('localItem', JSON.stringify(planList))
    showlist();
});

function showlist() {
    let outPut = '';
    let planListShow = document.querySelector('.todoLists');
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if(localItems == null) {
        planList = []
    } else {
        planList = localItems;
    }
    planList.forEach((data, index) => {
        outPut += `
        <div class="plan content input todoList">
            <p id="text" class="pText">${data}</p>
            <button class="deletePlan" onClick="deleteItem(${index})">delete</button>
        </div>    
        `
    });
    planListShow.innerHTML = outPut;
}
showlist()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    planList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(planList));
    showlist();
}

function clearPlan() {
    localStorage.clear();
    showlist();
}