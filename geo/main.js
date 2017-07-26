if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(posicao) {
    var url = "https://nominatim.openstreetmap.org/reverse?lat="+posicao.coords.latitude+"&lon="+posicao.coords.longitude+"&format=json&json_callback=preencherDados";

    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  });
} else {
  alert('seu navegador não suporta geolocation');
}

function preencherDados(dados) {
  document.querySelector('input[name="rua"]').value = dados.address.road;
  document.querySelector('input[name="numero"]').value = dados.address.house_number;
  document.querySelector('input[name="cidade"]').value = dados.address.city;
  document.querySelector('input[name="estado"]').value = dados.address.state;
  document.querySelector('input[name="cep"]').value = dados.address.postcode;
}
