import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { Add, ShoppingCart } from 'styled-icons/material-outlined'
import * as S from './styles'

export type PaymentCart = {
  number: string
  flag: string
  img: string
}

export type PaymentOptionsProps = {
  cards?: PaymentCart[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
  <S.Wrapper>
    <S.Body>
      <Heading color="black" lineBottom size="small">
        Payment
      </Heading>

      <S.CardsList>
        {cards?.map(({ number, flag, img }) => (
          <S.CardItem key={number}>
            <S.CardInfo>
              <img src={img} alt={flag} />
              {number}
            </S.CardInfo>

            <Radio
              name="credit-card"
              id={number}
              value={number}
              onCheck={() => ({})}
            />
          </S.CardItem>
        ))}

        <S.AddCard role="button">
          <Add size={14} /> Add a new credit card
        </S.AddCard>
      </S.CardsList>
    </S.Body>

    <S.Footer>
      <Button as="a" fullWidth minimal>
        Continue shopping
      </Button>

      <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
        Buy now
      </Button>
    </S.Footer>
  </S.Wrapper>
)

export default PaymentOptions
