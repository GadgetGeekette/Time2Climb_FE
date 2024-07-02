import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


// import React from "react";
// import HomeScreen from '../components/screens/HomeScreen';
// import GOOGLE_MAPS_API_KEY from '../constants/map';
// import { Loader } from "@googlemaps/js-api-loader"

// export default function Index() {

//   const loader = new Loader({
//     apiKey: "AIzaSyD6MR_txKSDjPURDrI77vycaGoRMQpiv34",
//     version: "weekly",
//     ...additionalOptions,
//   });
  
//   loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary("maps");
  
//     map = new Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });

//   // const { Map } = google.maps.importLibrary("maps")
//   // .then(() => {
//   //   let map = (new Map(document.getElementById("map"), {
//   //     center: { lat: -34.397, lng: 150.644 },
//   //     zoom: 8,
//   //   }));
  
//     // return (
//     //   <>
//     //     <script async src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&sensor=false`}>
//     //     </script>
//     //   </>
//     // );

//     return (

//     )
//   }

