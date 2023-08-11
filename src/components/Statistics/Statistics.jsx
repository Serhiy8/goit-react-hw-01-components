import PropTypes from 'prop-types';
import { StatisticItem } from '../StatisticItem/StatisticItem';
import css from './statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
    {
    stats.map(({id, label, percentage}) => <StatisticItem key={id} label={label} percentage={percentage} />
        
  )}
      </ul>
  </section>);
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            percentage: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
          })
    ).isRequired,
}