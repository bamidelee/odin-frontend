import Carousel from "./carousel"
import Table from "./tables";
import { useQuery } from "@apollo/client"
import { TABLE } from "./quarries";
import { useEffect, useState } from "react";
import Link from 'next/link'



export default function TableDisplay(){
    const { data, loading, error } = useQuery(TABLE);

    const [premierLeagueTable, setPremierLeagueTable] = useState('')
    const [championsLeagueTable, setChampionsLeagueTable] = useState('')
    const [laligaTable, setLaligaTable] =useState('') 
    const [europaTable, setEuropaTable] = useState('')
    const [serieaTable, setSerieaTablle] = useState('') 
    const [leagueoneTable, setLeaguoneTable] = useState('')
    

    useEffect(() =>{
        if(data){
            setPremierLeagueTable( data.tables.find(table => table.league === 'premierLeague'))
            setChampionsLeagueTable(data.tables.find(table => table.league === 'championsLeague'))
            setLaligaTable(data.tables.find(table => table.league === 'laliga'))
            setEuropaTable(data.tables.find(table => table.league === 'europaLeague'))
            setSerieaTablle(data.tables.find(table => table.league === 'seriea'))
            setLeaguoneTable(data.tables.find(table => table.league === 'leagueone'))
        }
    })
    return (
        <Link href="tables">
            {premierLeagueTable && <Carousel>
              <Table standings={JSON.parse(premierLeagueTable.table).slice(0,6)} title='Premier league'/>
              <Table standings={JSON.parse(championsLeagueTable.table).slice(0,6)} title='Champions league'/>
              <Table standings={ JSON.parse(laligaTable.table).slice(0,6)} title='Laliga'/>
              <Table standings={JSON.parse(europaTable.table).slice(0,6)} title='Europa'/>
              <Table standings={JSON.parse(serieaTable.table).slice(0,6)} title='Seriea'/>
              <Table standings={JSON.parse(leagueoneTable.table).slice(0,6)} title='league one'/>
            </Carousel>}
        </Link>
    )
}