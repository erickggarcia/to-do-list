import { useState } from "react"

interface iProp {
    key: string
    initialValue: string[]
}

export const useLocalStorage = ({ key, initialValue }: iProp) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    })

    const setValue = (value: any) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore);
        return window.localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [storedValue, setValue]
}