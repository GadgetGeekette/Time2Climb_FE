
async function Map() {
  const { Map } = await google.maps.importLibrary("maps");

  return (new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  }));

}

export default Map;