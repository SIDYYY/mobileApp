import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function DealerSection({navigation}) {
  const dealers = [
    {
      id: 1,
      name: 'AutoHub Motors',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaAWVuNDRTX3eowIvjN-T0K1X-NesH3jUFXkev1j-6Uvdjmgy9q5LBtjyjUcYu2wv0FY&usqp=CAU',
      distance: '3 km away',
      mail: 'autoHub@gmail.com',
      contact: '123-456-7890',
      address: '123 Main St, City',
      hours: 'Mon-Fri: 9 AM - 6 PM',
      latitude: 37.78825,
      longitude: -122.4324,
      rating: 4.5,
      services: 'Test Drives, Financing',
    },
    {
      id: 2,
      name: 'City Auto Dealership',
      image: 'https://images-platform.99static.com//CdM5WL78yq5IQFxfy6GwNk2s_IY=/235x943:1267x1975/fit-in/500x500/99designs-contests-attachments/60/60985/attachment_60985678',
      distance: '5 km away',
      mail: 'cityauto@gmail.com',
      contact: '123-456-7890',
      address: '456 Elm St, City',
      hours: 'Mon-Fri: 9 AM - 6 PM',
      latitude: 37.78825,
      longitude: -122.4324,
      rating: 4.0,
      services: 'Maintenance, Trade-Ins',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Authorized Dealers</Text>
      {dealers.map((dealer) => (
        <TouchableOpacity
          key={dealer.id}
          style={styles.dealerCard}
          onPress={() => navigation.navigate('DealerDetails', { dealer })}
        >
          <Image
            source={{ uri: dealer.image }}
            style={styles.dealerImage}
            resizeMode="cover"
          />
          <View style={styles.dealerInfo}>
            <Text style={styles.dealerName}>{dealer.name}</Text>
            <Text style={styles.dealerDetails}>{dealer.distance} | {dealer.rating}★</Text>
            <Text style={styles.dealerServices}>{dealer.services}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
  },
  dealerCard: {
    flexDirection: 'row',
    backgroundColor: '#292929',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  dealerImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  dealerInfo: {
    flex: 1,
  },
  dealerName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  dealerDetails: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 5,
  },
  dealerServices: {
    fontSize: 13,
    color: '#999',
    marginTop: 5,
  },
});
