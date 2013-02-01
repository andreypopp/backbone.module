// Generated by CoffeeScript 1.4.0
var __slice = [].slice;

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['backbone', 'underscore'], function(Backbone, _) {
      return root.Backbone.Module = factory(Backbone, _);
    });
  } else if (typeof require === 'function' && ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null)) {
    return module.exports = factory(require('backbone'), require('undercore'));
  } else {
    return root.Backbone.Module = factory(root.Backbone, root._);
  }
})(this, function(Backbone, _arg) {
  var Module, extend;
  extend = _arg.extend;
  extend(Backbone.Model, Module);
  extend(Backbone.View, Module);
  extend(Backbone.Collection, Module);
  extend(Backbone.Router, Module);
  return Module = (function() {

    function Module() {}

    Module.extend = function() {
      var k, mixin, mixins, _i, _len, _results;
      mixins = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _results = [];
      for (_i = 0, _len = mixins.length; _i < _len; _i++) {
        mixin = mixins[_i];
        for (k in mixin) {
          if (key !== 'included' && key !== 'extended') {
            this[k] = mixin[k];
          }
        }
        if (mixin.extended != null) {
          _results.push(mixin.extended(this));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Module.include = function() {
      var k, mixin, mixins, _i, _len, _results;
      mixins = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _results = [];
      for (_i = 0, _len = mixins.length; _i < _len; _i++) {
        mixin = mixins[_i];
        for (k in mixin) {
          if (key !== 'included' && key !== 'extended') {
            this.prototype[k] = mixin[k];
          }
        }
        if (mixin.included != null) {
          _results.push(mixin.included(this));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    return Module;

  })();
});
