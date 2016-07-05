function RunAtFps () {
  var proto = {
    update : function(delta, nowMsec) {
      this.framesCounter ++
      if (nowMsec > this.oldTime + 0.2) {
        this.current = Math.round( this.framesCounter / ( nowMsec - this.oldTime ) )
        this.framesCounter = 0
        this.oldTime = nowMsec
      }
    },

    runFunctionAtFps : function(opts) {
      var self = this
      opts.callCounter = opts.callCounter || 1

      if (this.current >= (opts.targetFrameRate || 20)) {
        opts.toRun(opts.args)
      } else {
        (opts.callCounter > 20) ? didNotReachTarget() : runLater()
      }

      function didNotReachTarget() {
        opts.toRun(opts.args)
        console.warn('target framerate was not reached for fxn')
      }

      function runLater () {
        setTimeout(function () {
          opts.callCounter ++
          self.runFunctionAtFps(opts)
        }, 200)
      }
    }
  }

  return Object.assign( Object.create(proto), {
    framesCounter : 0,
    oldTime : 0,
    current : undefined
  })
}