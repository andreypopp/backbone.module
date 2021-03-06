((root, factory) ->
  if typeof define == 'function' and define.amd
    define ['backbone', 'underscore'], (Backbone, _) ->
      root.Backbone.Module = factory(Backbone, _)
  else if typeof require == 'function' and module?.exports?
    module.exports = factory(require('backbone'), require('underscore'))
  else
    root.Backbone.Module = factory(root.Backbone, root._)
) this, (Backbone, {extend}) ->

  class Module

    @extend: (mixins...) ->
      for mixin in mixins
        for k of mixin when k not in ['included', 'extended']
          this[k] = mixin[k]
        mixin.extended(this) if mixin.extended?

    @include: (mixins...) ->
      for mixin in mixins
        for k of mixin when k not in ['included', 'extended']
          this.prototype[k] = mixin[k]
        mixin.included(this) if mixin.included?

  extend(Backbone.Model, Module)
  extend(Backbone.View, Module)
  extend(Backbone.Collection, Module)
  extend(Backbone.Router, Module)

  Module
