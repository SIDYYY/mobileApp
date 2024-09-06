import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function CarDealerHomePage({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/* Banner Section */}
      <Image
        source={{uri : 'https://dcdws.blob.core.windows.net/dws-9999640-6388-media/sites/6388/2020/05/home-banner.jpg'}} // Replace with your banner image
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.title}>Welcome to KOSHI Dealer</Text>
        <Text style={styles.subtitle}>
          Your Gateway to Premium Cars and Unbeatable Deals!
        </Text>
      </View>

      {/* Featured Cars Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Cars</Text>
        <View style={styles.carRow}>
          <TouchableOpacity
            style={styles.carCard}
            onPress={() => navigation.navigate('CarInfo', { car: {
              id: '5',
              name: 'Sedan Pro 2024',
              image: 'https://www.invygo.com/_next/image?url=https%3A%2F%2Fassets.invygo.com%2Fcar_model_images%2FModel%2520images%2Fchery%2Farrizo-6-pro%2F2024%2Fvibrant-photos%2F1.jpg&w=3840&q=75',
              year: '2024',
              model: 'Pro',
              chassis: 'STU123456789',
              engine: '2.5L Turbocharged Inline-4',
              transmission: '8-Speed Automatic',
              color: 'Gray',
              price: '$33,000',
              description: 'The Sedan Pro 2024 is designed for those seeking a blend of luxury and performance. It features a turbocharged engine, advanced driver assistance systems, and a sleek design.' }
            })}
          >
            <Image
              source={{ uri: 'https://www.invygo.com/_next/image?url=https%3A%2F%2Fassets.invygo.com%2Fcar_model_images%2FModel%2520images%2Fchery%2Farrizo-6-pro%2F2024%2Fvibrant-photos%2F1.jpg&w=3840&q=75' }}
              style={styles.carImage}
              resizeMode="contain"
            />
            <Text style={styles.carName}>Sedan Pro 2024</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.carCard}
            onPress={() => navigation.navigate('CarInfo', { car: {
              id: '6',
              name: 'SUV Max 2023',
              image: 'https://img-ik.cars.co.za/news-site-za/images/2023/04/mux-1.jpg?tr=w-1200,h-800',
              year: '2023',
              model: 'Max',
              chassis: 'VWX456789012',
              engine: '3.5L V6',
              transmission: '9-Speed Automatic',
              color: 'White',
              price: '$50,000',
              description: 'The SUV Max 2023 offers a spacious and comfortable interior with high-end features, including a powerful V6 engine for a smooth ride on any terrain.' }
            })}
          >
            <Image
              source={{ uri: 'https://img-ik.cars.co.za/news-site-za/images/2023/04/mux-1.jpg?tr=w-1200,h-800' }}
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

      {/* Dealer Section */}
      <View style={styles.dealerSection}>
          <Text style={styles.sectionTitle}>Authorized Dealers</Text>
          <Text style={styles.dealerInfo}>
            Explore our network of trusted authorized dealers conveniently located near you.
          </Text>
          <TouchableOpacity style={styles.findDealerButton} onPress={() => navigation.navigate('Dealer')}>
            <Text style={styles.findDealerButtonText}>View Authorized Dealers</Text>
          </TouchableOpacity>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  banner: {
    width: '100%',
    height: 100,
  },
  welcomeSection: {
    padding: 20,
    backgroundColor: '#000',
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,

  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 30,
  },
  featuredSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
  },
  carRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carCard: {
    width: '48%',
    backgroundColor: '#292929',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  carImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  carName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    marginTop: 10,
  },
  exploreButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  dealerSection: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: '#000',
  },
  dealerInfo: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 15,
  },
  findDealerButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  findDealerButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
});
