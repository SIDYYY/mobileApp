import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function CarDetailPage({ route }) {
  const { car } = route.params; // Extract car data from CarPage

  return (
    <ScrollView style={styles.container}>

      {/* Car image */}
      <Image
        source={{ uri: car.image }}
        style={styles.image}
      />

      {/* Car name */}
      <Text style={styles.name}>{car.name}</Text>

      {/* Car details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>{car.name} Specifications</Text>
        <Text style={styles.detailsText}>Year: {car.year}</Text>
        <Text style={styles.detailsText}>Model: {car.model}</Text>
        <Text style={styles.detailsText}>Chassis: {car.chassis}</Text>
        <Text style={styles.detailsText}>Engine: {car.engine}</Text>
        <Text style={styles.detailsText}>Transmission: {car.transmission}</Text>
        <Text style={styles.detailsText}>Color: {car.color}</Text>
        <Text style={styles.detailsText}>Price: {car.price}</Text>
        <Text style={styles.detailsTextDescription}>Description: {car.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4', // Light background color
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333', // Dark text color
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  detailsText: {
    fontSize: 16,
    color: '#555', // Medium gray text color
    marginBottom: 5,
    lineHeight: 25,
  },
  detailsTextDescription: {
    fontSize: 16,
    color: '#555', // Medium gray text color
    marginVertical: 20,

  }
});
