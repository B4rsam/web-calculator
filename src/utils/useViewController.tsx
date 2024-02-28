import { useState } from "react"
import stringMath from "string-math"

const useViewController = () => {
    const [display, setDisplay] = useState<string>("0")

    const handleEquals = () => {
        try {
            setDisplay(stringMath(display))
        }
        catch {
            setDisplay("Error")
        }
    }

    const handleReset = () => {
        setDisplay("0")
    }

    const handleDelete = () => {
        if (display.length === 1) {
            setDisplay("0") 
        }
        else {
            setDisplay(display.slice(0, -1)) 
        }
    }

    const handleOperation = (sign : string) => {
        if (sign != display[display.length - 1]) {
            setDisplay(display.concat(sign))
        }
        if (sign === "." && isNaN(Number(display[display.length]))) {
            setDisplay(display.concat("0."))
        }
    }

    const handleNumInput = (num : string) => {
        if (display === "0") {
            setDisplay(num)
        }
        else {
            setDisplay(display + num)
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
        handleNumInput,
        handleOperation
    }
}

export default useViewController