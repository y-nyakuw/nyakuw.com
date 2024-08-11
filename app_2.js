
var text = new Blotter.Text("creative lead", {
    family: "'Times', serif",
    size: 70,
    fill: "white",
    paddingLeft:30,
    paddingRight:30,
    paddingTop:30,
    paddingBottom:0,
  });
  
  var material = new Blotter.LiquidDistortMaterial();
  
  material.uniforms.uSpeed.value = 0.4

  var blotter = new Blotter(material, {
    texts : text
  });
  
  var elem = document.querySelector(" .app_2 ")
  var scope = blotter.forText(text);
  
  scope.appendTo(elem);
