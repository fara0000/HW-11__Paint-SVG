function View() {
    this._root = document.querySelector('div#root');
    this._svg = null;

    this.init();
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

const createSvg = () => {
    const svg = document.createElement('svg');
    svg.setAttribute('class', 'svg');
    const paintScreen = document.createElement('div');
    paintScreen.setAttribute('class', 'paintScreen');
    paintScreen.setAttribute('height', '500px');
    paintScreen.setAttribute('width', '1000px');

    svg.append(paintScreen);
    return svg;
}

View.prototype.init = function() {
    this._svg = createSvg();
    const colorInput = createInput('color', 'color', '#00000');
    const rangeInput = createInput('range', 'range');

    this._root.append(this._svg);
    this._root.append(rangeInput);
    this._root.append(colorInput);
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