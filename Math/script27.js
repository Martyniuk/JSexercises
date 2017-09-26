// Write a JavaScript function to calculate degrees between 2 points with inverse Y axis

function pointDirection(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}