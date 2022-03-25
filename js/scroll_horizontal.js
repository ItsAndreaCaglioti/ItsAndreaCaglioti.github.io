/*
    https://www.youtube.com/watch?v=M6jT6Mg-fgA 
    https://github.com/codegridweb/Horizontal-Scroll-Using-JavaScript
*/
var blocks = document.getElementsByClassName("container-profile");
var container = document.getElementsByClassName("navbar");
var hs = new HorizontalScroll.default({
    blocks: blocks,
    container: container,
    //isAnimated: true,
    springEffect: 0.8,
});