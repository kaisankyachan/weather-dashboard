var cityNameInput = document.querySelector("#city");


$('#submit').click(function(event) {
    event.preventDefault();
    if (!cityNameInput.value) {
      $("#missing-param-modal").modal("show");
    } else if (cityNameInput.value) {
      var citySearch = cityNameInput.value
      .trim()
      .toLowerCase()
      .replaceAll(" ", "+");
      window.location.href = "./HTML/events.html?city=" + citySearch;
    }