//create a function with shopping-list storage and completed-list storage
//here window.localStorage.setItem provided by the browser and it takes a key and a value

export const saveToStore = function ({shoppingList, completedList}) {
    window.localStorage.setItem('shoppingApp-active', JSON.stringify(shoppingList));
     //key shoppingApp-active , value is JSON.stringify which converts array to string because the localstroage cant process the ARRAY 
     window.localStorage.setItem('shoppingApp-completed', JSON.stringify(completedList));
};

//now to fetch contains from local storage, we will create and export function 
export const getFromStore = function () {
    const getActive = window.localStorage.getItem('shoppingApp-active');
    const getCompleted = window.localStorage.getItem('shoppingApp-completed');

    return {
        active : getActive ? JSON.parse(getActive): [], //convrsion to array after string
        completed : getCompleted ? JSON.parse(getCompleted): [],
    };
};