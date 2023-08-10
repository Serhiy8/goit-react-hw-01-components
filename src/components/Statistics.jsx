import PropTypes from 'prop-types';
import {getRandomHexColor} from './colorHex'
import css from './statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
    {
    stats.map(({id, label, percentage}) => 
        <li className={css.item}  style={{backgroundColor: getRandomHexColor()}} key={id}>
            <span className="label">{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
  )}
      </ul>
  </section>);
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}