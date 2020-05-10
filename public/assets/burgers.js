
$(function() {
    $("#addburger").on("submit", function (event) {
        event.preventDefault();
      
      });
    
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed", devouredState);
        
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
    
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgerName").val().trim(),
        devoured: false
      };
  
    
      $.ajax("/api/burgers", {
        type: "POST",
        data: {data : newBurger}
      }).then(
        function() {
          console.log("new");
          location.reload();
        }
      );
    });
