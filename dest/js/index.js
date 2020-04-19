(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Controller(model, view) {
    this._model = model;
    this._view = view;
}

Controller.prototype.init = function() {
    // this._view.init();
}

module.exports = Controller;
},{}],2:[function(require,module,exports){
function Model() {
    
}

Model.prototype.init = function () {

}


module.exports = Model;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
const Model = require('./Model.js');
const View = require('./View.js');
const Controller = require('./Controller.js');

function initProject() { 
    const view = new View(); 
    const model = new Model(); 
    const controller = new Controller(model, view);

    controller.init();
}

initProject();
},{"./Controller.js":1,"./Model.js":2,"./View.js":3}]},{},[4]);
