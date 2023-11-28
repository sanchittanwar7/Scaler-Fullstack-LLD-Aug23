import React, { useMemo } from 'react'

const Memo2 = ({fact, checkEven}) => {
    const calculateFactorial = n => {
        if (n <= 1) return n
        return n * calculateFactorial(n-1)
    }
    // const factorial = () => {
    //     console.log("Calculating factorial")
    //     return calculateFactorial(fact)
    // }

    const factorial = useMemo(() => {
        console.log("Calculating factorial")
        return calculateFactorial(fact)
    }, [fact])

    const isEven = () => {
        console.log("Checking is even")
        return checkEven % 2 === 0
    }
    return (
        <div>
            {factorial}
            {`${isEven()}`}
        </div>
    )
}

export default Memo2