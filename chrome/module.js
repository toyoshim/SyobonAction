var Module = {
  print: function() {
    text = Array.prototype.slice.call(arguments).join(' ');
    console.log(text);
  },
  printErr: function() {
    text = Array.prototype.slice.call(arguments).join(' ');
    console.error(text);
  },
  canvas: document.getElementById('canvas'),
};
