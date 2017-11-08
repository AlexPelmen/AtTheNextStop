var pjs = new PointJS( '2d', 800, 600 );
pjs.system.initFullPage();
pjs.system.initFPSCheck();

var game = pjs.game;
var point = pjs.vector.point;
var key = pjs.keyControl;
var OOP = pjs.OOP;
var brush = pjs.brush;
var mouse = pjs.mouseControl.initMouseControl();
var key = pjs.keyControl.initKeyControl();
var camera = pjs.camera;