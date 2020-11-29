import React from 'react'
import NumberFormat from 'react-number-format';
import { useStateValue } from '../../ContextAPI/StateProvider'
import { getBasketTotal } from '../../ContextAPI/reducer'
import './Subtotal.css'
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const [state, dispatch] = useStateValue()
    const history = useHistory()

    return (
        <div className="subtotal">
            <NumberFormat
                value={getBasketTotal(state.basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                decimalScale={2}
                fixedDecimalScale={true}
                renderText={value =>
                    <React.Fragment>
                        <p>
                            Subtotal ({state.basket?.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </React.Fragment>
                }
            />
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>

        </div>
    )
}

export default Subtotal
