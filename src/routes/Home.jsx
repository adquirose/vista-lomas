import React, { useState, useEffect} from 'react'
import LogoAnimado from '../Icons/LogoAnimado'

function Home() {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState('')

    const traerData = () => {
        setTimeout(() => {
            setIsLoading(false)
            setData('Home')
        }, 2000)
    }
    useEffect(() => {
      traerData()
    }, [])
    
    return (
        <div style={{width:'100%',height:'100%', background:'black', display:'grid', justifyContent:'center', alignContent:'center'}}>
            { isLoading ?
                <LogoAnimado width={120}/> :
                <h1 style={{color:'white'}}>{data}</h1>
            }
        </div>
    )
}

export default Home