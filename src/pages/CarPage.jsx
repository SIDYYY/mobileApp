import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function CarsPage({ navigation }) {
    const cars = [
        {
          id: '1',
          name: 'Hatchback Zoom 2023',
          image: 'https://example.com/car3.jpg',
          year: '2023',
          model: 'Zoom',
          chassis: 'XYZ123456789',
          engine: '1.5L Turbocharged Inline-4',
          transmission: '6-Speed Automatic',
          color: 'Red',
          price: '$20,000',
          description: 'The Hatchback Zoom 2023 offers excellent fuel efficiency and modern features such as advanced safety systems, a touchscreen infotainment system, and comfortable seating for five.',
        },
        {
          id: '2',
          name: 'Electric Volt 2024',
          image: 'https://example.com/car4.jpg',
          year: '2024',
          model: 'Volt',
          chassis: 'ABC987654321',
          engine: 'Electric Motor, 150 kW',
          transmission: 'Single-Speed Transmission',
          color: 'Blue',
          price: '$35,000',
          description: 'The Electric Volt 2024 is a state-of-the-art electric vehicle featuring a long-range battery, fast charging capabilities, a minimalist interior design, and advanced driver-assistance systems.',
        },
        {
          id: '3',
          name: 'SUV Xtreme 2022',
          image: 'https://example.com/car5.jpg',
          year: '2022',
          model: 'Xtreme',
          chassis: 'LMN456789012',
          engine: '3.0L V6',
          transmission: '8-Speed Automatic',
          color: 'Black',
          price: '$45,000',
          description: 'The SUV Xtreme 2022 combines rugged performance with luxury, offering off-road capabilities, spacious interior, premium materials, and advanced technology for an unparalleled driving experience.',
        },
        {
          id: '4',
          name: 'Sedan Luxe 2023',
          image: 'https://example.com/car6.jpg',
          year: '2023',
          model: 'Luxe',
          chassis: 'OPQ678901234',
          engine: '2.0L Inline-4',
          transmission: '7-Speed Dual-Clutch',
          color: 'Silver',
          price: '$30,000',
          description: 'The Sedan Luxe 2023 features a refined design with a focus on comfort and performance. It includes leather upholstery, a high-resolution display, advanced climate control, and a smooth, responsive driving experience.',
        },
        {
          id: '5',
          name: 'Sedan Pro 2024',
          image: 'https://example.com/car7.jpg',
          year: '2024',
          model: 'Pro',
          chassis: 'STU123456789',
          engine: '2.5L Turbocharged Inline-4',
          transmission: '8-Speed Automatic',
          color: 'Gray',
          price: '$33,000',
          description: 'The Sedan Pro 2024 is designed for those seeking a blend of luxury and performance. It features a turbocharged engine, advanced driver assistance systems, a high-tech infotainment system, and a sleek, aerodynamic design.',
        },
        {
          id: '6',
          name: 'SUV Max 2023',
          image: 'https://example.com/car8.jpg',
          year: '2023',
          model: 'Max',
          chassis: 'VWX456789012',
          engine: '3.5L V6',
          transmission: '9-Speed Automatic',
          color: 'White',
          price: '$50,000',
          description: 'The SUV Max 2023 offers a spacious and comfortable interior with high-end features, including a panoramic sunroof, advanced safety technologies, and a powerful V6 engine that ensures a smooth driving experience on any terrain.',
        },
      ];
      

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore More Cars</Text>
      <View style={styles.carList}>
        {cars.map(car => (
          <TouchableOpacity 
            key={car.id}
            style={styles.carCard}
            onPress={() => navigation.navigate('CarInfo', { car })}
          >
            <Image
              source={{ uri: car.image }}
              style={styles.carImage}
            />
            <Text style={styles.carName}>{car.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 20,
    textAlign: 'center',
  },
  carList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  carCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: 120,
    marginBottom: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
  },
});
