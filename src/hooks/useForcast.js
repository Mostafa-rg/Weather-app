import { useState } from "react";


const useForcast = () => {
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [isForecast, setForecast] = useState(null)

    const submitRequest = location => {
        console.log(location)
    }

    return{
        error,
        isLoading,
        isForecast,
        submitRequest

    }
}

export default useForcast;