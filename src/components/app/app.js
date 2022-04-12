import { v4 as uuidv4 } from 'uuid';
import {Component} from "react";

import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: uuidv4(), name: "John Smith", salary: 1000, increase: false},
                {id: uuidv4(), name: "Alex Mur", salary: 3000, increase: false},
                {id: uuidv4(), name: "Tony Montana", salary: 800, increase: true}
            ]
        }
    }

    onDelete = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {

        const newItem = {
            name,
            salary,
            id: uuidv4(),
            increase: false
        }

        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }


    render() {
        const {data} = this.state
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList data={data} onDelete={this.onDelete}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;