import React, { Component } from 'react'; 
import Table from 'react-bootstrap/Table';
// import { Link } from 'react-router-dom';
import ItemForm from './itemForm.component.tsx';
import PropTypes from 'prop-types';

import '../App.css';

// import necessary libraries 

const Item = (props) => (
    <tr>
        <td>{props.item.name}</td>
        <td>{props.item.carbs_content}</td>
        <td>{props.item.protein_content}</td>
        <td>{props.item.fat_content}</td>
        <td>{props.item.kcal_content}</td>
    </tr>
);

Item.propTypes = { 
    item: PropTypes.shape({ 
        name: PropTypes.string.isRequired, 
        carbs_content: PropTypes.number.isRequired, 
        protein_content: PropTypes.number.isRequired, 
        fat_content: PropTypes.number.isRequired, 
        kcal_content: PropTypes.number.isRequired
    }),
    state: PropTypes
};

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
            

    showDailyTotals() { 
        <tr>
            <td>Daily Totals</td>
            <td>{this.state.totalCarbs} </td>
            <td>{this.state.totalProteins}</td>
            <td>{this.state.totalFat}</td>
            <td>{this.state.totalKcal}</td>
        </tr> 
    }

    render() { 
        return ( 
                <div className="mainDailyList">
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Carbohydrates (g)</th>
                            <th>Protein (g)</th>
                            <th>Fat (g)</th>
                            <th>Kcal </th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.showDailyList() }
                        </tbody>
                    </Table>
                    <div className="itemForm-footer"> 
                        <ItemForm />
                    </div>
                </div>
        )
    }
}