function View() {
    this._root = document.querySelector('div#root');
    this._svg = null;
    this._colorInput = null;
    this._rangeInput = null;
}

View.prototype.init = function() {
    this._svg = createSvg(1440, 680);
    this._colorInput = createInput('color', 'color', 'black');
    this._rangeInput = createInput('range', 'range');

    this._root.append(this._svg);
    this._root.append(this._rangeInput);
    this._root.append(this._colorInput);
}

const createInput = (id, type, value) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', type);

    input.value = '';
    wrapper.append(input);

    return wrapper;
}

const createSvg = (width, height) => {
    const svgns = "http://www.w3.org/2000/svg"; 
    const svg = document.createElementNS(svgns, "svg");

    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);    

    return svg;
}

View.prototype.addPolyline = function(x, y) {
    const xmlns = "http://www.w3.org/2000/svg";
    this._polyline = document.createElementNS(xmlns, "polyline");

    this._polyline.setAttribute("points", `${x},${y}`);
    this._polyline.setAttribute("stroke-linecap", "round");
    this._polyline.style.stroke = 'black';
    this._polyline.style.strokeWidth = '10';
    this._polyline.style.fill = "none";
    this._svg.append(this._polyline);

    return this._polyline;
}

View.prototype.onSVGClick = function(callback) {
    this._svg.addEventListener('click', function(event) {
        const { layerX, layerY } = event;
        callback(layerX, layerY);
    })
}

View.prototype.onMouseDown = function(callback) {
    this._svg.addEventListener('mousedown', function(event) {
        const { layerX, layerY } = event;
        callback(layerX, layerY);
    })
}

View.prototype.onMouseUp = function(callback) {
    this._svg.addEventListener('mouseup', function() {
        callback();
    })
}

View.prototype.onMouseMove = function(callback) {
    this._svg.addEventListener('mousemove', function(event) {
        const { layerX, layerY } = event;
        callback(layerX, layerY);
    })
}

View.prototype.drawLine = function(x, y) {
    let oldPoints = this._polyline.getAttribute("points");
    let newPoints = oldPoints + ` ${x},${y}`;
    this._polyline.setAttribute("points", newPoints);
}

View.prototype.changeColoring = function(cb) {
    this._colorInput.addEventListener('change', function (event) {
        
        cb(event.target.value);
    }) 
}

View.prototype.changeSize = function(cb) {
    this._rangeInput.addEventListener('change', function (event) {
        
        cb(event.target.value);
    }) 
}

module.exports = View;