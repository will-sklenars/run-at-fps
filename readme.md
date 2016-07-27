run-at-bpm.js
========

#### JavaScript Function Dispatcher for use with RAF loop ####

This is particually useful for projects that have a large amount of 3D objects to instantiate, and have startup animations that you want to look smooth, but are jumpy due to the RAF loop slowing down because of maxed out CPU.

You can pass in a function, and specify a target framerate that you want the RAF loop to be at before the function gets called.

### Usage ###

```
bower install run-at-fps
```

```javascript

this.fps = RunAtFps()
this.onRenderFcts.push( this.fps.update.bind(this.fps) )

this.fps.runFunctionAtFps({
  toRun : importantAnimation,
  targetFrameRate : 40
})


```

Sponsored by www.lemonadelabs.io


