function randombg() {
  var random= Math.floor(Math.random() * 16) + 0;
  var bigSize = ["url('background/starfield.gif')",
                 "url('background/grid.jpg')",
                 "url('background/grid1.jpg')",
                "url('background/back1.png')",
                "url('background/back2.png')",
                "url('background/back3.png')",
                "url('background/back4.png')",
                "url('background/back5.png')",
                "url('background/back6.png')",
                "url('background/back7.png')",
                "url('background/back8.png')",
                "url('background/back9.png')",
                "url('background/back10.png')",
                "url('background/back11.png')",
                "url('background/back12.png')",
                "url('background/back13.png')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}

//gotta think about this one. Create text for the midi iframe text? Either way it's not a style
function randommidi() {
  var random= Math.floor(Math.random() * 3) + 0;
  var Midi = ["url('starfield.gif')",
                 "url('grid.jpg')",
                 "url('grid1.jpg')"];
}
//same here
function randomvid() {
  var random= Math.floor(Math.random() * 3) + 0;
  var vid = ["url('starfield.gif')",
                 "url('grid.jpg')",
                 "url('grid1.jpg')"];
  document.getElementById("randomvid").style.backgroundImage=vid[random];
}
