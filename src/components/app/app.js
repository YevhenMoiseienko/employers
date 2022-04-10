import { v4 as uuidv4 } from 'uuid';

import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

const App = () => {

    const data = [
        {id: uuidv4(),name: "John Smith", salary: 1000, increase: false},
        {id: uuidv4(),name: "Alex Mur", salary: 3000, increase: false},
        {id: uuidv4(),name: "Tony Montana", salary: 800, increase: true}
    ]

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;