function Controller(model, view) {
    this._model = model;
    this._view = view;
    this._isPressed = false;
    this._color = '';
    this._width = 0;
    this.point = '';
}

Controller.prototype.init = function() {
    this._view.init();
    this._view.onMouseUp(this.stopDraw.bind(this));
    this._view.onMouseMove(this.isMouseDraw.bind(this));
    this._view.changeColoring(this.changeColor.bind(this));
    this._view.changeSize(this.changeWidth.bind(this));
    this._view.onMouseDown(this.startDraw.bind(this));
}

Controller.prototype.startDraw = function(x, y) {
    this._isPressed = true;
    this._view.addPolyline(x, y);
}

Controller.prototype.isMouseDraw = function(x, y) {
    this._view.drawLine(x, y);
    this.point ;
}

Controller.prototype.points = function(x, y) {
    if (this._isPressed) {
        this.point  += ` ${x},${y}`;
    }
}

Controller.prototype.stopDraw = function() {
    
}

Controller.prototype.changeWidth = function(width) {
    this._width = width;
}

Controller.prototype.changeColor = function(color) {
    this._color = color;
}

module.exports = Controller;