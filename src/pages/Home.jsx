import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function CarDealerHomePage({navigation}) {

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/a-formal-car-de_65003911.png')} // Replace with your banner image
        style={styles.banner}
        resizeMode="stretch"
      />

      <Text style={styles.title}>Welcome to CarZone Dealer</Text>
      <Text style={styles.subtitle}>
        Compare Cars and Find the Best Deals Near You!
      </Text>

      <View style={styles.featuredSection}>
      <Text style={styles.sectionTitle}>Featured Cars</Text>
      <View style={styles.carRow}>
        <TouchableOpacity
          style={styles.carCard}
          onPress={() => navigation.navigate('CarInfo', { car: {id: '5',
            name: 'Sedan Pro 2024',
            image: 'https://www.invygo.com/_next/image?url=https%3A%2F%2Fassets.invygo.com%2Fcar_model_images%2FModel%2520images%2Fchery%2Farrizo-6-pro%2F2024%2Fvibrant-photos%2F1.jpg&w=3840&q=75',
            year: '2024',
            model: 'Pro',
            chassis: 'STU123456789',
            engine: '2.5L Turbocharged Inline-4',
            transmission: '8-Speed Automatic',
            color: 'Gray',
            price: '$33,000',
            description: 'The Sedan Pro 2024 is designed for those seeking a blend of luxury and performance. It features a turbocharged engine, advanced driver assistance systems, a high-tech infotainment system, and a sleek, aerodynamic design.'} })}
        >
          <Image
            source={{ uri: 'https://www.invygo.com/_next/image?url=https%3A%2F%2Fassets.invygo.com%2Fcar_model_images%2FModel%2520images%2Fchery%2Farrizo-6-pro%2F2024%2Fvibrant-photos%2F1.jpg&w=3840&q=75' }} // Replace with car image
            style={styles.carImage}
            resizeMode="contain"
          />
          <Text style={styles.carName}>Sedan Pro 2024</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.carCard}
          onPress={() => navigation.navigate('CarInfo', { car: { id: '6',
            name: 'SUV Max 2023',
            image: 'https://img-ik.cars.co.za/news-site-za/images/2023/04/mux-1.jpg?tr=w-1200,h-800',
            year: '2023',
            model: 'Max',
            chassis: 'VWX456789012',
            engine: '3.5L V6',
            transmission: '9-Speed Automatic',
            color: 'White',
            price: '$50,000',
            description: 'The SUV Max 2023 offers a spacious and comfortable interior with high-end features, including a panoramic sunroof, advanced safety technologies, and a powerful V6 engine that ensures a smooth driving experience on any terrain.' } })}
        >
          <Image
            source={{ uri: 'https://img-ik.cars.co.za/news-site-za/images/2023/04/mux-1.jpg?tr=w-1200,h-800' }} // Replace with car image
            style={styles.carImage}
            resizeMode="contain"
          />
          <Text style={styles.carName}>SUV Max 2023</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => navigation.navigate('Cars')}
      >
        <Text style={styles.exploreButtonText}>Explore More Cars</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.dealerSection}>
        <Text style={styles.sectionTitle}>Find a Dealer</Text>
        <Text style={styles.dealerInfo}>
          Looking for the nearest dealer with your preferred car? Enter your location and explore nearby dealers.
        </Text>
        <TouchableOpacity style={styles.findDealerButton}>
          <Text style={styles.findDealerButtonText}>Find Nearby Dealers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  banner: {
    width: '100%',
    height: 150,
    margin: 0
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 10,
  },
  carRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: undefined,
    marginBottom: 10,
    aspectRatio: 1,
  },
  carName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
  },
  exploreButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dealerSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
    backgroundColor: '#fff',

  },
  dealerInfo: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  findDealerButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  findDealerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});