import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute to get route params

export default function Details() {
  const route = useRoute();
  const { car } = route.params; // Retrieve car data from route params

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Main Image */}
        <Image source={{ uri: car.image }} style={styles.carImage} />
        
        {/* Car Information */}
        <Text style={styles.carName}>{car.model}</Text>
        <Text style={styles.carPrice}>{car.price}</Text>
        <Text style={styles.carYear}>Year: {car.year}</Text>
        
        {/* Features */}
        <Text style={styles.featuresTitle}>Features:</Text>
        {car.features.map((feature, index) => (
          <Text key={index} style={styles.feature}>{feature}</Text>
        ))}

        {/* Gallery */}
        <Text style={styles.galleryTitle}>Gallery:</Text>
        <FlatList
          data={car.gallery}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.galleryImage} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  carType: {
    fontSize: 18,
    color: '#555',
  },
  carPrice: {
    fontSize: 18,
    color: '#000',
  },
  carYear: {
    fontSize: 16,
    color: '#777',
    marginVertical: 5,
  },
  carVariants: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  variant: {
    paddingVertical: 5,
  },
  galleryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  feature: {
    fontSize: 16,
    marginVertical: 5,
  },
});
