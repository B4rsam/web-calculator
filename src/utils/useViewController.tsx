import { useEffect, useState } from "react"
import stringMath from "string-math"

const useViewController = () => {
    const [display, setDisplay] = useState<string>("0")
    const [error, setError] = useState<boolean>(false)
    const [theme, setTheme] = useState<string>("theme1")
    const regexSign = /[+\-/*.=]/

    const handleEquals = () => {
        try {
            setDisplay(String(Number(stringMath(display))).slice(0,11))
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
        else {
            handleReset()
        }
    }

    const handleOperation = (sign : string) => {
        if (error === false && display.length < 11) {
            if (!regexSign.test(display[display.length-1])) {
                if (display === "0" && sign === "-") {
                    setDisplay("-")
                }
                else {
                    setDisplay(display.concat(sign))
                }
            }
            else if (regexSign.test(display[display.length-1])) {
                if (sign == "." && display[display.length-1] != ".") {
                    setDisplay(display.concat("0."))
                }
                else if (sign == "-" && display[display.length-1] != ".") {
                    setDisplay(display.concat(sign))
                }
            }
        }
    }

    const handleNumInput = (num : string) => {
        if (error === false && display.length < 11) {
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

    useEffect(() => {
        function handleKeyPress(e : any) {
            switch(e.keyCode) {
                case 13:
                    handleEquals()
                    break;
                case 8:
                    handleDelete()
                    break;
                case 82:
                    handleReset()
                    break;
                default:
                    if (!isNaN(parseInt(e.key, 10))) {
                        handleNumInput(e.key)
                    }
                    else if (regexSign.test(e.key)) {
                        if (e.key === "=") {
                            handleEquals()
                        }
                        else {
                            handleOperation(e.key)
                        }
                    }
                    break;
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