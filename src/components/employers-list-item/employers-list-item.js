
import './employers-list-item.scss';

const EmployersListItem = (props) => {

   const {name, salary, onDelete, toggleOnProp, increase, like} = props

   let classes = "list-group-item d-flex justify-content-between"
   classes = increase ? classes += " increase" : classes;
   classes = like ? classes += " like" : classes;

   return (
       <li className={classes}>
           <span className="list-group-item-label"
                 data-toggle="like"
                 tabIndex="0"
                 onClick={toggleOnProp}>{name}</span>
           <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
           <div className='d-flex justify-content-center align-items-center'>
               <button type="button"
                       className="btn-cookie btn-sm "
                       data-toggle="increase"
                        onClick={toggleOnProp}>
                   <i className="fas fa-cookie"></i>
               </button>

               <button type="button"
                       className="btn-trash btn-sm "
                        onClick={onDelete}>
                   <i className="fas fa-trash"></i>
               </button>
               <i className="fas fa-star"></i>
           </div>
       </li>
   )
}

export default EmployersListItem;