var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';

import { LOCATION_CHANGE } from './reducer';

var ConnectedRouter = function (_Component) {
  _inherits(ConnectedRouter, _Component);

  function ConnectedRouter() {
    _classCallCheck(this, ConnectedRouter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ConnectedRouter.prototype.render = function render() {
    var _props = this.props,
        propsStore = _props.store,
        history = _props.history,
        children = _props.children,
        props = _objectWithoutProperties(_props, ['store', 'history', 'children']);

    var store = propsStore || this.context.store;

    return React.createElement(
      Router,
      _extends({}, props, { history: history }),
      React.createElement(Route, { render: function render(_ref) {
          var location = _ref.location;

          store.dispatch({
            type: LOCATION_CHANGE,
            payload: location
          });

          return children;
        } })
    );
  };

  return ConnectedRouter;
}(Component);

ConnectedRouter.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
  children: PropTypes.node
};
ConnectedRouter.contextTypes = {
  store: PropTypes.object
};


export default ConnectedRouter;