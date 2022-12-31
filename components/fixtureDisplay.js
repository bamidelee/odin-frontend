import Carousel from "./carousel"
import Fixture from "./fixtures"
import { useQuery } from "@apollo/client"
import { FIXTURE } from "./quarries";
import { useEffect, useState } from "react";

export default function FixturesDisplay(){
    const { data, loading, error } = useQuery(FIXTURE);
    const [premierLeagueFixture, setPremierLeagueFixture] = useState('')
    const [championsLeagueFixture, setChampionsLeagueFixture] = useState('')
    const [laligaFixture, setLaligaFixture] =useState('') 
    const [europaFixture, setEuropaFixture] = useState('')
    const [serieaFixture, setSerieaFixture] = useState('') 
    const [leagueoneFixture, setLeaguoneFixture] = useState('')
  

    useEffect(() =>{
        if(data){
            setPremierLeagueFixture(data.fixtures.find(fixture => fixture.league === 'premierLeague'))
            setChampionsLeagueFixture(data.fixtures.find(fixture => fixture.league === 'championsLeague'))
            setLaligaFixture(data.fixtures.find(fixture => fixture.league === 'laliga'))
            setEuropaFixture(data.fixtures.find(fixture => fixture.league === 'europaLeague'))
            setSerieaFixture(data.fixtures.find(fixture => fixture.league === 'seriea'))
            setLeaguoneFixture(data.fixtures.find(fixture => fixture.league === 'leagueone'))
        }
    }, [data])

    return(
      <div>
          {premierLeagueFixture && <Carousel>
                 <Fixture fixtureData={JSON.parse(premierLeagueFixture.fixture)} title='Premier league' mini = {true}/>
                  <Fixture fixtureData={JSON.parse(championsLeagueFixture.fixture)} title='Champions league' mini= {true}/>
                  <Fixture fixtureData={JSON.parse(laligaFixture.fixture)} title='Laliga' mini={true}/>
                  <Fixture fixtureData = {JSON.parse(europaFixture.fixture)} title='Europa league' mini = {true}/>
                  <Fixture fixtureData={JSON.parse(serieaFixture.fixture)} title='Seriea' mini={true}/>
                  <Fixture fixtureData={JSON.parse(leagueoneFixture.fixture)} title='League one' mini={true}/>
           </Carousel> }
      </div>
    )
}