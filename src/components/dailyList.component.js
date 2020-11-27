import React, { Component } from 'react'; 
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import ItemForm from './itemForm.component.js';
// import necessary libraries 

const Item = props => (
   <tr>
       <td >{props.item.name}</td>
        <td >{props.item.carbs_content}</td>
        <td >{props.item.protein_content}</td>
        <td> {props.item.fat_content}</td>
        <td> {props.item.kcal_content}</td>
        <td>
            <Link to={"/edit/" + props.state._id}>Edit</Link>
        </td>
    </tr>
);
export default class DailyList extends Component { 
    /* 
     * DailyList component will maintain daily total macros 
     * along with the list of items that it is keeping track of 
     */

    constructor(props) { 
        super(props);
        
        this.state = { 
            itemList: [], // dailyItemList will contain items (another component to be defined)
            totalCarbs: 0, // and also track total daily macros 
            totalProteins: 0, 
            totalFat: 0, 
            totalKcal: 0
        };
    }

    showDailyList() { 
            return this.state.itemList.map(function(currentItem, i){
                return <Item item={currentItem} key={i} />;
            })
    }
            
    render() { 
        return ( 
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Carbohydrates (g)</th>
                        <th>Protein (g)</th>
                        <th>Fat (g)</th>
                        <th> Kcal </th>
                    </tr>
                    </thead>
                    <tbody>
                       { this.showDailyList() }
                    </tbody>
                    <div> 
                        <ItemForm />
                    </div>
                </Table>
        )
    }
}