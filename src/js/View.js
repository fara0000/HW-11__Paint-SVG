function View() {
    this._root = document.querySelector('div#root');
    this._svg = null;
}

View.prototype.init = function() {
    this._svg = createSvg(1000, 500);

    const colorInput = createInput('color', 'color', '#00000');
    const rangeInput = createInput('range', 'range');


    this._root.append(this._svg);
    this._root.append(rangeInput);
    this._root.append(colorInput);
}

const createInput = (id, type, value) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', type);

    value && (input.value = value);
    wrapper.append(input);

    return wrapper;
}

const createSvg = (width, height) => {
    const svgns = "http://www.w3.org/2000/svg"; 
    const svg = document.createElementNS(svgns, "svg");
    
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);

    const polyline  = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline .setAttribute("fill", "white");
    polyline .setAttribute("points", "0,0 0,20 20,20 20,40 40,40 40,60");
    polyline .setAttribute("stroke", "red");
    polyline .setAttribute("stroke-width", "2");

    svg.append(polyline);
    

    return svg;
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

module.exports = View;