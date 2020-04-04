// init controller
let controller = new ScrollMagic.Controller()

// create a scene
const scece = new ScrollMagic.Scene({
  duration: 9000, // the scene should last for a scroll distance of 100px
  triggerElement: "intro"
})
  .addIndicators()
  .setPin("intro")
  .addTo(controller)

//   Video Animation
let scrollpos = 0

scece.on("update", (e) => {
  scrollpos = e.scrollPos
  console.log(e)
})
