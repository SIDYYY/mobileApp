import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CarDetailPage({ route }) {
  const { car } = route.params; // Extract car data from CarPage
  const navigation = useNavigation();

  const handleComparePress = () => {
    // Navigate to the compare car page and pass the selected car to compare
    navigation.navigate('CompareCar', { selectedCar: car });
  };

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

      {/* Compare to Other Car button */}
      <TouchableOpacity style={styles.compareButton} onPress={handleComparePress}>
        <Text style={styles.compareButtonText}>Compare to Other Car</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Calculator} onPress={() => navigation.navigate('LoanCalculator')}>
            <Text style={styles.calculatorText}>Car Loan Calculator</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1c1c1c',
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
    marginBottom: 20,
    color: '#fff', 
  },
  detailsContainer: {
    backgroundColor: '#292929',
    padding: 15,
    paddingHorizontal: 25,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
    color: '#fff',
  },
  detailsText: {
    fontSize: 16,
    color: '#fff', 
    marginBottom: 5,
    lineHeight: 21,
  },
  detailsTextDescription: {
    fontSize: 16,
    color: '#fff', 
    marginVertical: 20,
  },
  compareButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  compareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Calculator: {
    alignItems: 'center',
    backgroundColor: '#928E85',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    },
    calculatorText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold'
    }
});
