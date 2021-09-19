function myFunction() {
    // Declare variables
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myColours");
    a = document.getElementById("myColours").getElementsByTagName('li').length;
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i <a; i++) {
        li = ul.getElementsByTagName("li")[i];
        txtValue = li.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    }
  }