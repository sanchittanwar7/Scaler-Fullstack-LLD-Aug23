function parent() {
    let a = 10 // 100
    function child() {
        var b = 20
        function grandchild() {
            console.log(a)
        }
        grandchild()
    }
    child()
}

parent()