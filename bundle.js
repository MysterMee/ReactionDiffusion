(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log( 'This has been browserified' );
module.exports = {
   width: 200,
  height: 200,
      da: 1.0,
      db: 0.5,
       f: 0.055,
       k: 0.062,
       t: 1.0,
     ldr: 0.05,
     lar: 0.2,
     lcr: -1,
    grid: [],
    next: [],
  init: function(){
    for( let y = 0; y < this.height; y++ ){
      this.grid[ y ] = [];
      this.next[ y ] = [];
      for( let x = 0; x < this.width; x++ ){
        this.grid[ y ][ x ] = { a: 1, b: 0 };
        this.next[ y ][ x ] = { a: 0, b: 0 };
      };
    };

    for( let ty = 90; ty < 110; ty++ ){
      for( let tx = 90; tx < 110; tx++ ){
        this.grid[ ty ][ tx ].b = 1;
      }
    }
  },
  laplaceA: function( y, x ){
    let sum = 0;

    /*
    sum += this.grid[ y - 1 ][ x - 1 ].a * this.ldr;
    sum += this.grid[ y - 1 ][ x ].a * this.lar;
    sum += this.grid[ y - 1 ][ x + 1 ].a * this.ldr;

    sum += this.grid[ y ][ x - 1 ].a * this.lar;
    sum += this.grid[ y ][ x ].a * this.lcr;
    sum += this.grid[ y ][ x + 1 ].a * this.lar;

    sum += this.grid[ y + 1 ][ x - 1 ].a * this.ldr;
    sum += this.grid[ y + 1 ][ x ].a * this.lar;
    sum += this.grid[ y + 1 ][ x + 1 ].a * this.ldr;
    */

    for( let n = 0; n < 9; n++ ){
      switch( n ){
        case 0:
          if( y === 0 || x === 0 ){
            continue;
          }
          sum += this.grid[ y - 1 ][ x - 1 ].a * this.ldr;
          break;

        case 1:
          if( y === 0 ){
            continue;
          }
          sum += this.grid[ y - 1 ][ x ].a * this.lar;
          break;

        case 2:
          if( y === 0 || x + 1 === this.width ){
            continue;
          }
          sum += this.grid[ y - 1 ][ x + 1 ].a * this.ldr;
          break;

        case 3:
          if( x === 0 ){
            continue;
          }
          sum += this.grid[ y ][ x - 1 ].a * this.lar;
          break;

        case 4:
          sum += this.grid[ y ][ x ].a * this.lcr;
          break;

        case 5:
          if( x + 1 === this.width ){
            continue;
          }
          sum += this.grid[ y ][ x + 1 ].a * this.lar;
          break;

        case 6:
          if( y + 1 === this.height || x === 0 ){
            continue;
          }
          sum += this.grid[ y + 1 ][ x - 1 ].a * this.ldr;
          break;

        case 7:
          if( y + 1 === this.height ){
            continue;
          }
          sum += this.grid[ y + 1 ][ x ].a * this.lar;
          break;

        case 8:
          if( y + 1 === this.height || x + 1 === this.width ){
            continue;
          }
          sum += this.grid[ y + 1 ][ x + 1 ].a * this.ldr;
          break;
      }
    }

    return sum;
  },
  laplaceB: function( y, x ){
    let sum = 0;
    /*
    sum += this.grid[ y - 1 ][ x - 1 ].b * this.ldr;
    sum += this.grid[ y - 1 ][ x ].b * this.lar;
    sum += this.grid[ y - 1 ][ x + 1 ].b * this.ldr;

    sum += this.grid[ y ][ x - 1 ].b * this.lar;
    sum += this.grid[ y ][ x ].b * this.lcr;
    sum += this.grid[ y ][ x + 1 ].b * this.lar;

    sum += this.grid[ y + 1 ][ x - 1 ].b * this.ldr;
    sum += this.grid[ y + 1 ][ x ].b * this.lar;
    sum += this.grid[ y + 1 ][ x + 1 ].b * this.ldr;
    */
    for( let n = 0; n < 9; n++ ){
      switch( n ){
        case 0:
          if( y === 0 || x === 0 ){
            continue;
          }
          sum += this.grid[ y - 1 ][ x - 1 ].b * this.ldr;
          break;

        case 1:
          if( y === 0 ){
            continue;
          }
          sum += this.grid[ y - 1 ][ x ].b * this.lar;
          break;

        case 2:
          if( y === 0 || x + 1 === this.width ){
            continue;
          }
          sum += this.grid[ y - 1 ][ x + 1 ].b * this.ldr;
          break;

        case 3:
          if( x === 0 ){
            continue;
          }
          sum += this.grid[ y ][ x - 1 ].b * this.lar;
          break;

        case 4:
          sum += this.grid[ y ][ x ].b * this.lcr;
          break;

        case 5:
          if( x + 1 === this.width ){
            continue;
          }
          sum += this.grid[ y ][ x + 1 ].b * this.lar;
          break;

        case 6:
          if( y + 1 === this.height || x === 0 ){
            continue;
          }
          sum += this.grid[ y + 1 ][ x - 1 ].b * this.ldr;
          break;

        case 7:
          if( y + 1 === this.height ){
            continue;
          }
          sum += this.grid[ y + 1 ][ x ].b * this.lar;
          break;

        case 8:
          if( y + 1 === this.height || x + 1 === this.width ){
            continue;
          }
          sum += this.grid[ y + 1 ][ x + 1 ].b * this.ldr;
          break;
      }
    }

    return sum;
  },
  calculate: function( callback ){
    for( let cy = 0; cy < this.height; cy++ ){
      for( let cx = 0; cx < this.width; cx++ ){
        const a = this.grid[ cy ][ cx ].a;
        const b = this.grid[ cy ][ cx ].b;
        this.next[ cy ][ cx ].a = a + ( this.da * this.laplaceA( cy, cx ) * a - a * b * b + this.f * ( 1 - a )) * this.t;
        this.next[ cy ][ cx ].b = b + ( this.db * this.laplaceB( cy, cx ) * b + a * b * b - ( this.k + this.f ) * b ) * this.t;
      }
    }

    let temp = this.grid;
    this.grid = this.next;
    this.next = temp;
    callback();
  }
};

},{}],2:[function(require,module,exports){
const diffusion = require( './diffusion.js' );
let canvas;
let ctx;
let grid_width = 0;
let grid_height = 0;

let fit = function(){
  grid_width = canvas.clientWidth / diffusion.width;
  grid_height = canvas.clientHeight /diffusion.height;
  canvas.width = diffusion.width * grid_width;
  canvas.height = diffusion.height * grid_height;
}

let draw = function( obj ){
  for( let y = 0; y < diffusion.height; y++ ){
    for( let x = 0; x < diffusion.width; x++ ){
      let value = 255 - Math.floor( diffusion.grid[ y ][ x ].b * 255 );
      ctx.fillStyle = "rgb(" + value + "," + value + "," + value + ")";
      ctx.fillRect( x * grid_width, y * grid_height, grid_width, grid_height );
    }
  }
}

window.addEventListener( 'load', function(){
  canvas = document.querySelector( 'canvas' );
  ctx = canvas.getContext( '2d' );

  ctx.fillStyle = "rgb(255,255,255)";
  ctx.fillRect( 0, 0, canvas.width, canvas.height );

  console.log( 'onload via watchify', diffusion );
  diffusion.init();
  fit();
  window.onresize = fit();
  setInterval( () => diffusion.calculate( draw ), 125 );
});

},{"./diffusion.js":1}]},{},[2]);
