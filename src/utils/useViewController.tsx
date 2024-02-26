const useViewController = () => {
    let displayContent = 0

    const handleEquals = () => {
        console.log("a")
    }

    const handleReset = () => {
        console.log("reset")
    }

    const handleDelete = () => {
        console.log("del")
    }

    return {
        displayContent,
        handleEquals,
        handleReset,
        handleDelete,
    }
}

export default useViewController