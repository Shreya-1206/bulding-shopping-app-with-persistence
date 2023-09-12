import { saveToStore, getFromStore } from "./storage";
let shoppingList = [];
let completedList = [];

export const addToShoppingList = (item) => {
  const itemId = `${parseInt(
    Math.random() * 100000000
  )}-${new Date().getTime()}`;

  shoppingList.push({
    id: itemId,
    item,
    priority: 'normal',
  });
  
  saveToStore({
    shoppingList,
    completedList,
  });

};

export const addToCompletedList = (itemId) => {
  const getItem = shoppingList.find(({ id }) => id === itemId);
  shoppingList = shoppingList.filter(({ id }) => id !== itemId);
  completedList = [getItem, ...completedList];

  saveToStore({
    shoppingList,
    completedList,
  });

};

export const setPriority = (itemId, priority) => {
  shoppingList = shoppingList.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        priority,
      };
    }

    return item;
  });

  saveToStore({
    shoppingList,
    completedList,
  });

};

export const removeItem = (itemId) => {
  shoppingList = shoppingList.filter(({ id }) => id !== itemId);
  
  saveToStore({
    shoppingList,
    completedList,
  });

};

export const clearCompleted = () => {
  completedList = [];

  saveToStore({
    shoppingList,
    completedList,
  });

};

export const getShoppingList = () => shoppingList;
export const getCompletedList = () => completedList;


//we have to equip our app with capability of bootstrapping , our arrays with datafrom the localstorage
//therefore we have to load the data from the local storage with the help from this function
export const bootup = () => {
  const {active, completed} = getFromStore();
  shoppingList = active;
  completedList = completed;
};
