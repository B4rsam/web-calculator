import { useState } from "react"
import stringMath from "string-math"


const useViewController = () => {
    const [display, setDisplay] = useState<string>("0")
    const [error, setError] = useState<boolean>(false)
    const [theme, setTheme] = useState<string>("theme2")

    const handleEquals = () => {
        try {
            setDisplay(stringMath(display).toString())
        }
        catch {
            setDisplay("Error")
            setError(true)
        }
    }

    const handleReset = () => {
        setDisplay("0")
        setError(false)
    }

    const handleDelete = () => {
        if (error === false) {
            if (display.length === 1) {
                setDisplay("0") 
            }
            else {
                setDisplay(display.slice(0, -1)) 
            }    
        }
    }

    const handleOperation = (sign : string) => {
        if (error === false) {
            if (sign != display[display.length - 1]) {
                setDisplay(display.concat(sign))
            }
            if (sign === "." && isNaN(Number(display[display.length]))) {
                setDisplay(display.concat("0."))
            }   
        }
    }

    const handleNumInput = (num : string) => {
        if (error === false) {
            if (display === "0") {
                setDisplay(num)
            }
            else {
                setDisplay(display + num)
            }    
        }
    }

    const themeChange = () => {
        switch(theme) {
            case "theme3":
                setTheme("theme1")
                break;
            case "theme1":
                setTheme("theme2")
                break;
            case "theme2":
                setTheme("theme3")
                break;
        }
    }

    const functions = {
        equals: handleEquals,
        reset: handleReset,
        delete: handleDelete,
    }

    return {
        display,
        functions,
        theme,
        themeChange,
        handleNumInput,
        handleOperation
    }
}

export default useViewController