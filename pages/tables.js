import { TABLE } from "../components/quarries";
import Table from "../components/tables";
import client from "../apollo-client";
import { useState, useEffect } from "react";
import styles from '../styles/fixture.module.css'
import BoxBanner from '../components/boxBanner'


export default function Tables({tables}){
    const [competition, setCompetition] = useState(0)
    const [tableData, setTableData] = useState(!tables? null :tables[competition])
    const [mobileBanner, setMobileBanner] = useState(false)

    useEffect(() => {
     
      if(window.innerWidth < 650){
        setMobileBanner(true)
      }
    },[])

    useEffect(() => {
        setTableData(!tables? null :tables[competition])
    }, [competition])
    return(
        <div>
            {mobileBanner && <BoxBanner/>}
              <div className={styles.leagueSelect}>
                <button className={competition === 0? styles.active: styles.inActive} id="championsLeague" onClick={({target}) => setCompetition(0)}>Champions League</button>
                <button className={competition === 1? styles.active:styles.inActive} id="premierLeague" onClick={({target}) => setCompetition(1)}>Premier League</button>
                <button className={competition === 3? styles.active:styles.inActive} id="laliga" onClick={({target}) => setCompetition(3)}>Laliga</button>
                <button className={competition === 2? styles.active:styles.inActive} id="europaLeague" onClick={({target}) => setCompetition(2)}>Europa League</button>
                <button className={competition === 4? styles.active:styles.inActive} id="seriea" onClick={({target}) => setCompetition(4)}>Serie A</button>
            </div>
           {tableData && <div>{tableData[0] &&<Table standings={(tableData)} title = 'Table'/>}</div>}
        </div>
    )
}

export async function getStaticProps() {
    const { data: tableData } = await client.query({query: TABLE});

    
    const championsLeagueData = fetch(`https://football98.p.rapidapi.com/championsleague/table`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": 'football98.p.rapidapi.com',
        "x-rapidapi-key":process.env.REACT_APP_API_KEY 
      }
    })

    const premierLeagueData = fetch(`https://football98.p.rapidapi.com/premierleague/table`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": 'football98.p.rapidapi.com',
        "x-rapidapi-key":process.env.REACT_APP_API_KEY 
      }
    })

    const laligaData = fetch(`https://football98.p.rapidapi.com/laliga/table`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": 'football98.p.rapidapi.com',
        "x-rapidapi-key":process.env.REACT_APP_API_KEY 
      }
    })

    const europaLeagueData = fetch(`https://football98.p.rapidapi.com/europaleague/table`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": 'football98.p.rapidapi.com',
        "x-rapidapi-key":process.env.REACT_APP_API_KEY 
      }
    })

    const serieaData = fetch(`https://football98.p.rapidapi.com/seriea/table`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": 'football98.p.rapidapi.com',
        "x-rapidapi-key":process.env.REACT_APP_API_KEY 
      }
    })

    const tablePromise = await Promise.all([championsLeagueData, premierLeagueData, europaLeagueData, laligaData, serieaData])
    const tableJson =tablePromise[1].status === 503? null :  await Promise.all(tablePromise.map(r => r.json()))
        return {
        props: {
        
            tables: tableJson
        },
       
    };
}