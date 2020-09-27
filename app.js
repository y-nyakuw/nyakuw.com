
var text = new Blotter.Text("Ýana Poli", {
    family: "'Times', serif",
    fill: "white",
    size: 90,
    paddingLeft:100,
    paddingRight:100,
    paddingTop:100,
    paddingBottom:1,
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
      material.uniforms.uVolatility.value = move.clientX * 0.00008;
  });