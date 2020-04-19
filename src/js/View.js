function View() {
    this._root = document.querySelector('div#root');
}
View.prototype.init = function() {
    const container_first = createDiv({class: 'container_first'});
    const container_second = createDiv({class: 'container_second'});
    const svg = document.createElement('svg');
    svg.setAttribute('class','svg');
    svg.setAttribute('width', '1000px');
    svg.setAttribute('height', '500px');
    const colorInput = createInput({
        id: 'color',
        name: 'color',
        type:'color',
    });
    const rangeInput = createInput({
        id: 'range',
        name: 'range',
        type:'range',
    });

    
    container_first.append(svg);
    this._root.append(container_first);
    container_second.append(colorInput); 
    container_second.append(rangeInput);
    this._root.append(container_second);
}

const createDiv = params => {
    const div = document.createElement('div');
    div.setAttribute('class', params.class)
    params.id && (div.id = params.id);
    params.title && (div.title = params.title);
    params.textContent && (div.textContent = params.textContent);
    params.inner && (div.innerHTML = params.inner);

    return div;
}

const createInput = params => {
    const input = document.createElement('input');
    input.setAttribute('type', params.type || 'text');
    params.id && input.setAttribute('id', params.id);
    params.name && input.setAttribute('name', params.name);
    params.placeholder && (input.placeholder = params.placeholder);

    return input;
}
module.exports = View;