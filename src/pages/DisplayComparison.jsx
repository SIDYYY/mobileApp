import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function CarComparison() {
  const route = useRoute();
  const { car1, car2 } = route.params; // Get both cars for comparison
  const navigation = useNavigation();


  const handleComparePress = () => {
    // Navigate to the car list page and pass the selected car to compare
    navigation.navigate('CompareCar', { selectedCar: car1 });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> {car1.name} vs {car2.name}</Text>

      {/* Car images */}
      <View style={styles.imagesContainer}>
        <Image source={{ uri: car1.image }} style={styles.carImage} />
        <Image source={{ uri: car2.image }} style={styles.carImage} />
      </View>

      {/* Combined specifications in a single view */}
      <View style={styles.specsContainer}>
        <View style={styles.specsColumn}>
          <Text style={styles.carName}>{car1.name}</Text>
          <Text style={styles.specText}>Year: {car1.year}</Text>
          <Text style={styles.specText}>Model: {car1.model}</Text>
          <Text style={styles.specText}>Chassis: {car1.chassis}</Text>
          <Text style={styles.specText}>Engine: {car1.engine}</Text>
          <Text style={styles.specText}>Transmission: {car1.transmission}</Text>
          <Text style={styles.specText}>Color: {car1.color}</Text>
          <Text style={styles.specText}>Price: {car1.price}</Text>
          <Text style={styles.specText}>Description: {car1.description}</Text>
        </View>

        <View style={styles.specsColumn}>
          <Text style={styles.carName}>{car2.name}</Text>
          <Text style={styles.specText}>Year: {car2.year}</Text>
          <Text style={styles.specText}>Model: {car2.model}</Text>
          <Text style={styles.specText}>Chassis: {car2.chassis}</Text>
          <Text style={styles.specText}>Engine: {car2.engine}</Text>
          <Text style={styles.specText}>Transmission: {car2.transmission}</Text>
          <Text style={styles.specText}>Color: {car2.color}</Text>
          <Text style={styles.specText}>Price: {car2.price}</Text>
          <Text style={styles.specText}>Description: {car2.description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.compareButton} onPress={handleComparePress}>
        <Text style={styles.compareButtonText}>Compare to Other Car</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#1c1c1c',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  carImage: {
    width: '48%',
    height: 180,
    aspectRatio: 1.5,
    borderRadius: 10,
  },
  specsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  specsColumn: {
    width: '48%',
    backgroundColor: '#292929',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  specText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
    lineHeight: 19,
  },
  compareButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    marginLeft: '25%',
    marginTop: '5%',
  },
  compareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});