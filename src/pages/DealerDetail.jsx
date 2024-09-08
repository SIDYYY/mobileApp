import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function DealerInfo({ route }) {
  const { dealer } = route.params; // Passing selected dealer for information

  
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: dealer.image }} style={styles.dealerImage} resizeMode="cover" />
      
      <View style={styles.dealerDetails}>
        <Text style={styles.dealerName}>{dealer.name}</Text>
        <Text style={styles.dealerText}>Location: {dealer.address}</Text>
        <Text style={styles.dealerText}>Contact: {dealer.contact}</Text>
        <Text style={styles.dealerText}>Email: {dealer.mail}</Text>
        <Text style={styles.dealerText}>Operating Hours: {dealer.hours}</Text>
      </View>

      <Text style={styles.mapTitle}>{dealer.name} Location</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: dealer.latitude,
          longitude: dealer.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: dealer.latitude, longitude: dealer.longitude }}
          title={dealer.name}
          description={dealer.location}
        />
      </MapView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  dealerImage: {
    width: '100%',
    height: 200,
  },
  dealerDetails: {
    padding: 20,
    backgroundColor: '#292929',
    paddingHorizontal: 30
  },
  dealerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  dealerText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    marginTop: 50,
    color: '#fff',
  },
  map: {
    width: '90%',
    marginLeft: '5%',
    height: 300,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 20,
  },
});
