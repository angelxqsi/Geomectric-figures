function squarePerimeter(side){
    return side *4;
}

function squarePerimeterCalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseInt(numberSide.value);

    const perimeter = squarePerimeter(result);
    document.getElementById("squarePerimeter").innerText =
    "Its perimeter is:" + perimeter + "cm";
}

function squareArea(side) {
    return side * side;
}

function squareAreaCalculate() {
    const numberSide = document.getElementById("squareInput");
    const result = parseInt(numberSide.value);

    const area = squareArea(result);
    document.getElementById("squareArea").innerText =
        "Its area is: " + area + "cm²";
}

//
function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circleCircumferenceCalculate() {
    const numberRadius = document.getElementById("circleInput");
    const result = parseInt(numberRadius.value);

    const circumference = circleCircumference(result);
    document.getElementById("circleCircumference").innerText =
        "Its circumference is: " + circumference.toFixed(2) + " cm";
}

function circleAreaCalculate() {
    const numberRadius = document.getElementById("circleInput");
    const result = parseInt(numberRadius.value);

    const area = circleArea(result);
    document.getElementById("circleArea").innerText =
        "Its area is: " + area.toFixed(2) + " cm²";
}

//
function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

function trianglePerimeterCalculate() {
    const numberSide1 = parseFloat(document.getElementById("triangleSide1").value);
    const numberSide2 = parseFloat(document.getElementById("triangleSide2").value);
    const numberBase = parseFloat(document.getElementById("triangleBase").value);

    const perimeter = trianglePerimeter(numberSide1, numberSide2, numberBase);
    document.getElementById("trianglePerimeter").innerText =
        "Its perimeter is: " + perimeter.toFixed(2) + " cm";
}

function triangleAreaCalculate() {
    const numberBase = parseFloat(document.getElementById("triangleBase").value);
    const numberHeight = parseFloat(document.getElementById("triangleHeight").value);

    const area = triangleArea(numberBase, numberHeight);
    document.getElementById("triangleArea").innerText =
        "Its area is: " + area.toFixed(2) + " cm²";
}
