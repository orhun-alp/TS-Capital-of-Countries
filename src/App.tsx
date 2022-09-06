import axios from "axios"
import { useEffect, useState } from "react";
import Country from "./components/Country";
import { CountryType } from "./Types";


function App() {
    
    const [countries,setCountries] = useState<CountryType[]>([])
    const [loading, setLoading]=useState<boolean>(false)
    const getCountries=async()=>{
        
        try{
            const { data } = await 
        axios.get<CountryType[]>("https://restcountries.com/v2/all")
        setCountries(data)
    } catch{
        console.log("ülkeler alınırken hata oluştu")
    } finally {
        setLoading(false)
    }
        
    }
    useEffect (()=>{
        getCountries()
    },[])

    console.log({countries})
    return (
        <div>{ loading 
        ? "Loading...." 
        : countries.map(country => {
            return (
                <Country key={country.name} country={country}/>
            )
        })}</div>
    );
}

export default App;