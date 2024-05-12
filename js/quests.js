document.getElementById("recommendationForm").onsubmit = function() {
  var interests = document.querySelectorAll('input[name="interests[]"]:checked');
  if (interests.length === 0) {
      alert("Por favor selecciona al menos un interés.");
      return false;
  }
};

  