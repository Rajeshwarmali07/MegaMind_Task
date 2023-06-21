$(document).ready(function() {
    var entries = []; // Array to store form entries
  
    // Show the add form modal
    $("#addButton").click(function() {
      $("#addModal").css("display", "block");
    });
  
    // Close the add form modal
    $(".close").click(function() {
      $("#addModal").css("display", "none");
      clearForm();
    });
  
    // Cancel button in the add form
    $("#cancel").click(function() {
      $("#addModal").css("display", "none");
      clearForm();
    });
  
    // Enable/disable submit button based on the Agree checkbox
    $("#agree").change(function() {
      $("#submit").prop("disabled", !this.checked);
    });
  
    // Add form submit event
    $("#addForm").submit(function(e) {
      e.preventDefault();
      var entry = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        address: $("#address").val(),
        state: $("#state").val(),
        city: $("#city").val()
      };
      entries.push(entry);
      $("#addModal").css("display", "none");
      clearForm();
      refreshList();
    });
  
    // Delete entry from the list
    $(document).on("click", ".delete", function() {
      var index = $(this).data("index");
      if (confirm("Are you sure you want to delete this entry?")) {
        entries.splice(index, 1);
        refreshList();
      }
    });
  
    // Refresh the list screen with entries
    function refreshList() {
      $("#listTable tbody").empty();
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var row = "<tr><td>" + entry.name + "</td><td>" + entry.email + "</td><td>" + entry.phone + "</td><td><button class='edit'>Edit</button><button class='delete' data-index='" + i + "'>Delete</button></td></tr>";
        $("#listTable tbody").append(row);
      }
    }
  
    // Clear the add form fields
    function clearForm() {
      $("#name").val("");
      $("#email").val("");
      $("#phone").val("");
      $("#address").val("");
      $("#state").val("");
      $("#city").val("");
      $("#agree").prop("checked", false);
      $("#submit").prop("disabled", true);
    }
  });