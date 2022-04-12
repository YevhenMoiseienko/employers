import './app-info.css'

const AppInfo = ({employers, increase}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employers}</h2>
            <h2>Премию получают: {increase}</h2>
        </div>
    )
}

export default AppInfo;