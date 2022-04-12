import { v4 as uuidv4 } from 'uuid';
import {Component} from "react";

import './app.scss'
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
                {id: uuidv4(), name: "John Smith", salary: 5000, increase: false, like: false},
                {id: uuidv4(), name: "Alex Mur", salary: 3000, increase: false, like: false},
                {id: uuidv4(), name: "Tony Montana", salary: 800, increase: false, like: false}
            ],
            term: '',
            filterValue: 'all'
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
            increase: false,
            like: false
        }

        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }

    toggleOnProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            }),
        }))
    }

    onInputSearch = (items, term) => {
        if(term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onUpdateFilter = (filterValue) => {
        this.setState({filterValue})
    }

    onFilter = (items, name) => {
        return items.filter(item => {
            return name === 'increase' ? item.increase : name === 'salary' ? item.salary > 1000 : item;
        })
    }

    render() {
        const {data, term, filterValue} = this.state
        const employers = data.length
        const increase = data.filter(item => item.increase).length
        const visibleData = this.onFilter(this.onInputSearch(data, term), filterValue)
        return (
            <div className="app">
                <AppInfo employers={employers} increase={increase}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filterValue}/>
                </div>
                <EmployersList
                    data={visibleData}
                    onDelete={this.onDelete}
                    toggleOnProp={this.toggleOnProp}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;