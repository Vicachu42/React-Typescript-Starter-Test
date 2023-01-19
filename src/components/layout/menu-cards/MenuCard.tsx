import { Items } from "../../../App"

interface Props {
  items?: Items[]
}

const MenuCard = ({ items }: Props): JSX.Element => {
  return (
    <>
      <ul> {items?.map((item) => (
        <li>
          {item.title}
        </li>
      ))}
  
      </ul>
    </>
  )
}

export default MenuCard;