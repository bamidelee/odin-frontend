import Fixture from "../components/fixtures";
import { FIXTURE } from "../components/quarries";
import client from "../apollo-client";
import { useState, useEffect } from "react";
import styles from '../styles/fixture.module.css'

export default function Fixtures({fixtures}){
    const [competition, setCompetition] = useState('championsLeague')
    const [fixtureData, setFixtureData] = useState(fixtures.find(fixture => fixture.league === competition))

    useEffect(() =>{
        setFixtureData(fixtures.find(fixture => fixture.league === competition))
    }, [competition])

    return(
        <div>
                <div className={styles.leagueSelect}>
                <button className={competition === 'championsLeague'? styles.active: styles.inActive} id="championsLeague" onClick={({target}) => setCompetition(target.id)}>Champions League</button>
                <button className={competition === 'premierLeague'? styles.active:styles.inActive} id="premierLeague" onClick={({target}) => setCompetition(target.id)}>Premier League</button>
                <button className={competition === 'laliga'? styles.active:styles.inActive} id="laliga" onClick={({target}) => setCompetition(target.id)}>Laliga</button>
                <button className={competition === 'europaLeague'? styles.active:styles.inActive} id="europaLeague" onClick={({target}) => setCompetition(target.id)}>Europa League</button>
                <button className={competition === 'seriea'? styles.active:styles.inActive} id="seriea" onClick={({target}) => setCompetition(target.id)}>Serie A</button>
            </div>
           {fixtureData && <Fixture fixtureData={JSON.parse(fixtureData.fixture)} title = 'Fixtures'/>}
        </div>
    )
}

export async function getStaticProps() {
    const { data: fixturesData } = await client.query({query: FIXTURE});
    return {
      props: {
      
        fixtures: fixturesData.fixtures
      },
      revalidate: 60 * 60 * 60 * 2
   };
  }
  