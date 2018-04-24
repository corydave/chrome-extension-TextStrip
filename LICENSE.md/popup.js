document.addEventListener('paste', function() {setTimeout(stripAndCopy,250)}, false);

function stripAndCopy() {
  
  var text = document.getElementById('pastedText').value;
 
  text = text.replace(/\u2018/g, "'");
  text = text.replace(/\u2019/g, "'");
  text = text.replace(/\u201d/g, "\"");
  text = text.replace(/\u201c/g, "\"");

  document.getElementById('pastedText').value = text;
  var copyText = document.getElementById('pastedText');
  copyText.select();
  document.execCommand("Copy");
 
}    


 