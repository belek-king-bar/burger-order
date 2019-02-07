import React, {Component} from 'react';
import './App.css';
import Burger from './Components/Burger/Burger.js';
import BurgerForm from './Components/BurgerForm/BurgerForm.js';


// список доступных ингредиентов
const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат'},
    {name: 'cheese', price: 20, label: 'Сыр'},
    {name: 'meat', price: 30, label: 'Мясо'},
    {name: 'bacon', price: 20, label: 'Бекон'}
];


class App extends Component {
    state = {
        ingredients: {
            salad: {count: 0, total: 0},
            cheese: {count: 0, total: 0},
            meat: {count: 0, total: 0},
            bacon: {count: 0, total: 0}
        }
    };


    getTotal = () => {
        let total = 0;
        let keys = Object.keys(this.state.ingredients);
        let counter = 0;


        while(counter < keys.length){
            total += this.state.ingredients[keys[counter]].total;
            counter++;
        }
        return total;


    };


    ingredientChanger = (name, event) => {
        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;
        if (event.target.value === 'add') {
            ingredient.count += 1;
        }else {
            ingredient.count -= 1;
        }
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;

        this.setState(state);

    };

    isAddButtonDisabled = (name) => {
       return this.state.ingredients[name].count === 0;
    };

    render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>

                <BurgerForm
                    total={this.getTotal()}
                    isDisabled={this.isAddButtonDisabled}
                    changeIngredient={this.ingredientChanger}/>
            </div>
        );
    }
}

export default App;
export {availableIngredients};