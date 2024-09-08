import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Animated } from 'react-native';

export default function HomePage({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner Section */}
      <Animated.View style={[styles.banner, { opacity: fadeAnim }]}>
        <ImageBackground
          source={{ uri: 'https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/37422/Lamborghini-dark-iphone-x-wallpaper-ilikewallpaper_com.jpg' }}
          style={styles.imageBackground}
          resizeMode="cover" 
        >
          {/* Centered Content */}
          <View style={styles.centeredContent}>
            <View style={styles.insideContent}>
              <Text style={styles.welcome}>KOSHI - (満足) Deals</Text>
            </View>
            <Text style={styles.sectionTitleExplore}>Ready to find your dream car?</Text>
            <TouchableOpacity
              style={styles.exploreButton}
              onPress={() => navigation.navigate('Cars')}
            >
              <Text style={styles.exploreButtonText}>Explore Cars</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  banner: {
    width: '100%',
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
  },
  sectionTitleExplore: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20, 
  },
  welcome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 320,
  },
  exploreButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
