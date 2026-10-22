/* =========================================================
   Вышыўка крыжыкам: SVG і canvas з сетак '#'/'.'
   ========================================================= */
(function(){
"use strict";
var S = window.Stitch = {};

S.cssColor = function(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#C8102E"; };

// SVG-радок знака
S.svg = function(m, opt){
  opt = opt||{}; var c = opt.cell||10, col = opt.color||"currentColor", w = m[0].length, h = m.length, p = [];
  for(var y=0;y<h;y++) for(var x=0;x<w;x++) if(m[y][x]==="#"){
    var X=x*c, Y=y*c, a=c*0.15, b=c*0.85;
    p.push("M"+(X+a)+" "+(Y+a)+"L"+(X+b)+" "+(Y+b)+"M"+(X+b)+" "+(Y+a)+"L"+(X+a)+" "+(Y+b));
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+(w*c)+' '+(h*c)+'" '+(opt.attrs||'aria-hidden="true"')+'><path d="'+p.join("")+'" stroke="'+col+'" stroke-width="'+(c*0.22)+'" stroke-linecap="round" fill="none"/></svg>';
};
S.dataUri = function(svg){ return 'url("data:image/svg+xml,'+encodeURIComponent(svg)+'")'; };

// Адзін крыжык на canvas з эфектам ніткі
S.cross = function(x, cx, cy, c, col){
  var a=c*0.14, b=c*0.86, lw=Math.max(1.2,c*0.24);
  x.lineCap="round"; x.strokeStyle=col; x.lineWidth=lw;
  x.beginPath(); x.moveTo(cx+a,cy+b); x.lineTo(cx+b,cy+a); x.stroke();
  x.beginPath(); x.moveTo(cx+a,cy+a); x.lineTo(cx+b,cy+b); x.stroke();
  x.strokeStyle="rgba(255,255,255,.28)"; x.lineWidth=lw*0.3;
  x.beginPath(); x.moveTo(cx+a+lw*.2,cy+a); x.lineTo(cx+b,cy+b-lw*.2); x.stroke();
};
S.draw = function(x, m, ox, oy, c, col){
  for(var y=0;y<m.length;y++) for(var k=0;k<m[y].length;k++) if(m[y][k]==="#") S.cross(x, ox+k*c, oy+y*c, c, col);
};
// Ільняная тканіна (канва)
S.linen = function(x, w, h, c){
  x.fillStyle="#F5EDDF"; x.fillRect(0,0,w,h);
  x.fillStyle="rgba(120,90,50,.10)";
  for(var y=0;y<h;y+=c) for(var k=0;k<w;k+=c) x.fillRect(k-0.6,y-0.6,1.4,1.4);
};
// Паўтарэнне бардзюра па шырыні (cols клетак)
S.bandRow = function(cols){
  var out = BAND.map(function(){ return ""; });
  for(var i=0;i<cols;i++) for(var r=0;r<BAND.length;r++) out[r]+=BAND[r][i%BAND[r].length];
  return out;
};
// Растэрызацыя тэксту ў сетку
S.textMatrix = function(text, px){
  px = px||13;
  var c = document.createElement("canvas"), x = c.getContext("2d");
  var font = "800 "+px+"px Manrope, 'Segoe UI', Arial, sans-serif";
  x.font = font; var w = Math.ceil(x.measureText(text).width)+4, h = Math.ceil(px*1.3);
  c.width = w; c.height = h; x.font = font; x.fillStyle="#000"; x.textBaseline="middle"; x.fillText(text, 2, h/2+1);
  var d = x.getImageData(0,0,w,h).data, m=[], minY=h, maxY=0, minX=w, maxX=0;
  for(var y=0;y<h;y++){ var row=""; for(var k=0;k<w;k++){ var on = d[(y*w+k)*4+3]>120; row += on?"#":"."; if(on){ if(y<minY)minY=y; if(y>maxY)maxY=y; if(k<minX)minX=k; if(k>maxX)maxX=k; } } m.push(row); }
  if(maxY<minY) return ["."];
  return m.slice(minY, maxY+1).map(function(r){ return r.slice(minX, maxX+1); });
};
})();
