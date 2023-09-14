let radius = [1, 2, 3, 4, 5]

// diameter of circle
// area of circle
// circumference of circle

function diameter(radius) {
    return 2*radius
}

function area(radius) {
    return Math.PI*radius*radius
}

function circumference(radius) {
    return 2*Math.PI*radius;
}

function calculate(radius, logic) {
    let ans = [];
    let a;
    for(let i = 0; i < radius.length; i++) {
        a = logic(radius[i])
        ans.push(a)
    }
    return ans;
}

let areaAns = calculate(radius, area);
let diameterAns = calculate(radius, diameter);
let circumferenceAns = calculate(radius, circumference);

console.log(areaAns, diameterAns, circumferenceAns)