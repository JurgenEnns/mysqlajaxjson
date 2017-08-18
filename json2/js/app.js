$(function() {
  console.log("Page is ready, jQuery loaded.");
});

$("#formSearch").submit(function(event) {
  event.preventDefault();
  var name = $("#searchInp").val();
  if ($.trim(name) != '') {
    // alert('triger');
    $.ajax({
      url: "http://localhost/json2/php/functions.php",
      type: "POST",
      data: {name: name},
      success: function(result) {
        console.log(result);
        var data = $.parseJSON(result);
        console.log(data[0]);
        $("#searchResult").append("<p>Name: " + data[0].name + "<br>Email: " + data[0].email + "<br>Age: " + data[0].age + "<br>Location: " + data[0].location + "</p>");
      },
      error: function(jqXHR, state, error) {
        console.log(state);
        console.log(error);
      },
      complete: function(jqXHR, state) {
        console.log(state);
      },
      timeout: 10000
    });
  }  
});