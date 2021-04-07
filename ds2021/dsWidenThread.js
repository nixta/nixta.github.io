(() => {
  var thread = document.getElementsByClassName('str-chat__thread ');
  if (thread.length > 0) {
      var width = parseInt(thread[0].style.maxWidth);
      if (width) {
          if (width < 1000) {
              width += 100;
          }
          thread[0].style.maxWidth = `${width}px`;
      }
      else {
          thread[0].style.maxWidth = '400px';
      }
  }
})()
