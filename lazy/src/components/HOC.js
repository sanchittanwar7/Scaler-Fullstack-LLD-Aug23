import React from 'react'

const styles = {
    dark: {
        background: 'black',
        color: 'white'
    },
    light: {
        background: 'yellow',
        color: 'red'
    }
}

const HOC = (WrapperComp) => {

    return function (args) {
        console.log("args", args)
        let temp = {}
        if(args.dark) {
            temp = {...styles.dark}
        } else if (args.light) {
            temp = {...styles.light}
        }

        let obj = {...args, style: temp}

        return <WrapperComp {...obj} />
    }
  
}

export default HOC