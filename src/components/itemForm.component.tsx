import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


// creates the ItemForm

export default class ItemForm extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            itemName: "", 
            carbs: 0, 
            protein: 0, 
            fat: 0, 
            kcal: 0
        } 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e, field) { 
       this.setState({ 
           [field]: e.target.value
       })
    }

    handleSubmit(e) { 
        console.log("WHOOHOOO submitted!")
        alert('A food item was submitted: ' + this.state); 
        e.preventDefault(); 
    }

    render() { 
        return ( 
        <form onSubmit= {this.handleSubmit}>
            <label>
                Item Name: 
              <input type="text" 
                     name="itemName"    
                     value={this.state.itemName} 
                     onChange={(event) => this.handleChange(event, "itemName")} />
            </label>
            <label> 
                Carbohydrates: 
                <input type="number" 
                       name="carbs"
                       value={this.state.carbs} 
                       onChange={(event) => this.handleChange(event, "carbs")} />
            </label>
            <label> 
                Protein: 
                <input type="number" 
                       name="protein"
                       value={this.state.protein} 
                       onChange={(event) => this.handleChange(event, "protein")} />
            </label>
            <label> 
                Fat: 
                <input type="number" 
                       name="fat"
                       value={this.state.fat} 
                       onChange={(event) => this.handleChange(event, "fat")} />
            </label>
            <label> 
                Kcal: 
                <input type="number" 
                       name="kcal"
                       value={this.state.kcal} 
                       onChange={(event) => this.handleChange(event, "kcal")} />
            </label>
              <input type="submit" value="Submit" />
        </form>
      )
    }

}