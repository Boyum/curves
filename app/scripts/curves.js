(function() {
  'use strict';

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const height = window.innerHeight;
  const width = window.innerWidth;
  const lineLength = 2; // in pixels
  const iterations = 100000;

  canvas.setAttribute('height', height);
  canvas.setAttribute('width', width);
  ctx.moveTo(width/2, height/2);

  ctx.strokeStyle = 0x000000;


var n;
const pi = Math.PI;
  for (var i = 0; i < iterations; i++) {
    n = -i;
    ctx.fillRect(0,0,1,lineLength);
    ctx.rotate((((i & n) << 1) & i) != 0 ? pi/2 : -pi/2 );
    ctx.translate(lineLength,0);
  }


})();
