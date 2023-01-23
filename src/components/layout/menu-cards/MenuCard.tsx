import { Items } from "../../../App"

interface Props {
  items?: Items[]
}

const MenuCard = ({ items }: Props): JSX.Element => {
  // Add hover effect or make some darker?
  // Or find better styling

  return (
    <section className='list-group'>
      <article className='list-group-item list-group-item-action flex-column align-items-start'>
        <div className='d-flex w-100 justify-content-between'>
          <ul> {items?.map((item) => (
            <li key={item.id}>
              <h5 className='mb-1'>{item.title}</h5>
              <p className='mb-1'>{item.description}</p>
              <img src={process.env.PUBLIC_URL + item.url} alt="menu-item" height="200" />
              <button type='button' className='btn btn-outline-danger'>Delete</button>
            </li>
          ))}</ul>
        </div>
      </article>

    </section>
  )
}

export default MenuCard;