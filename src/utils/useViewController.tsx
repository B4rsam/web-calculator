import { useEffect, useState } from "react"
import stringMath from "string-math"


const useViewController = () => {
    const [display, setDisplay] = useState<string>("0")
    const [error, setError] = useState<boolean>(false)
    const [theme, setTheme] = useState<string>("theme1")

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
            if (display.length < 10) {
                if (sign != display[display.length - 1]) {
                    setDisplay(display.concat(sign))
                }
                if (sign === "." && isNaN(parseInt(display[display.length - 1], 10)) && display[display.length - 1] != "." ) {
                    setDisplay(display.concat("0."))
                }     
            }
        }
    }

    const handleNumInput = (num : string) => {
        if (error === false) {
            if (display.length < 10) {
                if (display === "0") {
                    setDisplay(num)
                }
                else {
                    setDisplay(display + num)
                }       
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

    useEffect(() => {
        function handleKeyPress(e : any) {
            if (!isNaN(parseInt(e.key, 10))) {
                handleNumInput(e.key)
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return function cleanUp() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

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