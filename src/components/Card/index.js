import * as s from './styles'

export const Card = ({description, color}) => {

    return(
        <s.Card>
            <s.CardTag color={color} />
            <s.Description>
                {description}
            </s.Description>
            <s.DeleteBtn>Delete</s.DeleteBtn>
        </s.Card>
    )
}