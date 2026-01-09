let textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    let key = event.key;
    console.log(event.key);


   if (event.key >= 'a' && event.key <= 'z') {
       textarea.value = textarea.value + event.key;
   }
});

