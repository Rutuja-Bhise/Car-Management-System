$(document).ready(function() {
  $("#car-form").submit(function(e) {
      e.preventDefault();

      var id = $("#id").val();
      var name = $("#name").val();
      var color = $("#color").val();
      var price = $("#price").val();

      if (validateForm(id, name, color, price)) {

          addCar(id, name, color, price);
          clearForm();
      }
  });

  function validateForm(id, name, color, price) {
      if (!id || !name || !color || !price) {
          alert("Please fill in all fields.");
          return false;
      }
      if (isNaN(price)) {
          alert("Price must be a number.");
          return false;
      }
      return true;
  }

  function addCar(id, name, color, price) {

      event.preventDefault();
      $.ajax({
        url: "http://localhost:5000/api/cars/create",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          id: id,
          name: name,
          color: color,
          price: price
        }),
        success: function(data) {
          console.log("Car added successfully!");
          alert("Car added successfully!")
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error adding car: " + errorThrown);
        }
      });
    }

    
    function updateCar(id, name, color, price) {
      $.ajax({
        url: "http://localhost:5000/api/cars/" + id,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify({
          id: id,
          name: name,
          color: color,
          price: price
        }),
        success: function(data) {
          console.log("Car updated successfully!");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error updating car: " + errorThrown);
        }
      });
    }
    
    function deleteCar(id) {
      $.ajax({
        url: "http://localhost:5000/api/cars/" + id,
        type: "DELETE",
        contentType: "application/json",
        success: function(data) {
          console.log("Car deleted successfully!");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error deleting car: " + errorThrown);
        }
      });
    }
    


    $("#getCars").click(function() {
      alert("called")
      $.ajax({
        url: "http://localhost:5000/api/cars/",
        type: "GET",
        contentType: "application/json",
        success: function(data) {
          console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error getting car: " + errorThrown);
        }
      });
  }
)


















//     function addCar(id, name, color, price) {
     
     
     
     
//        
//     }

  function clearForm() {
      $("#id").val("");
      $("#name").val("");
      $("#color").val("");
      $("#price").val("");
  }
})