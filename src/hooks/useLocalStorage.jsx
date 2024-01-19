import React from 'react'
import { useState, useEffect } from 'react'

const PREFEX = 'bunny-codeeditor'

const useLocalStorage = (key, initialValue) => {

    const prefexedkey = PREFEX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefexedkey)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue
        }
    })


    useEffect(() => {
        localStorage.setItem(prefexedkey, JSON.stringify(value))
    }, [prefexedkey, value])


    return [value, setValue]
}

export default useLocalStorage
