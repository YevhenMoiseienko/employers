import './app-filter.scss'

const AppFilter = ({onUpdateFilter, filter}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const addClass = active? "btn btn-light" : "btn btn-outline-light"
        return (
            <button
                className={addClass}
                type="button"
                key={name}
                onClick={() => onUpdateFilter(name)}>
                {label}</button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;