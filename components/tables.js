import styles from '../styles/table.module.css'


export default function Table ({standings, title}){

    return(
        <div className={styles.Standings}>
            <h2 className={styles.title}>{title}</h2>
        <div className={styles.standingsContainer}>
            <div className={styles.standingsHeader}>
                <div></div>
                <div className={styles.standingsHeaderLeft}>
                    <div>P</div>
                    <div>W</div>
                    <div>D</div>
                    <div>L</div>
                    <div>GD</div>
                    <div>PTS</div>
                </div>
            </div>
            {standings && standings.map((club, index) => <div key={index} className={styles.standings}>
                <div className={styles.standingsLeft}>
                    <div>{club.Position}</div>
                    <img src={club.SquadLogo} alt={club.Name} />
                    <div>{club.Name}</div>
                </div>
                <div className={styles.standingsRight}>
                    <div>{club.Played}</div>
                    <div>{club.Winned}</div>
                    <div>{club.Tie}</div>
                    <div>{club.Loosed}</div>
                    <div>{club['Goal Difference']}</div>
                    <div>{club.Points}</div>
                </div>
            </div>)}
        </div>
    </div>
    )
}