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

module.exports = View;