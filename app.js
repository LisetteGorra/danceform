const selectBox = document.querySelector('#select');
selectBox.addEventListener('select', function(e){
  if(selectBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});
