function MyComponent() {
    // any business logic
    let n = 20
    let name = "Pranav"
    return(
        <h1>Hi, I'm {name} {10+30} {sayHi(n)}</h1>
    )
}

export const sayHi = (n) => {
    let greeting = "hi"
    return greeting + n
}

export const sayBye = (n) => {
    return "Bye" + n
}

// Type of exports: Default and named

export default MyComponent

