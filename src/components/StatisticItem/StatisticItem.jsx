import PropTypes from 'prop-types';
import {getRandomHexColor} from '../utils/colorHex'
import css from './statisticsItem.module.css'

export const StatisticItem = ({ label, percentage}) => {
   return <li className={css.item}style={{backgroundColor: getRandomHexColor()}} >
            <span>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}