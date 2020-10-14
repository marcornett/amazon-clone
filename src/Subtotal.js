import React from 'react'
import NumberFormat from 'react-number-format';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import './Subtotal.css'

function Subtotal() {
    const [state, dispatch] = useStateValue()
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
            <button>Proceed to checkout</button>
            {/* button */}
        </div>
    )
}

export default Subtotal
