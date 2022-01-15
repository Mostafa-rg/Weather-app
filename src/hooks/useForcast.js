import { useState } from "react";

import axios from "axios";

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'

const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`


const useForcast = () => {
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [isForecast, setForecast] = useState(null)

    //get woeid
    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: {query: location }})
        
        if(!data || data.length === 0 ){
            setError('There is no such location')
            setLoading(false)
        }

        return data[0];
    }

    const getForecastData = async woeid => {
        const data = await axios(`${REQUEST_URL}/${woeid}`)
        if(!data || data.length === 0 ){
            setError('Somthing went wrong')
            setLoading(false)
        }
        return data;
    }

    const submitRequest = async location => {
        setLoading(true)
        setError(false)
        const response = await getWoeid(location)
        if(!response?.woeid) return;

        const data = await getForecastData(response.woeid)
        if(!data) return;
        console.log({data})

    }

    return{
        error,
        isLoading,
        isForecast,
        submitRequest

    }
}

export default useForcast;