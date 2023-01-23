import { Items } from "../../../App"
import styles from './MenuCard.module.css'

interface Props {
  items?: Items[]
  deleteDishes?: Function
  deleteSports?: Function
}

const MenuCard = ({ items, deleteDishes, deleteSports }: Props): JSX.Element => {
  // Need to fix
  // Conditional formatting so right button is displayed at the right view
  // Refreshing the site as soon as an element is deleted
  // An error view if there are no more dishes/sports left
  // I haven't even began with the loader :'( :'( :'(

  return (
    <div style={styles}>
      <article className='card mb-3'>
        <h4 className='card-header'>Menu</h4>
        {items?.map((item) => (
          <div key={item.id} className='card-body'>
            {items ? (
              <button
                onClick={() => deleteDishes?.(item.id)}
                type='button'
                className='btn btn-outline-danger'>Dishes</button>
            ) : (
              <button
                onClick={() => deleteSports?.(item.id)}
                type='button'
                className='btn btn-outline-danger'>Sports</button>
            )}
            <h5 className='card-title'>{item.title}</h5>
            <p className='card-text'>{item.description}</p>
            <img
              src={process.env.PUBLIC_URL + item.url}
              alt='menu-item'
              className='d-block user-select-none' />
          </div>
        ))}
      </article>
    </div>
  )
}

export default MenuCard;





/*   function deleteItem(id: number | null | undefined) {
    fetch(`http://localhost:3000/dishes/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => console.log(result))
  } */

/*   function deleteDishes(id: number | null | undefined) {
    fetch(`http://localhost:3000/dishes/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => console.log(result))
    getDishes?.()
  } */

/*   const testValue = 2; */



/*       <section className='list-group'>
        <article className='list-group-item list-group-item-action flex-column align-items-start'>
          <div className='d-flex w-100 justify-content-between'>
            {items?.map((item) => (
              <div key={item.id}>
                <h5 className='mb-1'>{item.title}</h5>
                <p className='mb-1'>{item.description}</p>
                <img src={process.env.PUBLIC_URL + item.url} alt="menu-item" height="200" />
                <button type='button' className='btn btn-outline-danger'>Delete</button>
              </div>
            ))}
          </div>
        </article>
      </section> */




/*             <button onClick={() => deleteDishes(item.id)}>Delete</button> */
/*             {testValue > 1 ? (
              <button
                onClick={() => deleteDishes?.()}
                type='button'
                className='btn btn-outline-danger'>Dishes</button>
            ) : (
              <button
                onClick={() => console.log('false')}
                type='button'
                className='btn btn-outline-danger'>Sports</button>
            )} */
/*             <button onClick={() => deleteItem(item.id)}>Testing</button> */


/* <button
  onClick={() => console.log('Button was clicked')}
  type='button'
  className='btn btn-outline-danger'>Delete</button> */