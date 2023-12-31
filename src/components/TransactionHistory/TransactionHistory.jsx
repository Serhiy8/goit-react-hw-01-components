import PropTypes from 'prop-types';
import css from './transactionHistory.module.css'
import { getRandomHexColor } from '../utils/colorHex';

export const TransactionHistory = ({items}) =>{
    return <table className={css.transactionHistory}>
        <thead>
          <tr style={{backgroundColor: getRandomHexColor()}}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody >
      {
        items.map(({type, amount, currency, id}) => {
            return <tr key={id} className={css.trnsRow}>
            <td>{type}</td>
            <td className={css.amountTrns}>{amount}</td>
            <td className={css.currencyTrns}>{currency}</td>
            </tr>
        
        })
      }
        </tbody>
      </table>
    }

    TransactionHistory.propTypes = {
        items: PropTypes.arrayOf(
          PropTypes.exact({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
          })
        ).isRequired
    }