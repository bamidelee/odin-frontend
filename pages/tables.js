import { TABLE } from "../components/quarries";
import Table from "../components/tables";
import client from "../apollo-client";
import { useState, useEffect } from "react";
import styles from '../styles/fixture.module.css'


export default function Tables({tables}){
    const [competition, setCompetition] = useState('championsLeague')
    const [tableData, setTableData] = useState(tables.find(table  => table.league === competition))

    useEffect(() => {
        setTableData(tables.find(table => table.league === competition))
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
            <Table standings={JSON.parse(tableData.table)} title = 'Table'/>
        </div>
    )
}

export async function getStaticProps() {
    const { data: tableData } = await client.query({query: TABLE});
        return {
        props: {
        
            tables: tableData.tables
        },
        revalidate: 60 * 60 * 60 * 2
    };
}