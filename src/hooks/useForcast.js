import { useState } from "react";

const useForcast = () => {
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [isForecast, setForecast] = useState(null)

    return{
        error,
        isLoading,
        isForecast
    }
}

export default useForcast;