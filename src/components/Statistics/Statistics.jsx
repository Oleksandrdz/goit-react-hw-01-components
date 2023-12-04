import css from "./Statistics.module.css";
const {
    statsTitle,
    statistics,
    statList,
    percentage,
    item,
} = css;
const Statistics = ({ title, stats }) => {
    return (
        <section className={statistics}>
            {title && <h2 className={statsTitle}>{title}</h2>}
  
            <ul className={statList}>
                {stats.map(el => (<li key={el.id} className={item}>
                    <span className="label">{ el.label}</span>
                    <span className={percentage}>{el.percentage}%</span>
                </li>))}
             </ul>
        </section>
    )
}
export default Statistics;