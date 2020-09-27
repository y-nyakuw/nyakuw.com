
var text = new Blotter.Text("Ýana Poli", {
    family: "'Times', serif",
    fill: "white",
    size: 180,
    paddingLeft:50,
    paddingRight:100,
    paddingTop:40,
    paddingBottom:0,
  });
  
  var material = new Blotter.LiquidDistortMaterial();
 
  material.uniforms.uSpeed.value = 0.5

  var blotter = new Blotter(material, {
    texts : text
  });
  
  var elem = document.querySelector(" .app ")
  var scope = blotter.forText(text);
  
  scope.appendTo(elem);
  document.addEventListener("mousemove",function 
  (move) {
      material.uniforms.uVolatility.value = move.clientX * 0.0008;
  });