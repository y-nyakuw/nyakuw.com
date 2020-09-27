
var text = new Blotter.Text("Digital Producer from creative until launch", {
    family: "'Times', serif",
    size: 40,
    fill: "white",
    paddingLeft:40,
    paddingRight:40,
    paddingTop:10,
    paddingBottom:0,
  });
  
  var material = new Blotter.LiquidDistortMaterial();
  
  material.uniforms.uSpeed.value = 0.2

  var blotter = new Blotter(material, {
    texts : text
  });
  
  var elem = document.querySelector(" .app_2 ")
  var scope = blotter.forText(text);
  
  scope.appendTo(elem);