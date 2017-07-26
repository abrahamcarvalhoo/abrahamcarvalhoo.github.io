$(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.ajax({
        url: 'http://nominatim.openstreetmap.org/reverse?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&format=json',
        type: 'GET',
        dataType: 'json',
        data: {},
      })
      .done(function(data) {
        $('input[name="rua"]').val(data.address.road);
        $('input[name="bairro"]').val(data.address.suburb);
        $('input[name="cidade"]').val(data.address.city);
        $('input[name="estado"]').val(data.address.state);
        $('input[name="cep"]').val(data.address.postcode);
      })
    });
  }
});
