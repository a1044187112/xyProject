(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;
exports.button = button;

var _DisplayObject = require('./DisplayObject.js');

var _Sprite2 = require('./Sprite.js');

var _Stage = require('./Stage.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_Sprite) {
  _inherits(Button, _Sprite);

  function Button(source) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, source, x, y));

    _this.interactive = true;
    return _this;
  }

  return Button;
}(_Sprite2.Sprite);

function button(source, x, y) {
  var sprite = new Button(source, x, y);
  _Stage.stage.addChild(sprite);
  return sprite;
}

},{"./DisplayObject.js":2,"./Sprite.js":6,"./Stage.js":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require('./EventEmitter.js');

var _util = require('./util.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayObject = function (_EventEmitter) {
  _inherits(DisplayObject, _EventEmitter);

  function DisplayObject() {
    _classCallCheck(this, DisplayObject);

    //  position and size
    var _this = _possibleConstructorReturn(this, (DisplayObject.__proto__ || Object.getPrototypeOf(DisplayObject)).call(this));

    _this.x = 0;
    _this.y = 0;
    _this.lastX = 0;
    _this.lastY = 0;
    _this.width = 0;
    _this.height = 0;

    // rotation alpha visible and scale properties
    _this.rotation = 0;
    _this.alpha = 1;
    _this.visible = true;
    _this.scaleX = 1;
    _this.scaleY = 1;

    //  pivot let you set the sprite's axis of rotation
    _this.pivotX = 0.5;
    _this.pivotY = 0.5;

    // // 物理相关
    // this.vel = {x: 0, y: 0};
    // this.maxVel = {x:100,y:100};
    // this.accel = {x: 0, y: 0};
    // this.friction = {x: 0, y: 0};
    // this.gravityFactor = 1;

    // 显示容器相关 
    _this._layer = 0;
    _this.children = [];
    _this.parent = undefined;

    // image states and animation
    _this.frames = [];
    _this._currentFrame = 0;

    // 拖动
    _this._draggable = undefined;

    _this._circular = false;

    _this._interactive = false;
    return _this;
  }

  _createClass(DisplayObject, [{
    key: 'addChild',
    value: function addChild(sprite) {
      if (sprite.parent) sprite.parent.removeChild(sprite);
      sprite.parent = this;
      this.children.push(sprite);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(sprite) {
      if (this.hasChild(sprite)) {
        this.children.splice(this.children.indexOf(sprite), 1);
        sprite.parent = undefined;
      } else throw new Error(sprite + 'is not a child of' + this);
    }
  }, {
    key: 'hasChild',
    value: function hasChild(sprite) {
      return this.children.indexOf(sprite) !== -1;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: 'putCenter',
    value: function putCenter(b) {
      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var a = this;
      b.x = a.x + a.halfWidth - b.halfWidth + offsetX;
      b.y = a.y + a.halfHeight - b.halfHeight + offsetY;
    }
  }, {
    key: 'putTop',
    value: function putTop(b) {
      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var a = this;
      b.x = a.x + a.halfWidth - b.halfWidth + offsetX;
      b.y = a.y - b.height + offsetY;
    }
  }, {
    key: 'putRight',
    value: function putRight(b) {
      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var a = this;
      b.x = a.x + a.width + offsetX;
      b.y = a.y + a.halfHeight - b.halfHeight + offsetY;
    }
  }, {
    key: 'putBottom',
    value: function putBottom(b) {
      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var a = this;
      b.x = a.x + a.halfWidth - b.halfWidth + offsetX;
      b.y = a.y + a.height + offsetY;
    }
  }, {
    key: 'putLeft',
    value: function putLeft(b) {
      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var a = this;
      b.x = a.x - b.width + offsetX;
      b.y = a.y + a.halfHeight - b.halfHeight + offsetY;
    }
  }, {
    key: 'swapChildren',
    value: function swapChildren(child1, child2) {
      var index1 = this.children.indexOf(child1);
      var index2 = this.children.indexOf(child2);
      if (index1 !== -1 && index2 !== -1) {
        this.children[index1] = child2;
        this.children[index2] = child1;
      } else {
        throw new Error('Both objects must be a child of the caller ' + this);
      }
    }
  }, {
    key: 'add',
    value: function add() {
      var _this2 = this;

      for (var _len = arguments.length, sprites = Array(_len), _key = 0; _key < _len; _key++) {
        sprites[_key] = arguments[_key];
      }

      sprites.forEach(function (sprite) {
        return _this2.addChild(sprite);
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      var _this3 = this;

      for (var _len2 = arguments.length, sprites = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        sprites[_key2] = arguments[_key2];
      }

      sprites.forEach(function (sprite) {
        console.log('remove: ' + sprite.constructor.name);
        _this3.removeChild(sprite);
      });
    }
  }, {
    key: 'gx',
    get: function get() {
      if (this.parent) return this.x + this.parent.gx;else return this.x;
    }
  }, {
    key: 'gy',
    get: function get() {
      if (this.parent) return this.y + this.parent.gy;else return this.y;
    }
  }, {
    key: 'layer',
    get: function get() {
      return this._layer;
    },
    set: function set(value) {
      this._layer = value;
      if (this.parent) this.parent.children.sort(function (a, b) {
        return a._layer - b._layer;
      });
    }
  }, {
    key: 'halfWidth',
    get: function get() {
      return this.width >> 1;
    }
  }, {
    key: 'halfHeight',
    get: function get() {
      return this.height >> 1;
    }

    // TODO: 相对于 pivot 不是 0.5 的中心点

  }, {
    key: 'centerX',
    get: function get() {
      return this.x + this.halfWidth;
    }
  }, {
    key: 'centerY',
    get: function get() {
      return this.y + this.halfHeight;
    }
  }, {
    key: 'center',
    get: function get() {
      return {
        x: this.centerX,
        y: this.centerY
      };
    }
  }, {
    key: 'gCenter',
    get: function get() {
      if (this.parent) return { x: this.centerX + this.parent.gx,
        y: this.centerY + this.parent.gy };else return this.center;
    }
  }, {
    key: 'position',
    get: function get() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: 'postion',
    set: function set(pos) {
      this.x = pos.x;
      this.y = pos.y;
    }
  }, {
    key: 'scale',
    get: function get() {
      return { x: this.scaleX,
        y: this.scaleY };
    },
    set: function set(scale) {
      if (scale instanceof Object) {} else {
        this.scaleX = this.scaleY = scale;
      }
    }
  }, {
    key: 'localBounds',
    get: function get() {
      return {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      };
    }
  }, {
    key: 'globalBounds',
    get: function get() {
      return {
        x: this.gx,
        y: this.gy,
        width: this.gx + this.width,
        height: this.gy + this.height
      };
    }
  }, {
    key: 'isEmpty',
    get: function get() {
      if (this.children.length === 0) return true;else return false;
    }
  }, {
    key: 'currentFrame',
    get: function get() {
      return this._currentFrame;
    }
  }, {
    key: 'circular',
    get: function get() {
      return this._circular;
    },
    set: function set(value) {
      if (value === true && this._circular === false) {
        Object.defineProperties(this, {
          diameter: {
            get: function get() {
              return this.width;
            },
            set: function set(value) {
              this.width = this.height = value;
            },

            enumerable: true,
            configurable: true
          },
          radius: {
            get: function get() {
              return this.halfWidth;
            },
            set: function set(vlaue) {
              this.width = this.height = value << 1;
            },

            enumerable: true,
            configurable: true
          }
        });
        this._circular = true;
      }

      if (value === false && this._circular === true) {
        delete this.diameter;
        delete this.radius;
        this._circular = false;
      }
    }
  }]);

  return DisplayObject;
}(_EventEmitter2.EventEmitter);

exports.default = DisplayObject;


var canvas = (0, _util.makeCanvas)();
if (canvas && canvas.ctx) {
  DisplayObject.hitTestCanvas = canvas;
  canvas.width = canvas.height = 1;
  // canvas.width = 512;
  // canvas.height = 256;
}

// document.body.appendChild(canvas);

},{"./EventEmitter.js":3,"./util.js":16}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = exports.EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    // console.info('EventEmitter  constructing');
    this._listeners = {};
  }

  _createClass(EventEmitter, [{
    key: 'on',
    value: function on(event, listener) {
      if (typeof listener !== 'function') throw "Listener must be a function";

      this._listeners[event] = this._listeners[event] || [];
      this._listeners[event].push(listener);
    }
  }, {
    key: 'emit',
    value: function emit(event, data) {
      var listener = this._listeners[event];
      if (listener) {
        for (var i = 0; i < listener.length; i++) {
          listener[i].call(this, data);
        }
      }
    }
  }, {
    key: 'hasListener',
    value: function hasListener(event, listenr) {
      var listeners = this._listeners[event];
      for (var i = 0; i < listeners.length; i++) {
        if (!listenr || listenr == listeners[i]) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'removeListener',
    value: function removeListener(event, listener) {
      if (typeof listener !== 'function') throw "Listener must be a function";

      var listeners = this._listeners[event];
      var position = this._listeners[event].indexOf(listener);
      if (position != -1) this._listeners[event].splice(position, 1);
    }
  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners(event) {
      if (event) {
        this._listeners[event] = [];
      } else {
        this._listeners = {};
      }
    }
  }]);

  return EventEmitter;
}();

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.group = group;
exports.grid = grid;

var _DisplayObject2 = require('./DisplayObject.js');

var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

var _Stage = require('./Stage.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = exports.Group = function (_DisplayObject) {
  _inherits(Group, _DisplayObject);

  function Group() {
    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));

    for (var _len = arguments.length, sprites = Array(_len), _key = 0; _key < _len; _key++) {
      sprites[_key] = arguments[_key];
    }

    sprites.forEach(function (sprite) {
      return _this.addChild(sprite);
    });
    return _this;
  }

  _createClass(Group, [{
    key: 'addChild',
    value: function addChild(sprite) {
      _get(Group.prototype.__proto__ || Object.getPrototypeOf(Group.prototype), 'addChild', this).call(this, sprite);
      Group.calculateSize(this);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(sprite) {
      if (sprite.parent === this) {
        this.children.splice(this.children.indexOf(sprite), 1);
        Group.calculateSize(this);
      } else {
        throw new Error(sprite + ' is not a child of ' + this);
      }
    }
  }], [{
    key: 'calculateSize',
    value: function calculateSize(group) {
      if (group.children.length > 0) {
        (function () {
          var newWidth = 0;
          var newHeight = 0;

          group.children.forEach(function (child) {
            if (child.x + child.width > newWidth) newWidth = child.x + child.width;
            if (child.y + child.height > newHeight) newHeight = child.y + child.height;
          });

          group.width = newWidth;
          group.height = newHeight;
        })();
      }
    }
  }]);

  return Group;
}(_DisplayObject3.default);

function group() {
  for (var _len2 = arguments.length, sprites = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    sprites[_key2] = arguments[_key2];
  }

  var sprite = new (Function.prototype.bind.apply(Group, [null].concat(sprites)))();
  _Stage.stage.addChild(sprite);
  return sprite;
}

function grid() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var cellWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 32;
  var cellHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 32;
  var centerCell = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var xOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var yOffset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var makeSprite = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : undefined;
  var extra = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : undefined;


  var container = group();

  var createGrid = function createGrid() {
    var length = columns * rows;

    for (var i = 0; i < length; i++) {
      var x = i % columns * cellWidth;
      var y = Math.floor(i / columns) * cellHeight;
      var sprite = makeSprite();

      if (!sprite) console.warn('grid makeSprite return: ' + sprite);

      container.addChild(sprite);

      if (!centerCell) {
        sprite.x = x + xOffset;
        sprite.y = y + yOffset;
      } else {
        sprite.x = x + cellWidth / 2 - sprite.halfWidth + xOffset;
        sprite.y = y + cellHeight / 2 - sprite.halfHeight + yOffset;
      }

      if (extra) extra(sprite);
    }
  };

  createGrid();

  return container;
}

},{"./DisplayObject.js":2,"./Stage.js":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require('./common.js');

var _common2 = _interopRequireDefault(_common);

var _util = require('./util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_RENDER_WIDTH = 640;
var DEFAULT_RENDER_HEIGHT = 480;

var renderer = exports.renderer = undefined;

var Renderer = function () {
  function Renderer() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RENDER_WIDTH;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_RENDER_HEIGHT;
    var stage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, Renderer);

    if (renderer) {
      console.error('renderer already instantiated');
      return renderer;
    }
    this.canvas = (0, _util.makeCanvas)(width, height);
    $(".lot_canvas").append(this.canvas);
    this.stage = stage;
    exports.renderer = renderer = this;
    return renderer;
  }

  _createClass(Renderer, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var canvas = this.canvas;
      var ctx = canvas.ctx;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (this.stage) {
        this.stage.children.forEach(function (sprite) {
          _render.call(_this, sprite);
        });
      }
    }
  }, {
    key: 'backgroundColor',
    get: function get() {
      return this.canvas.style.backgroundColor;
    },
    set: function set(color) {
      this.canvas.style.backgroundColor = color;
    }
  }]);

  return Renderer;
}();

exports.default = Renderer;


function _render(sprite) {
  var _this2 = this;

  var canvas = this.canvas;
  var ctx = canvas.ctx;
  if (sprite.visible && sprite.gx < canvas.width + sprite.width && sprite.gx + sprite.width >= -sprite.width && sprite.gy < canvas.height + sprite.height && sprite.gy + sprite.height >= -sprite.height) {

    ctx.save();

    // // 变换
    ctx.translate(sprite.x + sprite.width * sprite.pivotX, sprite.y + sprite.height * sprite.pivotY
    // sprite.x,
    // sprite.y
    // 0,0
    );
    ctx.rotate(sprite.rotation);
    ctx.scale(sprite.scaleX, sprite.scaleY);
    // ctx.setTransform(sprite.scaleX, 0, 0, sprite.scaleY, sprite.x, sprite.y);
    // ctx.setTransform(1, 0, 0, 1, sprite.x, sprite.y);

    // 效果
    ctx.globalAlpha = sprite.alpha * sprite.parent.alpha;

    // TODO: 其他效果 --- 阴影 混合模式

    if (sprite.render) sprite.render(ctx);

    if (sprite.children && sprite.children.length > 0) {
      ctx.translate(-sprite.width * sprite.pivotX, -sprite.height * sprite.pivotY);
      // ctx.translate(-sprite.pivotX, -sprite.pivotY);
      // ctx.setTransform(1, 0, 0, 1, 0, 0);
      sprite.children.forEach(function (child) {
        _render.call(_this2, child);
      });
    }

    ctx.restore();
  }
}

},{"./common.js":12,"./util.js":16}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.sprite = sprite;

var _DisplayObject2 = require('./DisplayObject.js');

var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

var _Stage = require('./Stage.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: 用不同方式重新 create 时 删除不再使用的属性
var Sprite = exports.Sprite = function (_DisplayObject) {
  _inherits(Sprite, _DisplayObject);

  function Sprite(source) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Sprite);

    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));

    _this.x = x;
    _this.y = y;
    if (!source) console.error('Error: Sprite\'s source: ' + source);

    if (source instanceof Image) {
      _this.createFromImage(source);
    } else if (source.frame) {
      _this.createFromAtlas(source);
    } else if (source.image && !source.data) {
      _this.createFromTileset(source);
    } else if (source.image && source.data) {
      _this.createFromTilesetFrames(source);
    } else if (source instanceof Array) {
      if (source[0] && source[0].source) {
        _this.createFromAtlasFrames(source);
      } else if (source[0] instanceof Image) {
        _this.createFromImages(source);
      } else {
        throw new Error('The image sources in ' + source + ' are not recognized');
      }
    } else {
      throw new Error('The image source ' + source + ' is not recognized');
    }
    return _this;
  }

  _createClass(Sprite, [{
    key: 'createFromImage',
    value: function createFromImage(source) {
      if (!(source instanceof Image)) {
        throw new Error(source + ' is not an image object');
      } else {
        this.source = source;
        this.sourceX = 0;
        this.sourceY = 0;
        this.width = source.width;
        this.height = source.height;
        this.sourceWidth = source.width;
        this.sourceHeight = source.height;
      }
    }
  }, {
    key: 'createFromAtlas',
    value: function createFromAtlas(source) {
      this.tilesetFrame = source;
      this.source = this.tilesetFrame.source;
      this.sourceX = this.tilesetFrame.frame.x;
      this.sourceY = this.tilesetFrame.frame.y;
      this.width = this.sourceWidth = this.tilesetFrame.frame.w;
      this.height = this.sourceHeight = this.tilesetFrame.frame.h;
    }
  }, {
    key: 'createFromTileset',
    value: function createFromTileset(source) {
      if (!(source.image instanceof Image)) {
        throw new Error(source.image + ' is not an image object');
      } else {
        this.source = source.image;
        this.sourceX = source.x;
        this.sourceY = source.y;
        this.width = source.width;
        this.height = source.height;
        this.sourceWidth = source.width;
        this.sourceHeight = source.height;
      }
    }
  }, {
    key: 'createFromTilesetFrames',
    value: function createFromTilesetFrames(source) {
      if (!(source.image instanceof Image)) {
        throw new Error(source.image + ' is not an image object');
      } else {
        this.source = source.image;
        this.frames = source.data;

        this.sourceX = this.frames[0][0];
        this.sourceY = this.frames[0][1];
        this.width = source.width;
        this.height = source.height;
        this.sourceWidth = source.width;
        this.sourceHeight = source.height;
      }
    }
  }, {
    key: 'createFromAtlasFrames',
    value: function createFromAtlasFrames(source) {
      this.frames = source;
      this.source = source[0].source;
      this.sourceX = source[0].frame.x;
      this.sourceY = source[0].frame.y;
      this.width = source[0].frame.w;
      this.height = source[0].frame.h;
      this.sourceWidth = source[0].frame.w;
      this.sourceHeight = source[0].frame.h;
    }
  }, {
    key: 'createFromImages',
    value: function createFromImages(source) {
      this.frames = source;
      this.source = source[0];
      this.sourceX = 0;
      this.sourceY = 0;
      this.width = source[0].width;
      this.height = source[0].width;
      this.sourceWidth = source[0].width;
      this.sourceHeight = source[0].height;
    }
  }, {
    key: 'gotoAndStop',
    value: function gotoAndStop(frameNumber) {
      if (this.frames.length > 0 && frameNumber < this.frames.length) {
        if (this.frames[0] instanceof Array) {
          this.sourceX = this.frames[frameNumber][0];
          this.sourceY = this.frames[frameNumber][1];
        } else if (this.frames[frameNumber].frame) {
          this.sourceX = this.frames[frameNumber].frame.x;
          this.sourceY = this.frames[frameNumber].frame.y;
          this.sourceWidth = this.frames[frameNumber].frame.w;
          this.sourceHeight = this.frames[frameNumber].frame.h;
        } else {
          this.source = this.frames[frameNumber];
          this.sourceX = 0;
          this.sourceY = 0;
          this.sourceWidth = this.source.width;
          this.sourceHeight = this.source.height;
        }
        this._currentFrame = frameNumber;
      } else {
        throw new Error('Frame number ' + frameNumber + ' does not exist');
      }
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      ctx.drawImage(this.source, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, -this.width * this.pivotX, -this.height * this.pivotY, this.width, this.height);
    }
  }], [{
    key: 'frame',
    value: function frame(source, x, y, width, height) {
      var o = {};
      o.image = source;
      o.x = x;
      o.y = y;
      o.width = width;
      o.height = height;
      return o;
    }
  }, {
    key: 'frames',
    value: function frames(source, arrayOfPositions, width, height) {
      var o = {};
      o.image = source;
      o.data = arrayOfPositions;
      o.width = width;
      o.height = height;
      return o;
    }
  }, {
    key: 'filmstrip',
    value: function filmstrip(image, frameWidth, frameHeight) {
      var spacing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (!(image instanceof Image)) {
        throw new Error(image + ' is not an image object');
      } else {
        var positions = [];
        var columns = image.width / frameWidth,
            rows = image.height / frameHeight;
        var numberOfFrames = columns * rows;

        for (var i = 0; i < numberOfFrames; ++i) {
          var ix = i % columns;
          var iy = Math.floor(i / columns);
          var x = ix * frameWidth,
              y = iy * frameHeight;

          if (spacing && spacing > 0) {
            x += spacing + spacing * ix;
            y += spacing + spacing * iy;
          }
          positions.push([x, y]);
        }
        return Sprite.frames(image, positions, frameWidth, frameHeight);
      }
    }
  }, {
    key: 'addStatePlayer',
    value: function addStatePlayer(sprite) {
      var frameCounter = 0,
          numberOfFrames = 0,
          startFrame = 0,
          endFrame = 0,
          timerInterval = undefined;

      function show(frameNumber) {
        reset();
        sprite.gotoAndStop(frameNumber);
      }

      function play() {
        if (!sprite.playing) {
          playSequence([0, sprite.frames.length - 1]);
        }
      }

      function stop() {
        if (sprite.playing) {
          reset();
          sprite.gotAndStop(sprite.currentFrame);
        }
      }

      function playSequence(sequenceArray) {
        reset();
        startFrame = sequenceArray[0];
        endFrame = sequenceArray[1];
        numberOfFrames = endFrame - startFrame;
        if (startFrame === 0) {
          numberOfFrames++;
          frameCounter++;
        }
        if (numberOfFrames === 1) {
          numberOfFrames = 2;
          frameCounter++;
        }

        if (!sprite.fps) sprite.fps = 12;
        var frameRate = 1000 / sprite.fps;
        sprite.gotoAndStop(startFrame);

        if (!sprite.playing) {
          timerInterval = setInterval(advanceFrame.bind(this), frameRate);
          sprite.playing = true;
        }
      }

      function advanceFrame() {
        if (frameCounter < numberOfFrames) {
          sprite.gotoAndStop(sprite.currentFrame + 1);
          frameCounter++;
        } else {
          if (sprite.loop) {
            sprite.gotoAndStop(startFrame);
            frameCounter = 1;
          }
        }
      }

      function reset() {
        if (timerInterval !== undefined && sprite.playing === true) {
          sprite.playing = false;
          frameCounter = 0;
          startFrame = 0;
          endFrame = 0;
          numberOfFrames = 0;
          clearInterval(timerInterval);
        }
      }

      sprite.loop = true;
      sprite.playing = false;

      sprite.show = show;
      sprite.play = play;
      sprite.stop = stop;
      sprite.playSequence = playSequence;
    }
  }]);

  return Sprite;
}(_DisplayObject3.default);

function sprite(source, x, y) {
  var sprite = new Sprite(source, x, y);
  if (sprite.frames.length > 0) Sprite.addStatePlayer(sprite);
  _Stage.stage.addChild(sprite);
  return sprite;
}

},{"./DisplayObject.js":2,"./Stage.js":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DisplayObject2 = require('./DisplayObject.js');

var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _update(dt) {
  if (this.children && this.children.length > 0) {
    this.children.forEach(function (sprite) {
      if (sprite && sprite.update) sprite.update(dt);
      _update.call(sprite, dt);
    });
  }
}

var Stage = function (_DisplayObject) {
  _inherits(Stage, _DisplayObject);

  function Stage() {
    _classCallCheck(this, Stage);

    return _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this));
  }

  _createClass(Stage, [{
    key: 'update',
    value: function update(dt) {
      _update.call(this, dt);
    }
  }]);

  return Stage;
}(_DisplayObject3.default);

var stage = exports.stage = new Stage();

},{"./DisplayObject.js":2}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.text = text;

var _DisplayObject2 = require('./DisplayObject.js');

var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

var _Stage = require('./Stage.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = exports.Text = function (_DisplayObject) {
  _inherits(Text, _DisplayObject);

  function Text() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello!';
    var font = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px sans-serif';
    var fillStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'red';
    var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

    _this.content = content;
    _this.font = font;
    _this.fillStyle = fillStyle;
    _this.x = x;
    _this.y = y;

    _this.textBaseline = 'top';
    _this.strokeText = 'none';
    return _this;
  }

  _createClass(Text, [{
    key: 'render',
    value: function render(ctx) {
      ctx.font = this.font;
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;
      ctx.fillStyle = this.fillStyle;

      if (this.width === 0) this.width = ctx.measureText(this.content).width;
      if (this.height === 0) this.height = ctx.measureText("M").width;
      ctx.translate(-this.width * this.pivotX, -this.height * this.pivotY);
      ctx.textBaseline = this.textBaseline;
      ctx.fillText(this.content, 0, 0);
      if (this.strokeText !== "none") ctx.strokeText();
    }
  }]);

  return Text;
}(_DisplayObject3.default);

function text(content, font, fillStyle, x, y) {
  var sprite = new Text(content, font, fillStyle, x, y);
  _Stage.stage.addChild(sprite);
  return sprite;
}

},{"./DisplayObject.js":2,"./Stage.js":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//import * as sound from './sound.js';


exports.tina = tina;

var _assets = require('./assets.js');

var assets = _interopRequireWildcard(_assets);

var _EventEmitter = require('./EventEmitter.js');

var EventEmitter = _interopRequireWildcard(_EventEmitter);

var _DisplayObject = require('./DisplayObject.js');

var DisplayObject = _interopRequireWildcard(_DisplayObject);

var _Sprite = require('./Sprite.js');

var Sprite = _interopRequireWildcard(_Sprite);

var _Stage = require('./Stage.js');

var Stage = _interopRequireWildcard(_Stage);

var _Group = require('./Group.js');

var Group = _interopRequireWildcard(_Group);

var _graphical = require('./graphical.js');

var graphical = _interopRequireWildcard(_graphical);

var _Text = require('./Text.js');

var Text = _interopRequireWildcard(_Text);

var _Button = require('./Button.js');

var Button = _interopRequireWildcard(_Button);

var _interactive = require('./interactive.js');

var interactive = _interopRequireWildcard(_interactive);

var _input = require('./input.js');

var input = _interopRequireWildcard(_input);

var _collision = require('./collision.js');

var collision = _interopRequireWildcard(_collision);

var _util = require('./util.js');

var util = _interopRequireWildcard(_util);

var _Renderer = require('./Renderer.js');

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_WIDTH = 640;
var DEFAULT_HEIGHT = 480;

var DEFAULT_BACKGROUND_COLOR = '#2C3539';
document.body.style.backgroundColor = DEFAULT_BACKGROUND_COLOR;

var Tina = function () {
  function Tina() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_WIDTH;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_HEIGHT;
    var setup = arguments[2];
    var assetsToLoad = arguments[3];
    var load = arguments[4];

    _classCallCheck(this, Tina);

    Object.assign = Object.assign || function () {
      var dest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var source = arguments[1];

      if (!source) return dest;
      for (var prop in source) {
        dest[prop] = source[prop];
      }
      return dest;
    };
    // 导入所有模块
    Object.assign(this, assets);
    Object.assign(this, EventEmitter);
    Object.assign(this, DisplayObject);
    Object.assign(this, Sprite);
    Object.assign(this, Stage);
    Object.assign(this, Group);
    Object.assign(this, graphical);
    Object.assign(this, Text);
    Object.assign(this, Button);
    Object.assign(this, interactive);
    Object.assign(this, input);
    Object.assign(this, collision);
    Object.assign(this, util);
    //Object.assign(this, sound);

    this.renderer = new _Renderer2.default(width, height, this.stage);
    this.stage.width = this.renderer.canvas.width;
    this.stage.height = this.renderer.canvas.height;

    this.pointer = this.makePointer(this.renderer.canvas);
    this.scale = 1;

    this.state = undefined;

    this.load = load;
    this.setup = setup;

    this.assetsToLoad = assetsToLoad;

    this.paused = false;

    // for game loop
    this._fps = 36;
    this._mpf = 1000 / this._fps;
    this._previousTime = 0;
    this._elapsedTime = 0;
    this._lagTime = 0;
    this._lagOffset = 0;
    this._correctTime = 1000;
    this._shouldRepaint = true;

    if (!this.setup) throw new Error('please supply the setup function in the constructor');
  }

  _createClass(Tina, [{
    key: 'gameLoop',
    value: function gameLoop(dt) {
      var _this = this;

      requestAnimationFrame(this.gameLoop.bind(this));
      // if(this.paused)return;

      this._elapsedTime = dt - this._previousTime;
      this._previousTime = dt;
      if (this._elapsedTime > this._correctTime) this._elapsedTime = this._mpf;
      this._lagTime += this._elapsedTime;

      while (this._lagTime >= this._mpf) {
        // console.log('update');
        // Update all the buttons

        // TODO: 单独的按钮更新频率,改变一组(两个)按钮状态后,不再i进行检测
        // TODO: 放入到场景update里，不再在这里处理
        this.renderer.canvas.style.cursor = "auto";
        if (this.buttons.length > 0) {
          this.buttons.forEach(function (button) {
            button.update(_this.pointer, _this.renderer.canvas);
            if (button.state === "over" || button.state === "down") {
              if (button.parent !== undefined) {
                _this.renderer.canvas.style.cursor = "pointer";
              }
            }
          });
        }

        // TODO: Update all the particles
        // TODO: Update all the tweens

        // TODO: 放入到场景update里，不再在这里处理
        if (this.draggableSprites) {
          this.pointer.updateDragAndDrop(this.draggableSprites);
        }

        // if (this.state && !this.paused) {
        //   // this.state(dt);
        // }
        this.stage.update(dt);

        // Update
        // this.stage.update();


        this._lagTime -= this._mpf;
        // Render
        this.renderer.render();
      }
      this._lagOffset = this._lagTime / this._mpf;
    }
  }, {
    key: 'start',
    value: function start() {
      var _this2 = this;

      if (this.assetsToLoad) {
        this.assets.load(this.assetsToLoad).then(function () {
          _this2.state = undefined;
          _this2.setup();
        });

        // 资源加载时执行
        if (this.load) {
          this.state = this.load;
        }
      } else {
        this.setup();
      }

      this.gameLoop(0);
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: 'resume',
    value: function resume() {
      this.paused = false;
    }

    // 
    // scaleToWindow(backgroundColor = DEFAULT_BACKGROUND_COLOR) {
    //   console.log('scaleToWindow');
    //   let scaleX, scaleY, scale, center;

    //   //1. Scale the canvas to the correct size
    //   //Figure out the scale amount on each axis
    //   scaleX = window.innerWidth / this.renderer.canvas.width;
    //   scaleY = window.innerHeight / this.renderer.canvas.height;

    //   //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
    //   scale = Math.min(scaleX, scaleY);
    //   this.renderer.canvas.style.transformOrigin = "0 0";
    //   this.renderer.canvas.style.transform = "scale(" + scale + ")";

    //   //2. Center the canvas.
    //   //Decide whether to center the canvas vertically or horizontally.
    //   //Wide canvases should be centered vertically, and 
    //   //square or tall canvases should be centered horizontally

    //   if (this.renderer.canvas.width > this.renderer.canvas.height) {
    //     center = "vertically";
    //   } else {
    //     center = "horizontally";
    //   }

    //   //Center horizontally (for square or tall canvases)
    //   if (center === "horizontally") {
    //     let margin = (window.innerWidth - this.renderer.canvas.width * scaleY) / 2;
    //     this.renderer.canvas.style.marginLeft = margin + "px";
    //     this.renderer.canvas.style.marginRight = margin + "px";
    //   }

    //   //Center vertically (for wide canvases) 
    //   if (center === "vertically") {
    //     let margin = (window.innerHeight - this.renderer.canvas.height * scaleX) / 2;
    //     this.renderer.canvas.style.marginTop = margin + "px";
    //     this.renderer.canvas.style.marginBottom = margin + "px";
    //   }

    //   //3. Remove any padding from the canvas and set the canvas
    //   //display style to "block"
    //   // this.renderer.canvas.style.paddingLeft = 0;
    //   // this.renderer.canvas.style.paddingRight = 0;
    //   this.renderer.canvas.style.display = "block";

    //   //4. Set the color of the HTML body background
    //   // document.body.style.backgroundColor = backgroundColor;

    //   //5. Set the game engine and pointer to the correct scale. 
    //   //This is important for correct hit testing between the pointer and sprites
    //   this.pointer.scale = scale;
    //   this.scale = scale;

    //   //Fix some quirkiness in scaling for Safari
    //   /*
    //     let ua = navigator.userAgent.toLowerCase(); 
    //     if (ua.indexOf('safari') != -1) { 
    //     if (ua.indexOf('chrome') > -1) {
    //     // Chrome
    //     } else {
    //     // Safari
    //     this.renderer.canvas.style.maxHeight = "100%";
    //     this.renderer.canvas.style.minHeight = "100%";
    //     }
    //     }
    //   */
    //   this.stage.width = this.renderer.canvas.width;
    //   this.stage.height = this.renderer.canvas.height;
    // }

  }, {
    key: 'scaleToWindow',
    value: function scaleToWindow() {
      var canvas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.renderer.canvas;
      var backgroundColor = arguments[1];


      backgroundColor = backgroundColor || "#2C3539";
      var scaleX = void 0,
          scaleY = void 0,
          scale = void 0,
          center = void 0;

      //1. Scale the canvas to the correct size
      //Figure out the scale amount on each axis
      scaleX = window.innerWidth / canvas.width;
      scaleY = window.innerHeight / canvas.height;

      //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
      scale = Math.min(scaleX, scaleY);
      canvas.style.transformOrigin = "0 0";
      canvas.style.transform = "scale(" + scale + ")";

      //2. Center the canvas.
      //Decide whether to center the canvas vertically or horizontally.
      //Wide canvases should be centered vertically, and 
      //square or tall canvases should be centered horizontally
      if (canvas.width > canvas.height) {
        if (canvas.width * scale < window.innerWidth) {
          center = "horizontally";
        } else {
          center = "vertically";
        }
      } else {
        if (canvas.height * scale < window.innerHeight) {
          center = "vertically";
        } else {
          center = "horizontally";
        }
      }

      //Center horizontally (for square or tall canvases)
      var margin = void 0;
      if (center === "horizontally") {
        margin = (window.innerWidth - canvas.width * scale) / 2;
        canvas.style.marginLeft = margin + "px";
        canvas.style.marginRight = margin + "px";
      }

      //Center vertically (for wide canvases) 
      if (center === "vertically") {
        margin = (window.innerHeight - canvas.height * scale) / 2;
        canvas.style.marginTop = margin + "px";
        canvas.style.marginBottom = margin + "px";
      }

      //3. Remove any padding from the canvas  and body and set the canvas
      //display style to "block"
      canvas.style.paddingLeft = 0;
      canvas.style.paddingRight = 0;
      canvas.style.paddingTop = 0;
      canvas.style.paddingBottom = 0;
      canvas.style.display = "block";

      //4. Set the color of the HTML body background
      document.body.style.backgroundColor = backgroundColor;

      this.pointer.scale = scale;
      this.scale = scale;

      //Fix some quirkiness in scaling for Safari
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("safari") != -1) {
        if (ua.indexOf("chrome") > -1) {
          // Chrome
        } else {
          // Safari
          canvas.style.maxHeight = "100%";
          canvas.style.minHeight = "100%";
        }
      }

      //5. Return the `scale` value. This is important, because you'll nee this value 
      //for correct hit testing between the pointer and sprites
      console.log('scale: ' + scale);
      return scale;
    }
  }, {
    key: 'fps',
    set: function set(fps) {
      this._fps = fps;
      this._mpf = 1000 / fps;
    },
    get: function get() {
      return this._fps;
    }
  }, {
    key: 'mpf',
    get: function get() {
      return this._mpf;
    }
  }]);

  return Tina;
}();

exports.default = Tina;
function tina() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_WIDTH;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_HEIGHT;
  var setup = arguments[2];
  var assetsToLoad = arguments[3];
  var load = arguments[4];

  return new Tina(width, height, setup, assetsToLoad, load);
}

},{"./Button.js":1,"./DisplayObject.js":2,"./EventEmitter.js":3,"./Group.js":4,"./Renderer.js":5,"./Sprite.js":6,"./Stage.js":7,"./Text.js":8,"./assets.js":10,"./collision.js":11,"./graphical.js":13,"./input.js":14,"./interactive.js":15,"./util.js":16}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assets = undefined;

var _common = require('./common.js');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {makeSound} from './sound.js';

var assets = exports.assets = {
  toLoad: 0,
  loaded: 0,

  imageExtensions: ['png', 'jpg', 'gif'],
  fontExtensions: ['ttf', 'otf', 'ttc', 'woff'],
  jsonExtensions: ['json'],
  audioExtensions: ['mp3', 'ogg', 'wav', 'webm'],

  // TODO: 提示载入的文件名字
  load: function load() {
    var _this = this;

    var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return new Promise(function (resolve) {
      var loadHandler = function loadHandler() {
        _this.loaded++;
        console.log(_this.loaded);
        if (_this.toLoad === _this.loaded) {
          _this.loaded = _this.toLoad = 0;
          console.info('Assets finished loading');
          resolve();
        }
      };
      if (!sources || sources.length < 1) {
        console.error('no assets need to load');
        return;
      }
      console.info('Loading assets...');

      _this.toLoad = sources.length;
      sources.forEach(function (source) {
        var extension = source.split('.').pop();
        // Load images
        if (_this.imageExtensions.has(extension)) {
          _this.loadImage(source, loadHandler);
        }
        // Load fonts 
        else if (_this.fontExtensions.has(extension)) {
            _this.loadFont(source, loadHandler);
          }
          // Load JSON files  
          else if (_this.jsonExtensions.has(extension)) {
              _this.loadJson(source, loadHandler);
            }
            // Load audio files  
            else if (_this.audioExtensions.has(extension)) {
                _this.loadSound(source, loadHandler);
              }
              // Display a message if a file type isn't recognized
              else {
                  console.log("File type not recognized: " + source);
                }
      });
    });
  },

  loadImage: function loadImage(source, loadHandler) {
    var image = new Image();
    image.addEventListener('load', loadHandler, false);
    this[source] = image;
    image.src = source;
  },

  loadFont: function loadFont(source, loadHandler) {
    var fontFamily = source.split('/').pop().split('.')[0];
    var newStyle = $$new('style');
    var fontFace = "@font-face {font-family: '" + fontFamily + "'; src: url('" + source + "');}";
    newStyle.appendChild(document.createTextNode(fontFace));
    document.head.appendChild(newStyle);
    loadHandler();
  },

  loadJson: function loadJson(source, loadHandler) {
    var _this2 = this;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', source, true);
    xhr.responseType = 'text';
    xhr.onload = function (event) {
      if (xhr.status === 200) {
        var file = JSON.parse(xhr.responseText);
        file.name = source;
        _this2[file.name] = file;
        if (file.frames) _this2.createTilesetFrames(file, source, loadHandler);else loadHandler();
      }
    };
    xhr.send();
  },

  createTilesetFrames: function createTilesetFrames(file, source, loadHandler) {
    var _this3 = this;

    var baseUrl = source.replace(/[^\/]*$/, '');
    var imageSource = baseUrl + file.meta.image;
    var image = new Image();
    var imageLoadHandler = function imageLoadHandler() {
      _this3[imageSource] = image;
      _.keys(file.frames).forEach(function (frame) {
        _this3[frame] = file.frames[frame];
        _this3[frame].source = image;
      });
      loadHandler();
    };
    image.addEventListener('load', imageLoadHandler, false);
    image.src = imageSource;
  },

  loadSound: function loadSound(source, loadHandler) {
    //let sound = makeSound(source,loadHandler);
    //sound.name = source;
    //this[sound.name] = sound;
  }
};

},{"./common.js":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hitTestPoint = hitTestPoint;
exports.hitTestCircle = hitTestCircle;
exports.circleCollision = circleCollision;
exports.movingCircleCollision = movingCircleCollision;
exports.multipleCircleCollision = multipleCircleCollision;
exports.hitTestRectangle = hitTestRectangle;
exports.rectangleCollision = rectangleCollision;
exports.hitTestCircleRectangle = hitTestCircleRectangle;
exports.hitTestCirclePoint = hitTestCirclePoint;
exports.circleRectangleCollision = circleRectangleCollision;
exports.circlePointCollision = circlePointCollision;
exports.hit = hit;
function hitTestPoint(point, sprite) {
  var shape = void 0,
      left = void 0,
      right = void 0,
      top = void 0,
      bottom = void 0,
      vx = void 0,
      vy = void 0,
      magnitude = void 0,
      hit = void 0;

  if (sprite.radius) {
    shape = 'circle';
  } else {
    shape = 'rectangle';
  }

  if (shape === 'rectangle') {
    left = sprite.gx;
    right = sprite.gx + sprite.width;
    top = sprite.gy;
    bottom = sprite.gy + sprite.height;
    hit = point.x > left && point.x < right && point.y > top && point.y < bottom;
  }

  if (shape === 'circle') {
    vx = point.x - sprite.centerX;
    vy = point.y - sprite.centerY;
    magnitude = Math.sqrt(vx * vx + vy * vy);
    hit = magnitude < sprite.radius;
  }
  return hit;
}

function hitTestCircle(c1, c2) {
  var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var vx = void 0,
      vy = void 0,
      magnitude = void 0,
      combinedRadii = void 0,
      hit = void 0;

  if (global) {
    vx = c2.gx + c2.radius - (c1.gx + c1.radius);
    vy = c2.gy + c2.radius - (c1.gy + c1.radius);
  } else {
    vx = c2.centerX - c1.centerX;
    vy = c2.centerY - c1.centerY;
  }

  magnitude = Math.sqrt(vx * vx + vy * vy);
  combinedRadii = c1.radius + c2.radius;
  hit = magnitude < combinedRadii;

  return hit;
};

function circleCollision(c1, c2) {
  var bounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var global = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var magnitude = void 0,
      combinedRadii = void 0,
      overlap = void 0,
      vx = void 0,
      vy = void 0,
      dx = void 0,
      dy = void 0,
      s = {},
      hit = false;

  if (global) {
    vx = c2.gx + c2.radius - (c1.gx + c1.radius);
    vy = c2.gy + c2.radius - (c1.gy + c1.radius);
  } else {
    vx = c2.centerX - c1.centerX;
    vy = c2.centerY - c1.centerY;
  }

  magnitude = Math.sqrt(vx * vx + vy * vy);
  combinedRadii = c1.radius + c2.radius;

  if (magnitude < combinedRadii) {
    hit = true;
    overlap = combinedRadii - magnitude;
    var quantumPadding = 0.3;
    overlap += quantumPadding;

    dx = vx / magnitude;
    dy = vy / magnitude;
    c1.x -= overlap * dx;
    c1.y -= overlap * dy;

    if (bounce) {
      s.x = vy;
      s.y = -vx;
      bounceOffSurface(c1, s);
    }
  }
  return hit;
}

function movingCircleCollision(c1, c2) {
  var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var combinedRadii = void 0,
      overlap = void 0,
      xSide = void 0,
      ySide = void 0,
      s = {},
      p1A = {},
      p1B = {},
      p2A = {},
      p2B = {},
      hit = false;

  c1.mass = c1.mass || 1;
  c2.mass = c2.mass || 1;

  if (global) {
    s.vx = c2.gx + c2.radius - (c1.gx + c1.radius);
    s.vy = c2.gy + c2.radius - (c1.gy + c1.radius);
  } else {
    s.vx = c2.centerX - c1.centerX;
    s.vy = c2.centerY - c1.centerY;
  }

  s.magnitude = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
  combinedRadii = c1.radius + c2.radius;

  if (s.magnitude < combinedRadii) {
    hit = true;

    overlap = combinedRadii - s.magnitude;

    overlap += 0.3;

    s.dx = s.vx / s.magnitude;
    s.dy = s.vy / s.magnitude;

    s.vxHalf = Math.abs(s.dx * overlap / 2);
    s.vyHalf = Math.abs(s.dy * overlap / 2);

    c1.x > c2.x ? xSide = 1 : xSide = -1;
    c1.y > c2.y ? ySide = 1 : ySide = -1;

    c1.x = c1.x + s.vxHalf * xSide;
    c1.y = c1.y + s.vyHalf * ySide;

    c2.x = c2.x + s.vxHalf * -xSide;
    c2.y = c2.y + s.vyHalf * -ySide;

    s.lx = s.vy;
    s.ly = -s.vx;

    var dp1 = c1.vx * s.dx + c1.vy * s.dy;

    p1A.x = dp1 * s.dx;
    p1A.y = dp1 * s.dy;

    var dp2 = c1.vx * (s.lx / s.magnitude) + c1.vy * (s.ly / s.magnitude);

    p1B.x = dp2 * (s.lx / s.magnitude);
    p1B.y = dp2 * (s.ly / s.magnitude);

    var dp3 = c2.vx * s.dx + c2.vy * s.dy;

    p2A.x = dp3 * s.dx;
    p2A.y = dp3 * s.dy;

    var dp4 = c2.vx * (s.lx / s.magnitude) + c2.vy * (s.ly / s.magnitude);

    p2B.x = dp4 * (s.lx / s.magnitude);
    p2B.y = dp4 * (s.ly / s.magnitude);

    c1.bounce = {};
    c1.bounce.x = p1B.x + p2A.x;
    c1.bounce.y = p1B.y + p2A.y;

    c2.bounce = {};
    c2.bounce.x = p1A.x + p2B.x;
    c2.bounce.y = p1A.y + p2B.y;

    c1.vx = c1.bounce.x / c1.mass;
    c1.vy = c1.bounce.y / c1.mass;
    c2.vx = c2.bounce.x / c2.mass;
    c2.vy = c2.bounce.y / c2.mass;
  }
  return hit;
}

function multipleCircleCollision(arrayOfCircles) {
  var global = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  for (var i = 0; i < arrayOfCircles.length; i++) {
    var c1 = arrayOfCircles[i];
    for (var j = i + 1; j < arrayOfCircles.length; j++) {
      var c2 = arrayOfCircles[j];
      movingCircleCollision(c1, c2, global);
    }
  }
}

function hitTestRectangle(r1, r2) {
  var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var hit = void 0,
      combinedHalfWidths = void 0,
      combinedHalfHeights = void 0,
      vx = void 0,
      vy = void 0;
  hit = false;

  if (global) {
    vx = r1.gx + r1.halfWidth - (r2.gx + r2.halfWidth);
    vy = r1.gy + r1.halfHeight - (r2.gy + r2.halfHeight);
  } else {
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;
  }

  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  if (Math.abs(vx) < combinedHalfWidths) {
    if (Math.abs(vy) < combinedHalfHeights) {
      hit = true;
    } else {
      hit = false;
    }
  } else {
    hit = false;
  }

  return hit;
}

function rectangleCollision(r1, r2) {
  var bounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var global = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var collision = void 0,
      combinedHalfWidths = void 0,
      combinedHalfHeights = void 0,
      overlapX = void 0,
      overlapY = void 0,
      vx = void 0,
      vy = void 0;

  if (global) {
    vx = r1.gx + r1.halfWidth - (r2.gx + r2.halfWidth);
    vy = r1.gy + r1.halfHeight - (r2.gy + r2.halfHeight);
  } else {
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;
  }

  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  if (Math.abs(vx) < combinedHalfWidths) {
    if (Math.abs(vy) < combinedHalfHeights) {
      overlapX = combinedHalfWidths - Math.abs(vx);
      overlapY = combinedHalfHeights - Math.abs(vy);

      if (overlapX >= overlapY) {
        if (vy > 0) {
          collision = "top";
          r1.y = r1.y + overlapY;
        } else {
          collision = "bottom";
          r1.y = r1.y - overlapY;
        }

        if (bounce) {
          r1.vy *= -1;
        }
      } else {
        if (vx > 0) {
          collision = "left";
          r1.x = r1.x + overlapX;
        } else {
          collision = "right";
          r1.x = r1.x - overlapX;
        }

        if (bounce) {
          r1.vx *= -1;
        }
      }
    } else {
      //No collision
    }
  } else {}
    //No collision

    // 返回碰撞方向 top | right | bottom | left
  return collision;
}

function hitTestCircleRectangle(c1, r1) {
  var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var region = void 0,
      collision = void 0,
      c1x = void 0,
      c1y = void 0,
      r1x = void 0,
      r1y = void 0;

  if (global) {
    c1x = c1.gx;
    c1y = c1.gy;
    r1x = r1.gx;
    r1y = r1.gy;
  } else {
    c1x = c1.x;
    c1y = c1.y;
    r1x = r1.x;
    r1y = r1.y;
  }

  if (c1y < r1y - r1.halfHeight) {
    if (c1x < r1x - 1 - r1.halfWidth) {
      region = "topLeft";
    } else if (c1x > r1x + 1 + r1.halfWidth) {
      region = "topRight";
    } else {
      region = "topMiddle";
    }
  } else if (c1y > r1y + r1.halfHeight) {
    if (c1x < r1x - 1 - r1.halfWidth) {
      region = "bottomLeft";
    } else if (c1x > r1x + 1 + r1.halfWidth) {
      region = "bottomRight";
    } else {
      region = "bottomMiddle";
    }
  } else {
    if (c1x < r1x - r1.halfWidth) {
      region = "leftMiddle";
    } else {
      region = "rightMiddle";
    }
  }

  if (region === "topMiddle" || region === "bottomMiddle" || region === "leftMiddle" || region === "rightMiddle") {
    collision = hitTestRectangle(c1, r1, global);
  } else {
    var point = {};

    switch (region) {
      case "topLeft":
        point.x = r1x;
        point.y = r1y;
        break;
      case "topRight":
        point.x = r1x + r1.width;
        point.y = r1y;
        break;
      case "bottomLeft":
        point.x = r1x;
        point.y = r1y + r1.height;
        break;
      case "bottomRight":
        point.x = r1x + r1.width;
        point.y = r1y + r1.height;
    }

    collision = hitTestCirclePoint(c1, point, global);
  }

  if (collision) {
    return region;
  } else {
    return collision;
  }
}

function hitTestCirclePoint(c1, point) {
  var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  point.diameter = 1;
  point.radius = 0.5;
  point.centerX = point.x;
  point.centerY = point.y;
  point.gx = point.x;
  point.gy = point.y;
  return hitTestCircle(c1, point, global);
}

function circleRectangleCollision(c1, r1) {
  var bounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var global = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var region = void 0,
      collision = void 0,
      c1x = void 0,
      c1y = void 0,
      r1x = void 0,
      r1y = void 0;

  if (global) {
    c1x = c1.gx;
    c1y = c1.gy;
    r1x = r1.gx;
    r1y = r1.gy;
  } else {
    c1x = c1.x;
    c1y = c1.y;
    r1x = r1.x;
    r1y = r1.y;
  }

  if (c1y < r1y - r1.halfHeight) {
    if (c1x < r1x - 1 - r1.halfWidth) {
      region = "topLeft";
    } else if (c1x > r1x + 1 + r1.halfWidth) {
      region = "topRight";
    } else {
      region = "topMiddle";
    }
  } else if (c1y > r1y + r1.halfHeight) {
    if (c1x < r1x - 1 - r1.halfWidth) {
      region = "bottomLeft";
    } else if (c1x > r1x + 1 + r1.halfWidth) {
      region = "bottomRight";
    } else {
      region = "bottomMiddle";
    }
  } else {
    if (c1x < r1x - r1.halfWidth) {
      region = "leftMiddle";
    } else {
      region = "rightMiddle";
    }
  }

  if (region === "topMiddle" || region === "bottomMiddle" || region === "leftMiddle" || region === "rightMiddle") {
    collision = rectangleCollision(c1, r1, bounce, global);
  } else {
    var point = {};

    switch (region) {
      case "topLeft":
        point.x = r1x;
        point.y = r1y;
        break;
      case "topRight":
        point.x = r1x + r1.width;
        point.y = r1y;
        break;
      case "bottomLeft":
        point.x = r1x;
        point.y = r1y + r1.height;
        break;
      case "bottomRight":
        point.x = r1x + r1.width;
        point.y = r1y + r1.height;
    }

    collision = circlePointCollision(c1, point, bounce, global);
  }

  if (collision) {
    return region;
  } else {
    return collision;
  }
}

function circlePointCollision(c1, point) {
  var bounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var global = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  point.diameter = 1;
  point.radius = 0.5;
  point.centerX = point.x;
  point.centerY = point.y;
  point.gx = point.x;
  point.gy = point.y;
  return circleCollision(c1, point, bounce, global);
}

function bounceOffSurface(o, s) {
  var dp1 = void 0,
      dp2 = void 0,
      p1 = {},
      p2 = {},
      bounce = {},
      mass = o.mass || 1;

  s.lx = s.y;
  s.ly = -s.x;

  s.magnitude = Math.sqrt(s.x * s.x + s.y * s.y);
  s.dx = s.x / s.magnitude;
  s.dy = s.y / s.magnitude;
  dp1 = o.vx * s.dx + o.vy * s.dy;

  p1.vx = dp1 * s.dx;
  p1.vy = dp1 * s.dy;

  dp2 = o.vx * (s.lx / s.magnitude) + o.vy * (s.ly / s.magnitude);

  p2.vx = dp2 * (s.lx / s.magnitude);
  p2.vy = dp2 * (s.ly / s.magnitude);

  p2.vx *= -1;
  p2.vy *= -1;

  bounce.x = p1.vx + p2.vx;
  bounce.y = p1.vy + p2.vy;

  o.vx = bounce.x / mass;
  o.vy = bounce.y / mass;
}

function hit(a, b) {
  var react = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var bounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var global = arguments[4];
  var extra = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

  var collision = void 0,
      aIsASprite = a.parent !== undefined,
      bIsASprite = b.parent !== undefined;

  if (aIsASprite && b instanceof Array || bIsASprite && a instanceof Array) {
    spriteVsArray();
  } else {
    collision = findCollisionType(a, b);
    if (collision && extra) extra(collision);
  }

  return collision;

  function findCollisionType(a, b) {
    var aIsASprite = a.parent !== undefined;
    var bIsASprite = b.parent !== undefined;

    if (aIsASprite && bIsASprite) {
      if (a.diameter && b.diameter) {
        return circleVsCircle(a, b);
      } else if (a.diameter && !b.diameter) {
        return circleVsRectangle(a, b);
      } else {
        return rectangleVsRectangle(a, b);
      }
    } else if (bIsASprite && !(a.x === undefined) && !(a.y === undefined)) {
      return hitTestPoint(a, b);
    } else {
      throw new Error(a + ' and ' + b + ' cannot be use together in a collision test.\'');
    }
  }

  function spriteVsArray() {
    if (a instanceof Array) {
      var _ref = [_b, _a],
          _a = _ref[0],
          _b = _ref[1];
    }
    for (var i = b.length - 1; i >= 0; i--) {
      var sprite = b[i];
      collision = findCollisionType(a, sprite);
      if (collision && extra) extra(collision, sprite);
    }
  }

  function circleVsCircle(a, b) {
    if (!react) {
      return hitTestCircle(a, b);
    } else {
      if (a.vx + a.vy !== 0 && b.vx + b.vy !== 0) {
        return movingCircleCollision(a, b, global);
      } else {
        return circleCollision(a, b, bounce, global);
      }
    }
  }

  function rectangleVsRectangle(a, b) {
    if (!react) {
      return hitTestRectangle(a, b, global);
    } else {
      return rectangleCollision(a, b, bounce, global);
    }
  }

  function circleVsRectangle(a, b) {
    if (!react) {
      return hitTestCircleRectangle(a, b, global);
    } else {
      return circleRectangleCollision(a, b, bounce, global);
    }
  }
}

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//-------------------------------------------------------------------------------------
// Native Object extensions
//-------------------------------------------------------------------------------------

Number.prototype.map = function (istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((this - istart) / (istop - istart));
};

Number.prototype.limit = function (min, max) {
  return Math.min(max, Math.max(min, this));
};

Number.prototype.round = function (precision) {
  precision = Math.pow(10, precision || 0);
  return Math.round(this * precision) / precision;
};

Number.prototype.toInt = function () {
  return this | 0;
};

Number.prototype.toRad = function () {
  return this / 180 * Math.PI;
};

Number.prototype.toDeg = function () {
  return this * 180 / Math.PI;
};

Array.prototype.erase = function (item) {
  for (var i = this.length; i--;) {
    if (this[i] == item) {
      this.splice(i, 1);
    }
  }
  return this;
};

Array.prototype.has = function (item) {
  return this.indexOf(item) !== -1;
};

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.shuffle = function () {
  for (var j, x, i = this.length; i;) {
    j = parseInt(Math.random() * i);
    x = this[--i];
    this[i] = this[j];
    this[j] = x;
  }
  return this;
};

(function (window) {
  var idIndex = 0;

  top.$$ = function (selector) {
    return selector.charAt(0) == '#' ? document.getElementById(selector.substr(1)) : document.getElementsByTagName(selector);
  };

  top.$$new = function (name) {
    return document.createElement(name);
  };

  top._ = {
    extend: function extend() {
      var dest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var source = arguments[1];

      if (!source) return dest;
      for (var prop in source) {
        dest[prop] = source[prop];
      }
      return dest;
    },

    clone: function clone(obj) {
      return _.extend({}, obj);
    },

    copy: function copy(obj) {
      if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != 'object' || obj instanceof HTMLElement) {
        return obj;
      } else if (obj instanceof Array) {
        var c = [];
        for (var i = 0, l = obj.length; i < l; ++i) {
          c[i] = _.copy(obj[i]);
        }
        return c;
      } else {
        var _c = {};
        for (var _i in obj) {
          _c[_i] = _.copy(obj[_i]);
        }
        return _c;
      }
    },

    defaults: function defaults() {
      var dest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var source = arguments[1];

      if (!source) return dest;
      for (var prop in source) {
        if (dest[prop] === void 0) {
          dest[prop] = source[prop];
        }
      }
      return dest;
    },

    modify: function modify() {
      var dest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var source = arguments[1];

      if (!source) return dest;
      for (var prop in source) {
        if (!(dest[prop] === void 0)) {
          dest[prop] = source[prop];
        }
      }
      return dest;
    },

    has: function has(obj, key) {
      return Object.prototype.hasOwnProperty(obj, key);
    },

    isString: function isString(obj) {
      return typeof obj === 'string';
    },

    isNumber: function isNumber(obj) {
      return Object.prototype.toString.call(obj) === '[object Number]';
    },

    isFunction: function isFunction(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    },

    isObject: function isObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    },

    isArray: function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },

    isUndefined: function isUndefined(obj) {
      return obj === void 0;
    },

    popProperty: function popProperty(obj, property) {
      var val = obj[property];
      delete obj[property];
      return val;
    },

    each: function each(obj, iterator, context) {
      if (obj == null) return;
      if (obj.forEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; ++i) {
          iterator.call(context, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    },

    invoke: function invoke(arr, property, arg1, arg2) {
      if (arr == null) return;
      for (var i = 0, l = arr.length; i < l; ++i) {
        arr[i][property](arg1, arg2);
      }
    },

    detect: function detect(obj, iterator, context, arg1, arg2) {
      var result = void 0;
      if (obj == null) return false;
      if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; ++i) {
          result = iterator.call(context, obj[i], i, arg1, arg2);
          if (result) return result;
        }
        return false;
      } else {
        for (var key in obj) {
          result = iterator.call(context, obj[key], key, arg1, arg2);
          if (result) return result;
        }
        return false;
      }
    },

    filter: function filter(obj, iterator, context, arg1, arg2) {
      var result = [];
      var item = void 0;
      if (obj == null) return false;
      if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; ++i) {
          item = iterator.call(context, obj[i], i, arg1, arg2);
          if (item) result.push(item);
        }
        return result;
      } else {
        for (var key in obj) {
          result = iterator.call(context, obj[key], key, arg1, arg2);
          if (item) result.push(item);
        }
        return result;
      }
    },

    map: function map(obj, iterator, context) {
      var results = [];
      if (obj == null) return results;
      if (!_.isNumber(obj) && obj.map) return obj.map(iterator, context);
      _.each(obj, function (value, index, list) {
        results[results.length] = iterator.call(context, value, index, list);
      });
      if (obj.length === +obj.length) results.length = obj.length;
      return results;
    },

    uniq: function uniq(arr) {
      arr = arr.slice().sort();
      var output = [];

      var last = null;
      for (var i = 0; i < arr.length; ++i) {
        if (arr[i] != void 0 && last !== arr[i]) output.push(arr[i]);
        last = arr[i];
      }
      return output;
    },

    keys: Object.keys || function (obj) {
      if (_.isObject(obj)) throw new TypeError('Invalid object');
      var keys = [];
      for (var key in obj) {
        if (_.has(obj, key)) keys[keys.length] = key;
      }
    },

    range: function range(start, stop) {
      var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var len = Math.max(Math.ceil(Math.abs(stop - start) / step), 0);
      var idx = 0;
      var range = new Array(len);

      while (idx < len) {
        range[idx++] = start;
        if (start > stop) start -= step;else start += step;
      }
      return range;
    },

    uniqueId: function uniqueId() {
      return idIndex++;
    }
  };
})(window);

function normalizeArg(arg) {
  if (_.isString(arg)) arg = arg.replace(/\s+/g, '').split(',');
  if (!_.isArray(arg)) arg = [arg];
  return arg;
}

exports.normalizeArg = normalizeArg;
exports.default = {};


console.log('load common module');

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Line = exports.Circle = exports.RoundedRectangle = exports.Rectangle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.rectangle = rectangle;
exports.circle = circle;
exports.line = line;

var _DisplayObject5 = require('./DisplayObject.js');

var _DisplayObject6 = _interopRequireDefault(_DisplayObject5);

var _Stage = require('./Stage.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rectangle = exports.Rectangle = function (_DisplayObject) {
  _inherits(Rectangle, _DisplayObject);

  function Rectangle() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
    var fillStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'gray';
    var strokeStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
    var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var x = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var y = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

    _classCallCheck(this, Rectangle);

    var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

    _this.width = width;
    _this.height = height;
    _this.fillStyle = fillStyle;
    _this.strokeStyle = strokeStyle;
    _this.lineWidth = lineWidth;
    _this.x = x;
    _this.y = y;

    _this.mask = false;
    return _this;
  }

  _createClass(Rectangle, [{
    key: 'render',
    value: function render(ctx) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;
      ctx.fillStyle = this.fillStyle;
      ctx.beginPath();
      ctx.rect(-this.width * this.pivotX, -this.height * this.pivotY, this.width, this.height);
      if (this.strokeStyle !== 'none') ctx.stroke();
      if (this.fillStyle !== 'none') ctx.fill();
      if (this.mask && this.mask === true) ctx.clip();
    }
  }]);

  return Rectangle;
}(_DisplayObject6.default);

var RoundedRectangle = exports.RoundedRectangle = function (_DisplayObject2) {
  _inherits(RoundedRectangle, _DisplayObject2);

  function RoundedRectangle() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
    var fillStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'gray';
    var strokeStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'none';
    var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var x = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var y = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

    _classCallCheck(this, RoundedRectangle);

    var _this2 = _possibleConstructorReturn(this, (RoundedRectangle.__proto__ || Object.getPrototypeOf(RoundedRectangle)).call(this));

    _this2.width = width;
    _this2.height = height;
    _this2.radius = radius;
    _this2.fillStyle = fillStyle;
    _this2.strokeStyle = strokeStyle;
    _this2.lineWidth = lineWidth;
    _this2.x = x;
    _this2.y = y;

    _this2.mask = false;
    return _this2;
  }

  _createClass(RoundedRectangle, [{
    key: 'render',
    value: function render(ctx) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;
      ctx.fillStyle = this.fillStyle;
      ctx.beginPath();

      var x = -this.width * this.pivotX;
      var y = -this.height * this.pivotY;
      var width = this.width;
      var height = this.height;
      var radius = this.radius;
      ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
      ctx.lineTo(width - radius + x, y);
      ctx.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
      ctx.lineTo(width + x, height + y - radius);
      ctx.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
      ctx.lineTo(radius + x, height + y);
      ctx.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);

      if (this.strokeStyle !== 'none') ctx.stroke();
      if (this.fillStyle !== 'none') ctx.fill();
      if (this.mask && this.mask === true) ctx.clip();
    }
  }]);

  return RoundedRectangle;
}(_DisplayObject6.default);

function rectangle(width, height, fillStyle, strokeStyle, lineWidth, x, y) {
  var sprite = new Rectangle(width, height, fillStyle, strokeStyle, lineWidth, x, y);
  _Stage.stage.addChild(sprite);
  return sprite;
}

var Circle = exports.Circle = function (_DisplayObject3) {
  _inherits(Circle, _DisplayObject3);

  function Circle() {
    var diameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    var fillStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gray';
    var strokeStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';
    var lineWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var x = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var y = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, Circle);

    var _this3 = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

    _this3.circular = true;

    _this3.diameter = diameter;
    _this3.fillStyle = fillStyle;
    _this3.strokeStyle = strokeStyle;
    _this3.lineWidth = lineWidth;
    _this3.x = x;
    _this3.y = y;

    _this3.mask = false;
    return _this3;
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render(ctx) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;
      ctx.fillStyle = this.fillStyle;
      ctx.beginPath();
      ctx.arc(this.radius + -this.diameter * this.pivotX, this.radius + -this.diameter * this.pivotY, this.radius, 0, 2 * Math.PI, false);
      if (this.strokeStyle !== 'none') ctx.stroke();
      if (this.fillStyle !== 'none') ctx.fill();
      if (this.mask && this.mask === true) ctx.clip();
    }
  }]);

  return Circle;
}(_DisplayObject6.default);

function circle(diameter, fillStyle, strokeStyle, lineWidth, x, y) {
  var sprite = new Circle(diameter, fillStyle, strokeStyle, lineWidth, x, y);
  _Stage.stage.addChild(sprite);
  return sprite;
}

var Line = exports.Line = function (_DisplayObject4) {
  _inherits(Line, _DisplayObject4);

  function Line() {
    var strokeStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';
    var lineWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var ax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var ay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var bx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 32;
    var by = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 32;

    _classCallCheck(this, Line);

    var _this4 = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this));

    _this4.strokeStyle = strokeStyle;
    _this4.lineWidth = lineWidth;
    _this4.ax = ax;
    _this4.ay = ay;
    _this4.bx = bx;
    _this4.by = by;

    _this4.lineJoin = 'round';
    return _this4;
  }

  _createClass(Line, [{
    key: 'render',
    value: function render(ctx) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;
      ctx.lineJoin = this.lineJoin;
      ctx.beginPath();
      ctx.moveTo(this.ax, this.ay);
      ctx.lineTo(this.bx, this.by);
      if (this.strokeStyle !== 'none') ctx.stroke();
    }
  }]);

  return Line;
}(_DisplayObject6.default);

function line(strokeStyle, lineWidth, ax, ay, bx, by) {
  var sprite = new Line(strokeStyle, lineWidth, ax, ay, bx, by);
  _Stage.stage.addChild(sprite);
  return sprite;
}

},{"./DisplayObject.js":2,"./Stage.js":7}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointer = exports.keys = undefined;
exports.makePointer = makePointer;
exports.keyboard = keyboard;

var _DisplayObject = require('./DisplayObject.js');

var _DisplayObject2 = _interopRequireDefault(_DisplayObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = exports.keys = {
  'MOUSE1': -1,
  'MOUSE2': -3,
  'MWHEEL_UP': -4,
  'MWHEEL_DOWN': -5,

  'BACKSPACE': 8,
  'TAB': 9,
  'ENTER': 13,
  'PAUSE': 19,
  'CAPS': 20,
  'ESC': 27,
  'SPACE': 32,
  'PAGE_UP': 33,
  'PAGE_DOWN': 34,
  'END': 35,
  'HOME': 36,
  'LEFT_ARROW': 37,
  'UP_ARROW': 38,
  'RIGHT_ARROW': 39,
  'DOWN_ARROW': 40,
  'INSERT': 45,
  'DELETE': 46,
  '_0': 48,
  '_1': 49,
  '_2': 50,
  '_3': 51,
  '_4': 52,
  '_5': 53,
  '_6': 54,
  '_7': 55,
  '_8': 56,
  '_9': 57,
  'A': 65,
  'B': 66,
  'C': 67,
  'D': 68,
  'E': 69,
  'F': 70,
  'G': 71,
  'H': 72,
  'I': 73,
  'J': 74,
  'K': 75,
  'L': 76,
  'M': 77,
  'N': 78,
  'O': 79,
  'P': 80,
  'Q': 81,
  'R': 82,
  'S': 83,
  'T': 84,
  'U': 85,
  'V': 86,
  'W': 87,
  'X': 88,
  'Y': 89,
  'Z': 90,
  'NUMPAD_0': 96,
  'NUMPAD_1': 97,
  'NUMPAD_2': 98,
  'NUMPAD_3': 99,
  'NUMPAD_4': 100,
  'NUMPAD_5': 101,
  'NUMPAD_6': 102,
  'NUMPAD_7': 103,
  'NUMPAD_8': 104,
  'NUMPAD_9': 105,
  'MULTIPLY': 106,
  'ADD': 107,
  'SUBSTRACT': 109,
  'DECIMAL': 110,
  'DIVIDE': 111,
  'F1': 112,
  'F2': 113,
  'F3': 114,
  'F4': 115,
  'F5': 116,
  'F6': 117,
  'F7': 118,
  'F8': 119,
  'F9': 120,
  'F10': 121,
  'F11': 122,
  'F12': 123,
  'SHIFT': 16,
  'CTRL': 17,
  'ALT': 18,
  'PLUS': 187,
  'COMMA': 188,
  'MINUS': 189,
  'PERIOD': 190
};

function testHit(ctx) {
  try {
    return ctx.getImageData(0, 0, 1, 1).data[3] > 1;
  } catch (e) {
    throw 'Error: when testHit';
  }
}

var pointer = exports.pointer = undefined;

function makePointer(element) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (pointer) {
    console.error('pointer already instantiated');
    return pointer;
  }
  var _pointer = {
    element: element,
    scale: scale,
    _x: 0,
    _y: 0,
    tappedTime: 200,

    get x() {
      return this._x / this.scale;
    },
    get y() {
      return this._y / this.scale;
    },

    get centerX() {
      return this.x;
    },
    get centerY() {
      return this.y;
    },

    get position() {
      return {
        x: this.x,
        y: this.y
      };
    },

    isDown: false,
    isUp: true,
    tapped: false,

    downTime: 0,
    elapsedTime: 0,

    press: undefined,
    release: undefined,
    tap: undefined,

    dragSprite: null,
    dragOffsetX: 0,
    dragOffsetY: 0,

    moveHandler: function moveHandler(event) {
      var element = event.target;
      this._x = event.pageX - element.offsetLeft;
      this._y = event.pageY - element.offsetTop;
      event.preventDefault();
    },
    touchmoveHandler: function touchmoveHandler(event) {
      var element = event.target;
      this._x = event.targetTouches[0].pageX - element.offsetLeft;
      this._y = event.targetTouches[0].pageY - element.offsetTop;
      event.preventDefault();
    },
    downHandler: function downHandler(event) {
      this.isDown = true;
      this.isUp = false;
      this.tapped = false;
      this.downTime = Date.now();
      if (this.press) this.press();
      event.preventDefault();
    },
    touchstartHandler: function touchstartHandler(event) {
      var element = event.target;
      this._x = event.targetTouches[0].pageX - element.offsetLeft;
      this._y = event.targetTouches[0].pageY - element.offsetTop;

      this.isDown = true;
      this.isUp = false;
      this.isDown = false;
      this.downTime = Date.now();
      if (this.press) this.press();
      event.preventDefault();
    },
    upHandler: function upHandler(event) {
      this.elapsedTime = Math.abs(this.downTime - Date.now());
      if (this.elapsedTime <= this.tappedTime && this.tapped === false) {
        this.tapped = true;
        if (this.tap) this.tap();
      }
      this.isUp = true;
      this.isDown = false;
      if (this.release) this.release();
      event.preventDefault();
    },
    touchendHandler: function touchendHandler(event) {
      this.elapsedTime = Math.abs(this.downTime - Date.now());
      if (this.elapsedTime <= this.tappedTime && this.tapped === false) {
        this.tapped = true;
        if (this.tap) this.tap();
      }
      this.isUp = true;
      this.isDown = false;
      if (this.release) this.release();
      event.preventDefault();
    },


    // FIXME: 多层变换没处理好，可能需要sprite保持一个变换矩阵(全局)才能达到( 参考：游戏编程模式 )
    hitTestSpritePixel: function hitTestSpritePixel(sprite) {
      var ctx = _DisplayObject2.default.hitTestCanvas.ctx;
      // ctx.save();
      ctx.setTransform(1, 0, 0, 1, -this.x, -this.y);
      // ctx.transform(1,0,0,1,sprite.x,sprite.y);
      ctx.translate(sprite.gx + sprite.width * sprite.pivotX, sprite.gy + sprite.height * sprite.pivotY);
      ctx.rotate(sprite.rotation);
      ctx.scale(sprite.scaleX, sprite.scaleY);

      sprite.render(ctx);
      var hit = testHit(ctx);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, 1, 1);
      // ctx.clearRect(0,0,512,256);

      // ctx.restore();
      if (hit) console.log('pixel hit');
      return hit;
    },


    // FIXME: 多层变换没处理好，可能需要sprite保持一个变换矩阵(全局)才能达到( 参考：游戏编程模式 )
    hitTestSpriteScaled: function hitTestSpriteScaled(sprite) {
      var hit = false;
      if (!sprite.circular) {
        var center = sprite.gCenter;
        var halfWidht = (sprite.width >> 1) * sprite.scaleX;
        var halfHeight = (sprite.height >> 1) * sprite.scaleY;
        var left = center.x - halfWidht,
            right = center.x + halfWidht,
            top = center.y - halfHeight,
            bottom = center.y + halfHeight;

        hit = this.x > left && this.x < right && this.y > top && this.y < bottom;
      } else {
        // FIXME: 还没有处理圆形
        var vx = this.x - (sprite.gx + sprite.radius),
            vy = this.y - (sprite.gy + sprite.radius),
            distance = Math.sqrt(vx * vx + vy * vy);
        hit = distance < sprite.radius;
      }
      // if(hit) console.log('scaled hit');
      return hit;
    },
    hitTestSpriteNormal: function hitTestSpriteNormal(sprite) {
      var hit = false;
      if (!sprite.circular) {
        var left = sprite.gx,
            right = sprite.gx + sprite.width,
            top = sprite.gy,
            bottom = sprite.gy + sprite.height;

        hit = this.x > left && this.x < right && this.y > top && this.y < bottom;
      } else {
        var vx = this.x - (sprite.gx + sprite.radius),
            vy = this.y - (sprite.gy + sprite.radius),
            distance = Math.sqrt(vx * vx + vy * vy);
        hit = distance < sprite.radius;
      }
      return hit;
    },


    // 可能需要sprite保持一个变换矩阵(全局),使用pixel检测
    hitTestSprite: function hitTestSprite(sprite) {
      if (sprite.rotation != 0) {
        return this.hitTestSpritePixel(sprite);
      } else if (sprite.scaleX != 1 || sprite.scaleY != 1) {
        return this.hitTestSpriteScaled(sprite);
      } else {
        return this.hitTestSpriteNormal(sprite);
      }
    },
    updateDragAndDrop: function updateDragAndDrop(draggableSprites) {
      var _this = this;

      if (this.isDown) {
        if (this.dragSprite === null) {
          for (var i = draggableSprites.length - 1; i > -1; --i) {
            var sprite = draggableSprites[i];
            if (sprite.draggable && this.hitTestSprite(sprite)) {
              this.dragOffsetX = this.x - sprite.gx;
              this.dragOffsetY = this.y - sprite.gy;
              this.dragSprite = sprite;
              var children = sprite.parent.children;
              children.splice(children.indexOf(sprite), 1);
              children.push(sprite);

              draggableSprites.splice(draggableSprites.indexOf(sprite), 1);
              draggableSprites.push(sprite);

              break;
            }
          }
        } else {
          this.dragSprite.x = this.x - this.dragOffsetX;
          this.dragSprite.y = this.y - this.dragOffsetY;
        }
      }

      if (this.isUp) this.dragSprite = null;

      draggableSprites.some(function (sprite) {
        if (sprite.draggable && _this.hitTestSprite(sprite)) {
          _this.element.style.cursor = 'pointer';
          return true;
        } else {
          _this.element.style.cursor = 'auto';
          return false;
        }
      });
    }
  };

  element.addEventListener('mousemove', _pointer.moveHandler.bind(_pointer), false);
  element.addEventListener("mousedown", _pointer.downHandler.bind(_pointer), false);
  window.addEventListener("mouseup", _pointer.upHandler.bind(_pointer), false);

  element.addEventListener("touchmove", _pointer.touchmoveHandler.bind(_pointer), false);
  element.addEventListener("touchstart", _pointer.touchstartHandler.bind(_pointer), false);
  window.addEventListener("touchend", _pointer.touchendHandler.bind(_pointer), false);

  // Disable the default actions on the 'canvas'
  element.style.touchAction = "none";

  exports.pointer = pointer = _pointer;
  return _pointer;
}

function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;

  key.downHandler = function (event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  key.upHandler = function (event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  window.addEventListener('keydown', key.downHandler.bind(key), false);
  window.addEventListener('keyup', key.upHandler.bind(key), false);

  return key;
}

},{"./DisplayObject.js":2}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttons = exports.draggableSprites = undefined;
exports.updateDragAndDrop = updateDragAndDrop;

var _DisplayObject = require('./DisplayObject.js');

var _DisplayObject2 = _interopRequireDefault(_DisplayObject);

var _Button = require('./Button.js');

var _Renderer = require('./Renderer.js');

var _input = require('./input.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var draggableSprites = exports.draggableSprites = [];
var buttons = exports.buttons = [];

function updateDragAndDrop() {
  var canvas = _Renderer.renderer.canvas;
  var dragSprite = null,
      dragOffsetX = 0,
      dragOffsetY = 0;

  if (_input.pointer.isDown) {
    if (dragSprite === null) {
      for (var i = draggableSprites.length - 1; i > -1; i--) {
        var sprite = draggableSprites[i];
        if (_input.pointer.hitTestSprite(sprite) && sprite.draggable) {
          dragOffsetX = _input.pointer.x - sprite.gx;
          dragOffsetY = _input.pointer.y - sprite.gy;
          dragSprite = sprite;
          var children = sprite.parent.children;
          children.splice(children.indexOf(sprite), 1);
          children.push(sprite);
          break;
        }
      }
    } else {
      dragSprite.x = _input.pointer.x - dragOffsetX;
      dragSprite.y = _input.pointer.y - dragOffsetY;
    }
  }

  if (_input.pointer.isUp) {
    dragSprite = null;
  }

  draggableSprites.some(function (sprite) {
    if (_input.pointer.hitTestSprite(sprite) && sprite.draggable) {
      canvas.style.cursor = "pointer";
      return true;
    } else {
      canvas.style.cursor = "auto";
      return false;
    }
  });
}

function makeInteractive(o) {
  o.press = o.press || undefined;
  o.release = o.release || undefined;
  o.over = o.over || undefined;
  o.out = o.out || undefined;
  o.tap = o.tap || undefined;

  o.state = "up";
  o.action = "";
  o.pressed = false;
  o.hoverOver = false;

  //  保持原始 update 到 preUpdate
  if (o.update) o.preUpdate = o.update;

  o.update = function (dt) {
    // 调用原始update
    if (o.preUpdate) o.preUpdate(dt);

    var canvas = _Renderer.renderer.canvas;
    // console.log('interactive update');
    if (o.visible == false) return;
    var hit = _input.pointer.hitTestSprite(o);

    if (_input.pointer.isUp) {
      o.state = "up";
      if (o instanceof _Button.Button) o.gotoAndStop(0);
    }

    if (hit) {
      o.state = "over";
      if (o.frames && o.frames.length === 3 && o instanceof _Button.Button) {
        o.gotoAndStop(1);
      }

      if (_input.pointer.isDown) {
        o.state = "down";
        if (o instanceof _Button.Button) {
          if (o.frames.length === 3) {
            o.gotoAndStop(2);
          } else {
            o.gotoAndStop(1);
          }
        }
      }
    }

    if (o.state === "down") {
      if (!o.pressed) {
        if (o.press) o.press();
        o.pressed = true;
        o.action = "pressed";
      }
    }

    if (o.state === "over") {
      if (o.pressed) {
        if (o.release) o.release();
        o.pressed = false;
        o.action = "released";
        if (_input.pointer.tapped && o.tap) o.tap();
      }

      if (!o.hoverOver) {
        if (o.over) o.over();
        o.hoverOver = true;
      }
    }

    if (o.state === "up") {
      if (o.pressed) {
        if (o.release) o.release();
        o.pressed = false;
        o.action = "released";
      }

      if (o.hoverOver) {
        if (o.out) o.out();
        o.hoverOver = false;
      }
    }

    // 鼠标效果
    if (o.state === "over" || o.state === "down") {
      _Renderer.renderer.canvas.style.cursor = "pointer";
    }
  };
}

Object.defineProperties(_DisplayObject2.default.prototype, {
  interactive: {
    get: function get() {
      return this._interactive;
    },
    set: function set(value) {
      if (value === true) {
        makeInteractive(this);
        // buttons.push(this);
        this._interactive = true;
      }
      if (value === false) {
        // buttons.splice(buttons.indexOf(this), 1);
        this._interactive = false;
      }
    },

    enumerable: true,
    configurable: true
  },
  draggable: {
    get: function get() {
      return this._draggable;
    },
    set: function set(value) {
      if (value === true) {
        draggableSprites.push(this);
        this._draggable = true;
      }
      if (value === false) {
        draggableSprites.splice(draggableSprites.indexOf(this), 1);
      }
    },

    enumerable: true,
    configurable: true
  }
});

},{"./Button.js":1,"./DisplayObject.js":2,"./Renderer.js":5,"./input.js":14}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCanvas = makeCanvas;
exports.outsideBounds = outsideBounds;
exports.contain = contain;
exports.distance = distance;
exports.followEase = followEase;
exports.followConstant = followConstant;
exports.angle = angle;
exports.rotateSprite = rotateSprite;
exports.rotatePoint = rotatePoint;
exports.randomInt = randomInt;
exports.randomFloat = randomFloat;

var _common = require('./common.js');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeCanvas(width, height) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '2d';
  var border = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var backgroundColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#f1f1f1';


  var canvas = $$new('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.style.border = border;
  canvas.style.backgroundColor = "#f1f1f1";
  // document.body.appendChild(canvas);

  canvas.ctx = canvas.getContext(type);

  return canvas;
}

function outsideBounds(sprite, bounds) {
  var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;


  var x = bounds.x,
      y = bounds.y,
      width = bounds.width,
      height = bounds.height;

  var collision = void 0;

  if (sprite.x < x - sprite.width) {
    collision = "left";
  }
  //Top
  if (sprite.y < y - sprite.height) {
    collision = "top";
  }
  //Right
  if (sprite.x > width) {
    collision = "right";
  }
  //Bottom
  if (sprite.y > height) {
    collision = "bottom";
  }

  if (collision && extra) extra(collision);

  return collision;
}

function contain(sprite, bounds) {
  var bounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

  var x = bounds.x,
      y = bounds.y,
      width = bounds.width,
      height = bounds.height;

  var collision = void 0;

  //Left
  if (sprite.x < x) {
    if (bounce) sprite.vx *= -1;
    if (sprite.mass) sprite.vx /= sprite.mass;
    sprite.x = x;
    collision = "left";
  }
  //Top
  if (sprite.y < y) {
    if (bounce) sprite.vy *= -1;
    if (sprite.mass) sprite.vy /= sprite.mass;
    sprite.y = y;
    collision = "top";
  }
  //Right
  if (sprite.x + sprite.width > width) {
    if (bounce) sprite.vx *= -1;
    if (sprite.mass) sprite.vx /= sprite.mass;
    sprite.x = width - sprite.width;
    collision = "right";
  }
  //Bottom
  if (sprite.y + sprite.height > height) {
    if (bounce) sprite.vy *= -1;
    if (sprite.mass) sprite.vy /= sprite.mass;
    sprite.y = height - sprite.height;
    collision = "bottom";
  }

  if (collision && extra) extra(collision);

  return collision;
}

function distance(s1, s2) {
  var vx = s2.centerX - s1.centerX;
  var vy = s2.centerY - s1.centerY;
  return Math.sqrt(vx * vx + vy * vy);
}

function followEase(follower, leader, speed) {
  var vx = leader.centerX - follower.centerX;
  var vy = leader.centerY - follower.centerY;
  var distance = Math.sqrt(vx * vx + vy * vy);

  if (distance >= 1) {
    follower.x += vx * speed;
    follower.y += vy * speed;
  }
}

function followConstant(follower, leader, speed) {
  var vx = leader.centerX - follower.centerX;
  var vy = leader.centerY - follower.centerY;
  var distance = Math.sqrt(vx * vx + vy * vy);

  if (distance >= speed) {
    follower.x += vx / distance * speed;
    follower.y += vy / distance * speed;
  }
}

function angle(s1, s2) {
  return Math.atan2(s2.centerY - s1.centerY, s2.centerX - s1.centerX);
}

function rotateSprite(rotatingSprite, centerSprite, distance, angle) {
  rotatingSprite.x = centerSprite.centerX - rotatingSprite.parent.x + distance * Math.cos(angle) - rotatingSprite.halfWidth;

  rotatingSprite.y = centerSprite.centerY - rotatingSprite.parent.y + distance * Math.sin(angle) - rotatingSprite.halfHeight;
}

function rotatePoint(pointX, pointY, distanceX, distanceY, angle) {
  var point = {};
  point.x = pointX + Math.cos(angle) * distanceX;
  point.y = pointY + Math.sin(angle) * distanceY;
  return point;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

},{"./common.js":12}],17:[function(require,module,exports){
'use strict';

var _Lottery_Animate = require('./src/Lottery_Animate.js');

var _Lottery_Animate2 = _interopRequireDefault(_Lottery_Animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _Lottery_Animate2.default)(); // import main from './test/gua_buy.js';
// import main from './test/gua_list.js';

},{"./src/Lottery_Animate.js":18}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = main;

var _Tina = require('../libs/tina/Tina.js');

var _Tina2 = _interopRequireDefault(_Tina);

var _DisplayObject2 = require('../libs/tina/DisplayObject.js');

var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

var _Text = require('../libs/tina/Text.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function main() {}
var lotNum = window.lotNum || [];
var speeds = [15, 13, 14, 13, 15]; //每个球的速度
var circle = 2; //要转多少圈

var qiuNum = window.qiuNum; // 球的数量
console.log(qiuNum);
var qiumen = [];

var count = 12; //有几个数字
var num = []; //排列数组
//let numX = 35;//数字的间距
var numH = 90; //排列数字的间距
var totalH = numH * count; //排列数字的 总长度

var assetseot = void 0;
if (navigator.userAgent.split(";")[1].toLowerCase().indexOf("msie 10.0") == "-1" ? false : true) {
  assetseot = '/public/img/lotteryGame/assets/impact.ttf';
} else {
  assetseot = '/public/img/lotteryGame/assets/impact.ttf';
}

var t = new _Tina2.default(580, 96, game, [assetseot, '/public/img/lotteryGame/assets/qiu.png', '/public/img/lotteryGame/assets/bai.png']);

var Qiuqiu = function (_DisplayObject) {
  _inherits(Qiuqiu, _DisplayObject);

  function Qiuqiu() {
    _classCallCheck(this, Qiuqiu);

    var _this = _possibleConstructorReturn(this, (Qiuqiu.__proto__ || Object.getPrototypeOf(Qiuqiu)).call(this));

    _this.speed = undefined;
    _this.loopNum = undefined;
    _this.showNum = undefined;
    _this.numbers = [];

    //定义背景
    _this.bg = new t.Sprite(t.assets['/public/img/lotteryGame/assets/qiu.png']);
    _this.bai = new t.Sprite(t.assets['/public/img/lotteryGame/assets/bai.png']);
    _this.bai.x = 16;
    _this.bai.y = -55;
    _this.bai2 = new t.Sprite(t.assets['/public/img/lotteryGame/assets/bai.png']);
    _this.bai2.x = 16;
    _this.bai2.y = 70;

    //定义数字图片
    for (var i = 0; i < count; i++) {
      var _num = void 0;
      if (i <= 9) {
        _num = new _Text.Text('0' + i, '35px impact', 'black');
      } else {
        _num = new _Text.Text(i, '35px impact', 'black');
      }
      _num.width = 36;
      _this.numbers[i] = _num;
      _this.addChild(_num);
    }
    _this.add(_this.bai, _this.bai2);
    _this.addChild(_this.bg);
    _this.init();
    return _this;
  }

  // 数字排版


  _createClass(Qiuqiu, [{
    key: 'init',
    value: function init() {
      for (var i = 0; i < count; ++i) {
        this.bg.putCenter(this.numbers[i]);
        this.numbers[i].y = numH * i;
        if (this.numbers[i].content == 11) {
          this.numbers[i].x = 34;
        };
      }
    }

    // 速度定义

  }, {
    key: 'play',
    value: function play(speed, loopNum, showNum) {
      this.speed = speed;
      this.loopNum = loopNum;
      this.showNum = showNum;
    }

    //特效

  }, {
    key: 'update',
    value: function update() {
      //当速度 speed 等于零的时候 把 要停的字母排位到最上面
      //并且让他旋转几圈
      if (this.speed > 0) {
        for (var i = 0; i < count; i++) {
          this.numbers[i].y += this.speed;
          var bottomY = 52;
          if (this.numbers[i].y >= bottomY) {
            this.numbers[i].y = this.numbers[i].y - totalH;
            if (i === this.showNum) this.loopNum--;
          }
        }
        //当旋转完结以后，要停的数字在以旋转的方式停下来。
        if (this.loopNum === 0) {
          var tmp = void 0;
          if (navigator.userAgent.indexOf("Chrome") != -1) {
            tmp = 21 - this.numbers[this.showNum].y;
          } else if (navigator.userAgent.split(";")[1].toLowerCase().indexOf("msie 10.0") == "-1" ? false : true) {
            tmp = 22 - this.numbers[this.showNum].y;
          } else {
            tmp = 26 - this.numbers[this.showNum].y;
          }
          if (tmp < this.speed) {
            for (var _i = 0; _i < count; _i++) {
              this.numbers[_i].y += tmp;
            }
            this.speed = 0;
          }
        }
      }
    }
  }]);

  return Qiuqiu;
}(_DisplayObject3.default);

//window.kaisi = function(lotNum){
//  if(lotNum == undefined){
//    this.num = 1;
//  }
//  else{
//    this.num = lotNum;
//  }
//  for(let i = 0; i< qiuNum;++i) {
//    qiumen[i].play(speeds[i],circle,this.num[i]);
//    console.log(this.num[i]);
//  }
//}

function go(lotNum) {
  if (lotNum == undefined) {
    this.num = 1;
  } else {
    this.num = lotNum;
  }
  for (var i = 0; i < qiuNum; ++i) {
    qiumen[i].play(speeds[i], circle, this.num[i]);
  }
}

function game() {
  //循环添加球
  for (var i = 0; i < qiuNum; ++i) {
    qiumen[i] = new Qiuqiu();
    t.stage.addChild(qiumen[i]);
    qiumen[i].x = i * 120;
  };
  //要循环的特效
  //window.kaisi();
  window.kaisi = go;
}

t.start();

},{"../libs/tina/DisplayObject.js":2,"../libs/tina/Text.js":8,"../libs/tina/Tina.js":9}]},{},[17])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWJzXFx0aW5hXFxCdXR0b24uanMiLCJsaWJzXFx0aW5hXFxEaXNwbGF5T2JqZWN0LmpzIiwibGlic1xcdGluYVxcRXZlbnRFbWl0dGVyLmpzIiwibGlic1xcdGluYVxcR3JvdXAuanMiLCJsaWJzXFx0aW5hXFxSZW5kZXJlci5qcyIsImxpYnNcXHRpbmFcXFNwcml0ZS5qcyIsImxpYnNcXHRpbmFcXFN0YWdlLmpzIiwibGlic1xcdGluYVxcVGV4dC5qcyIsImxpYnNcXHRpbmFcXFRpbmEuanMiLCJsaWJzXFx0aW5hXFxhc3NldHMuanMiLCJsaWJzXFx0aW5hXFxjb2xsaXNpb24uanMiLCJsaWJzXFx0aW5hXFxjb21tb24uanMiLCJsaWJzXFx0aW5hXFxncmFwaGljYWwuanMiLCJsaWJzXFx0aW5hXFxpbnB1dC5qcyIsImxpYnNcXHRpbmFcXGludGVyYWN0aXZlLmpzIiwibGlic1xcdGluYVxcdXRpbC5qcyIsIm1haW4uanMiLCJzcmNcXExvdHRlcnlfQW5pbWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztRQ1dnQixNLEdBQUEsTTs7QUFYaEI7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRWEsTSxXQUFBLE07OztBQUNYLGtCQUFZLE1BQVosRUFBa0M7QUFBQSxRQUFkLENBQWMsdUVBQVYsQ0FBVTtBQUFBLFFBQVAsQ0FBTyx1RUFBSCxDQUFHOztBQUFBOztBQUFBLGdIQUMxQixNQUQwQixFQUNsQixDQURrQixFQUNmLENBRGU7O0FBRWhDLFVBQUssV0FBTCxHQUFtQixJQUFuQjtBQUZnQztBQUdqQzs7Ozs7QUFHSSxTQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsRUFBNEI7QUFDakMsTUFBSSxTQUFTLElBQUksTUFBSixDQUFXLE1BQVgsRUFBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsQ0FBYjtBQUNBLGVBQU0sUUFBTixDQUFl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QUFVLEVBdEJTO0FBdUJuQixRQUFNLEVBdkJhO0FBd0JuQixRQUFNLEVBeEJhO0FBeUJuQixRQUFNLEVBekJhO0FBMEJuQixRQUFNLEVBMUJhO0FBMkJuQixRQUFNLEVBM0JhO0FBNEJuQixRQUFNLEVBNUJhO0FBNkJuQixRQUFNLEVBN0JhO0FBOEJuQixRQUFNLEVBOUJhO0FBK0JuQixRQUFNLEVBL0JhO0FBZ0NuQixRQUFNLEVBaENhO0FBaUNuQixPQUFLLEVBakNjO0FBa0NuQixPQUFLLEVBbENjO0FBbUNuQixPQUFLLEVBbkNjO0FBb0NuQixPQUFLLEVBcENjO0FBcUNuQixPQUFLLEVBckNjO0FBc0NuQixPQUFLLEVBdENjO0FBdUNuQixPQUFLLEVBdkNjO0FBd0NuQixPQUFLLEVBeENjO0FBeUNuQixPQUFLLEVBekNjO0FBMENuQixPQUFLLEVBMUNjO0FBMkNuQixPQUFLLEVBM0NjO0FBNENuQixPQUFLLEVBNUNjO0FBNkNuQixPQUFLLEVBN0NjO0FBOENuQixPQUFLLEVBOUNjO0FBK0NuQixPQUFLLEVBL0NjO0FBZ0RuQixPQUFLLEVBaERjO0FBaURuQixPQUFLLEVBakRjO0FBa0RuQixPQUFLLEVBbERjO0FBbURuQixPQUFLLEVBbkRjO0FBb0RuQixPQUFLLEVBcERjO0FBcURuQixPQUFLLEVBckRjO0FBc0RuQixPQUFLLEVBdERjO0FBdURuQixPQUFLLEVBdkRjO0FBd0RuQixPQUFLLEVBeERjO0FBeURuQixPQUFLLEVBekRjO0FBMERuQixPQUFLLEVBMURjO0FBMkRuQixjQUFZLEVBM0RPO0FBNERuQixjQUFZLEVBNURPO0FBNkRuQixjQUFZLEVBN0RPO0FBOERuQixjQUFZLEVBOURPO0FBK0RuQixjQUFZLEdBL0RPO0FBZ0VuQixjQUFZLEdBaEVPO0FBaUVuQixjQUFZLEdBakVPO0FBa0VuQixjQUFZLEdBbEVPO0FBbUVuQixjQUFZLEdBbkVPO0FBb0VuQixjQUFZLEdBcEVPO0FBcUVuQixjQUFZLEdBckVPO0FBc0VuQixTQUFPLEdBdEVZO0FBdUVuQixlQUFhLEdBdkVNO0FBd0VuQixh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QVMsSUFBVCxHQUFnQjtBQUNkO0FBQ0EsT0FBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUcsTUFBbEIsRUFBeUIsRUFBRSxDQUEzQixFQUE4QjtBQUM1QixXQUFPLENBQVAsSUFBWSxJQUFJLE1BQUosRUFBWjtBQUNBLE1BQUUsS0FBRixDQUFRLFFBQVIsQ0FBaUIsT0FBTyxDQUFQLENBQWpCO0FBQ0EsV0FBTyxDQUFQLEVBQVUsQ0FBVixHQUFjLElBQUksR0FBbEI7QUFDRDtBQUNEO0FBQ0E7QUFDQSxTQUFPLEtBQVAsR0FBZSxFQUFmO0FBQ0Q7O0FBRUQsRUFBRSxLQUFGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7YnV0dG9uc30gZnJvbSAnLi9EaXNwbGF5T2JqZWN0LmpzJztcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gJy4vU3ByaXRlLmpzJztcclxuaW1wb3J0IHtzdGFnZX0gZnJvbSAnLi9TdGFnZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgU3ByaXRlIHtcclxuICBjb25zdHJ1Y3Rvcihzb3VyY2UsIHggPSAwLCB5ID0gMCkge1xyXG4gICAgc3VwZXIoc291cmNlLCB4LCB5KTtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbihzb3VyY2UseCx5KSB7XHJcbiAgbGV0IHNwcml0ZSA9IG5ldyBCdXR0b24oc291cmNlLHgseSk7XHJcbiAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICByZXR1cm4gc3ByaXRlO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnLi9FdmVudEVtaXR0ZXIuanMnO1xyXG5pbXBvcnQge21ha2VDYW52YXN9IGZyb20gJy4vdXRpbC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5T2JqZWN0IGV4dGVuZHMgRXZlbnRFbWl0dGVye1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIC8vICBwb3NpdGlvbiBhbmQgc2l6ZVxyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgICB0aGlzLmxhc3RYID0gMDtcclxuICAgIHRoaXMubGFzdFkgPSAwO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDA7XHJcblxyXG4gICAgLy8gcm90YXRpb24gYWxwaGEgdmlzaWJsZSBhbmQgc2NhbGUgcHJvcGVydGllc1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLmFscGhhID0gMTtcclxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnNjYWxlWCA9IDE7XHJcbiAgICB0aGlzLnNjYWxlWSA9IDE7XHJcblxyXG4gICAgLy8gIHBpdm90IGxldCB5b3Ugc2V0IHRoZSBzcHJpdGUncyBheGlzIG9mIHJvdGF0aW9uXHJcbiAgICB0aGlzLnBpdm90WCA9IDAuNTtcclxuICAgIHRoaXMucGl2b3RZID0gMC41O1xyXG5cclxuICAgIC8vIC8vIOeJqeeQhuebuOWFs1xyXG4gICAgLy8gdGhpcy52ZWwgPSB7eDogMCwgeTogMH07XHJcbiAgICAvLyB0aGlzLm1heFZlbCA9IHt4OjEwMCx5OjEwMH07XHJcbiAgICAvLyB0aGlzLmFjY2VsID0ge3g6IDAsIHk6IDB9O1xyXG4gICAgLy8gdGhpcy5mcmljdGlvbiA9IHt4OiAwLCB5OiAwfTtcclxuICAgIC8vIHRoaXMuZ3Jhdml0eUZhY3RvciA9IDE7XHJcblxyXG4gICAgLy8g5pi+56S65a655Zmo55u45YWzIFxyXG4gICAgdGhpcy5fbGF5ZXIgPSAwO1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gaW1hZ2Ugc3RhdGVzIGFuZCBhbmltYXRpb25cclxuICAgIHRoaXMuZnJhbWVzID0gW107XHJcbiAgICB0aGlzLl9jdXJyZW50RnJhbWUgPSAwO1xyXG5cclxuICAgIC8vIOaLluWKqFxyXG4gICAgdGhpcy5fZHJhZ2dhYmxlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMuX2NpcmN1bGFyID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5faW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldCBneCgpIHtcclxuICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMucGFyZW50Lmd4O1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gdGhpcy54O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGd5KCkge1xyXG4gICAgaWYgKHRoaXMucGFyZW50KVxyXG4gICAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5wYXJlbnQuZ3k7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF5ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XHJcbiAgfVxyXG4gIHNldCBsYXllcih2YWx1ZSkge1xyXG4gICAgdGhpcy5fbGF5ZXIgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4uc29ydCgoYSwgYikgPT4gYS5fbGF5ZXIgLSBiLl9sYXllcik7XHJcbiAgfVxyXG5cclxuICBhZGRDaGlsZChzcHJpdGUpIHtcclxuICAgIGlmIChzcHJpdGUucGFyZW50KVxyXG4gICAgICBzcHJpdGUucGFyZW50LnJlbW92ZUNoaWxkKHNwcml0ZSk7XHJcbiAgICBzcHJpdGUucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChzcHJpdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hpbGQoc3ByaXRlKSB7XHJcbiAgICBpZiAodGhpcy5oYXNDaGlsZChzcHJpdGUpKSB7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHRoaXMuY2hpbGRyZW4uaW5kZXhPZihzcHJpdGUpLCAxKTtcclxuICAgICAgc3ByaXRlLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3Ioc3ByaXRlICsgJ2lzIG5vdCBhIGNoaWxkIG9mJyArIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFzQ2hpbGQoc3ByaXRlKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuY2hpbGRyZW4uaW5kZXhPZihzcHJpdGUpICE9PSAtMSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFsZldpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggPj4gMTtcclxuICB9XHJcblxyXG4gIGdldCBoYWxmSGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0ID4+IDE7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiDnm7jlr7nkuo4gcGl2b3Qg5LiN5pivIDAuNSDnmoTkuK3lv4PngrlcclxuICBnZXQgY2VudGVyWCgpIHtcclxuICAgIHJldHVybiB0aGlzLnggKyB0aGlzLmhhbGZXaWR0aDtcclxuICB9XHJcblxyXG4gIGdldCBjZW50ZXJZKCkge1xyXG4gICAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGFsZkhlaWdodDtcclxuICB9XHJcbiAgZ2V0IGNlbnRlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHRoaXMuY2VudGVyWCxcclxuICAgICAgeTogdGhpcy5jZW50ZXJZXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdDZW50ZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wYXJlbnQpXHJcbiAgICAgIHJldHVybiB7eDp0aGlzLmNlbnRlclggKyB0aGlzLnBhcmVudC5neCxcclxuICAgICAgICAgICAgICB5OnRoaXMuY2VudGVyWSArIHRoaXMucGFyZW50Lmd5fTtcclxuICAgIGVsc2VcclxuICAgICAgcmV0dXJuIHRoaXMuY2VudGVyO1xyXG5cclxuICB9XHJcblxyXG4gIGdldCBwb3NpdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0IHBvc3Rpb24ocG9zKSB7XHJcbiAgICB0aGlzLnggPSBwb3MueDtcclxuICAgIHRoaXMueSA9IHBvcy55O1xyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2NhbGUoKSB7XHJcbiAgICByZXR1cm4ge3g6dGhpcy5zY2FsZVgsXHJcbiAgICAgICAgICAgIHk6dGhpcy5zY2FsZVl9O1xyXG4gIH1cclxuICBzZXQgc2NhbGUoc2NhbGUpIHtcclxuICAgIGlmKHNjYWxlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNjYWxlWCA9IHRoaXMuc2NhbGVZID0gc2NhbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbG9jYWxCb3VuZHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBnbG9iYWxCb3VuZHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiB0aGlzLmd4LFxyXG4gICAgICB5OiB0aGlzLmd5LFxyXG4gICAgICB3aWR0aDogdGhpcy5neCArIHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5neSArIHRoaXMuaGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRW1wdHkoKSB7XHJcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdXRDZW50ZXIoYiwgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XHJcbiAgICBsZXQgYSA9IHRoaXM7XHJcbiAgICBiLnggPSAoYS54ICsgYS5oYWxmV2lkdGggLSBiLmhhbGZXaWR0aCkgKyBvZmZzZXRYO1xyXG4gICAgYi55ID0gKGEueSArIGEuaGFsZkhlaWdodCAtIGIuaGFsZkhlaWdodCkgKyBvZmZzZXRZO1xyXG4gIH1cclxuXHJcbiAgcHV0VG9wKGIsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkge1xyXG4gICAgbGV0IGEgPSB0aGlzO1xyXG4gICAgYi54ID0gKGEueCArIGEuaGFsZldpZHRoIC0gYi5oYWxmV2lkdGgpICsgb2Zmc2V0WDtcclxuICAgIGIueSA9IChhLnkgLSBiLmhlaWdodCkgKyBvZmZzZXRZO1xyXG4gIH1cclxuXHJcbiAgcHV0UmlnaHQoYiwgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XHJcbiAgICBsZXQgYSA9IHRoaXM7XHJcbiAgICBiLnggPSAoYS54ICsgYS53aWR0aCkgKyBvZmZzZXRYO1xyXG4gICAgYi55ID0gKGEueSArIGEuaGFsZkhlaWdodCAtIGIuaGFsZkhlaWdodCkgKyBvZmZzZXRZO1xyXG4gIH1cclxuXHJcbiAgcHV0Qm90dG9tKGIsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkge1xyXG4gICAgbGV0IGEgPSB0aGlzO1xyXG4gICAgYi54ID0gKGEueCArIGEuaGFsZldpZHRoIC0gYi5oYWxmV2lkdGgpICsgb2Zmc2V0WDtcclxuICAgIGIueSA9IChhLnkgKyBhLmhlaWdodCkgKyBvZmZzZXRZO1xyXG4gIH1cclxuXHJcbiAgcHV0TGVmdChiLCBvZmZzZXRYID0gMCwgb2Zmc2V0WSA9IDApIHtcclxuICAgIGxldCBhID0gdGhpcztcclxuICAgIGIueCA9IChhLnggLSBiLndpZHRoKSArIG9mZnNldFg7XHJcbiAgICBiLnkgPSAoYS55ICsgYS5oYWxmSGVpZ2h0IC0gYi5oYWxmSGVpZ2h0KSArIG9mZnNldFk7XHJcbiAgfVxyXG5cclxuICBzd2FwQ2hpbGRyZW4oY2hpbGQxLCBjaGlsZDIpIHtcclxuICAgIGxldCBpbmRleDEgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQxKTtcclxuICAgIGxldCBpbmRleDIgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQyKTtcclxuICAgIGlmIChpbmRleDEgIT09IC0xICYmIGluZGV4MiAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5jaGlsZHJlbltpbmRleDFdID0gY2hpbGQyO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuW2luZGV4Ml0gPSBjaGlsZDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJvdGggb2JqZWN0cyBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIGNhbGxlciAke3RoaXN9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGQoLi4uc3ByaXRlcykge1xyXG4gICAgc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiB0aGlzLmFkZENoaWxkKHNwcml0ZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKC4uLnNwcml0ZXMpIHtcclxuICAgIHNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlOiAnICsgc3ByaXRlLmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKHNwcml0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50RnJhbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEZyYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNpcmN1bGFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NpcmN1bGFyO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNpcmN1bGFyKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRydWUgJiYgdGhpcy5fY2lyY3VsYXIgPT09IGZhbHNlKSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBkaWFtZXRlcjoge1xyXG4gICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaGVpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFkaXVzOiB7XHJcbiAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbGZXaWR0aDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXQodmxhdWUpIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaGVpZ2h0ID0gdmFsdWUgPDwgMTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fY2lyY3VsYXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UgJiYgdGhpcy5fY2lyY3VsYXIgPT09IHRydWUpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuZGlhbWV0ZXI7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnJhZGl1cztcclxuICAgICAgdGhpcy5fY2lyY3VsYXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5sZXQgY2FudmFzID0gIG1ha2VDYW52YXMoKTtcclxuaWYoY2FudmFzICYmIGNhbnZhcy5jdHgpIHtcclxuICBEaXNwbGF5T2JqZWN0LmhpdFRlc3RDYW52YXMgPSBjYW52YXM7XHJcbiAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IDE7XHJcbiAgLy8gY2FudmFzLndpZHRoID0gNTEyO1xyXG4gIC8vIGNhbnZhcy5oZWlnaHQgPSAyNTY7XHJcbn1cclxuXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBjb25zb2xlLmluZm8oJ0V2ZW50RW1pdHRlciAgY29uc3RydWN0aW5nJyk7XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuICB9XHJcblxyXG4gIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgdGhyb3cgXCJMaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcclxuXHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50XSB8fCBbXTtcclxuICAgIHRoaXMuX2xpc3RlbmVyc1tldmVudF0ucHVzaChsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICBlbWl0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnRdO1xyXG4gICAgaWYgKGxpc3RlbmVyKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsaXN0ZW5lcltpXS5jYWxsKHRoaXMsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYXNMaXN0ZW5lcihldmVudCwgbGlzdGVucikge1xyXG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudF07XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIWxpc3RlbnIgfHwgbGlzdGVuciA9PSBsaXN0ZW5lcnNbaV0pIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKVxyXG4gICAgICB0aHJvdyBcIkxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvblwiO1xyXG5cclxuXHJcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50XTtcclxuICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuX2xpc3RlbmVyc1tldmVudF0uaW5kZXhPZihsaXN0ZW5lcik7XHJcbiAgICBpZiAocG9zaXRpb24gIT0gLTEpXHJcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldmVudF0uc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xyXG4gICAgaWYoZXZlbnQpe1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZlbnRdID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi9EaXNwbGF5T2JqZWN0LmpzJztcclxuaW1wb3J0IHtcclxuICBzdGFnZVxyXG59IGZyb20gJy4vU3RhZ2UuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcbiAgY29uc3RydWN0b3IoLi4uc3ByaXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4gdGhpcy5hZGRDaGlsZChzcHJpdGUpKTtcclxuICB9XHJcblxyXG4gIGFkZENoaWxkKHNwcml0ZSkge1xyXG4gICAgc3VwZXIuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICAgIEdyb3VwLmNhbGN1bGF0ZVNpemUodGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDaGlsZChzcHJpdGUpIHtcclxuICAgIGlmIChzcHJpdGUucGFyZW50ID09PSB0aGlzKSB7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHRoaXMuY2hpbGRyZW4uaW5kZXhPZihzcHJpdGUpLCAxKTtcclxuICAgICAgR3JvdXAuY2FsY3VsYXRlU2l6ZSh0aGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzcHJpdGV9IGlzIG5vdCBhIGNoaWxkIG9mICR7dGhpc31gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjYWxjdWxhdGVTaXplKGdyb3VwKSB7XHJcbiAgICBpZiAoZ3JvdXAuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgbmV3V2lkdGggPSAwO1xyXG4gICAgICBsZXQgbmV3SGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgIGdyb3VwLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGlmIChjaGlsZC54ICsgY2hpbGQud2lkdGggPiBuZXdXaWR0aClcclxuICAgICAgICAgIG5ld1dpZHRoID0gY2hpbGQueCArIGNoaWxkLndpZHRoO1xyXG4gICAgICAgIGlmIChjaGlsZC55ICsgY2hpbGQuaGVpZ2h0ID4gbmV3SGVpZ2h0KVxyXG4gICAgICAgICAgbmV3SGVpZ2h0ID0gY2hpbGQueSArIGNoaWxkLmhlaWdodDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBncm91cC53aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICBncm91cC5oZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwKC4uLnNwcml0ZXMpIHtcclxuICBsZXQgc3ByaXRlID0gbmV3IEdyb3VwKC4uLnNwcml0ZXMpO1xyXG4gIHN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcbiAgcmV0dXJuIHNwcml0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyaWQoY29sdW1ucyA9IDAsIHJvd3MgPSAwLCBjZWxsV2lkdGggPSAzMiwgY2VsbEhlaWdodCA9IDMyLFxyXG4gIGNlbnRlckNlbGwgPSBmYWxzZSwgeE9mZnNldCA9IDAsIHlPZmZzZXQgPSAwLFxyXG4gIG1ha2VTcHJpdGUgPSB1bmRlZmluZWQsXHJcbiAgZXh0cmEgPSB1bmRlZmluZWQpIHtcclxuXHJcbiAgbGV0IGNvbnRhaW5lciA9IGdyb3VwKCk7XHJcblxyXG4gIGxldCBjcmVhdGVHcmlkID0gKCkgPT4ge1xyXG4gICAgbGV0IGxlbmd0aCA9IGNvbHVtbnMgKiByb3dzO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHggPSAoaSAlIGNvbHVtbnMpICogY2VsbFdpZHRoO1xyXG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHVtbnMpICogY2VsbEhlaWdodDtcclxuICAgICAgbGV0IHNwcml0ZSA9IG1ha2VTcHJpdGUoKTtcclxuXHJcbiAgICAgIGlmICghc3ByaXRlKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignZ3JpZCBtYWtlU3ByaXRlIHJldHVybjogJyArIHNwcml0ZSk7XHJcblxyXG4gICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3ByaXRlKTtcclxuXHJcbiAgICAgIGlmICghY2VudGVyQ2VsbCkge1xyXG4gICAgICAgIHNwcml0ZS54ID0geCArIHhPZmZzZXQ7XHJcbiAgICAgICAgc3ByaXRlLnkgPSB5ICsgeU9mZnNldDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzcHJpdGUueCA9IHggKyAoY2VsbFdpZHRoIC8gMikgLVxyXG4gICAgICAgICAgc3ByaXRlLmhhbGZXaWR0aCArIHhPZmZzZXQ7XHJcbiAgICAgICAgc3ByaXRlLnkgPSB5ICsgKGNlbGxIZWlnaHQgLyAyKSAtXHJcbiAgICAgICAgICBzcHJpdGUuaGFsZkhlaWdodCArIHlPZmZzZXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChleHRyYSkgZXh0cmEoc3ByaXRlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjcmVhdGVHcmlkKCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGNvbW1vbiBmcm9tICcuL2NvbW1vbi5qcyc7XHJcbmltcG9ydCB7bWFrZUNhbnZhc30gZnJvbSAnLi91dGlsLmpzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfUkVOREVSX1dJRFRIID0gNjQwO1xyXG5jb25zdCBERUZBVUxUX1JFTkRFUl9IRUlHSFQgPSA0ODA7XHJcblxyXG5leHBvcnQgbGV0IHJlbmRlcmVyID0gdW5kZWZpbmVkO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoID0gREVGQVVMVF9SRU5ERVJfV0lEVEgsIGhlaWdodCA9IERFRkFVTFRfUkVOREVSX0hFSUdIVCwgc3RhZ2UgPSB1bmRlZmluZWQpIHtcclxuICAgIGlmKHJlbmRlcmVyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3JlbmRlcmVyIGFscmVhZHkgaW5zdGFudGlhdGVkJyk7XHJcbiAgICAgIHJldHVybiByZW5kZXJlcjtcclxuICAgIH1cclxuICAgIHRoaXMuY2FudmFzID0gbWFrZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xyXG4gICAgcmVuZGVyZXIgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHJlbmRlcmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgfVxyXG5cclxuICBzZXQgYmFja2dyb3VuZENvbG9yKGNvbG9yKXtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xyXG4gICAgbGV0IGN0eCA9IGNhbnZhcy5jdHg7XHJcblxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhZ2Upe1xyXG4gICAgICB0aGlzLnN0YWdlLmNoaWxkcmVuLmZvckVhY2goc3ByaXRlID0+IHtcclxuICAgICAgICByZW5kZXIuY2FsbCh0aGlzLCBzcHJpdGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcihzcHJpdGUpIHtcclxuICBsZXQgY2FudmFzID0gdGhpcy5jYW52YXM7XHJcbiAgbGV0IGN0eCA9IGNhbnZhcy5jdHg7XHJcbiAgaWYgKHNwcml0ZS52aXNpYmxlICYmXHJcbiAgICAgIHNwcml0ZS5neCA8IGNhbnZhcy53aWR0aCArIHNwcml0ZS53aWR0aCAmJlxyXG4gICAgICBzcHJpdGUuZ3ggKyBzcHJpdGUud2lkdGggPj0gLXNwcml0ZS53aWR0aCAmJlxyXG4gICAgICBzcHJpdGUuZ3kgPCBjYW52YXMuaGVpZ2h0ICsgc3ByaXRlLmhlaWdodCAmJlxyXG4gICAgICBzcHJpdGUuZ3kgKyBzcHJpdGUuaGVpZ2h0ID49IC1zcHJpdGUuaGVpZ2h0KSB7XHJcblxyXG4gICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAvLyAvLyDlj5jmjaJcclxuICAgIGN0eC50cmFuc2xhdGUoXHJcbiAgICAgIHNwcml0ZS54ICsgKHNwcml0ZS53aWR0aCAqIHNwcml0ZS5waXZvdFgpLFxyXG4gICAgICBzcHJpdGUueSArIChzcHJpdGUuaGVpZ2h0ICogc3ByaXRlLnBpdm90WSlcclxuICAgICAgLy8gc3ByaXRlLngsXHJcbiAgICAgIC8vIHNwcml0ZS55XHJcbiAgICAgIC8vIDAsMFxyXG4gICAgKTtcclxuICAgIGN0eC5yb3RhdGUoc3ByaXRlLnJvdGF0aW9uKTtcclxuICAgIGN0eC5zY2FsZShzcHJpdGUuc2NhbGVYLCBzcHJpdGUuc2NhbGVZKTtcclxuICAgIC8vIGN0eC5zZXRUcmFuc2Zvcm0oc3ByaXRlLnNjYWxlWCwgMCwgMCwgc3ByaXRlLnNjYWxlWSwgc3ByaXRlLngsIHNwcml0ZS55KTtcclxuICAgIC8vIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgc3ByaXRlLngsIHNwcml0ZS55KTtcclxuXHJcbiAgICAvLyDmlYjmnpxcclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IHNwcml0ZS5hbHBoYSAqIHNwcml0ZS5wYXJlbnQuYWxwaGE7XHJcblxyXG4gICAgLy8gVE9ETzog5YW25LuW5pWI5p6cIC0tLSDpmLTlvbEg5re35ZCI5qih5byPXHJcblxyXG4gICAgaWYgKHNwcml0ZS5yZW5kZXIpIHNwcml0ZS5yZW5kZXIoY3R4KTtcclxuXHJcbiAgICBpZiAoc3ByaXRlLmNoaWxkcmVuICYmIHNwcml0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUoLXNwcml0ZS53aWR0aCAqIHNwcml0ZS5waXZvdFgsIC1zcHJpdGUuaGVpZ2h0ICogc3ByaXRlLnBpdm90WSk7XHJcbiAgICAgIC8vIGN0eC50cmFuc2xhdGUoLXNwcml0ZS5waXZvdFgsIC1zcHJpdGUucGl2b3RZKTtcclxuICAgICAgLy8gY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgc3ByaXRlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIHJlbmRlci5jYWxsKHRoaXMsIGNoaWxkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi9EaXNwbGF5T2JqZWN0LmpzJztcclxuaW1wb3J0IHtcclxuICBzdGFnZVxyXG59IGZyb20gJy4vU3RhZ2UuanMnO1xyXG5cclxuLy8gVE9ETzog55So5LiN5ZCM5pa55byP6YeN5pawIGNyZWF0ZSDml7Yg5Yig6Zmk5LiN5YaN5L2/55So55qE5bGe5oCnXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuICBjb25zdHJ1Y3Rvcihzb3VyY2UsIHggPSAwLCB5ID0gMCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgaWYoIXNvdXJjZSlcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFNwcml0ZSdzIHNvdXJjZTogJHtzb3VyY2V9YCk7XHJcblxyXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEltYWdlKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRnJvbUltYWdlKHNvdXJjZSk7XHJcbiAgICB9IGVsc2UgaWYgKHNvdXJjZS5mcmFtZSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUZyb21BdGxhcyhzb3VyY2UpO1xyXG4gICAgfSBlbHNlIGlmIChzb3VyY2UuaW1hZ2UgJiYgIXNvdXJjZS5kYXRhKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRnJvbVRpbGVzZXQoc291cmNlKTtcclxuICAgIH0gZWxzZSBpZiAoc291cmNlLmltYWdlICYmIHNvdXJjZS5kYXRhKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRnJvbVRpbGVzZXRGcmFtZXMoc291cmNlKTtcclxuICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgaWYgKHNvdXJjZVswXSAmJiBzb3VyY2VbMF0uc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVGcm9tQXRsYXNGcmFtZXMoc291cmNlKTtcclxuICAgICAgfSBlbHNlIGlmIChzb3VyY2VbMF0gaW5zdGFuY2VvZiBJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRnJvbUltYWdlcyhzb3VyY2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGltYWdlIHNvdXJjZXMgaW4gJHtzb3VyY2V9IGFyZSBub3QgcmVjb2duaXplZGApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBpbWFnZSBzb3VyY2UgJHtzb3VyY2V9IGlzIG5vdCByZWNvZ25pemVkYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGcm9tSW1hZ2Uoc291cmNlKSB7XHJcbiAgICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3NvdXJjZX0gaXMgbm90IGFuIGltYWdlIG9iamVjdGApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgIHRoaXMuc291cmNlWCA9IDA7XHJcbiAgICAgIHRoaXMuc291cmNlWSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBzb3VyY2Uud2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcclxuICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHNvdXJjZS53aWR0aDtcclxuICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRnJvbUF0bGFzKHNvdXJjZSkge1xyXG4gICAgdGhpcy50aWxlc2V0RnJhbWUgPSBzb3VyY2U7XHJcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMudGlsZXNldEZyYW1lLnNvdXJjZTtcclxuICAgIHRoaXMuc291cmNlWCA9IHRoaXMudGlsZXNldEZyYW1lLmZyYW1lLng7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLnRpbGVzZXRGcmFtZS5mcmFtZS55O1xyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuc291cmNlV2lkdGggPSB0aGlzLnRpbGVzZXRGcmFtZS5mcmFtZS53O1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNvdXJjZUhlaWdodCA9IHRoaXMudGlsZXNldEZyYW1lLmZyYW1lLmg7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGcm9tVGlsZXNldChzb3VyY2UpIHtcclxuICAgIGlmICghKHNvdXJjZS5pbWFnZSBpbnN0YW5jZW9mIEltYWdlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c291cmNlLmltYWdlfSBpcyBub3QgYW4gaW1hZ2Ugb2JqZWN0YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZS5pbWFnZTtcclxuICAgICAgdGhpcy5zb3VyY2VYID0gc291cmNlLng7XHJcbiAgICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZS55O1xyXG4gICAgICB0aGlzLndpZHRoID0gc291cmNlLndpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuc291cmNlV2lkdGggPSBzb3VyY2Uud2lkdGg7XHJcbiAgICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gc291cmNlLmhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUZyb21UaWxlc2V0RnJhbWVzKHNvdXJjZSkge1xyXG4gICAgaWYgKCEoc291cmNlLmltYWdlIGluc3RhbmNlb2YgSW1hZ2UpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzb3VyY2UuaW1hZ2V9IGlzIG5vdCBhbiBpbWFnZSBvYmplY3RgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlLmltYWdlO1xyXG4gICAgICB0aGlzLmZyYW1lcyA9IHNvdXJjZS5kYXRhO1xyXG5cclxuICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbMF1bMF07XHJcbiAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzWzBdWzFdO1xyXG4gICAgICB0aGlzLndpZHRoID0gc291cmNlLndpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuc291cmNlV2lkdGggPSBzb3VyY2Uud2lkdGg7XHJcbiAgICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gc291cmNlLmhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUZyb21BdGxhc0ZyYW1lcyhzb3VyY2UpIHtcclxuICAgIHRoaXMuZnJhbWVzID0gc291cmNlO1xyXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VbMF0uc291cmNlO1xyXG4gICAgdGhpcy5zb3VyY2VYID0gc291cmNlWzBdLmZyYW1lLng7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VbMF0uZnJhbWUueTtcclxuICAgIHRoaXMud2lkdGggPSBzb3VyY2VbMF0uZnJhbWUudztcclxuICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlWzBdLmZyYW1lLmg7XHJcbiAgICB0aGlzLnNvdXJjZVdpZHRoID0gc291cmNlWzBdLmZyYW1lLnc7XHJcbiAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHNvdXJjZVswXS5mcmFtZS5oO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRnJvbUltYWdlcyhzb3VyY2UpIHtcclxuICAgIHRoaXMuZnJhbWVzID0gc291cmNlO1xyXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VbMF07XHJcbiAgICB0aGlzLnNvdXJjZVggPSAwO1xyXG4gICAgdGhpcy5zb3VyY2VZID0gMDtcclxuICAgIHRoaXMud2lkdGggPSBzb3VyY2VbMF0ud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IHNvdXJjZVswXS53aWR0aDtcclxuICAgIHRoaXMuc291cmNlV2lkdGggPSBzb3VyY2VbMF0ud2lkdGg7XHJcbiAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHNvdXJjZVswXS5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnb3RvQW5kU3RvcChmcmFtZU51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuZnJhbWVzLmxlbmd0aCA+IDAgJiYgZnJhbWVOdW1iZXIgPCB0aGlzLmZyYW1lcy5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuZnJhbWVzWzBdIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1tmcmFtZU51bWJlcl1bMF07XHJcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdWzFdO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlWCA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZS54O1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZS55O1xyXG4gICAgICAgIHRoaXMuc291cmNlV2lkdGggPSB0aGlzLmZyYW1lc1tmcmFtZU51bWJlcl0uZnJhbWUudztcclxuICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZS5oO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdO1xyXG4gICAgICAgIHRoaXMuc291cmNlWCA9IDA7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gMDtcclxuICAgICAgICB0aGlzLnNvdXJjZVdpZHRoID0gdGhpcy5zb3VyY2Uud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSB0aGlzLnNvdXJjZS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY3VycmVudEZyYW1lID0gZnJhbWVOdW1iZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZyYW1lIG51bWJlciAke2ZyYW1lTnVtYmVyfSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGN0eCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5zb3VyY2UsXHJcbiAgICAgIHRoaXMuc291cmNlWCwgdGhpcy5zb3VyY2VZLFxyXG4gICAgICB0aGlzLnNvdXJjZVdpZHRoLCB0aGlzLnNvdXJjZUhlaWdodCxcclxuICAgICAgLXRoaXMud2lkdGggKiB0aGlzLnBpdm90WCwgLXRoaXMuaGVpZ2h0ICogdGhpcy5waXZvdFksXHJcbiAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyYW1lKHNvdXJjZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgbGV0IG8gPSB7fTtcclxuICAgIG8uaW1hZ2UgPSBzb3VyY2U7XHJcbiAgICBvLnggPSB4O1xyXG4gICAgby55ID0geTtcclxuICAgIG8ud2lkdGggPSB3aWR0aDtcclxuICAgIG8uaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIG87XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJhbWVzKHNvdXJjZSwgYXJyYXlPZlBvc2l0aW9ucywgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgbGV0IG8gPSB7fTtcclxuICAgIG8uaW1hZ2UgPSBzb3VyY2U7XHJcbiAgICBvLmRhdGEgPSBhcnJheU9mUG9zaXRpb25zO1xyXG4gICAgby53aWR0aCA9IHdpZHRoO1xyXG4gICAgby5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gbztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmaWxtc3RyaXAoaW1hZ2UsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBzcGFjaW5nID0gMCkge1xyXG4gICAgaWYgKCEoaW1hZ2UgaW5zdGFuY2VvZiBJbWFnZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2ltYWdlfSBpcyBub3QgYW4gaW1hZ2Ugb2JqZWN0YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcG9zaXRpb25zID0gW107XHJcbiAgICAgIGxldCBjb2x1bW5zID0gaW1hZ2Uud2lkdGggLyBmcmFtZVdpZHRoLFxyXG4gICAgICAgIHJvd3MgPSBpbWFnZS5oZWlnaHQgLyBmcmFtZUhlaWdodDtcclxuICAgICAgbGV0IG51bWJlck9mRnJhbWVzID0gY29sdW1ucyAqIHJvd3M7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRnJhbWVzOyArK2kpIHtcclxuICAgICAgICBsZXQgaXggPSAoaSAlIGNvbHVtbnMpO1xyXG4gICAgICAgIGxldCBpeSA9IE1hdGguZmxvb3IoaSAvIGNvbHVtbnMpO1xyXG4gICAgICAgIGxldCB4ID0gaXggKiBmcmFtZVdpZHRoLFxyXG4gICAgICAgICAgeSA9IGl5ICogZnJhbWVIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChzcGFjaW5nICYmIHNwYWNpbmcgPiAwKSB7XHJcbiAgICAgICAgICB4ICs9IHNwYWNpbmcgKyAoc3BhY2luZyAqIGl4KTtcclxuICAgICAgICAgIHkgKz0gc3BhY2luZyArIChzcGFjaW5nICogaXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3NpdGlvbnMucHVzaChbeCwgeV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBTcHJpdGUuZnJhbWVzKGltYWdlLCBwb3NpdGlvbnMsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRTdGF0ZVBsYXllcihzcHJpdGUpIHtcclxuICAgIGxldCBmcmFtZUNvdW50ZXIgPSAwLFxyXG4gICAgICBudW1iZXJPZkZyYW1lcyA9IDAsXHJcbiAgICAgIHN0YXJ0RnJhbWUgPSAwLFxyXG4gICAgICBlbmRGcmFtZSA9IDAsXHJcbiAgICAgIHRpbWVySW50ZXJ2YWwgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvdyhmcmFtZU51bWJlcikge1xyXG4gICAgICByZXNldCgpO1xyXG4gICAgICBzcHJpdGUuZ290b0FuZFN0b3AoZnJhbWVOdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXkoKSB7XHJcbiAgICAgIGlmICghc3ByaXRlLnBsYXlpbmcpIHtcclxuICAgICAgICBwbGF5U2VxdWVuY2UoWzAsIHNwcml0ZS5mcmFtZXMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgICAgaWYgKHNwcml0ZS5wbGF5aW5nKSB7XHJcbiAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICBzcHJpdGUuZ290QW5kU3RvcChzcHJpdGUuY3VycmVudEZyYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXlTZXF1ZW5jZShzZXF1ZW5jZUFycmF5KSB7XHJcbiAgICAgIHJlc2V0KCk7XHJcbiAgICAgIHN0YXJ0RnJhbWUgPSBzZXF1ZW5jZUFycmF5WzBdO1xyXG4gICAgICBlbmRGcmFtZSA9IHNlcXVlbmNlQXJyYXlbMV07XHJcbiAgICAgIG51bWJlck9mRnJhbWVzID0gZW5kRnJhbWUgLSBzdGFydEZyYW1lO1xyXG4gICAgICBpZiAoc3RhcnRGcmFtZSA9PT0gMCkge1xyXG4gICAgICAgIG51bWJlck9mRnJhbWVzKys7XHJcbiAgICAgICAgZnJhbWVDb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bWJlck9mRnJhbWVzID09PSAxKSB7XHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXMgPSAyO1xyXG4gICAgICAgIGZyYW1lQ291bnRlcisrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXNwcml0ZS5mcHMpIHNwcml0ZS5mcHMgPSAxMjtcclxuICAgICAgbGV0IGZyYW1lUmF0ZSA9IDEwMDAgLyBzcHJpdGUuZnBzO1xyXG4gICAgICBzcHJpdGUuZ290b0FuZFN0b3Aoc3RhcnRGcmFtZSk7XHJcblxyXG4gICAgICBpZiAoIXNwcml0ZS5wbGF5aW5nKSB7XHJcbiAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKGFkdmFuY2VGcmFtZS5iaW5kKHRoaXMpLCBmcmFtZVJhdGUpO1xyXG4gICAgICAgIHNwcml0ZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkdmFuY2VGcmFtZSggKSB7XHJcbiAgICAgIGlmKGZyYW1lQ291bnRlciA8IG51bWJlck9mRnJhbWVzKXtcclxuICAgICAgICBzcHJpdGUuZ290b0FuZFN0b3Aoc3ByaXRlLmN1cnJlbnRGcmFtZSsxKTtcclxuICAgICAgICBmcmFtZUNvdW50ZXIrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZihzcHJpdGUubG9vcCl7XHJcbiAgICAgICAgICBzcHJpdGUuZ290b0FuZFN0b3Aoc3RhcnRGcmFtZSk7XHJcbiAgICAgICAgICBmcmFtZUNvdW50ZXIgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0KCApIHtcclxuICAgICAgaWYodGltZXJJbnRlcnZhbCAhPT0gdW5kZWZpbmVkICYmIHNwcml0ZS5wbGF5aW5nID09PSB0cnVlKXtcclxuICAgICAgICBzcHJpdGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZyYW1lQ291bnRlciA9MDtcclxuICAgICAgICBzdGFydEZyYW1lID0gMDtcclxuICAgICAgICBlbmRGcmFtZSA9MDtcclxuICAgICAgICBudW1iZXJPZkZyYW1lcyA9MDtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3ByaXRlLmxvb3AgPSB0cnVlO1xyXG4gICAgc3ByaXRlLnBsYXlpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBzcHJpdGUuc2hvdyA9IHNob3c7XHJcbiAgICBzcHJpdGUucGxheSA9IHBsYXk7XHJcbiAgICBzcHJpdGUuc3RvcCA9IHN0b3A7XHJcbiAgICBzcHJpdGUucGxheVNlcXVlbmNlID0gcGxheVNlcXVlbmNlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcHJpdGUoc291cmNlLCB4LCB5KSB7XHJcbiAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUoc291cmNlLCB4LCB5KTtcclxuICBpZiAoc3ByaXRlLmZyYW1lcy5sZW5ndGggPiAwKSBTcHJpdGUuYWRkU3RhdGVQbGF5ZXIoc3ByaXRlKTtcclxuICBzdGFnZS5hZGRDaGlsZChzcHJpdGUpO1xyXG4gIHJldHVybiBzcHJpdGU7XHJcbn1cclxuIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi9EaXNwbGF5T2JqZWN0LmpzJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGR0KSB7XHJcbiAgaWYgKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goc3ByaXRlID0+IHtcclxuICAgICAgaWYoc3ByaXRlICYmIHNwcml0ZS51cGRhdGUpXHJcbiAgICAgICAgc3ByaXRlLnVwZGF0ZShkdCk7XHJcbiAgICAgIHVwZGF0ZS5jYWxsKHNwcml0ZSwgZHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTdGFnZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgdXBkYXRlLmNhbGwodGhpcyxkdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHN0YWdlID0gbmV3IFN0YWdlKCk7XHJcbiIsImltcG9ydCBEaXNwbGF5T2JqZWN0IGZyb20gJy4vRGlzcGxheU9iamVjdC5qcyc7XHJcbmltcG9ydCB7XHJcbiAgc3RhZ2VcclxufSBmcm9tICcuL1N0YWdlLmpzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQgPSAnSGVsbG8hJyxcclxuICAgIGZvbnQgPSAnMTZweCBzYW5zLXNlcmlmJywgZmlsbFN0eWxlID0gJ3JlZCcsXHJcbiAgICB4ID0gMCwgeSA9IDApIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMuZm9udCA9IGZvbnQ7XHJcbiAgICB0aGlzLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIHRoaXMudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICB0aGlzLnN0cm9rZVRleHQgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY3R4KSB7XHJcbiAgICBjdHguZm9udCA9IHRoaXMuZm9udDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlU3R5bGU7XHJcbiAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGU7XHJcblxyXG4gICAgaWYgKHRoaXMud2lkdGggPT09IDApIHRoaXMud2lkdGggPSBjdHgubWVhc3VyZVRleHQodGhpcy5jb250ZW50KS53aWR0aDtcclxuICAgIGlmICh0aGlzLmhlaWdodCA9PT0gMCkgdGhpcy5oZWlnaHQgPSBjdHgubWVhc3VyZVRleHQoXCJNXCIpLndpZHRoO1xyXG4gICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy53aWR0aCAqIHRoaXMucGl2b3RYLCAtdGhpcy5oZWlnaHQgKiB0aGlzLnBpdm90WSk7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gdGhpcy50ZXh0QmFzZWxpbmU7XHJcbiAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgMCwgMFxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLnN0cm9rZVRleHQgIT09IFwibm9uZVwiKSBjdHguc3Ryb2tlVGV4dCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRleHQoY29udGVudCwgZm9udCwgZmlsbFN0eWxlLCB4LCB5KSB7XHJcbiAgbGV0IHNwcml0ZSA9IG5ldyBUZXh0KGNvbnRlbnQsIGZvbnQsIGZpbGxTdHlsZSwgeCwgeSk7XHJcbiAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICByZXR1cm4gc3ByaXRlO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBhc3NldHMgZnJvbSAnLi9hc3NldHMuanMnO1xyXG5pbXBvcnQgKiBhcyBFdmVudEVtaXR0ZXIgZnJvbSAnLi9FdmVudEVtaXR0ZXIuanMnO1xyXG5pbXBvcnQgKiBhcyBEaXNwbGF5T2JqZWN0IGZyb20gJy4vRGlzcGxheU9iamVjdC5qcyc7XHJcbmltcG9ydCAqIGFzIFNwcml0ZSBmcm9tICcuL1Nwcml0ZS5qcyc7XHJcbmltcG9ydCAqIGFzIFN0YWdlIGZyb20gJy4vU3RhZ2UuanMnO1xyXG5pbXBvcnQgKiBhcyBHcm91cCBmcm9tICcuL0dyb3VwLmpzJztcclxuaW1wb3J0ICogYXMgZ3JhcGhpY2FsIGZyb20gJy4vZ3JhcGhpY2FsLmpzJztcclxuaW1wb3J0ICogYXMgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG5pbXBvcnQgKiBhcyBCdXR0b24gZnJvbSAnLi9CdXR0b24uanMnO1xyXG5pbXBvcnQgKiBhcyBpbnRlcmFjdGl2ZSBmcm9tICcuL2ludGVyYWN0aXZlLmpzJztcclxuaW1wb3J0ICogYXMgaW5wdXQgZnJvbSAnLi9pbnB1dC5qcyc7XHJcbmltcG9ydCAqIGFzIGNvbGxpc2lvbiBmcm9tICcuL2NvbGxpc2lvbi5qcyc7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcclxuLy9pbXBvcnQgKiBhcyBzb3VuZCBmcm9tICcuL3NvdW5kLmpzJztcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vUmVuZGVyZXIuanMnO1xyXG5cclxuY29uc3QgREVGQVVMVF9XSURUSCA9IDY0MDtcclxuY29uc3QgREVGQVVMVF9IRUlHSFQgPSA0ODA7XHJcblxyXG5jb25zdCBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IgPSAnIzJDMzUzOSc7XHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluYSB7XHJcbiAgY29uc3RydWN0b3Iod2lkdGggPSBERUZBVUxUX1dJRFRILCBoZWlnaHQgPSBERUZBVUxUX0hFSUdIVCxcclxuICAgICAgICAgICAgICBzZXR1cCwgYXNzZXRzVG9Mb2FkLCBsb2FkKSB7XHJcbiAgICBPYmplY3QuYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbihkZXN0ID0ge30sIHNvdXJjZSkge1xyXG4gICAgICAgIGlmICghc291cmNlKSByZXR1cm4gZGVzdDtcclxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHNvdXJjZSkge1xyXG4gICAgICAgICAgZGVzdFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICAgIH07XHJcbiAgICAvLyDlr7zlhaXmiYDmnInmqKHlnZdcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgYXNzZXRzKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgRXZlbnRFbWl0dGVyKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgRGlzcGxheU9iamVjdCk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIFNwcml0ZSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIFN0YWdlKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgR3JvdXApO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBncmFwaGljYWwpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBUZXh0KTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgQnV0dG9uKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW50ZXJhY3RpdmUpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbnB1dCk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbGxpc2lvbik7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHV0aWwpO1xyXG4gICAgLy9PYmplY3QuYXNzaWduKHRoaXMsIHNvdW5kKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHdpZHRoLCBoZWlnaHQsIHRoaXMuc3RhZ2UpO1xyXG4gICAgdGhpcy5zdGFnZS53aWR0aCA9IHRoaXMucmVuZGVyZXIuY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5zdGFnZS5oZWlnaHQgPSB0aGlzLnJlbmRlcmVyLmNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5wb2ludGVyID0gdGhpcy5tYWtlUG9pbnRlcih0aGlzLnJlbmRlcmVyLmNhbnZhcyk7XHJcbiAgICB0aGlzLnNjYWxlID0gMTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMubG9hZCA9IGxvYWQ7XHJcbiAgICB0aGlzLnNldHVwID0gc2V0dXA7XHJcblxyXG4gICAgdGhpcy5hc3NldHNUb0xvYWQgPSBhc3NldHNUb0xvYWQ7XHJcblxyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBmb3IgZ2FtZSBsb29wXHJcbiAgICB0aGlzLl9mcHMgPSAzNjtcclxuICAgIHRoaXMuX21wZiA9IDEwMDAgLyB0aGlzLl9mcHM7XHJcbiAgICB0aGlzLl9wcmV2aW91c1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fZWxhcHNlZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5fbGFnVGltZSA9IDA7XHJcbiAgICB0aGlzLl9sYWdPZmZzZXQgPSAwO1xyXG4gICAgdGhpcy5fY29ycmVjdFRpbWUgPSAxMDAwO1xyXG4gICAgdGhpcy5fc2hvdWxkUmVwYWludCA9IHRydWU7XHJcbiAgICBcclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLnNldHVwKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BsZWFzZSBzdXBwbHkgdGhlIHNldHVwIGZ1bmN0aW9uIGluIHRoZSBjb25zdHJ1Y3RvcicpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGZwcyhmcHMpIHtcclxuICAgIHRoaXMuX2ZwcyA9IGZwcztcclxuICAgIHRoaXMuX21wZiA9IDEwMDAgLyBmcHM7XHJcbiAgfVxyXG4gIGdldCBmcHMoKXtcclxuICAgIHJldHVybiB0aGlzLl9mcHM7XHJcbiAgfVxyXG5cclxuICBnZXQgbXBmKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21wZjtcclxuICB9XHJcblxyXG4gIGdhbWVMb29wKGR0KSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpKTtcclxuICAgIC8vIGlmKHRoaXMucGF1c2VkKXJldHVybjtcclxuXHJcbiAgICB0aGlzLl9lbGFwc2VkVGltZSA9IGR0IC0gdGhpcy5fcHJldmlvdXNUaW1lO1xyXG4gICAgdGhpcy5fcHJldmlvdXNUaW1lID0gZHQ7XHJcbiAgICBpZih0aGlzLl9lbGFwc2VkVGltZSA+IHRoaXMuX2NvcnJlY3RUaW1lKVxyXG4gICAgICB0aGlzLl9lbGFwc2VkVGltZSA9IHRoaXMuX21wZjtcclxuICAgIHRoaXMuX2xhZ1RpbWUgKz0gdGhpcy5fZWxhcHNlZFRpbWU7XHJcbiAgICBcclxuICAgIHdoaWxlKCh0aGlzLl9sYWdUaW1lID49IHRoaXMuX21wZikpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZScpO1xyXG4gICAgICAvLyBVcGRhdGUgYWxsIHRoZSBidXR0b25zXHJcblxyXG4gICAgICAvLyBUT0RPOiDljZXni6znmoTmjInpkq7mm7TmlrDpopHnjocs5pS55Y+Y5LiA57uEKOS4pOS4qinmjInpkq7nirbmgIHlkI4s5LiN5YaNaei/m+ihjOajgOa1i1xyXG4gICAgICAvLyBUT0RPOiDmlL7lhaXliLDlnLrmma91cGRhdGXph4zvvIzkuI3lho3lnKjov5nph4zlpITnkIZcclxuICAgICAgdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XHJcbiAgICAgIGlmICh0aGlzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICBidXR0b24udXBkYXRlKHRoaXMucG9pbnRlciwgdGhpcy5yZW5kZXJlci5jYW52YXMpO1xyXG4gICAgICAgICAgaWYgKGJ1dHRvbi5zdGF0ZSA9PT0gXCJvdmVyXCIgfHwgYnV0dG9uLnN0YXRlID09PSBcImRvd25cIikge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLnBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVE9ETzogVXBkYXRlIGFsbCB0aGUgcGFydGljbGVzXHJcbiAgICAgIC8vIFRPRE86IFVwZGF0ZSBhbGwgdGhlIHR3ZWVuc1xyXG5cclxuICAgICAgLy8gVE9ETzog5pS+5YWl5Yiw5Zy65pmvdXBkYXRl6YeM77yM5LiN5YaN5Zyo6L+Z6YeM5aSE55CGXHJcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZVNwcml0ZXMpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIudXBkYXRlRHJhZ0FuZERyb3AodGhpcy5kcmFnZ2FibGVTcHJpdGVzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgIC8vICAgLy8gdGhpcy5zdGF0ZShkdCk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgdGhpcy5zdGFnZS51cGRhdGUoZHQpO1xyXG5cclxuICAgICAgLy8gVXBkYXRlXHJcbiAgICAgIC8vIHRoaXMuc3RhZ2UudXBkYXRlKCk7XHJcblxyXG5cclxuICAgICAgdGhpcy5fbGFnVGltZSAtPSB0aGlzLl9tcGY7XHJcbiAgICAgIC8vIFJlbmRlclxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbGFnT2Zmc2V0ID0gdGhpcy5fbGFnVGltZSAvIHRoaXMuX21wZjtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuYXNzZXRzVG9Mb2FkKSB7XHJcbiAgICAgIHRoaXMuYXNzZXRzLmxvYWQodGhpcy5hc3NldHNUb0xvYWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOi1hOa6kOWKoOi9veaXtuaJp+ihjFxyXG4gICAgICBpZiAodGhpcy5sb2FkKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMubG9hZDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2FtZUxvb3AoMCk7XHJcbiAgfVxyXG5cclxuICBwYXVzZSgpIHtcclxuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gXHJcbiAgLy8gc2NhbGVUb1dpbmRvdyhiYWNrZ3JvdW5kQ29sb3IgPSBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdzY2FsZVRvV2luZG93Jyk7XHJcbiAgLy8gICBsZXQgc2NhbGVYLCBzY2FsZVksIHNjYWxlLCBjZW50ZXI7XHJcbiAgICBcclxuICAvLyAgIC8vMS4gU2NhbGUgdGhlIGNhbnZhcyB0byB0aGUgY29ycmVjdCBzaXplXHJcbiAgLy8gICAvL0ZpZ3VyZSBvdXQgdGhlIHNjYWxlIGFtb3VudCBvbiBlYWNoIGF4aXNcclxuICAvLyAgIHNjYWxlWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gdGhpcy5yZW5kZXJlci5jYW52YXMud2lkdGg7XHJcbiAgLy8gICBzY2FsZVkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyB0aGlzLnJlbmRlcmVyLmNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gIC8vICAgLy9TY2FsZSB0aGUgY2FudmFzIGJhc2VkIG9uIHdoaWNoZXZlciB2YWx1ZSBpcyBsZXNzOiBgc2NhbGVYYCBvciBgc2NhbGVZYFxyXG4gIC8vICAgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XHJcbiAgLy8gICB0aGlzLnJlbmRlcmVyLmNhbnZhcy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIjAgMFwiO1xyXG4gIC8vICAgdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZShcIiArIHNjYWxlICsgXCIpXCI7XHJcblxyXG4gIC8vICAgLy8yLiBDZW50ZXIgdGhlIGNhbnZhcy5cclxuICAvLyAgIC8vRGVjaWRlIHdoZXRoZXIgdG8gY2VudGVyIHRoZSBjYW52YXMgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXHJcbiAgLy8gICAvL1dpZGUgY2FudmFzZXMgc2hvdWxkIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHksIGFuZCBcclxuICAvLyAgIC8vc3F1YXJlIG9yIHRhbGwgY2FudmFzZXMgc2hvdWxkIGJlIGNlbnRlcmVkIGhvcml6b250YWxseVxyXG5cclxuICAvLyAgIGlmICh0aGlzLnJlbmRlcmVyLmNhbnZhcy53aWR0aCA+IHRoaXMucmVuZGVyZXIuY2FudmFzLmhlaWdodCkge1xyXG4gIC8vICAgICBjZW50ZXIgPSBcInZlcnRpY2FsbHlcIjtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGNlbnRlciA9IFwiaG9yaXpvbnRhbGx5XCI7XHJcbiAgLy8gICB9XHJcbiAgICBcclxuICAvLyAgIC8vQ2VudGVyIGhvcml6b250YWxseSAoZm9yIHNxdWFyZSBvciB0YWxsIGNhbnZhc2VzKVxyXG4gIC8vICAgaWYgKGNlbnRlciA9PT0gXCJob3Jpem9udGFsbHlcIikge1xyXG4gIC8vICAgICBsZXQgbWFyZ2luID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5yZW5kZXJlci5jYW52YXMud2lkdGggKiBzY2FsZVkpIC8gMjtcclxuICAvLyAgICAgdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbiArIFwicHhcIjtcclxuICAvLyAgICAgdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUubWFyZ2luUmlnaHQgPSBtYXJnaW4gKyBcInB4XCI7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgLy9DZW50ZXIgdmVydGljYWxseSAoZm9yIHdpZGUgY2FudmFzZXMpIFxyXG4gIC8vICAgaWYgKGNlbnRlciA9PT0gXCJ2ZXJ0aWNhbGx5XCIpIHtcclxuICAvLyAgICAgbGV0IG1hcmdpbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLnJlbmRlcmVyLmNhbnZhcy5oZWlnaHQgKiBzY2FsZVgpIC8gMjtcclxuICAvLyAgICAgdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUubWFyZ2luVG9wID0gbWFyZ2luICsgXCJweFwiO1xyXG4gIC8vICAgICB0aGlzLnJlbmRlcmVyLmNhbnZhcy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBtYXJnaW4gKyBcInB4XCI7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgLy8zLiBSZW1vdmUgYW55IHBhZGRpbmcgZnJvbSB0aGUgY2FudmFzIGFuZCBzZXQgdGhlIGNhbnZhc1xyXG4gIC8vICAgLy9kaXNwbGF5IHN0eWxlIHRvIFwiYmxvY2tcIlxyXG4gIC8vICAgLy8gdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUucGFkZGluZ0xlZnQgPSAwO1xyXG4gIC8vICAgLy8gdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUucGFkZGluZ1JpZ2h0ID0gMDtcclxuICAvLyAgIHRoaXMucmVuZGVyZXIuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBcclxuICAvLyAgIC8vNC4gU2V0IHRoZSBjb2xvciBvZiB0aGUgSFRNTCBib2R5IGJhY2tncm91bmRcclxuICAvLyAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgXHJcbiAgLy8gICAvLzUuIFNldCB0aGUgZ2FtZSBlbmdpbmUgYW5kIHBvaW50ZXIgdG8gdGhlIGNvcnJlY3Qgc2NhbGUuIFxyXG4gIC8vICAgLy9UaGlzIGlzIGltcG9ydGFudCBmb3IgY29ycmVjdCBoaXQgdGVzdGluZyBiZXR3ZWVuIHRoZSBwb2ludGVyIGFuZCBzcHJpdGVzXHJcbiAgLy8gICB0aGlzLnBvaW50ZXIuc2NhbGUgPSBzY2FsZTtcclxuICAvLyAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuXHJcbiAgLy8gICAvL0ZpeCBzb21lIHF1aXJraW5lc3MgaW4gc2NhbGluZyBmb3IgU2FmYXJpXHJcbiAgLy8gICAvKlxyXG4gIC8vICAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7IFxyXG4gIC8vICAgICBpZiAodWEuaW5kZXhPZignc2FmYXJpJykgIT0gLTEpIHsgXHJcbiAgLy8gICAgIGlmICh1YS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XHJcbiAgLy8gICAgIC8vIENocm9tZVxyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAvLyBTYWZhcmlcclxuICAvLyAgICAgdGhpcy5yZW5kZXJlci5jYW52YXMuc3R5bGUubWF4SGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgLy8gICAgIHRoaXMucmVuZGVyZXIuY2FudmFzLnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwJVwiO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICovXHJcbiAgLy8gICB0aGlzLnN0YWdlLndpZHRoID0gdGhpcy5yZW5kZXJlci5jYW52YXMud2lkdGg7XHJcbiAgLy8gICB0aGlzLnN0YWdlLmhlaWdodCA9IHRoaXMucmVuZGVyZXIuY2FudmFzLmhlaWdodDtcclxuICAvLyB9XHJcblxyXG4gIHNjYWxlVG9XaW5kb3coY2FudmFzPXRoaXMucmVuZGVyZXIuY2FudmFzLCBiYWNrZ3JvdW5kQ29sb3IpIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3IgfHwgXCIjMkMzNTM5XCI7XHJcbiAgICBsZXQgc2NhbGVYLCBzY2FsZVksIHNjYWxlLCBjZW50ZXI7XHJcbiAgICBcclxuICAgIC8vMS4gU2NhbGUgdGhlIGNhbnZhcyB0byB0aGUgY29ycmVjdCBzaXplXHJcbiAgICAvL0ZpZ3VyZSBvdXQgdGhlIHNjYWxlIGFtb3VudCBvbiBlYWNoIGF4aXNcclxuICAgIHNjYWxlWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzLndpZHRoO1xyXG4gICAgc2NhbGVZID0gd2luZG93LmlubmVySGVpZ2h0IC8gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAvL1NjYWxlIHRoZSBjYW52YXMgYmFzZWQgb24gd2hpY2hldmVyIHZhbHVlIGlzIGxlc3M6IGBzY2FsZVhgIG9yIGBzY2FsZVlgXHJcbiAgICBzY2FsZSA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcclxuICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIjAgMFwiO1xyXG4gICAgY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoXCIgKyBzY2FsZSArIFwiKVwiO1xyXG5cclxuICAgIC8vMi4gQ2VudGVyIHRoZSBjYW52YXMuXHJcbiAgICAvL0RlY2lkZSB3aGV0aGVyIHRvIGNlbnRlciB0aGUgY2FudmFzIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxyXG4gICAgLy9XaWRlIGNhbnZhc2VzIHNob3VsZCBiZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5LCBhbmQgXHJcbiAgICAvL3NxdWFyZSBvciB0YWxsIGNhbnZhc2VzIHNob3VsZCBiZSBjZW50ZXJlZCBob3Jpem9udGFsbHlcclxuICAgIGlmIChjYW52YXMud2lkdGggPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIGlmIChjYW52YXMud2lkdGggKiBzY2FsZSA8IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcbiAgICAgICAgY2VudGVyID0gXCJob3Jpem9udGFsbHlcIjtcclxuICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgY2VudGVyID0gXCJ2ZXJ0aWNhbGx5XCI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjYW52YXMuaGVpZ2h0ICogc2NhbGUgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICBjZW50ZXIgPSBcInZlcnRpY2FsbHlcIjtcclxuICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgY2VudGVyID0gXCJob3Jpem9udGFsbHlcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0NlbnRlciBob3Jpem9udGFsbHkgKGZvciBzcXVhcmUgb3IgdGFsbCBjYW52YXNlcylcclxuICAgIGxldCBtYXJnaW47XHJcbiAgICBpZiAoY2VudGVyID09PSBcImhvcml6b250YWxseVwiKSB7XHJcbiAgICAgIG1hcmdpbiA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIGNhbnZhcy53aWR0aCAqIHNjYWxlKSAvIDI7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS5tYXJnaW5MZWZ0ID0gbWFyZ2luICsgXCJweFwiO1xyXG4gICAgICBjYW52YXMuc3R5bGUubWFyZ2luUmlnaHQgPSBtYXJnaW4gKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DZW50ZXIgdmVydGljYWxseSAoZm9yIHdpZGUgY2FudmFzZXMpIFxyXG4gICAgaWYgKGNlbnRlciA9PT0gXCJ2ZXJ0aWNhbGx5XCIpIHtcclxuICAgICAgbWFyZ2luID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGNhbnZhcy5oZWlnaHQgKiBzY2FsZSkgLyAyO1xyXG4gICAgICBjYW52YXMuc3R5bGUubWFyZ2luVG9wID0gbWFyZ2luICsgXCJweFwiO1xyXG4gICAgICBjYW52YXMuc3R5bGUubWFyZ2luQm90dG9tID0gbWFyZ2luICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vMy4gUmVtb3ZlIGFueSBwYWRkaW5nIGZyb20gdGhlIGNhbnZhcyAgYW5kIGJvZHkgYW5kIHNldCB0aGUgY2FudmFzXHJcbiAgICAvL2Rpc3BsYXkgc3R5bGUgdG8gXCJibG9ja1wiXHJcbiAgICBjYW52YXMuc3R5bGUucGFkZGluZ0xlZnQgPSAwO1xyXG4gICAgY2FudmFzLnN0eWxlLnBhZGRpbmdSaWdodCA9IDA7XHJcbiAgICBjYW52YXMuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgICBjYW52YXMuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIFxyXG4gICAgLy80LiBTZXQgdGhlIGNvbG9yIG9mIHRoZSBIVE1MIGJvZHkgYmFja2dyb3VuZFxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGhpcy5wb2ludGVyLnNjYWxlID0gc2NhbGU7XHJcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XHJcbiAgICBcclxuICAgIC8vRml4IHNvbWUgcXVpcmtpbmVzcyBpbiBzY2FsaW5nIGZvciBTYWZhcmlcclxuICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsgXHJcbiAgICBpZiAodWEuaW5kZXhPZihcInNhZmFyaVwiKSAhPSAtMSkgeyBcclxuICAgICAgaWYgKHVhLmluZGV4T2YoXCJjaHJvbWVcIikgPiAtMSkge1xyXG4gICAgICAgIC8vIENocm9tZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNhZmFyaVxyXG4gICAgICAgIGNhbnZhcy5zdHlsZS5tYXhIZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICBjYW52YXMuc3R5bGUubWluSGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLzUuIFJldHVybiB0aGUgYHNjYWxlYCB2YWx1ZS4gVGhpcyBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgeW91J2xsIG5lZSB0aGlzIHZhbHVlIFxyXG4gICAgLy9mb3IgY29ycmVjdCBoaXQgdGVzdGluZyBiZXR3ZWVuIHRoZSBwb2ludGVyIGFuZCBzcHJpdGVzXHJcblx0Y29uc29sZS5sb2coJ3NjYWxlOiAnK3NjYWxlKVxyXG4gICAgcmV0dXJuIHNjYWxlO1xyXG4gIH07XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGluYSh3aWR0aCA9IERFRkFVTFRfV0lEVEgsIGhlaWdodCA9IERFRkFVTFRfSEVJR0hULFxyXG4gIHNldHVwLCBhc3NldHNUb0xvYWQsIGxvYWQpIHtcclxuICByZXR1cm4gbmV3IFRpbmEod2lkdGgsIGhlaWdodCwgc2V0dXAsIGFzc2V0c1RvTG9hZCwgbG9hZCk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uLmpzJztcclxuLy9pbXBvcnQge21ha2VTb3VuZH0gZnJvbSAnLi9zb3VuZC5qcyc7XHJcblxyXG5leHBvcnQgbGV0IGFzc2V0cyA9IHtcclxuICB0b0xvYWQ6IDAsXHJcbiAgbG9hZGVkOiAwLFxyXG5cclxuICBpbWFnZUV4dGVuc2lvbnM6IFsncG5nJywgJ2pwZycsICdnaWYnXSxcclxuICBmb250RXh0ZW5zaW9uczogWyd0dGYnLCAnb3RmJywgJ3R0YycsICd3b2ZmJ10sXHJcbiAganNvbkV4dGVuc2lvbnM6IFsnanNvbiddLFxyXG4gIGF1ZGlvRXh0ZW5zaW9uczogWydtcDMnLCAnb2dnJywgJ3dhdicsICd3ZWJtJ10sXHJcblxyXG4gIC8vIFRPRE86IOaPkOekuui9veWFpeeahOaWh+S7tuWQjeWtl1xyXG4gIGxvYWQ6IGZ1bmN0aW9uKHNvdXJjZXMgPSBbXSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBsZXQgbG9hZEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQrKztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvYWRlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMudG9Mb2FkID09PSB0aGlzLmxvYWRlZCkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkZWQgPSB0aGlzLnRvTG9hZCA9IDA7XHJcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ0Fzc2V0cyBmaW5pc2hlZCBsb2FkaW5nJyk7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXNvdXJjZXMgfHwgc291cmNlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignbm8gYXNzZXRzIG5lZWQgdG8gbG9hZCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmluZm8oJ0xvYWRpbmcgYXNzZXRzLi4uJyk7XHJcblxyXG4gICAgICB0aGlzLnRvTG9hZCA9IHNvdXJjZXMubGVuZ3RoO1xyXG4gICAgICBzb3VyY2VzLmZvckVhY2goc291cmNlID0+IHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9uID0gc291cmNlLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgICAgLy8gTG9hZCBpbWFnZXNcclxuICAgICAgICBpZiAodGhpcy5pbWFnZUV4dGVuc2lvbnMuaGFzKGV4dGVuc2lvbikpIHtcclxuICAgICAgICAgIHRoaXMubG9hZEltYWdlKHNvdXJjZSwgbG9hZEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMb2FkIGZvbnRzIFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9udEV4dGVuc2lvbnMuaGFzKGV4dGVuc2lvbikpIHtcclxuICAgICAgICAgIHRoaXMubG9hZEZvbnQoc291cmNlLCBsb2FkSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvYWQgSlNPTiBmaWxlcyAgXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5qc29uRXh0ZW5zaW9ucy5oYXMoZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkSnNvbihzb3VyY2UsIGxvYWRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTG9hZCBhdWRpbyBmaWxlcyAgXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hdWRpb0V4dGVuc2lvbnMuaGFzKGV4dGVuc2lvbikpIHtcclxuICAgICAgICAgIHRoaXMubG9hZFNvdW5kKHNvdXJjZSwgbG9hZEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEaXNwbGF5IGEgbWVzc2FnZSBpZiBhIGZpbGUgdHlwZSBpc24ndCByZWNvZ25pemVkXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgdHlwZSBub3QgcmVjb2duaXplZDogXCIgKyBzb3VyY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBsb2FkSW1hZ2U6IGZ1bmN0aW9uKHNvdXJjZSwgbG9hZEhhbmRsZXIpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB0aGlzW3NvdXJjZV0gPSBpbWFnZTtcclxuICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICB9LFxyXG5cclxuICBsb2FkRm9udDogZnVuY3Rpb24oc291cmNlLCBsb2FkSGFuZGxlcikge1xyXG4gICAgbGV0IGZvbnRGYW1pbHkgPSBzb3VyY2Uuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpWzBdO1xyXG4gICAgbGV0IG5ld1N0eWxlID0gJCRuZXcoJ3N0eWxlJyk7XHJcbiAgICBsZXQgZm9udEZhY2UgPSBcIkBmb250LWZhY2Uge2ZvbnQtZmFtaWx5OiAnXCIgKyBmb250RmFtaWx5ICtcclxuICAgICAgXCInOyBzcmM6IHVybCgnXCIgKyBzb3VyY2UgKyBcIicpO31cIjtcclxuICAgIG5ld1N0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZvbnRGYWNlKSk7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5ld1N0eWxlKTtcclxuICAgIGxvYWRIYW5kbGVyKCk7XHJcbiAgfSxcclxuXHJcbiAgbG9hZEpzb246IGZ1bmN0aW9uKHNvdXJjZSwgbG9hZEhhbmRsZXIpIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCBzb3VyY2UsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcclxuICAgIHhoci5vbmxvYWQgPSBldmVudCA9PiB7XHJcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBsZXQgZmlsZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgZmlsZS5uYW1lID0gc291cmNlO1xyXG4gICAgICAgIHRoaXNbZmlsZS5uYW1lXSA9IGZpbGU7XHJcbiAgICAgICAgaWYgKGZpbGUuZnJhbWVzKVxyXG4gICAgICAgICAgdGhpcy5jcmVhdGVUaWxlc2V0RnJhbWVzKGZpbGUsIHNvdXJjZSwgbG9hZEhhbmRsZXIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGxvYWRIYW5kbGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIuc2VuZCgpO1xyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZVRpbGVzZXRGcmFtZXM6IGZ1bmN0aW9uKGZpbGUsIHNvdXJjZSwgbG9hZEhhbmRsZXIpIHtcclxuICAgIGxldCBiYXNlVXJsID0gc291cmNlLnJlcGxhY2UoL1teXFwvXSokLywgJycpO1xyXG4gICAgbGV0IGltYWdlU291cmNlID0gYmFzZVVybCArIGZpbGUubWV0YS5pbWFnZTtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IGltYWdlTG9hZEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXNbaW1hZ2VTb3VyY2VdID0gaW1hZ2U7XHJcbiAgICAgIF8ua2V5cyhmaWxlLmZyYW1lcykuZm9yRWFjaChmcmFtZSA9PiB7XHJcbiAgICAgICAgdGhpc1tmcmFtZV0gPSBmaWxlLmZyYW1lc1tmcmFtZV07XHJcbiAgICAgICAgdGhpc1tmcmFtZV0uc291cmNlID0gaW1hZ2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsb2FkSGFuZGxlcigpO1xyXG4gICAgfTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbWFnZUxvYWRIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcclxuICB9LFxyXG5cclxuICBsb2FkU291bmQ6IGZ1bmN0aW9uKHNvdXJjZSwgbG9hZEhhbmRsZXIpIHtcclxuICAgIC8vbGV0IHNvdW5kID0gbWFrZVNvdW5kKHNvdXJjZSxsb2FkSGFuZGxlcik7XHJcbiAgICAvL3NvdW5kLm5hbWUgPSBzb3VyY2U7XHJcbiAgICAvL3RoaXNbc291bmQubmFtZV0gPSBzb3VuZDtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0UG9pbnQocG9pbnQsIHNwcml0ZSkge1xyXG4gIGxldCBzaGFwZSwgbGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCB2eCwgdnksIG1hZ25pdHVkZSwgaGl0O1xyXG5cclxuICBpZiAoc3ByaXRlLnJhZGl1cykge1xyXG4gICAgc2hhcGUgPSAnY2lyY2xlJztcclxuICB9IGVsc2Uge1xyXG4gICAgc2hhcGUgPSAncmVjdGFuZ2xlJztcclxuICB9XHJcblxyXG4gIGlmIChzaGFwZSA9PT0gJ3JlY3RhbmdsZScpIHtcclxuICAgIGxlZnQgPSBzcHJpdGUuZ3g7XHJcbiAgICByaWdodCA9IHNwcml0ZS5neCArIHNwcml0ZS53aWR0aDtcclxuICAgIHRvcCA9IHNwcml0ZS5neTtcclxuICAgIGJvdHRvbSA9IHNwcml0ZS5neSArIHNwcml0ZS5oZWlnaHQ7XHJcbiAgICBoaXQgPSBwb2ludC54ID4gbGVmdCAmJiBwb2ludC54IDwgcmlnaHQgJiYgcG9pbnQueSA+IHRvcCAmJiBwb2ludC55IDwgYm90dG9tO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNoYXBlID09PSAnY2lyY2xlJykge1xyXG4gICAgdnggPSBwb2ludC54IC0gc3ByaXRlLmNlbnRlclg7XHJcbiAgICB2eSA9IHBvaW50LnkgLSBzcHJpdGUuY2VudGVyWTtcclxuICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcbiAgICBoaXQgPSBtYWduaXR1ZGUgPCBzcHJpdGUucmFkaXVzO1xyXG4gIH1cclxuICByZXR1cm4gaGl0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdENpcmNsZShjMSwgYzIsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgbGV0IHZ4LCB2eSwgbWFnbml0dWRlLCBjb21iaW5lZFJhZGlpLCBoaXQ7XHJcblxyXG4gIGlmIChnbG9iYWwpIHtcclxuICAgIHZ4ID0gKGMyLmd4ICsgYzIucmFkaXVzKSAtIChjMS5neCArIGMxLnJhZGl1cyk7XHJcbiAgICB2eSA9IChjMi5neSArIGMyLnJhZGl1cykgLSAoYzEuZ3kgKyBjMS5yYWRpdXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2eCA9IGMyLmNlbnRlclggLSBjMS5jZW50ZXJYO1xyXG4gICAgdnkgPSBjMi5jZW50ZXJZIC0gYzEuY2VudGVyWTtcclxuICB9XHJcblxyXG4gIG1hZ25pdHVkZSA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcbiAgY29tYmluZWRSYWRpaSA9IGMxLnJhZGl1cyArIGMyLnJhZGl1cztcclxuICBoaXQgPSBtYWduaXR1ZGUgPCBjb21iaW5lZFJhZGlpO1xyXG5cclxuICByZXR1cm4gaGl0O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNvbGxpc2lvbihjMSwgYzIsIGJvdW5jZSA9IGZhbHNlLCBnbG9iYWwgPSBmYWxzZSkge1xyXG4gIGxldCBtYWduaXR1ZGUsIGNvbWJpbmVkUmFkaWksIG92ZXJsYXAsXHJcbiAgICB2eCwgdnksIGR4LCBkeSwgcyA9IHt9LFxyXG4gICAgaGl0ID0gZmFsc2U7XHJcblxyXG4gIGlmIChnbG9iYWwpIHtcclxuICAgIHZ4ID0gKGMyLmd4ICsgYzIucmFkaXVzKSAtIChjMS5neCArIGMxLnJhZGl1cyk7XHJcbiAgICB2eSA9IChjMi5neSArIGMyLnJhZGl1cykgLSAoYzEuZ3kgKyBjMS5yYWRpdXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2eCA9IGMyLmNlbnRlclggLSBjMS5jZW50ZXJYO1xyXG4gICAgdnkgPSBjMi5jZW50ZXJZIC0gYzEuY2VudGVyWTtcclxuICB9XHJcblxyXG4gIG1hZ25pdHVkZSA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcbiAgY29tYmluZWRSYWRpaSA9IGMxLnJhZGl1cyArIGMyLnJhZGl1cztcclxuXHJcbiAgaWYgKG1hZ25pdHVkZSA8IGNvbWJpbmVkUmFkaWkpIHtcclxuICAgIGhpdCA9IHRydWU7XHJcbiAgICBvdmVybGFwID0gY29tYmluZWRSYWRpaSAtIG1hZ25pdHVkZTtcclxuICAgIGxldCBxdWFudHVtUGFkZGluZyA9IDAuMztcclxuICAgIG92ZXJsYXAgKz0gcXVhbnR1bVBhZGRpbmc7XHJcblxyXG4gICAgZHggPSB2eCAvIG1hZ25pdHVkZTtcclxuICAgIGR5ID0gdnkgLyBtYWduaXR1ZGU7XHJcbiAgICBjMS54IC09IG92ZXJsYXAgKiBkeDtcclxuICAgIGMxLnkgLT0gb3ZlcmxhcCAqIGR5O1xyXG5cclxuICAgIGlmIChib3VuY2UpIHtcclxuICAgICAgcy54ID0gdnk7XHJcbiAgICAgIHMueSA9IC12eDtcclxuICAgICAgYm91bmNlT2ZmU3VyZmFjZShjMSwgcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBoaXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZpbmdDaXJjbGVDb2xsaXNpb24oYzEsIGMyLCBnbG9iYWwgPSBmYWxzZSkge1xyXG4gIGxldCBjb21iaW5lZFJhZGlpLCBvdmVybGFwLCB4U2lkZSwgeVNpZGUsXHJcbiAgICBzID0ge30sXHJcbiAgICBwMUEgPSB7fSxcclxuICAgIHAxQiA9IHt9LFxyXG4gICAgcDJBID0ge30sXHJcbiAgICBwMkIgPSB7fSxcclxuICAgIGhpdCA9IGZhbHNlO1xyXG5cclxuICBjMS5tYXNzID0gYzEubWFzcyB8fCAxO1xyXG4gIGMyLm1hc3MgPSBjMi5tYXNzIHx8IDE7XHJcblxyXG4gIGlmIChnbG9iYWwpIHtcclxuICAgIHMudnggPSAoYzIuZ3ggKyBjMi5yYWRpdXMpIC0gKGMxLmd4ICsgYzEucmFkaXVzKTtcclxuICAgIHMudnkgPSAoYzIuZ3kgKyBjMi5yYWRpdXMpIC0gKGMxLmd5ICsgYzEucmFkaXVzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcy52eCA9IGMyLmNlbnRlclggLSBjMS5jZW50ZXJYO1xyXG4gICAgcy52eSA9IGMyLmNlbnRlclkgLSBjMS5jZW50ZXJZO1xyXG4gIH1cclxuXHJcbiAgcy5tYWduaXR1ZGUgPSBNYXRoLnNxcnQocy52eCAqIHMudnggKyBzLnZ5ICogcy52eSk7XHJcbiAgY29tYmluZWRSYWRpaSA9IGMxLnJhZGl1cyArIGMyLnJhZGl1cztcclxuXHJcbiAgaWYgKHMubWFnbml0dWRlIDwgY29tYmluZWRSYWRpaSkge1xyXG4gICAgaGl0ID0gdHJ1ZTtcclxuXHJcbiAgICBvdmVybGFwID0gY29tYmluZWRSYWRpaSAtIHMubWFnbml0dWRlO1xyXG5cclxuICAgIG92ZXJsYXAgKz0gMC4zO1xyXG5cclxuICAgIHMuZHggPSBzLnZ4IC8gcy5tYWduaXR1ZGU7XHJcbiAgICBzLmR5ID0gcy52eSAvIHMubWFnbml0dWRlO1xyXG5cclxuICAgIHMudnhIYWxmID0gTWF0aC5hYnMocy5keCAqIG92ZXJsYXAgLyAyKTtcclxuICAgIHMudnlIYWxmID0gTWF0aC5hYnMocy5keSAqIG92ZXJsYXAgLyAyKTtcclxuXHJcbiAgICAoYzEueCA+IGMyLngpID8geFNpZGUgPSAxOiB4U2lkZSA9IC0xO1xyXG4gICAgKGMxLnkgPiBjMi55KSA/IHlTaWRlID0gMTogeVNpZGUgPSAtMTtcclxuXHJcbiAgICBjMS54ID0gYzEueCArIChzLnZ4SGFsZiAqIHhTaWRlKTtcclxuICAgIGMxLnkgPSBjMS55ICsgKHMudnlIYWxmICogeVNpZGUpO1xyXG5cclxuICAgIGMyLnggPSBjMi54ICsgKHMudnhIYWxmICogLXhTaWRlKTtcclxuICAgIGMyLnkgPSBjMi55ICsgKHMudnlIYWxmICogLXlTaWRlKTtcclxuXHJcbiAgICBzLmx4ID0gcy52eTtcclxuICAgIHMubHkgPSAtcy52eDtcclxuXHJcbiAgICBsZXQgZHAxID0gYzEudnggKiBzLmR4ICsgYzEudnkgKiBzLmR5O1xyXG5cclxuICAgIHAxQS54ID0gZHAxICogcy5keDtcclxuICAgIHAxQS55ID0gZHAxICogcy5keTtcclxuXHJcbiAgICBsZXQgZHAyID0gYzEudnggKiAocy5seCAvIHMubWFnbml0dWRlKSArIGMxLnZ5ICogKHMubHkgLyBzLm1hZ25pdHVkZSk7XHJcblxyXG4gICAgcDFCLnggPSBkcDIgKiAocy5seCAvIHMubWFnbml0dWRlKTtcclxuICAgIHAxQi55ID0gZHAyICogKHMubHkgLyBzLm1hZ25pdHVkZSk7XHJcblxyXG4gICAgbGV0IGRwMyA9IGMyLnZ4ICogcy5keCArIGMyLnZ5ICogcy5keTtcclxuXHJcbiAgICBwMkEueCA9IGRwMyAqIHMuZHg7XHJcbiAgICBwMkEueSA9IGRwMyAqIHMuZHk7XHJcblxyXG4gICAgbGV0IGRwNCA9IGMyLnZ4ICogKHMubHggLyBzLm1hZ25pdHVkZSkgKyBjMi52eSAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICAgIHAyQi54ID0gZHA0ICogKHMubHggLyBzLm1hZ25pdHVkZSk7XHJcbiAgICBwMkIueSA9IGRwNCAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICAgIGMxLmJvdW5jZSA9IHt9O1xyXG4gICAgYzEuYm91bmNlLnggPSBwMUIueCArIHAyQS54O1xyXG4gICAgYzEuYm91bmNlLnkgPSBwMUIueSArIHAyQS55O1xyXG5cclxuICAgIGMyLmJvdW5jZSA9IHt9O1xyXG4gICAgYzIuYm91bmNlLnggPSBwMUEueCArIHAyQi54O1xyXG4gICAgYzIuYm91bmNlLnkgPSBwMUEueSArIHAyQi55O1xyXG5cclxuICAgIGMxLnZ4ID0gYzEuYm91bmNlLnggLyBjMS5tYXNzO1xyXG4gICAgYzEudnkgPSBjMS5ib3VuY2UueSAvIGMxLm1hc3M7XHJcbiAgICBjMi52eCA9IGMyLmJvdW5jZS54IC8gYzIubWFzcztcclxuICAgIGMyLnZ5ID0gYzIuYm91bmNlLnkgLyBjMi5tYXNzO1xyXG4gIH1cclxuICByZXR1cm4gaGl0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVDaXJjbGVDb2xsaXNpb24oYXJyYXlPZkNpcmNsZXMsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9mQ2lyY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGMxID0gYXJyYXlPZkNpcmNsZXNbaV07XHJcbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhcnJheU9mQ2lyY2xlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICBsZXQgYzIgPSBhcnJheU9mQ2lyY2xlc1tqXTtcclxuICAgICAgbW92aW5nQ2lyY2xlQ29sbGlzaW9uKGMxLCBjMiwgZ2xvYmFsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0UmVjdGFuZ2xlKHIxLCByMiwgZ2xvYmFsID0gZmFsc2UpIHtcclxuICBsZXQgaGl0LCBjb21iaW5lZEhhbGZXaWR0aHMsIGNvbWJpbmVkSGFsZkhlaWdodHMsIHZ4LCB2eTtcclxuICBoaXQgPSBmYWxzZTtcclxuXHJcbiAgaWYgKGdsb2JhbCkge1xyXG4gICAgdnggPSAocjEuZ3ggKyByMS5oYWxmV2lkdGgpIC0gKHIyLmd4ICsgcjIuaGFsZldpZHRoKTtcclxuICAgIHZ5ID0gKHIxLmd5ICsgcjEuaGFsZkhlaWdodCkgLSAocjIuZ3kgKyByMi5oYWxmSGVpZ2h0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdnggPSByMS5jZW50ZXJYIC0gcjIuY2VudGVyWDtcclxuICAgIHZ5ID0gcjEuY2VudGVyWSAtIHIyLmNlbnRlclk7XHJcbiAgfVxyXG5cclxuICBjb21iaW5lZEhhbGZXaWR0aHMgPSByMS5oYWxmV2lkdGggKyByMi5oYWxmV2lkdGg7XHJcbiAgY29tYmluZWRIYWxmSGVpZ2h0cyA9IHIxLmhhbGZIZWlnaHQgKyByMi5oYWxmSGVpZ2h0O1xyXG5cclxuICBpZiAoTWF0aC5hYnModngpIDwgY29tYmluZWRIYWxmV2lkdGhzKSB7XHJcbiAgICBpZiAoTWF0aC5hYnModnkpIDwgY29tYmluZWRIYWxmSGVpZ2h0cykge1xyXG4gICAgICBoaXQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGl0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGhpdCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGhpdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZUNvbGxpc2lvbihyMSwgcjIsIGJvdW5jZSA9IGZhbHNlLCBnbG9iYWwgPSB0cnVlKSB7XHJcbiAgbGV0IGNvbGxpc2lvbiwgY29tYmluZWRIYWxmV2lkdGhzLCBjb21iaW5lZEhhbGZIZWlnaHRzLFxyXG4gICAgb3ZlcmxhcFgsIG92ZXJsYXBZLCB2eCwgdnk7XHJcblxyXG4gIGlmIChnbG9iYWwpIHtcclxuICAgIHZ4ID0gKHIxLmd4ICsgcjEuaGFsZldpZHRoKSAtIChyMi5neCArIHIyLmhhbGZXaWR0aCk7XHJcbiAgICB2eSA9IChyMS5neSArIHIxLmhhbGZIZWlnaHQpIC0gKHIyLmd5ICsgcjIuaGFsZkhlaWdodCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZ4ID0gcjEuY2VudGVyWCAtIHIyLmNlbnRlclg7XHJcbiAgICB2eSA9IHIxLmNlbnRlclkgLSByMi5jZW50ZXJZO1xyXG4gIH1cclxuXHJcbiAgY29tYmluZWRIYWxmV2lkdGhzID0gcjEuaGFsZldpZHRoICsgcjIuaGFsZldpZHRoO1xyXG4gIGNvbWJpbmVkSGFsZkhlaWdodHMgPSByMS5oYWxmSGVpZ2h0ICsgcjIuaGFsZkhlaWdodDtcclxuXHJcbiAgaWYgKE1hdGguYWJzKHZ4KSA8IGNvbWJpbmVkSGFsZldpZHRocykge1xyXG4gICAgaWYgKE1hdGguYWJzKHZ5KSA8IGNvbWJpbmVkSGFsZkhlaWdodHMpIHtcclxuICAgICAgb3ZlcmxhcFggPSBjb21iaW5lZEhhbGZXaWR0aHMgLSBNYXRoLmFicyh2eCk7XHJcbiAgICAgIG92ZXJsYXBZID0gY29tYmluZWRIYWxmSGVpZ2h0cyAtIE1hdGguYWJzKHZ5KTtcclxuXHJcbiAgICAgIGlmIChvdmVybGFwWCA+PSBvdmVybGFwWSkge1xyXG4gICAgICAgIGlmICh2eSA+IDApIHtcclxuICAgICAgICAgIGNvbGxpc2lvbiA9IFwidG9wXCI7XHJcbiAgICAgICAgICByMS55ID0gcjEueSArIG92ZXJsYXBZO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb2xsaXNpb24gPSBcImJvdHRvbVwiO1xyXG4gICAgICAgICAgcjEueSA9IHIxLnkgLSBvdmVybGFwWTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib3VuY2UpIHtcclxuICAgICAgICAgIHIxLnZ5ICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodnggPiAwKSB7XHJcbiAgICAgICAgICBjb2xsaXNpb24gPSBcImxlZnRcIjtcclxuICAgICAgICAgIHIxLnggPSByMS54ICsgb3ZlcmxhcFg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbGxpc2lvbiA9IFwicmlnaHRcIjtcclxuICAgICAgICAgIHIxLnggPSByMS54IC0gb3ZlcmxhcFg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYm91bmNlKSB7XHJcbiAgICAgICAgICByMS52eCAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vTm8gY29sbGlzaW9uXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vTm8gY29sbGlzaW9uXHJcbiAgfVxyXG4gIC8vIOi/lOWbnueisOaSnuaWueWQkSB0b3AgfCByaWdodCB8IGJvdHRvbSB8IGxlZnRcclxuICByZXR1cm4gY29sbGlzaW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdENpcmNsZVJlY3RhbmdsZShjMSwgcjEsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgbGV0IHJlZ2lvbiwgY29sbGlzaW9uLCBjMXgsIGMxeSwgcjF4LCByMXk7XHJcblxyXG4gIGlmIChnbG9iYWwpIHtcclxuICAgIGMxeCA9IGMxLmd4O1xyXG4gICAgYzF5ID0gYzEuZ3k7XHJcbiAgICByMXggPSByMS5neDtcclxuICAgIHIxeSA9IHIxLmd5O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjMXggPSBjMS54O1xyXG4gICAgYzF5ID0gYzEueTtcclxuICAgIHIxeCA9IHIxLng7XHJcbiAgICByMXkgPSByMS55O1xyXG4gIH1cclxuXHJcbiAgaWYgKGMxeSA8IHIxeSAtIHIxLmhhbGZIZWlnaHQpIHtcclxuICAgIGlmIChjMXggPCByMXggLSAxIC0gcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgIHJlZ2lvbiA9IFwidG9wTGVmdFwiO1xyXG4gICAgfSBlbHNlIGlmIChjMXggPiByMXggKyAxICsgcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgIHJlZ2lvbiA9IFwidG9wUmlnaHRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlZ2lvbiA9IFwidG9wTWlkZGxlXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChjMXkgPiByMXkgKyByMS5oYWxmSGVpZ2h0KSB7XHJcbiAgICBpZiAoYzF4IDwgcjF4IC0gMSAtIHIxLmhhbGZXaWR0aCkge1xyXG4gICAgICByZWdpb24gPSBcImJvdHRvbUxlZnRcIjtcclxuICAgIH0gZWxzZSBpZiAoYzF4ID4gcjF4ICsgMSArIHIxLmhhbGZXaWR0aCkge1xyXG4gICAgICByZWdpb24gPSBcImJvdHRvbVJpZ2h0XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWdpb24gPSBcImJvdHRvbU1pZGRsZVwiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoYzF4IDwgcjF4IC0gcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgIHJlZ2lvbiA9IFwibGVmdE1pZGRsZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVnaW9uID0gXCJyaWdodE1pZGRsZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHJlZ2lvbiA9PT0gXCJ0b3BNaWRkbGVcIiB8fCByZWdpb24gPT09IFwiYm90dG9tTWlkZGxlXCIgfHxcclxuICAgICAgcmVnaW9uID09PSBcImxlZnRNaWRkbGVcIiB8fCByZWdpb24gPT09IFwicmlnaHRNaWRkbGVcIikge1xyXG4gICAgY29sbGlzaW9uID0gaGl0VGVzdFJlY3RhbmdsZShjMSwgcjEsIGdsb2JhbCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBwb2ludCA9IHt9O1xyXG5cclxuICAgIHN3aXRjaCAocmVnaW9uKSB7XHJcbiAgICBjYXNlIFwidG9wTGVmdFwiOlxyXG4gICAgICBwb2ludC54ID0gcjF4O1xyXG4gICAgICBwb2ludC55ID0gcjF5O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJ0b3BSaWdodFwiOlxyXG4gICAgICBwb2ludC54ID0gcjF4ICsgcjEud2lkdGg7XHJcbiAgICAgIHBvaW50LnkgPSByMXk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImJvdHRvbUxlZnRcIjpcclxuICAgICAgcG9pbnQueCA9IHIxeDtcclxuICAgICAgcG9pbnQueSA9IHIxeSArIHIxLmhlaWdodDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiYm90dG9tUmlnaHRcIjpcclxuICAgICAgcG9pbnQueCA9IHIxeCArIHIxLndpZHRoO1xyXG4gICAgICBwb2ludC55ID0gcjF5ICsgcjEuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbiA9IGhpdFRlc3RDaXJjbGVQb2ludChjMSwgcG9pbnQsIGdsb2JhbCk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29sbGlzaW9uKSB7XHJcbiAgICByZXR1cm4gcmVnaW9uO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gY29sbGlzaW9uO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0Q2lyY2xlUG9pbnQoYzEsIHBvaW50LCBnbG9iYWwgPSBmYWxzZSkge1xyXG4gIHBvaW50LmRpYW1ldGVyID0gMTtcclxuICBwb2ludC5yYWRpdXMgPSAwLjU7XHJcbiAgcG9pbnQuY2VudGVyWCA9IHBvaW50Lng7XHJcbiAgcG9pbnQuY2VudGVyWSA9IHBvaW50Lnk7XHJcbiAgcG9pbnQuZ3ggPSBwb2ludC54O1xyXG4gIHBvaW50Lmd5ID0gcG9pbnQueTtcclxuICByZXR1cm4gaGl0VGVzdENpcmNsZShjMSwgcG9pbnQsIGdsb2JhbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVSZWN0YW5nbGVDb2xsaXNpb24oYzEsIHIxLCBib3VuY2UgPSBmYWxzZSwgZ2xvYmFsID0gZmFsc2UpIHtcclxuICBsZXQgcmVnaW9uLCBjb2xsaXNpb24sIGMxeCwgYzF5LCByMXgsIHIxeTtcclxuXHJcbiAgaWYgKGdsb2JhbCkge1xyXG4gICAgYzF4ID0gYzEuZ3g7XHJcbiAgICBjMXkgPSBjMS5neTtcclxuICAgIHIxeCA9IHIxLmd4O1xyXG4gICAgcjF5ID0gcjEuZ3k7XHJcbiAgfSBlbHNlIHtcclxuICAgIGMxeCA9IGMxLng7XHJcbiAgICBjMXkgPSBjMS55O1xyXG4gICAgcjF4ID0gcjEueDtcclxuICAgIHIxeSA9IHIxLnk7XHJcbiAgfVxyXG5cclxuICBpZiAoYzF5IDwgcjF5IC0gcjEuaGFsZkhlaWdodCkge1xyXG4gICAgaWYgKGMxeCA8IHIxeCAtIDEgLSByMS5oYWxmV2lkdGgpIHtcclxuICAgICAgcmVnaW9uID0gXCJ0b3BMZWZ0XCI7XHJcbiAgICB9IGVsc2UgaWYgKGMxeCA+IHIxeCArIDEgKyByMS5oYWxmV2lkdGgpIHtcclxuICAgICAgcmVnaW9uID0gXCJ0b3BSaWdodFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVnaW9uID0gXCJ0b3BNaWRkbGVcIjtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGMxeSA+IHIxeSArIHIxLmhhbGZIZWlnaHQpIHtcclxuICAgIGlmIChjMXggPCByMXggLSAxIC0gcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgIHJlZ2lvbiA9IFwiYm90dG9tTGVmdFwiO1xyXG4gICAgfSBlbHNlIGlmIChjMXggPiByMXggKyAxICsgcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgIHJlZ2lvbiA9IFwiYm90dG9tUmlnaHRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlZ2lvbiA9IFwiYm90dG9tTWlkZGxlXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChjMXggPCByMXggLSByMS5oYWxmV2lkdGgpIHtcclxuICAgICAgcmVnaW9uID0gXCJsZWZ0TWlkZGxlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWdpb24gPSBcInJpZ2h0TWlkZGxlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocmVnaW9uID09PSBcInRvcE1pZGRsZVwiIHx8IHJlZ2lvbiA9PT0gXCJib3R0b21NaWRkbGVcIiB8fFxyXG4gICAgICByZWdpb24gPT09IFwibGVmdE1pZGRsZVwiIHx8IHJlZ2lvbiA9PT0gXCJyaWdodE1pZGRsZVwiKSB7XHJcbiAgICBjb2xsaXNpb24gPSByZWN0YW5nbGVDb2xsaXNpb24oYzEsIHIxLCBib3VuY2UsIGdsb2JhbCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBwb2ludCA9IHt9O1xyXG5cclxuICAgIHN3aXRjaCAocmVnaW9uKSB7XHJcbiAgICAgIGNhc2UgXCJ0b3BMZWZ0XCI6XHJcbiAgICAgICAgcG9pbnQueCA9IHIxeDtcclxuICAgICAgICBwb2ludC55ID0gcjF5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidG9wUmlnaHRcIjpcclxuICAgICAgICBwb2ludC54ID0gcjF4ICsgcjEud2lkdGg7XHJcbiAgICAgICAgcG9pbnQueSA9IHIxeTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImJvdHRvbUxlZnRcIjpcclxuICAgICAgICBwb2ludC54ID0gcjF4O1xyXG4gICAgICAgIHBvaW50LnkgPSByMXkgKyByMS5oZWlnaHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJib3R0b21SaWdodFwiOlxyXG4gICAgICAgIHBvaW50LnggPSByMXggKyByMS53aWR0aDtcclxuICAgICAgICBwb2ludC55ID0gcjF5ICsgcjEuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbiA9IGNpcmNsZVBvaW50Q29sbGlzaW9uKGMxLCBwb2ludCwgYm91bmNlLCBnbG9iYWwpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbGxpc2lvbikge1xyXG4gICAgcmV0dXJuIHJlZ2lvbjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGNvbGxpc2lvbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVQb2ludENvbGxpc2lvbihjMSwgcG9pbnQsIGJvdW5jZSA9IGZhbHNlLCBnbG9iYWwgPSBmYWxzZSkge1xyXG4gIHBvaW50LmRpYW1ldGVyID0gMTtcclxuICBwb2ludC5yYWRpdXMgPSAwLjU7XHJcbiAgcG9pbnQuY2VudGVyWCA9IHBvaW50Lng7XHJcbiAgcG9pbnQuY2VudGVyWSA9IHBvaW50Lnk7XHJcbiAgcG9pbnQuZ3ggPSBwb2ludC54O1xyXG4gIHBvaW50Lmd5ID0gcG9pbnQueTtcclxuICByZXR1cm4gY2lyY2xlQ29sbGlzaW9uKGMxLCBwb2ludCwgYm91bmNlLCBnbG9iYWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBib3VuY2VPZmZTdXJmYWNlKG8sIHMpIHtcclxuICBsZXQgZHAxLCBkcDIsXHJcbiAgICBwMSA9IHt9LFxyXG4gICAgcDIgPSB7fSxcclxuICAgIGJvdW5jZSA9IHt9LFxyXG4gICAgbWFzcyA9IG8ubWFzcyB8fCAxO1xyXG5cclxuICBzLmx4ID0gcy55O1xyXG4gIHMubHkgPSAtcy54O1xyXG5cclxuICBzLm1hZ25pdHVkZSA9IE1hdGguc3FydChzLnggKiBzLnggKyBzLnkgKiBzLnkpO1xyXG4gIHMuZHggPSBzLnggLyBzLm1hZ25pdHVkZTtcclxuICBzLmR5ID0gcy55IC8gcy5tYWduaXR1ZGU7XHJcbiAgZHAxID0gby52eCAqIHMuZHggKyBvLnZ5ICogcy5keTtcclxuXHJcbiAgcDEudnggPSBkcDEgKiBzLmR4O1xyXG4gIHAxLnZ5ID0gZHAxICogcy5keTtcclxuXHJcbiAgZHAyID0gby52eCAqIChzLmx4IC8gcy5tYWduaXR1ZGUpICsgby52eSAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICBwMi52eCA9IGRwMiAqIChzLmx4IC8gcy5tYWduaXR1ZGUpO1xyXG4gIHAyLnZ5ID0gZHAyICogKHMubHkgLyBzLm1hZ25pdHVkZSk7XHJcblxyXG4gIHAyLnZ4ICo9IC0xO1xyXG4gIHAyLnZ5ICo9IC0xO1xyXG5cclxuICBib3VuY2UueCA9IHAxLnZ4ICsgcDIudng7XHJcbiAgYm91bmNlLnkgPSBwMS52eSArIHAyLnZ5O1xyXG5cclxuICBvLnZ4ID0gYm91bmNlLnggLyBtYXNzO1xyXG4gIG8udnkgPSBib3VuY2UueSAvIG1hc3M7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaXQoYSwgYiwgcmVhY3QgPSBmYWxzZSwgYm91bmNlID0gZmFsc2UsIGdsb2JhbCwgZXh0cmEgPSB1bmRlZmluZWQpIHtcclxuICBsZXQgY29sbGlzaW9uLFxyXG4gICAgICBhSXNBU3ByaXRlID0gYS5wYXJlbnQgIT09IHVuZGVmaW5lZCxcclxuICAgICAgYklzQVNwcml0ZSA9IGIucGFyZW50ICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gIGlmIChhSXNBU3ByaXRlICYmIGIgaW5zdGFuY2VvZiBBcnJheSB8fCBiSXNBU3ByaXRlICYmIGEgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgc3ByaXRlVnNBcnJheSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb2xsaXNpb24gPSBmaW5kQ29sbGlzaW9uVHlwZShhLCBiKTtcclxuICAgIGlmIChjb2xsaXNpb24gJiYgZXh0cmEpIGV4dHJhKGNvbGxpc2lvbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29sbGlzaW9uO1xyXG5cclxuICBmdW5jdGlvbiBmaW5kQ29sbGlzaW9uVHlwZShhLCBiKSB7XHJcbiAgICBsZXQgYUlzQVNwcml0ZSA9IGEucGFyZW50ICE9PSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgYklzQVNwcml0ZSA9IGIucGFyZW50ICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKGFJc0FTcHJpdGUgJiYgYklzQVNwcml0ZSkge1xyXG4gICAgICBpZiAoYS5kaWFtZXRlciAmJiBiLmRpYW1ldGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNpcmNsZVZzQ2lyY2xlKGEsIGIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGEuZGlhbWV0ZXIgJiYgIWIuZGlhbWV0ZXIpIHtcclxuICAgICAgICByZXR1cm4gY2lyY2xlVnNSZWN0YW5nbGUoYSwgYik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZVZzUmVjdGFuZ2xlKGEsIGIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGJJc0FTcHJpdGUgJiYgIShhLnggPT09IHVuZGVmaW5lZCkgJiYgIShhLnkgPT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgcmV0dXJuIGhpdFRlc3RQb2ludChhLCBiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHthfSBhbmQgJHtifSBjYW5ub3QgYmUgdXNlIHRvZ2V0aGVyIGluIGEgY29sbGlzaW9uIHRlc3QuJ2ApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3ByaXRlVnNBcnJheSgpIHtcclxuICAgIGlmIChhIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgbGV0IFthLCBiXSA9IFtiLCBhXTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBiLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGxldCBzcHJpdGUgPSBiW2ldO1xyXG4gICAgICBjb2xsaXNpb24gPSBmaW5kQ29sbGlzaW9uVHlwZShhLCBzcHJpdGUpO1xyXG4gICAgICBpZiAoY29sbGlzaW9uICYmIGV4dHJhKSBleHRyYShjb2xsaXNpb24sIHNwcml0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaXJjbGVWc0NpcmNsZShhLCBiKSB7XHJcbiAgICBpZiAoIXJlYWN0KSB7XHJcbiAgICAgIHJldHVybiBoaXRUZXN0Q2lyY2xlKGEsIGIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGEudnggKyBhLnZ5ICE9PSAwICYmIGIudnggKyBiLnZ5ICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vdmluZ0NpcmNsZUNvbGxpc2lvbihhLCBiLCBnbG9iYWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjaXJjbGVDb2xsaXNpb24oYSwgYiwgYm91bmNlLCBnbG9iYWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWN0YW5nbGVWc1JlY3RhbmdsZShhLCBiKSB7XHJcbiAgICBpZiAoIXJlYWN0KSB7XHJcbiAgICAgIHJldHVybiBoaXRUZXN0UmVjdGFuZ2xlKGEsIGIsIGdsb2JhbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVjdGFuZ2xlQ29sbGlzaW9uKGEsIGIsIGJvdW5jZSwgZ2xvYmFsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNpcmNsZVZzUmVjdGFuZ2xlKGEsIGIpIHtcclxuICAgIGlmICghcmVhY3QpIHtcclxuICAgICAgcmV0dXJuIGhpdFRlc3RDaXJjbGVSZWN0YW5nbGUoYSwgYiwgZ2xvYmFsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjaXJjbGVSZWN0YW5nbGVDb2xsaXNpb24oYSwgYiwgYm91bmNlLCBnbG9iYWwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTmF0aXZlIE9iamVjdCBleHRlbnNpb25zXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTnVtYmVyLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbihpc3RhcnQsIGlzdG9wLCBvc3RhcnQsIG9zdG9wKSB7XHJcbiAgcmV0dXJuIG9zdGFydCArIChvc3RvcCAtIG9zdGFydCkgKiAoKHRoaXMgLSBpc3RhcnQpIC8gKGlzdG9wIC0gaXN0YXJ0KSk7XHJcbn07XHJcblxyXG5OdW1iZXIucHJvdG90eXBlLmxpbWl0ID0gZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHRoaXMpKTtcclxufTtcclxuXHJcbk51bWJlci5wcm90b3R5cGUucm91bmQgPSBmdW5jdGlvbihwcmVjaXNpb24pIHtcclxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKHRoaXMgKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xyXG59O1xyXG5cclxuTnVtYmVyLnByb3RvdHlwZS50b0ludCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAodGhpcyB8IDApO1xyXG59O1xyXG5cclxuTnVtYmVyLnByb3RvdHlwZS50b1JhZCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAodGhpcyAvIDE4MCkgKiBNYXRoLlBJO1xyXG59O1xyXG5cclxuTnVtYmVyLnByb3RvdHlwZS50b0RlZyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAodGhpcyAqIDE4MCkgLyBNYXRoLlBJO1xyXG59O1xyXG5cclxuQXJyYXkucHJvdG90eXBlLmVyYXNlID0gZnVuY3Rpb24oaXRlbSkge1xyXG4gIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgaWYgKHRoaXNbaV0gPT0gaXRlbSkge1xyXG4gICAgICB0aGlzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5BcnJheS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oaXRlbSl7XHJcbiAgcmV0dXJuICh0aGlzLmluZGV4T2YoaXRlbSkgIT09IC0xKTtcclxufTtcclxuXHJcbkFycmF5LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxlbmd0aCldO1xyXG59O1xyXG5cclxuQXJyYXkucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcclxuICBmb3IgKGxldCBqLCB4LCBpID0gdGhpcy5sZW5ndGg7IGk7KSB7XHJcbiAgICBqID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGkpO1xyXG4gICAgeCA9IHRoaXNbLS1pXTtcclxuICAgIHRoaXNbaV0gPSB0aGlzW2pdO1xyXG4gICAgdGhpc1tqXSA9IHg7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdykge1xyXG4gIGxldCBpZEluZGV4ID0gMDtcclxuXHJcbiAgdG9wLiQkID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuICAgIHJldHVybiBzZWxlY3Rvci5jaGFyQXQoMCkgPT0gJyMnID9cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc3Vic3RyKDEpKSA6XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9yKTtcclxuICB9O1xyXG5cclxuICB0b3AuJCRuZXcgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcclxuICB9O1xyXG5cclxuICB0b3AuXyA9IHtcclxuICAgIGV4dGVuZDogZnVuY3Rpb24oZGVzdCA9IHt9LCBzb3VyY2UpIHtcclxuICAgICAgaWYgKCFzb3VyY2UpIHJldHVybiBkZXN0O1xyXG4gICAgICBmb3IgKGxldCBwcm9wIGluIHNvdXJjZSkge1xyXG4gICAgICAgIGRlc3RbcHJvcF0gPSBzb3VyY2VbcHJvcF07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb25lOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgcmV0dXJuIF8uZXh0ZW5kKHt9LCBvYmopO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb3B5OiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgaWYgKCFvYmogfHwgdHlwZW9mKG9iaikgIT0gJ29iamVjdCcgfHxcclxuICAgICAgICBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICBsZXQgYyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgY1tpXSA9IF8uY29weShvYmpbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgYyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gb2JqKSB7XHJcbiAgICAgICAgICBjW2ldID0gXy5jb3B5KG9ialtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRlZmF1bHRzOiBmdW5jdGlvbihkZXN0ID0ge30sIHNvdXJjZSkge1xyXG4gICAgICBpZiAoIXNvdXJjZSkgcmV0dXJuIGRlc3Q7XHJcbiAgICAgIGZvciAobGV0IHByb3AgaW4gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKGRlc3RbcHJvcF0gPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgZGVzdFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9LFxyXG5cclxuICAgIG1vZGlmeTogZnVuY3Rpb24oZGVzdCA9IHt9LCBzb3VyY2UpIHtcclxuICAgICAgaWYgKCFzb3VyY2UpIHJldHVybiBkZXN0O1xyXG4gICAgICBmb3IgKGxldCBwcm9wIGluIHNvdXJjZSkge1xyXG4gICAgICAgIGlmICghKGRlc3RbcHJvcF0gPT09IHZvaWQgMCkpIHtcclxuICAgICAgICAgIGRlc3RbcHJvcF0gPSBzb3VyY2VbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXM6IGZ1bmN0aW9uKG9iaiwga2V5KSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KG9iaiwga2V5KTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNTdHJpbmc6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZyc7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzTnVtYmVyOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBOdW1iZXJdJztcclxuICAgIH0sXHJcblxyXG4gICAgaXNGdW5jdGlvbjogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH0sXHJcblxyXG4gICAgaXNPYmplY3Q6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc0FycmF5OiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc1VuZGVmaW5lZDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogPT09IHZvaWQgMDtcclxuICAgIH0sXHJcblxyXG4gICAgcG9wUHJvcGVydHk6IGZ1bmN0aW9uKG9iaiwgcHJvcGVydHkpIHtcclxuICAgICAgbGV0IHZhbCA9IG9ialtwcm9wZXJ0eV07XHJcbiAgICAgIGRlbGV0ZSBvYmpbcHJvcGVydHldO1xyXG4gICAgICByZXR1cm4gdmFsO1xyXG4gICAgfSxcclxuXHJcbiAgICBlYWNoOiBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XHJcbiAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBpZiAob2JqLmZvckVhY2gpIHtcclxuICAgICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCk7XHJcbiAgICAgIH0gZWxzZSBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2ldLCBpLCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGludm9rZTogZnVuY3Rpb24oYXJyLCBwcm9wZXJ0eSwgYXJnMSwgYXJnMikge1xyXG4gICAgICBpZiAoYXJyID09IG51bGwpIHJldHVybjtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgYXJyW2ldW3Byb3BlcnR5XShhcmcxLCBhcmcyKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkZXRlY3Q6IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQsIGFyZzEsIGFyZzIpIHtcclxuICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIGFyZzEsIGFyZzIpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgYXJnMSwgYXJnMik7XHJcbiAgICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZmlsdGVyOiBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0LCBhcmcxLCBhcmcyKSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgIGl0ZW0gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgYXJnMSwgYXJnMik7XHJcbiAgICAgICAgICBpZiAoaXRlbSkgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBhcmcxLCBhcmcyKTtcclxuICAgICAgICAgIGlmIChpdGVtKSByZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtYXA6IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcclxuICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcclxuICAgICAgaWYgKCFfLmlzTnVtYmVyKG9iaikgJiYgb2JqLm1hcCkgcmV0dXJuIG9iai5tYXAoaXRlcmF0b3IsIGNvbnRleHQpO1xyXG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcclxuICAgICAgICByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgcmVzdWx0cy5sZW5ndGggPSBvYmoubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH0sXHJcblxyXG4gICAgdW5pcTogZnVuY3Rpb24oYXJyKSB7XHJcbiAgICAgIGFyciA9IGFyci5zbGljZSgpLnNvcnQoKTtcclxuICAgICAgbGV0IG91dHB1dCA9IFtdO1xyXG5cclxuICAgICAgbGV0IGxhc3QgPSBudWxsO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGlmIChhcnJbaV0gIT0gdm9pZCAwICYmIGxhc3QgIT09IGFycltpXSlcclxuICAgICAgICAgIG91dHB1dC5wdXNoKGFycltpXSk7XHJcbiAgICAgICAgbGFzdCA9IGFycltpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfSxcclxuXHJcbiAgICBrZXlzOiBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbihvYmopIHtcclxuICAgICAgaWYgKF8uaXNPYmplY3Qob2JqKSlcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9iamVjdCcpO1xyXG4gICAgICBsZXQga2V5cyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5c1trZXlzLmxlbmd0aF0gPSBrZXk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwID0gMSkge1xyXG4gICAgICBsZXQgbGVuID0gTWF0aC5tYXgoTWF0aC5jZWlsKE1hdGguYWJzKHN0b3AgLSBzdGFydCkgLyBzdGVwKSwgMCk7XHJcbiAgICAgIGxldCBpZHggPSAwO1xyXG4gICAgICBsZXQgcmFuZ2UgPSBuZXcgQXJyYXkobGVuKTtcclxuXHJcbiAgICAgIHdoaWxlIChpZHggPCBsZW4pIHtcclxuICAgICAgICByYW5nZVtpZHgrK10gPSBzdGFydDtcclxuICAgICAgICBpZiAoc3RhcnQgPiBzdG9wKVxyXG4gICAgICAgICAgc3RhcnQgLT0gc3RlcDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBzdGFydCArPSBzdGVwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByYW5nZTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5pcXVlSWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gaWRJbmRleCsrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KSh3aW5kb3cpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFyZyhhcmcpIHtcclxuICBpZiAoXy5pc1N0cmluZyhhcmcpKVxyXG4gICAgYXJnID0gYXJnLnJlcGxhY2UoL1xccysvZywgJycpLnNwbGl0KCcsJyk7XHJcbiAgaWYgKCFfLmlzQXJyYXkoYXJnKSlcclxuICAgIGFyZyA9IFthcmddO1xyXG4gIHJldHVybiBhcmc7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgbm9ybWFsaXplQXJnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7fTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnbG9hZCBjb21tb24gbW9kdWxlJyk7XHJcbiIsImltcG9ydCBEaXNwbGF5T2JqZWN0IGZyb20gJy4vRGlzcGxheU9iamVjdC5qcyc7XHJcbmltcG9ydCB7c3RhZ2V9IGZyb20gJy4vU3RhZ2UuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoID0gMzIsIGhlaWdodCA9IDMyLFxyXG4gICAgICAgICAgICAgIGZpbGxTdHlsZSA9ICdncmF5Jywgc3Ryb2tlU3R5bGUgPSAnbm9uZScsXHJcbiAgICAgICAgICAgICAgbGluZVdpZHRoID0gMCxcclxuICAgICAgICAgICAgICB4ID0gMCwgeSA9IDApIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgIHRoaXMuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcclxuICAgIHRoaXMubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgdGhpcy5tYXNrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY3R4KSB7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZVN0eWxlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbFN0eWxlO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LnJlY3QoXHJcbiAgICAgIC10aGlzLndpZHRoICogdGhpcy5waXZvdFgsXHJcbiAgICAgIC10aGlzLmhlaWdodCAqIHRoaXMucGl2b3RZLFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodFxyXG4gICAgKTtcclxuICAgIGlmKHRoaXMuc3Ryb2tlU3R5bGUgIT09ICdub25lJykgY3R4LnN0cm9rZSgpO1xyXG4gICAgaWYodGhpcy5maWxsU3R5bGUgIT09ICdub25lJykgY3R4LmZpbGwoKTtcclxuICAgIGlmKHRoaXMubWFzayAmJiB0aGlzLm1hc2sgPT09IHRydWUpIGN0eC5jbGlwKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm91bmRlZFJlY3RhbmdsZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoID0gMzIsIGhlaWdodCA9IDMyLCByYWRpdXMgPSAzMCxcclxuICAgICAgICAgICAgICBmaWxsU3R5bGUgPSAnZ3JheScsIHN0cm9rZVN0eWxlID0gJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGxpbmVXaWR0aCA9IDAsXHJcbiAgICAgICAgICAgICAgeCA9IDAsIHkgPSAwKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB0aGlzLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcclxuICAgIHRoaXMuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcclxuICAgIHRoaXMubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgdGhpcy5tYXNrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY3R4KSB7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZVN0eWxlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbFN0eWxlO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgIGxldCB4ID0gLXRoaXMud2lkdGggKiB0aGlzLnBpdm90WDtcclxuICAgIGxldCB5ID0gLXRoaXMuaGVpZ2h0ICogdGhpcy5waXZvdFk7XHJcbiAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgbGV0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgbGV0IHJhZGl1cyA9IHRoaXMucmFkaXVzO1xyXG4gICAgY3R4LmFyYyh4ICsgcmFkaXVzLCB5ICsgcmFkaXVzLCByYWRpdXMsIE1hdGguUEksIE1hdGguUEkgKiAzIC8gMik7ICAgXHJcbiAgICBjdHgubGluZVRvKHdpZHRoIC0gcmFkaXVzICsgeCwgeSk7ICAgXHJcbiAgICBjdHguYXJjKHdpZHRoIC0gcmFkaXVzICsgeCwgcmFkaXVzICsgeSwgcmFkaXVzLCBNYXRoLlBJICogMyAvIDIsIE1hdGguUEkgKiAyKTsgICBcclxuICAgIGN0eC5saW5lVG8od2lkdGggKyB4LCBoZWlnaHQgKyB5IC0gcmFkaXVzKTsgICBcclxuICAgIGN0eC5hcmMod2lkdGggLSByYWRpdXMgKyB4LCBoZWlnaHQgLSByYWRpdXMgKyB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAxIC8gMik7ICAgXHJcbiAgICBjdHgubGluZVRvKHJhZGl1cyArIHgsIGhlaWdodCAreSk7ICAgXHJcbiAgICBjdHguYXJjKHJhZGl1cyArIHgsIGhlaWdodCAtIHJhZGl1cyArIHksIHJhZGl1cywgTWF0aC5QSSAqIDEgLyAyLCBNYXRoLlBJKTsgICBcclxuXHJcbiAgICBpZih0aGlzLnN0cm9rZVN0eWxlICE9PSAnbm9uZScpIGN0eC5zdHJva2UoKTtcclxuICAgIGlmKHRoaXMuZmlsbFN0eWxlICE9PSAnbm9uZScpIGN0eC5maWxsKCk7XHJcbiAgICBpZih0aGlzLm1hc2sgJiYgdGhpcy5tYXNrID09PSB0cnVlKSBjdHguY2xpcCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZSh3aWR0aCwgaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoLCB4LCB5KSB7XHJcbiAgbGV0IHNwcml0ZSA9IG5ldyBSZWN0YW5nbGUod2lkdGgsIGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aCwgeCwgeSk7XHJcbiAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICByZXR1cm4gc3ByaXRlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcbiAgY29uc3RydWN0b3IoZGlhbWV0ZXIgPSAzMixcclxuICAgICAgICAgICAgICBmaWxsU3R5bGUgPSAnZ3JheScsIHN0cm9rZVN0eWxlID0gJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGxpbmVXaWR0aCA9IDAsXHJcbiAgICAgICAgICAgICAgeCA9IDAsIHkgPSAwKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2lyY3VsYXIgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZGlhbWV0ZXIgPSBkaWFtZXRlcjtcclxuICAgIHRoaXMuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xyXG4gICAgdGhpcy5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuXHJcbiAgICB0aGlzLm1hc2sgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjdHgpIHtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlU3R5bGU7XHJcbiAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGU7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKFxyXG4gICAgICB0aGlzLnJhZGl1cyArICgtdGhpcy5kaWFtZXRlciAqIHRoaXMucGl2b3RYKSxcclxuICAgICAgdGhpcy5yYWRpdXMgKyAoLXRoaXMuZGlhbWV0ZXIgKiB0aGlzLnBpdm90WSksXHJcbiAgICAgIHRoaXMucmFkaXVzLFxyXG4gICAgICAwLCAyICogTWF0aC5QSSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICBpZih0aGlzLnN0cm9rZVN0eWxlICE9PSAnbm9uZScpIGN0eC5zdHJva2UoKTtcclxuICAgIGlmKHRoaXMuZmlsbFN0eWxlICE9PSAnbm9uZScpIGN0eC5maWxsKCk7XHJcbiAgICBpZih0aGlzLm1hc2sgJiYgdGhpcy5tYXNrID09PSB0cnVlKSBjdHguY2xpcCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZShkaWFtZXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICB4LCB5KXtcclxuICBsZXQgc3ByaXRlID0gbmV3IENpcmNsZShkaWFtZXRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4LCB5KTtcclxuICBzdGFnZS5hZGRDaGlsZChzcHJpdGUpO1xyXG4gIHJldHVybiBzcHJpdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lIGV4dGVuZHMgRGlzcGxheU9iamVjdHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHN0cm9rZVN0eWxlID0gJ25vbmUnLFxyXG4gICAgbGluZVdpZHRoID0gMCxcclxuICAgIGF4ID0gMCxcclxuICAgIGF5ID0gMCxcclxuICAgIGJ4ID0gMzIsXHJcbiAgICBieSA9IDMyXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcclxuICAgIHRoaXMubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgdGhpcy5heCA9IGF4O1xyXG4gICAgdGhpcy5heSA9IGF5O1xyXG4gICAgdGhpcy5ieCA9IGJ4O1xyXG4gICAgdGhpcy5ieSA9IGJ5O1xyXG5cclxuICAgIHRoaXMubGluZUpvaW4gPSAncm91bmQnO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGN0eCkge1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VTdHlsZTtcclxuICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgIGN0eC5saW5lSm9pbiA9IHRoaXMubGluZUpvaW47XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKHRoaXMuYXgsIHRoaXMuYXkpO1xyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmJ4LCB0aGlzLmJ5KTtcclxuICAgIGlmKHRoaXMuc3Ryb2tlU3R5bGUgIT09ICdub25lJykgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmUoc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgYXgsIGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICBieCwgYnkpIHtcclxuICBsZXQgc3ByaXRlID0gbmV3IExpbmUoc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXgsIGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBieCwgYnkpO1xyXG4gIHN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcbiAgcmV0dXJuIHNwcml0ZTtcclxufVxyXG4iLCJpbXBvcnQgRGlzcGxheU9iamVjdCBmcm9tICcuL0Rpc3BsYXlPYmplY3QuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGtleXMgPSB7XHJcblx0J01PVVNFMSc6IC0xLFxyXG5cdCdNT1VTRTInOiAtMyxcclxuXHQnTVdIRUVMX1VQJzogLTQsXHJcblx0J01XSEVFTF9ET1dOJzogLTUsXHJcblx0XHJcblx0J0JBQ0tTUEFDRSc6IDgsXHJcblx0J1RBQic6IDksXHJcblx0J0VOVEVSJzogMTMsXHJcblx0J1BBVVNFJzogMTksXHJcblx0J0NBUFMnOiAyMCxcclxuXHQnRVNDJzogMjcsXHJcblx0J1NQQUNFJzogMzIsXHJcblx0J1BBR0VfVVAnOiAzMyxcclxuXHQnUEFHRV9ET1dOJzogMzQsXHJcblx0J0VORCc6IDM1LFxyXG5cdCdIT01FJzogMzYsXHJcblx0J0xFRlRfQVJST1cnOiAzNyxcclxuXHQnVVBfQVJST1cnOiAzOCxcclxuXHQnUklHSFRfQVJST1cnOiAzOSxcclxuXHQnRE9XTl9BUlJPVyc6IDQwLFxyXG5cdCdJTlNFUlQnOiA0NSxcclxuXHQnREVMRVRFJzogNDYsXHJcblx0J18wJzogNDgsXHJcblx0J18xJzogNDksXHJcblx0J18yJzogNTAsXHJcblx0J18zJzogNTEsXHJcblx0J180JzogNTIsXHJcblx0J181JzogNTMsXHJcblx0J182JzogNTQsXHJcblx0J183JzogNTUsXHJcblx0J184JzogNTYsXHJcblx0J185JzogNTcsXHJcblx0J0EnOiA2NSxcclxuXHQnQic6IDY2LFxyXG5cdCdDJzogNjcsXHJcblx0J0QnOiA2OCxcclxuXHQnRSc6IDY5LFxyXG5cdCdGJzogNzAsXHJcblx0J0cnOiA3MSxcclxuXHQnSCc6IDcyLFxyXG5cdCdJJzogNzMsXHJcblx0J0onOiA3NCxcclxuXHQnSyc6IDc1LFxyXG5cdCdMJzogNzYsXHJcblx0J00nOiA3NyxcclxuXHQnTic6IDc4LFxyXG5cdCdPJzogNzksXHJcblx0J1AnOiA4MCxcclxuXHQnUSc6IDgxLFxyXG5cdCdSJzogODIsXHJcblx0J1MnOiA4MyxcclxuXHQnVCc6IDg0LFxyXG5cdCdVJzogODUsXHJcblx0J1YnOiA4NixcclxuXHQnVyc6IDg3LFxyXG5cdCdYJzogODgsXHJcblx0J1knOiA4OSxcclxuXHQnWic6IDkwLFxyXG5cdCdOVU1QQURfMCc6IDk2LFxyXG5cdCdOVU1QQURfMSc6IDk3LFxyXG5cdCdOVU1QQURfMic6IDk4LFxyXG5cdCdOVU1QQURfMyc6IDk5LFxyXG5cdCdOVU1QQURfNCc6IDEwMCxcclxuXHQnTlVNUEFEXzUnOiAxMDEsXHJcblx0J05VTVBBRF82JzogMTAyLFxyXG5cdCdOVU1QQURfNyc6IDEwMyxcclxuXHQnTlVNUEFEXzgnOiAxMDQsXHJcblx0J05VTVBBRF85JzogMTA1LFxyXG5cdCdNVUxUSVBMWSc6IDEwNixcclxuXHQnQUREJzogMTA3LFxyXG5cdCdTVUJTVFJBQ1QnOiAxMDksXHJcblx0J0RFQ0lNQUwnOiAxMTAsXHJcblx0J0RJVklERSc6IDExMSxcclxuXHQnRjEnOiAxMTIsXHJcblx0J0YyJzogMTEzLFxyXG5cdCdGMyc6IDExNCxcclxuXHQnRjQnOiAxMTUsXHJcblx0J0Y1JzogMTE2LFxyXG5cdCdGNic6IDExNyxcclxuXHQnRjcnOiAxMTgsXHJcblx0J0Y4JzogMTE5LFxyXG5cdCdGOSc6IDEyMCxcclxuXHQnRjEwJzogMTIxLFxyXG5cdCdGMTEnOiAxMjIsXHJcblx0J0YxMic6IDEyMyxcclxuXHQnU0hJRlQnOiAxNixcclxuXHQnQ1RSTCc6IDE3LFxyXG5cdCdBTFQnOiAxOCxcclxuXHQnUExVUyc6IDE4NyxcclxuXHQnQ09NTUEnOiAxODgsXHJcblx0J01JTlVTJzogMTg5LFxyXG5cdCdQRVJJT0QnOiAxOTBcclxufTtcclxuXHJcbmZ1bmN0aW9uIHRlc3RIaXQoY3R4KSB7XHJcbiAgdHJ5e1xyXG4gICAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwwLDEsMSkuZGF0YVszXSA+IDE7XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICB0aHJvdyAnRXJyb3I6IHdoZW4gdGVzdEhpdCc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHBvaW50ZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBvaW50ZXIoZWxlbWVudCwgc2NhbGUgPSAxKSB7XHJcbiAgaWYocG9pbnRlcikge1xyXG4gICAgY29uc29sZS5lcnJvcigncG9pbnRlciBhbHJlYWR5IGluc3RhbnRpYXRlZCcpO1xyXG4gICAgcmV0dXJuIHBvaW50ZXI7IFxyXG4gIH1cclxuICBsZXQgX3BvaW50ZXIgPSB7XHJcbiAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgc2NhbGU6IHNjYWxlLFxyXG4gICAgX3g6IDAsXHJcbiAgICBfeTogMCxcclxuICAgIHRhcHBlZFRpbWU6IDIwMCxcclxuXHJcbiAgICBnZXQgeCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3ggLyB0aGlzLnNjYWxlO1xyXG4gICAgfSxcclxuICAgIGdldCB5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5feSAvIHRoaXMuc2NhbGU7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldCBjZW50ZXJYKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgfSxcclxuICAgIGdldCBjZW50ZXJZKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXQgcG9zaXRpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgIHk6IHRoaXMueVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICBpc0Rvd246IGZhbHNlLFxyXG4gICAgaXNVcDogdHJ1ZSxcclxuICAgIHRhcHBlZDogZmFsc2UsXHJcblxyXG4gICAgZG93blRpbWU6IDAsXHJcbiAgICBlbGFwc2VkVGltZTogMCxcclxuXHJcbiAgICBwcmVzczogdW5kZWZpbmVkLFxyXG4gICAgcmVsZWFzZTogdW5kZWZpbmVkLFxyXG4gICAgdGFwOiB1bmRlZmluZWQsXHJcblxyXG4gICAgZHJhZ1Nwcml0ZTogbnVsbCxcclxuICAgIGRyYWdPZmZzZXRYOiAwLFxyXG4gICAgZHJhZ09mZnNldFk6IDAsXHJcblxyXG4gICAgbW92ZUhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIHRoaXMuX3ggPSAoZXZlbnQucGFnZVggLSBlbGVtZW50Lm9mZnNldExlZnQpO1xyXG4gICAgICB0aGlzLl95ID0gKGV2ZW50LnBhZ2VZIC0gZWxlbWVudC5vZmZzZXRUb3ApO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b3VjaG1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICB0aGlzLl94ID0gKGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLWVsZW1lbnQub2Zmc2V0TGVmdCk7XHJcbiAgICAgIHRoaXMuX3kgPSAoZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtZWxlbWVudC5vZmZzZXRUb3ApO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICB0aGlzLmlzRG93biA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNVcCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhcHBlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRvd25UaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgaWYodGhpcy5wcmVzcylcclxuICAgICAgICB0aGlzLnByZXNzKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvdWNoc3RhcnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICB0aGlzLl94ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgdGhpcy5feSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlbGVtZW50Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc1VwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZG93blRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICBpZih0aGlzLnByZXNzKSB0aGlzLnByZXNzKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwSGFuZGxlcihldmVudCkge1xyXG4gICAgICB0aGlzLmVsYXBzZWRUaW1lID0gTWF0aC5hYnModGhpcy5kb3duVGltZSAtIERhdGUubm93KCkpO1xyXG4gICAgICBpZih0aGlzLmVsYXBzZWRUaW1lIDw9IHRoaXMudGFwcGVkVGltZSAmJiB0aGlzLnRhcHBlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnRhcHBlZCA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy50YXApIHRoaXMudGFwKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pc1VwID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcclxuICAgICAgaWYodGhpcy5yZWxlYXNlKSB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG91Y2hlbmRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBNYXRoLmFicyh0aGlzLmRvd25UaW1lIC0gRGF0ZS5ub3coKSk7XHJcbiAgICAgIGlmKHRoaXMuZWxhcHNlZFRpbWUgPD0gdGhpcy50YXBwZWRUaW1lICYmIHRoaXMudGFwcGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudGFwcGVkID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLnRhcCkgdGhpcy50YXAoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlzVXAgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xyXG4gICAgICBpZih0aGlzLnJlbGVhc2UpIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBGSVhNRTog5aSa5bGC5Y+Y5o2i5rKh5aSE55CG5aW977yM5Y+v6IO96ZyA6KaBc3ByaXRl5L+d5oyB5LiA5Liq5Y+Y5o2i55+p6Zi1KOWFqOWxgCnmiY3og73ovr7liLAoIOWPguiAg++8mua4uOaIj+e8lueoi+aooeW8jyApXHJcbiAgICBoaXRUZXN0U3ByaXRlUGl4ZWwoc3ByaXRlKSB7XHJcbiAgICAgIGxldCBjdHggPSBEaXNwbGF5T2JqZWN0LmhpdFRlc3RDYW52YXMuY3R4O1xyXG4gICAgICAvLyBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIC10aGlzLngsIC10aGlzLnkpO1xyXG4gICAgICAvLyBjdHgudHJhbnNmb3JtKDEsMCwwLDEsc3ByaXRlLngsc3ByaXRlLnkpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKFxyXG4gICAgICAgIHNwcml0ZS5neCArIChzcHJpdGUud2lkdGggKiBzcHJpdGUucGl2b3RYKSxcclxuICAgICAgICBzcHJpdGUuZ3kgKyAoc3ByaXRlLmhlaWdodCAqIHNwcml0ZS5waXZvdFkpXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5yb3RhdGUoc3ByaXRlLnJvdGF0aW9uKTtcclxuICAgICAgY3R4LnNjYWxlKHNwcml0ZS5zY2FsZVgsIHNwcml0ZS5zY2FsZVkpO1xyXG5cclxuICAgICAgc3ByaXRlLnJlbmRlcihjdHgpO1xyXG4gICAgICBsZXQgaGl0ID0gdGVzdEhpdChjdHgpO1xyXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKDEsMCwwLDEsMCwwKTtcclxuICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsMSwxKTtcclxuICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLDAsNTEyLDI1Nik7XHJcblxyXG4gICAgICAvLyBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZihoaXQpIGNvbnNvbGUubG9nKCdwaXhlbCBoaXQnKTtcclxuICAgICAgcmV0dXJuIGhpdDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRklYTUU6IOWkmuWxguWPmOaNouayoeWkhOeQhuWlve+8jOWPr+iDvemcgOimgXNwcml0ZeS/neaMgeS4gOS4quWPmOaNouefqemYtSjlhajlsYAp5omN6IO96L6+5YiwKCDlj4LogIPvvJrmuLjmiI/nvJbnqIvmqKHlvI8gKVxyXG4gICAgaGl0VGVzdFNwcml0ZVNjYWxlZChzcHJpdGUpIHtcclxuICAgICAgbGV0IGhpdCA9IGZhbHNlO1xyXG4gICAgICBpZighc3ByaXRlLmNpcmN1bGFyKSB7XHJcbiAgICAgICAgbGV0IGNlbnRlciA9IHNwcml0ZS5nQ2VudGVyO1xyXG4gICAgICAgIGxldCBoYWxmV2lkaHQgPSAoc3ByaXRlLndpZHRoID4+IDEpICogc3ByaXRlLnNjYWxlWDtcclxuICAgICAgICBsZXQgaGFsZkhlaWdodCA9IChzcHJpdGUuaGVpZ2h0ID4+IDEpICogc3ByaXRlLnNjYWxlWTtcclxuICAgICAgICBsZXQgbGVmdCA9ICBjZW50ZXIueCAtIGhhbGZXaWRodCxcclxuICAgICAgICAgICAgcmlnaHQgPSBjZW50ZXIueCArIGhhbGZXaWRodCxcclxuICAgICAgICAgICAgdG9wID0gY2VudGVyLnkgLSBoYWxmSGVpZ2h0LFxyXG4gICAgICAgICAgICBib3R0b20gPSBjZW50ZXIueSArIGhhbGZIZWlnaHQ7XHJcblxyXG4gICAgICAgIGhpdCA9IHRoaXMueCA+IGxlZnQgJiYgdGhpcy54IDwgcmlnaHRcclxuICAgICAgICAgICYmIHRoaXMueSA+IHRvcCAmJiB0aGlzLnkgPCBib3R0b207XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRklYTUU6IOi/mOayoeacieWkhOeQhuWchuW9olxyXG4gICAgICAgIGxldCB2eCA9IHRoaXMueCAtIChzcHJpdGUuZ3ggKyBzcHJpdGUucmFkaXVzKSxcclxuICAgICAgICB2eSA9IHRoaXMueSAtIChzcHJpdGUuZ3kgKyBzcHJpdGUucmFkaXVzKSxcclxuICAgICAgICBkaXN0YW5jZSA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcbiAgICAgICAgaGl0ID0gZGlzdGFuY2UgPCBzcHJpdGUucmFkaXVzO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmKGhpdCkgY29uc29sZS5sb2coJ3NjYWxlZCBoaXQnKTtcclxuICAgICAgcmV0dXJuIGhpdDtcclxuICAgIH0sXHJcblxyXG4gICAgaGl0VGVzdFNwcml0ZU5vcm1hbChzcHJpdGUpIHtcclxuICAgICAgbGV0IGhpdCA9IGZhbHNlO1xyXG4gICAgICBpZighc3ByaXRlLmNpcmN1bGFyKSB7XHJcbiAgICAgICAgbGV0IGxlZnQgPSAgc3ByaXRlLmd4LFxyXG4gICAgICAgICAgICByaWdodCA9IHNwcml0ZS5neCArIHNwcml0ZS53aWR0aCxcclxuICAgICAgICAgICAgdG9wID0gc3ByaXRlLmd5LFxyXG4gICAgICAgICAgICBib3R0b20gPSBzcHJpdGUuZ3kgKyBzcHJpdGUuaGVpZ2h0O1xyXG5cclxuICAgICAgICBoaXQgPSB0aGlzLnggPiBsZWZ0ICYmIHRoaXMueCA8IHJpZ2h0XHJcbiAgICAgICAgICAmJiB0aGlzLnkgPiB0b3AgJiYgdGhpcy55IDwgYm90dG9tO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB2eCA9IHRoaXMueCAtIChzcHJpdGUuZ3ggKyBzcHJpdGUucmFkaXVzKSxcclxuICAgICAgICAgICAgdnkgPSB0aGlzLnkgLSAoc3ByaXRlLmd5ICsgc3ByaXRlLnJhZGl1cyksXHJcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KHZ4ICogdnggKyB2eSAqIHZ5KTtcclxuICAgICAgICBoaXQgPSBkaXN0YW5jZSA8IHNwcml0ZS5yYWRpdXM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpdDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5Y+v6IO96ZyA6KaBc3ByaXRl5L+d5oyB5LiA5Liq5Y+Y5o2i55+p6Zi1KOWFqOWxgCks5L2/55SocGl4ZWzmo4DmtYtcclxuICAgIGhpdFRlc3RTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICAgIGlmKHNwcml0ZS5yb3RhdGlvbiAhPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0VGVzdFNwcml0ZVBpeGVsKHNwcml0ZSk7XHJcbiAgICAgIH0gZWxzZSBpZihzcHJpdGUuc2NhbGVYICE9IDEgfHwgc3ByaXRlLnNjYWxlWSAhPSAxKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRUZXN0U3ByaXRlU2NhbGVkKHNwcml0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0VGVzdFNwcml0ZU5vcm1hbChzcHJpdGUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZURyYWdBbmREcm9wKGRyYWdnYWJsZVNwcml0ZXMpIHtcclxuICAgICAgaWYodGhpcy5pc0Rvd24pIHtcclxuICAgICAgICBpZih0aGlzLmRyYWdTcHJpdGUgPT09IG51bGwpIHtcclxuICAgICAgICAgIGZvcihsZXQgaSA9IGRyYWdnYWJsZVNwcml0ZXMubGVuZ3RoIC0xOyBpID4gLTE7IC0taSkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gZHJhZ2dhYmxlU3ByaXRlc1tpXTtcclxuICAgICAgICAgICAgaWYoc3ByaXRlLmRyYWdnYWJsZSAmJiB0aGlzLmhpdFRlc3RTcHJpdGUoc3ByaXRlKSl7XHJcbiAgICAgICAgICAgICAgdGhpcy5kcmFnT2Zmc2V0WCA9IHRoaXMueCAtIHNwcml0ZS5neDtcclxuICAgICAgICAgICAgICB0aGlzLmRyYWdPZmZzZXRZID0gdGhpcy55IC0gc3ByaXRlLmd5O1xyXG4gICAgICAgICAgICAgIHRoaXMuZHJhZ1Nwcml0ZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBzcHJpdGUucGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgIGNoaWxkcmVuLnNwbGljZShjaGlsZHJlbi5pbmRleE9mKHNwcml0ZSksIDEpO1xyXG4gICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goc3ByaXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlU3ByaXRlcy5zcGxpY2UoZHJhZ2dhYmxlU3ByaXRlcy5pbmRleE9mKHNwcml0ZSksMSk7XHJcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlU3ByaXRlcy5wdXNoKHNwcml0ZSk7XHJcblxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZHJhZ1Nwcml0ZS54ID0gdGhpcy54IC0gdGhpcy5kcmFnT2Zmc2V0WDtcclxuICAgICAgICAgIHRoaXMuZHJhZ1Nwcml0ZS55ID0gdGhpcy55IC0gdGhpcy5kcmFnT2Zmc2V0WTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuaXNVcClcclxuICAgICAgICB0aGlzLmRyYWdTcHJpdGUgPSBudWxsO1xyXG5cclxuICAgICAgZHJhZ2dhYmxlU3ByaXRlcy5zb21lKHNwcml0ZSA9PntcclxuICAgICAgICBpZihzcHJpdGUuZHJhZ2dhYmxlICYmIHRoaXMuaGl0VGVzdFNwcml0ZShzcHJpdGUpKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnYXV0byc7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF9wb2ludGVyLm1vdmVIYW5kbGVyLmJpbmQoX3BvaW50ZXIpLCBmYWxzZSk7XHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIF9wb2ludGVyLmRvd25IYW5kbGVyLmJpbmQoX3BvaW50ZXIpLCBmYWxzZSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF9wb2ludGVyLnVwSGFuZGxlci5iaW5kKF9wb2ludGVyKSwgZmFsc2UpO1xyXG5cclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgX3BvaW50ZXIudG91Y2htb3ZlSGFuZGxlci5iaW5kKF9wb2ludGVyKSwgZmFsc2UpO1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgX3BvaW50ZXIudG91Y2hzdGFydEhhbmRsZXIuYmluZChfcG9pbnRlciksIGZhbHNlKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIF9wb2ludGVyLnRvdWNoZW5kSGFuZGxlci5iaW5kKF9wb2ludGVyKSwgZmFsc2UpO1xyXG5cclxuICAvLyBEaXNhYmxlIHRoZSBkZWZhdWx0IGFjdGlvbnMgb24gdGhlICdjYW52YXMnXHJcbiAgZWxlbWVudC5zdHlsZS50b3VjaEFjdGlvbiA9IFwibm9uZVwiO1xyXG5cclxuICBwb2ludGVyID0gX3BvaW50ZXI7XHJcbiAgcmV0dXJuIF9wb2ludGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5Ym9hcmQoa2V5Q29kZSkge1xyXG4gIGxldCBrZXkgPSB7fTtcclxuICBrZXkuY29kZSA9IGtleUNvZGU7XHJcbiAga2V5LmlzRG93biA9IGZhbHNlO1xyXG4gIGtleS5pc1VwID0gdHJ1ZTtcclxuICBrZXkucHJlc3MgPSB1bmRlZmluZWQ7XHJcbiAga2V5LnJlbGVhc2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGtleS5kb3duSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZihldmVudC5rZXlDb2RlID09PSBrZXkuY29kZSl7XHJcbiAgICAgIGlmKGtleS5pc1VwICYmIGtleS5wcmVzcykga2V5LnByZXNzKCk7XHJcbiAgICAgIGtleS5pc0Rvd24gPSB0cnVlO1xyXG4gICAgICBrZXkuaXNVcCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBrZXkudXBIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IGtleS5jb2RlKXtcclxuICAgICAgaWYoa2V5LmlzRG93biAmJiBrZXkucmVsZWFzZSkga2V5LnJlbGVhc2UoKTtcclxuICAgICAga2V5LmlzRG93biA9IGZhbHNlO1xyXG4gICAgICBrZXkuaXNVcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5LmRvd25IYW5kbGVyLmJpbmQoa2V5KSwgZmFsc2UpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleS51cEhhbmRsZXIuYmluZChrZXkpLCBmYWxzZSk7XHJcblxyXG4gIHJldHVybiBrZXk7XHJcbn1cclxuIiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi9EaXNwbGF5T2JqZWN0LmpzJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vQnV0dG9uLmpzJztcclxuaW1wb3J0IHtyZW5kZXJlcn0gZnJvbSAnLi9SZW5kZXJlci5qcyc7XHJcbmltcG9ydCB7cG9pbnRlcn0gZnJvbSAnLi9pbnB1dC5qcyc7XHJcblxyXG5leHBvcnQgbGV0IGRyYWdnYWJsZVNwcml0ZXMgPSBbXTtcclxuZXhwb3J0IGxldCBidXR0b25zID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRHJhZ0FuZERyb3AoKSB7XHJcbiAgbGV0IGNhbnZhcyA9IHJlbmRlcmVyLmNhbnZhcztcclxuICBsZXQgZHJhZ1Nwcml0ZSA9IG51bGwsXHJcbiAgICBkcmFnT2Zmc2V0WCA9IDAsXHJcbiAgICBkcmFnT2Zmc2V0WSA9IDA7XHJcblxyXG4gIGlmIChwb2ludGVyLmlzRG93bikge1xyXG4gICAgaWYgKGRyYWdTcHJpdGUgPT09IG51bGwpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IGRyYWdnYWJsZVNwcml0ZXMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gZHJhZ2dhYmxlU3ByaXRlc1tpXTtcclxuICAgICAgICBpZiAocG9pbnRlci5oaXRUZXN0U3ByaXRlKHNwcml0ZSkgJiYgc3ByaXRlLmRyYWdnYWJsZSkge1xyXG4gICAgICAgICAgZHJhZ09mZnNldFggPSBwb2ludGVyLnggLSBzcHJpdGUuZ3g7XHJcbiAgICAgICAgICBkcmFnT2Zmc2V0WSA9IHBvaW50ZXIueSAtIHNwcml0ZS5neTtcclxuICAgICAgICAgIGRyYWdTcHJpdGUgPSBzcHJpdGU7XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBzcHJpdGUucGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgY2hpbGRyZW4uc3BsaWNlKGNoaWxkcmVuLmluZGV4T2Yoc3ByaXRlKSwgMSk7XHJcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHNwcml0ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRyYWdTcHJpdGUueCA9IHBvaW50ZXIueCAtIGRyYWdPZmZzZXRYO1xyXG4gICAgICBkcmFnU3ByaXRlLnkgPSBwb2ludGVyLnkgLSBkcmFnT2Zmc2V0WTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChwb2ludGVyLmlzVXApIHtcclxuICAgIGRyYWdTcHJpdGUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZHJhZ2dhYmxlU3ByaXRlcy5zb21lKHNwcml0ZSA9PiB7XHJcbiAgICBpZiAocG9pbnRlci5oaXRUZXN0U3ByaXRlKHNwcml0ZSkgJiYgc3ByaXRlLmRyYWdnYWJsZSkge1xyXG4gICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VJbnRlcmFjdGl2ZShvKSB7XHJcbiAgby5wcmVzcyA9IG8ucHJlc3MgfHwgdW5kZWZpbmVkO1xyXG4gIG8ucmVsZWFzZSA9IG8ucmVsZWFzZSB8fCB1bmRlZmluZWQ7XHJcbiAgby5vdmVyID0gby5vdmVyIHx8IHVuZGVmaW5lZDtcclxuICBvLm91dCA9IG8ub3V0IHx8IHVuZGVmaW5lZDtcclxuICBvLnRhcCA9IG8udGFwIHx8IHVuZGVmaW5lZDtcclxuXHJcbiAgby5zdGF0ZSA9IFwidXBcIjtcclxuICBvLmFjdGlvbiA9IFwiXCI7XHJcbiAgby5wcmVzc2VkID0gZmFsc2U7XHJcbiAgby5ob3Zlck92ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAg5L+d5oyB5Y6f5aeLIHVwZGF0ZSDliLAgcHJlVXBkYXRlXHJcbiAgaWYoby51cGRhdGUpXHJcbiAgICBvLnByZVVwZGF0ZSA9IG8udXBkYXRlO1xyXG5cclxuICBvLnVwZGF0ZSA9IChkdCkgPT4ge1xyXG4gICAgLy8g6LCD55So5Y6f5aeLdXBkYXRlXHJcbiAgICBpZihvLnByZVVwZGF0ZSlcclxuICAgICAgby5wcmVVcGRhdGUoZHQpO1xyXG4gICAgXHJcbiAgICBsZXQgY2FudmFzID0gcmVuZGVyZXIuY2FudmFzO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2ludGVyYWN0aXZlIHVwZGF0ZScpO1xyXG4gICAgaWYgKG8udmlzaWJsZSA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgbGV0IGhpdCA9IHBvaW50ZXIuaGl0VGVzdFNwcml0ZShvKTtcclxuXHJcbiAgICBpZiAocG9pbnRlci5pc1VwKSB7XHJcbiAgICAgIG8uc3RhdGUgPSBcInVwXCI7XHJcbiAgICAgIGlmIChvIGluc3RhbmNlb2YgQnV0dG9uKSBvLmdvdG9BbmRTdG9wKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaXQpIHtcclxuICAgICAgby5zdGF0ZSA9IFwib3ZlclwiO1xyXG4gICAgICBpZiAoby5mcmFtZXMgJiYgby5mcmFtZXMubGVuZ3RoID09PSAzICYmIG8gaW5zdGFuY2VvZiBCdXR0b24pIHtcclxuICAgICAgICBvLmdvdG9BbmRTdG9wKDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocG9pbnRlci5pc0Rvd24pIHtcclxuICAgICAgICBvLnN0YXRlID0gXCJkb3duXCI7XHJcbiAgICAgICAgaWYgKG8gaW5zdGFuY2VvZiBCdXR0b24pIHtcclxuICAgICAgICAgIGlmIChvLmZyYW1lcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgby5nb3RvQW5kU3RvcCgyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG8uZ290b0FuZFN0b3AoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG8uc3RhdGUgPT09IFwiZG93blwiKSB7XHJcbiAgICAgIGlmICghby5wcmVzc2VkKSB7XHJcbiAgICAgICAgaWYgKG8ucHJlc3MpIG8ucHJlc3MoKTtcclxuICAgICAgICBvLnByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgIG8uYWN0aW9uID0gXCJwcmVzc2VkXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoby5zdGF0ZSA9PT0gXCJvdmVyXCIpIHtcclxuICAgICAgaWYgKG8ucHJlc3NlZCkge1xyXG4gICAgICAgIGlmIChvLnJlbGVhc2UpIG8ucmVsZWFzZSgpO1xyXG4gICAgICAgIG8ucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIG8uYWN0aW9uID0gXCJyZWxlYXNlZFwiO1xyXG4gICAgICAgIGlmIChwb2ludGVyLnRhcHBlZCAmJiBvLnRhcCkgby50YXAoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFvLmhvdmVyT3Zlcikge1xyXG4gICAgICAgIGlmIChvLm92ZXIpIG8ub3ZlcigpO1xyXG4gICAgICAgIG8uaG92ZXJPdmVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvLnN0YXRlID09PSBcInVwXCIpIHtcclxuICAgICAgaWYgKG8ucHJlc3NlZCkge1xyXG4gICAgICAgIGlmIChvLnJlbGVhc2UpIG8ucmVsZWFzZSgpO1xyXG4gICAgICAgIG8ucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIG8uYWN0aW9uID0gXCJyZWxlYXNlZFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoby5ob3Zlck92ZXIpIHtcclxuICAgICAgICBpZiAoby5vdXQpIG8ub3V0KCk7XHJcbiAgICAgICAgby5ob3Zlck92ZXIgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOm8oOagh+aViOaenFxyXG4gICAgaWYgKG8uc3RhdGUgPT09IFwib3ZlclwiIHx8IG8uc3RhdGUgPT09IFwiZG93blwiKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG59XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhEaXNwbGF5T2JqZWN0LnByb3RvdHlwZSwge1xyXG4gIGludGVyYWN0aXZlOiB7XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pbnRlcmFjdGl2ZTtcclxuICAgIH0sXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgbWFrZUludGVyYWN0aXZlKHRoaXMpO1xyXG4gICAgICAgIC8vIGJ1dHRvbnMucHVzaCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgIC8vIGJ1dHRvbnMuc3BsaWNlKGJ1dHRvbnMuaW5kZXhPZih0aGlzKSwgMSk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWVcclxuICB9LFxyXG4gIGRyYWdnYWJsZToge1xyXG4gICAgZ2V0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZHJhZ2dhYmxlO1xyXG4gICAgfSxcclxuICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICBkcmFnZ2FibGVTcHJpdGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgZHJhZ2dhYmxlU3ByaXRlcy5zcGxpY2UoZHJhZ2dhYmxlU3ByaXRlcy5pbmRleE9mKHRoaXMpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWVcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgY29tbWVudCBmcm9tICcuL2NvbW1vbi5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNhbnZhcyh3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICcyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyID0gJzFweCBkYXNoZWQgYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlciA9ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9ICd3aGl0ZScpIHtcclxuXHJcbiAgbGV0IGNhbnZhcyA9ICQkbmV3KCdjYW52YXMnKTtcclxuICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIGNhbnZhcy5zdHlsZS5ib3JkZXIgPSBib3JkZXI7XHJcbiAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcclxuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gIGNhbnZhcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCh0eXBlKTtcclxuXHJcbiAgcmV0dXJuIGNhbnZhcztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvdXRzaWRlQm91bmRzKHNwcml0ZSwgYm91bmRzLCBleHRyYSA9IHVuZGVmaW5lZCl7XHJcblxyXG4gIGxldCB4ID0gYm91bmRzLngsXHJcbiAgICAgIHkgPSBib3VuZHMueSxcclxuICAgICAgd2lkdGggPSBib3VuZHMud2lkdGgsXHJcbiAgICAgIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XHJcblxyXG4gIGxldCBjb2xsaXNpb247XHJcblxyXG4gIGlmIChzcHJpdGUueCA8IHggLSBzcHJpdGUud2lkdGgpIHtcclxuICAgIGNvbGxpc2lvbiA9IFwibGVmdFwiO1xyXG4gIH1cclxuICAvL1RvcFxyXG4gIGlmIChzcHJpdGUueSA8IHkgLSBzcHJpdGUuaGVpZ2h0KSB7XHJcbiAgICBjb2xsaXNpb24gPSBcInRvcFwiO1xyXG4gIH1cclxuICAvL1JpZ2h0XHJcbiAgaWYgKHNwcml0ZS54ID4gd2lkdGgpIHtcclxuICAgIGNvbGxpc2lvbiA9IFwicmlnaHRcIjtcclxuICB9XHJcbiAgLy9Cb3R0b21cclxuICBpZiAoc3ByaXRlLnkgPiBoZWlnaHQpIHtcclxuICAgIGNvbGxpc2lvbiA9IFwiYm90dG9tXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoY29sbGlzaW9uICYmIGV4dHJhKSBleHRyYShjb2xsaXNpb24pO1xyXG5cclxuICByZXR1cm4gY29sbGlzaW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbihzcHJpdGUsIGJvdW5kcywgYm91bmNlID0gZmFsc2UsIGV4dHJhID0gdW5kZWZpbmVkKSB7XHJcbiAgbGV0IHggPSBib3VuZHMueCxcclxuICAgIHkgPSBib3VuZHMueSxcclxuICAgIHdpZHRoID0gYm91bmRzLndpZHRoLFxyXG4gICAgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcclxuXHJcbiAgbGV0IGNvbGxpc2lvbjtcclxuXHJcbiAgLy9MZWZ0XHJcbiAgaWYgKHNwcml0ZS54IDwgeCkge1xyXG4gICAgaWYgKGJvdW5jZSkgc3ByaXRlLnZ4ICo9IC0xO1xyXG4gICAgaWYgKHNwcml0ZS5tYXNzKSBzcHJpdGUudnggLz0gc3ByaXRlLm1hc3M7XHJcbiAgICBzcHJpdGUueCA9IHg7XHJcbiAgICBjb2xsaXNpb24gPSBcImxlZnRcIjtcclxuICB9XHJcbiAgLy9Ub3BcclxuICBpZiAoc3ByaXRlLnkgPCB5KSB7XHJcbiAgICBpZiAoYm91bmNlKSBzcHJpdGUudnkgKj0gLTE7XHJcbiAgICBpZiAoc3ByaXRlLm1hc3MpIHNwcml0ZS52eSAvPSBzcHJpdGUubWFzcztcclxuICAgIHNwcml0ZS55ID0geTtcclxuICAgIGNvbGxpc2lvbiA9IFwidG9wXCI7XHJcbiAgfVxyXG4gIC8vUmlnaHRcclxuICBpZiAoc3ByaXRlLnggKyBzcHJpdGUud2lkdGggPiB3aWR0aCkge1xyXG4gICAgaWYgKGJvdW5jZSkgc3ByaXRlLnZ4ICo9IC0xO1xyXG4gICAgaWYgKHNwcml0ZS5tYXNzKSBzcHJpdGUudnggLz0gc3ByaXRlLm1hc3M7XHJcbiAgICBzcHJpdGUueCA9IHdpZHRoIC0gc3ByaXRlLndpZHRoO1xyXG4gICAgY29sbGlzaW9uID0gXCJyaWdodFwiO1xyXG4gIH1cclxuICAvL0JvdHRvbVxyXG4gIGlmIChzcHJpdGUueSArIHNwcml0ZS5oZWlnaHQgPiBoZWlnaHQpIHtcclxuICAgIGlmIChib3VuY2UpIHNwcml0ZS52eSAqPSAtMTtcclxuICAgIGlmIChzcHJpdGUubWFzcykgc3ByaXRlLnZ5IC89IHNwcml0ZS5tYXNzO1xyXG4gICAgc3ByaXRlLnkgPSBoZWlnaHQgLSBzcHJpdGUuaGVpZ2h0O1xyXG4gICAgY29sbGlzaW9uID0gXCJib3R0b21cIjtcclxuICB9XHJcblxyXG4gIGlmIChjb2xsaXNpb24gJiYgZXh0cmEpIGV4dHJhKGNvbGxpc2lvbik7XHJcblxyXG4gIHJldHVybiBjb2xsaXNpb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShzMSwgczIpIHtcclxuICBsZXQgdnggPSBzMi5jZW50ZXJYIC0gczEuY2VudGVyWDtcclxuICBsZXQgdnkgPSBzMi5jZW50ZXJZIC0gczEuY2VudGVyWTtcclxuICByZXR1cm4gTWF0aC5zcXJ0KHZ4ICogdnggKyB2eSAqIHZ5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbGxvd0Vhc2UoZm9sbG93ZXIsIGxlYWRlciwgc3BlZWQpIHtcclxuICBsZXQgdnggPSBsZWFkZXIuY2VudGVyWCAtIGZvbGxvd2VyLmNlbnRlclg7XHJcbiAgbGV0IHZ5ID0gbGVhZGVyLmNlbnRlclkgLSBmb2xsb3dlci5jZW50ZXJZO1xyXG4gIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcblxyXG4gIGlmIChkaXN0YW5jZSA+PSAxKSB7XHJcbiAgICBmb2xsb3dlci54ICs9IHZ4ICogc3BlZWQ7XHJcbiAgICBmb2xsb3dlci55ICs9IHZ5ICogc3BlZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9sbG93Q29uc3RhbnQoZm9sbG93ZXIsIGxlYWRlciwgc3BlZWQpIHtcclxuICBsZXQgdnggPSBsZWFkZXIuY2VudGVyWCAtIGZvbGxvd2VyLmNlbnRlclg7XHJcbiAgbGV0IHZ5ID0gbGVhZGVyLmNlbnRlclkgLSBmb2xsb3dlci5jZW50ZXJZO1xyXG4gIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCh2eCAqIHZ4ICsgdnkgKiB2eSk7XHJcblxyXG4gIGlmIChkaXN0YW5jZSA+PSBzcGVlZCkge1xyXG4gICAgZm9sbG93ZXIueCArPSAodnggLyBkaXN0YW5jZSkgKiBzcGVlZDtcclxuICAgIGZvbGxvd2VyLnkgKz0gKHZ5IC8gZGlzdGFuY2UpICogc3BlZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUoczEsIHMyKSB7XHJcbiAgcmV0dXJuIE1hdGguYXRhbjIoXHJcbiAgICBzMi5jZW50ZXJZIC0gczEuY2VudGVyWSxcclxuICAgIHMyLmNlbnRlclggLSBzMS5jZW50ZXJYXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVNwcml0ZShyb3RhdGluZ1Nwcml0ZSwgY2VudGVyU3ByaXRlLCBkaXN0YW5jZSwgYW5nbGUpIHtcclxuICByb3RhdGluZ1Nwcml0ZS54ID0gY2VudGVyU3ByaXRlLmNlbnRlclggLSByb3RhdGluZ1Nwcml0ZS5wYXJlbnQueCArXHJcbiAgICAoZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkpIC1cclxuICAgIHJvdGF0aW5nU3ByaXRlLmhhbGZXaWR0aDtcclxuXHJcbiAgcm90YXRpbmdTcHJpdGUueSA9IGNlbnRlclNwcml0ZS5jZW50ZXJZIC0gcm90YXRpbmdTcHJpdGUucGFyZW50LnkgK1xyXG4gICAgKGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpKSAtXHJcbiAgICByb3RhdGluZ1Nwcml0ZS5oYWxmSGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlUG9pbnQocG9pbnRYLCBwb2ludFksIGRpc3RhbmNlWCwgZGlzdGFuY2VZLCBhbmdsZSkge1xyXG4gIGxldCBwb2ludCA9IHt9O1xyXG4gIHBvaW50LnggPSBwb2ludFggKyBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0YW5jZVg7XHJcbiAgcG9pbnQueSA9IHBvaW50WSArIE1hdGguc2luKGFuZ2xlKSAqIGRpc3RhbmNlWTtcclxuICByZXR1cm4gcG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG59XHJcbiIsIi8vIGltcG9ydCBtYWluIGZyb20gJy4vdGVzdC9ndWFfYnV5LmpzJztcclxuLy8gaW1wb3J0IG1haW4gZnJvbSAnLi90ZXN0L2d1YV9saXN0LmpzJztcclxuaW1wb3J0IG1haW4gZnJvbSAnLi9zcmMvTG90dGVyeV9BbmltYXRlLmpzJztcclxuXHJcbm1haW4oKTtcclxuIiwiaW1wb3J0IFRpbmEgZnJvbSAnLi4vbGlicy90aW5hL1RpbmEuanMnO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdCBmcm9tICcuLi9saWJzL3RpbmEvRGlzcGxheU9iamVjdC5qcyc7XHJcbmltcG9ydCB7VGV4dH0gZnJvbSAnLi4vbGlicy90aW5hL1RleHQuanMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKCkge1xyXG5cclxufVxyXG5sZXQgbG90TnVtID0gd2luZG93LmxvdE51bSB8fCBbXTtcclxubGV0IHNwZWVkcyA9IFsxNSwxMywxNCwxMywxNV07IC8v5q+P5Liq55CD55qE6YCf5bqmXHJcbmxldCBjaXJjbGUgPSAyOy8v6KaB6L2s5aSa5bCR5ZyIXHJcblxyXG5sZXQgcWl1TnVtID0gNTsvLyDnkIPnmoTmlbDph49cclxubGV0IHFpdW1lbiA9IFtdO1xyXG5cclxubGV0IGNvdW50ID0gMTI7IC8v5pyJ5Yeg5Liq5pWw5a2XXHJcbmxldCBudW0gPSBbXTsgLy/mjpLliJfmlbDnu4RcclxuLy9sZXQgbnVtWCA9IDM1Oy8v5pWw5a2X55qE6Ze06LedXHJcbmxldCBudW1IID0gOTA7Ly/mjpLliJfmlbDlrZfnmoTpl7Tot51cclxubGV0IHRvdGFsSCA9IG51bUggKiBjb3VudDsvL+aOkuWIl+aVsOWtl+eahCDmgLvplb/luqZcclxuXHJcbmxldCBhc3NldHNlb3Q7XHJcbmlmKG5hdmlnYXRvci51c2VyQWdlbnQuc3BsaXQoXCI7XCIpWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIm1zaWUgMTAuMFwiKT09XCItMVwiP2ZhbHNlOnRydWUpe1xyXG4gIGFzc2V0c2VvdCA9ICdhc3NldHMvaW1wYWN0LnR0ZidcclxufVxyXG5lbHNle1xyXG4gIGFzc2V0c2VvdCA9ICdhc3NldHMvaW1wYWN0LnR0ZidcclxufVxyXG5cclxubGV0IHQgPSBuZXcgVGluYSg1ODAsOTYsZ2FtZSxbYXNzZXRzZW90LCdhc3NldHMvcWl1LnBuZycsJ2Fzc2V0cy9iYWkucG5nJ10pO1xyXG5cclxuY2xhc3MgUWl1cWl1IGV4dGVuZHMgRGlzcGxheU9iamVjdHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNwZWVkID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5sb29wTnVtID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5zaG93TnVtID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5udW1iZXJzID0gW107XHJcblxyXG4gICAgLy/lrprkuYnog4zmma9cclxuICAgIHRoaXMuYmcgPSBuZXcgdC5TcHJpdGUodC5hc3NldHNbJ2Fzc2V0cy9xaXUucG5nJ10pO1xyXG4gICAgdGhpcy5iYWkgPSBuZXcgdC5TcHJpdGUodC5hc3NldHNbJ2Fzc2V0cy9iYWkucG5nJ10pO1xyXG4gICAgdGhpcy5iYWkueCA9IDE2O1xyXG4gICAgdGhpcy5iYWkueSA9IC01NTtcclxuICAgIHRoaXMuYmFpMiA9IG5ldyB0LlNwcml0ZSh0LmFzc2V0c1snYXNzZXRzL2JhaS5wbmcnXSk7XHJcbiAgICB0aGlzLmJhaTIueCA9IDE2O1xyXG4gICAgdGhpcy5iYWkyLnkgPSA3MDtcclxuXHJcbiAgICAvL+WumuS5ieaVsOWtl+WbvueJh1xyXG4gICAgZm9yKGxldCBpPTA7aTxjb3VudDtpKyspe1xyXG4gICAgICBsZXQgbnVtO1xyXG4gICAgICBpZiggaSA8PSA5ICl7XHJcbiAgICAgICAgbnVtID0gIG5ldyBUZXh0KCcwJyArIGksJzM1cHggaW1wYWN0JywnYmxhY2snKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIG51bSA9ICBuZXcgVGV4dChpLCczNXB4IGltcGFjdCcsJ2JsYWNrJyk7XHJcbiAgICAgIH1cclxuICAgICAgbnVtLndpZHRoID0gMzY7XHJcbiAgICAgIHRoaXMubnVtYmVyc1tpXSA9IG51bTtcclxuICAgICAgdGhpcy5hZGRDaGlsZChudW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGQodGhpcy5iYWksdGhpcy5iYWkyKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZyk7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIC8vIOaVsOWtl+aOkueJiFxyXG4gIGluaXQoKXtcclxuICAgIGZvcihsZXQgaSA9MDsgaTxjb3VudDsrK2kpe1xyXG4gICAgICB0aGlzLmJnLnB1dENlbnRlcih0aGlzLm51bWJlcnNbaV0pO1xyXG4gICAgICB0aGlzLm51bWJlcnNbaV0ueSA9IG51bUggKiBpO1xyXG4gICAgICBpZih0aGlzLm51bWJlcnNbaV0uY29udGVudCA9PSAxMSl7XHJcbiAgICAgICAgdGhpcy5udW1iZXJzW2ldLnggPSAzNDtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyDpgJ/luqblrprkuYlcclxuICBwbGF5KHNwZWVkLGxvb3BOdW0sc2hvd051bSl7XHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB0aGlzLmxvb3BOdW0gPSBsb29wTnVtO1xyXG4gICAgdGhpcy5zaG93TnVtID0gc2hvd051bTtcclxuICB9XHJcblxyXG4gIC8v54m55pWIXHJcbiAgdXBkYXRlKCl7XHJcbiAgICAvL+W9k+mAn+W6piBzcGVlZCDnrYnkuo7pm7bnmoTml7blgJkg5oqKIOimgeWBnOeahOWtl+avjeaOkuS9jeWIsOacgOS4iumdolxyXG4gICAgLy/lubbkuJTorqnku5bml4vovazlh6DlnIhcclxuICAgIGlmKHRoaXMuc3BlZWQgPiAwKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspe1xyXG4gICAgICAgIHRoaXMubnVtYmVyc1tpXS55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdmFyIGJvdHRvbVkgPSA1MjtcclxuICAgICAgICBpZih0aGlzLm51bWJlcnNbaV0ueSA+PSBib3R0b21ZKXtcclxuICAgICAgICAgIHRoaXMubnVtYmVyc1tpXS55ID0gdGhpcy5udW1iZXJzW2ldLnkgLSB0b3RhbEg7XHJcbiAgICAgICAgICBpZihpID09PSB0aGlzLnNob3dOdW0pXHJcbiAgICAgICAgICAgIHRoaXMubG9vcE51bS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL+W9k+aXi+i9rOWujOe7k+S7peWQju+8jOimgeWBnOeahOaVsOWtl+WcqOS7peaXi+i9rOeahOaWueW8j+WBnOS4i+adpeOAglxyXG4gICAgICBpZih0aGlzLmxvb3BOdW0gPT09IDApe1xyXG4gICAgICAgIGxldCB0bXA7XHJcbiAgICAgICAgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpIT0tMSl7XHJcbiAgICAgICAgICB0bXAgPSAoMjEgLSAgdGhpcy5udW1iZXJzW3RoaXMuc2hvd051bV0ueSk7XHJcbiAgICAgICAgfWVsc2UgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5zcGxpdChcIjtcIilbMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKFwibXNpZSAxMC4wXCIpPT1cIi0xXCI/ZmFsc2U6dHJ1ZSkge1xyXG4gICAgICAgICAgdG1wID0gKDIyIC0gIHRoaXMubnVtYmVyc1t0aGlzLnNob3dOdW1dLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdG1wID0gKDI2IC0gIHRoaXMubnVtYmVyc1t0aGlzLnNob3dOdW1dLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0bXAgPCB0aGlzLnNwZWVkKXtcclxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyc1tpXS55ICs9IHRtcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4vL3dpbmRvdy5rYWlzaSA9IGZ1bmN0aW9uKGxvdE51bSl7XHJcbi8vICBpZihsb3ROdW0gPT0gdW5kZWZpbmVkKXtcclxuLy8gICAgdGhpcy5udW0gPSAxO1xyXG4vLyAgfVxyXG4vLyAgZWxzZXtcclxuLy8gICAgdGhpcy5udW0gPSBsb3ROdW07XHJcbi8vICB9XHJcbi8vICBmb3IobGV0IGkgPSAwOyBpPCBxaXVOdW07KytpKSB7XHJcbi8vICAgIHFpdW1lbltpXS5wbGF5KHNwZWVkc1tpXSxjaXJjbGUsdGhpcy5udW1baV0pO1xyXG4vLyAgICBjb25zb2xlLmxvZyh0aGlzLm51bVtpXSk7XHJcbi8vICB9XHJcbi8vfVxyXG5cclxuZnVuY3Rpb24gZ28obG90TnVtKXtcclxuICBpZihsb3ROdW0gPT0gdW5kZWZpbmVkKXtcclxuICAgIHRoaXMubnVtID0gMTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHRoaXMubnVtID0gbG90TnVtO1xyXG4gIH1cclxuICBmb3IobGV0IGkgPSAwOyBpPCBxaXVOdW07KytpKSB7XHJcbiAgICBxaXVtZW5baV0ucGxheShzcGVlZHNbaV0sY2lyY2xlLHRoaXMubnVtW2ldKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWUoKSB7XHJcbiAgLy/lvqrnjq/mt7vliqDnkINcclxuICBmb3IobGV0IGkgPSAwOyBpPCBxaXVOdW07KytpKSB7XHJcbiAgICBxaXVtZW5baV0gPSBuZXcgUWl1cWl1KCk7XHJcbiAgICB0LnN0YWdlLmFkZENoaWxkKHFpdW1lbltpXSk7XHJcbiAgICBxaXVtZW5baV0ueCA9IGkgKiAxMjA7XHJcbiAgfTtcclxuICAvL+imgeW+queOr+eahOeJueaViFxyXG4gIC8vd2luZG93LmthaXNpKCk7XHJcbiAgd2luZG93LmthaXNpID0gZ287XHJcbn1cclxuXHJcbnQuc3RhcnQoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19