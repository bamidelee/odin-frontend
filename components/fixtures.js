import styles from '../styles/fixture.module.css'

export default function Fixture({fixtureData, title, mini}){
    return(
        <div className={styles.fixtures}>
            <h2 className={styles.title}>
                {title}
            </h2>
            {mini?Object.keys(fixtureData[0]).map(key => <div key={key}>
                    <div className = {styles.fixtureData}>
                        {fixtureData[0][key].slice(0,1).map((fixture, index) => <div className={styles.matchesContainer} key={index}>
                            <h3>
                                {fixture.MatchDay}
                            </h3>
                            <div className={styles.matches}>
                                <div>
                                    <img src={fixture.homeLogo} alt={fixture.homeTeam} />
                                    <div>{fixture.homeTeam}</div>
                                </div>
                                <h2>VS</h2>
                                <div>
                                    <img src={fixture.awayLogo} alt={fixture.awayTeam} />
                                    <div>{fixture.awayTeam}</div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>):
                Object.keys(fixtureData[0]).map(key => <div key={key}>
                    <div className={styles.fixtureData}>
                        {fixtureData[0][key].map((fixture, index) => <div className={styles.matchesContainer} key={index}>
                            <h3>
                                {fixture.MatchDay}
                            </h3>
                            <div className={styles.matches}>
                                <div>
                                    <img src={fixture.homeLogo} alt={fixture.homeTeam} />
                                    <div>{fixture.homeTeam}</div>
                                </div>
                                <h2>VS</h2>
                                <div>
                                    <img src={fixture.awayLogo} alt={fixture.awayTeam} />
                                    <div>{fixture.awayTeam}</div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>)}
        </div>
    )
}