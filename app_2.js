
var text = new Blotter.Text("Digital Producer", {
    family: "'Times', serif",
    size: 50,
    fill: "white",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
  });
  
  var material = new Blotter.LiquidDistortMaterial();
  
  material.uniforms.uSpeed.value = 0.2

  var blotter = new Blotter(material, {
    texts : text
  });
  
  var elem = document.querySelector(" .app_2 ")
  var scope = blotter.forText(text);
  
  scope.appendTo(elem);