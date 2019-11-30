"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _reps = _interopRequireDefault(require("./routes/reps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use('/reps/:state', _reps["default"].get);
app.use('/rep/:cid', _reps["default"].sectorsTo);
app.listen(process.env.SERVER_PORT, function () {
  console.log("Started App Server on port ".concat(process.env.SERVER_PORT));
});
var _default = app;
exports["default"] = _default;
