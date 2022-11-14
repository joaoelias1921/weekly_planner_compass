import * as s from './styles'
import { useListBooking } from '../Context/ListBooking'

export const Card = ({id, description, color}) => {
    const { setListBooking } = useListBooking();

    const handleClickDeleteOne = () => {
        setListBooking(oldValues => {
            return oldValues.filter(list => list.id !== id)
          })
    }
    return(
        <s.Card>
            <s.CardTag color={color} />
            <s.Description>
                {description}
            </s.Description>
            <s.DeleteBtn onClick={handleClickDeleteOne}>Delete</s.DeleteBtn>
        </s.Card>
    )
}