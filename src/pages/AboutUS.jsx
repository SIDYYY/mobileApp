import React, {useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';



const reasons = [
  { 
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzAdwMuJN9d8LElgKTfX3_Y42PB7k-uIm26Q&s', 
    text: 'Expert Advice', 
    description: 'Our knowledgeable team provides expert advice to help you make informed decisions. We use our extensive industry experience to guide you through the car-buying process with confidence.' 
  },
  { 
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaJSsflydFWUJCoKJBcBlPcXwMune0KIVYQ&s', 
    text: 'Transparent Pricing', 
    description: 'We offer clear and honest pricing with no hidden fees. Our transparent pricing ensures that you understand exactly what you’re paying for, making your purchasing experience straightforward and stress-free.' 
  },
  { 
    icon: 'https://static.vecteezy.com/system/resources/previews/043/907/508/non_2x/quality-assurance-glyph-inverted-icon-design-vector.jpg', 
    text: 'Quality Assurance', 
    description: 'Each vehicle undergoes a rigorous quality check to ensure it meets our high standards. We are committed to providing vehicles that are reliable and of the highest quality.' 
  }
];

export default function AboutUs() {
const slideAnimLeft = useRef(new Animated.Value(-500)).current; 
const slideAnimRight = useRef(new Animated.Value(500)).current; 

useEffect(() => {
    Animated.timing(slideAnimLeft, {
      toValue: 0, 
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(slideAnimRight, {
      toValue: 0, 
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Introduction Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitleABT}>About Us</Text>
        <Animated.Text style={[styles.sectionText, {transform: [{translateX: slideAnimLeft}]}]}>
          Welcome to KOSHI, your go-to destination for finding the perfect vehicle. Our team is dedicated to delivering an exceptional car-buying experience with personalized service and expert advice. With years of industry experience, we ensure you get the best value and a smooth purchasing journey.
        </Animated.Text>
      </View>

      {/* Why Trust Us? Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Trust Us?</Text>
        {reasons.map((reason, index) => (
          <View key={index} style={styles.reasonItem}>
            <Image source={{ uri: reason.icon }} style={styles.reasonIcon} />
            <View style={styles.reasonTextContainer}>
            <Animated.Text style={[styles.sectionText, {transform: [{translateX: slideAnimLeft}]}]}>{reason.text}</Animated.Text>
            <Animated.Text style={[styles.sectionText, {transform: [{translateX: slideAnimRight}]}]}>{reason.description}</Animated.Text>
            </View>
          </View>
        ))}
      </View>

      {/* Contact Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitleCTC}>Contact Us</Text>
        <Text style={styles.contactInfo}>Email: contact@koshi.com</Text>
        <Text style={styles.contactInfo}>Phone: +1 234 567 890</Text>
        <Text style={styles.contactInfo}>Address: 1234 Car Street, Auto City, AC 56789</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center'
  },
  sectionTitleABT: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 35,
    textAlign: 'center'
  },
  sectionText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  sectionTitleCTC: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    textAlign: 'center'
  },
  reasonItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  reasonIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  reasonTextContainer: {
    flex: 1,
  },
  reasonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  reasonDescription: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },
  contactInfo: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
});
