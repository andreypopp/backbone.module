((root, factory) ->
  if typeof define == 'function' and define.amd
    define ['backbone', 'underscore'], (Backbone, _) ->
      root.Backbone.Module = factory(Backbone, _)
  else if typeof require == 'function' and module?.exports?
    module.exports = factory(require('backbone'), require('undercore'))
  else
    root.Backbone.Module = factory(root.Backbone, root._)
) this, (Backbone, _) ->

  class Module

    @extend: (mixins...) ->
      for mixin in mixins
        for k of mixin
          this[k] = mixin[k]
        mixin.extended(this) if mixin.extended?

    @include: (mixins...) ->
      for mixin in mixins
        for k of mixin
          this.prototype[k] = mixin[k]
        mixin.included(this) if mixin.included?
