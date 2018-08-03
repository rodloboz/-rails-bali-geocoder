const autocomplete = function() {
  console.log('hello from autocomplete');

  document.addEventListener("DOMContentLoaded", function() {
    const spotAddress = document.getElementById('spot_address');

    if (spotAddress) {
      const autocomplete = new google.maps.places.Autocomplete(spotAddress, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(spotAddress, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
  });
}

export { autocomplete };
