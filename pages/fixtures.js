import Fixture from "../components/fixtures";
import { FIXTURE } from "../components/quarries";
import client from "../apollo-client";
import { useState, useEffect } from "react";
import styles from '../styles/fixture.module.css'
import BoxBanner from '../components/boxBanner'


export default function Fixtures({ fixtures }) {
  const [competition, setCompetition] = useState(0)
  const [fixtureData, setFixtureData] = useState(!fixtures ? null : fixtures[competition])
  const [mobileBanner, setMobileBanner] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])

  useEffect(() => {
    setFixtureData(!fixtures ? null : fixtures[competition])
  }, [competition])

  return (
    <div>
      {mobileBanner && <BoxBanner />}
      <div className={styles.leagueSelect}>
        <button className={competition === 0 ? styles.active : styles.inActive} id="championsLeague" onClick={({ target }) => setCompetition(0)}>Champions League</button>
        <button className={competition === 1 ? styles.active : styles.inActive} id="premierLeague" onClick={({ target }) => setCompetition(1)}>Premier League</button>
        <button className={competition === 3 ? styles.active : styles.inActive} id="laliga" onClick={({ target }) => setCompetition(3)}>Laliga</button>
        <button className={competition === 2 ? styles.active : styles.inActive} id="europaLeague" onClick={({ target }) => setCompetition(2)}>Europa League</button>
        <button className={competition === 4 ? styles.active : styles.inActive} id="seriea" onClick={({ target }) => setCompetition(4)}>Serie A</button>
      </div>
      {fixtureData && <div>{fixtureData[0] && <Fixture fixtureData={fixtureData} title='Fixtures' />}</div>}
    </div>
  )
}

export async function getStaticProps() {

  const championsLeagueData = fetch(`https://football98.p.rapidapi.com/championsleague/fixtures`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
  })

  const premierLeagueData = fetch(`https://football98.p.rapidapi.com/premierleague/fixtures`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
  })

  const laligaData = fetch(`https://football98.p.rapidapi.com/laliga/fixtures`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
  })

  const europaLeagueData = fetch(`https://football98.p.rapidapi.com/europaleague/fixtures`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
  })

  const serieaData = fetch(`https://football98.p.rapidapi.com/seriea/fixtures`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
  })
  const fixturesPromise = await Promise.all([championsLeagueData, premierLeagueData, europaLeagueData, laligaData, serieaData])
  const fixtureJson = fixturesPromise[1].status === 503 ? null : await Promise.all(fixturesPromise.map(r => r.json()))

  return {
    props: {

      fixtures: fixtureJson,

    },

  };
}
