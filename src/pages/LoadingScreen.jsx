import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

export default function LoadingScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace('HomeTabs'); 
    }, 3000); // 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <Image
          source={require('../../assets/favicon.png')} // LOGO
          resizeMethod='cover'
          style={styles.logo}
        />
        <Text style={styles.title}>KOSHI - 満足</Text>
      </Animated.View>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    position: 'relative',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100, 
    borderColor: '#1c1c1c',
    borderWidth: 5,
    backgroundColor: '#FFF', 
    padding: 10,
  },
  title: {
    fontSize: 36,
    color: '#fff', 
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff', 
    fontWeight: 'bold',
  },
});

