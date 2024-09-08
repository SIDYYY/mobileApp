import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

export default function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState({});
  const interest = 5;

  const calculateLoan = () => {
    const principal = parseFloat(carPrice) - parseFloat(downPayment);
    const monthlyInterestRate = (interest / 100) / 12;
  
    const loanTerms = [12, 24, 36, 48]; // Different loan terms
    const payments = {};
  
    loanTerms.forEach((term) => {
      if (monthlyInterestRate === 0) {
        // If interest rate is 0, calculate simple division
        const payment = principal / term;
        payments[term] = payment.toFixed(2);
      } else {
        // Calculate using standard formula for loans with interest
        const payment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, term)) /
          (Math.pow(1 + monthlyInterestRate, term) - 1);
        payments[term] = payment.toFixed(2);
      }
    });
  
    setMonthlyPayment(payments);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Car Loan Calculator</Text>

      <Text style={styles.label}>Unit Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Car Price"
        keyboardType="numeric"
        value={carPrice}
        onChangeText={setCarPrice}
      />
      <Text style={styles.label}>Downpayment</Text>
      <TextInput
        style={styles.input}
        placeholder="Down Payment"
        keyboardType="numeric"
        value={downPayment}
        onChangeText={setDownPayment}
      />

      <TouchableOpacity style={styles.calculateButton} onPress={calculateLoan}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>

      <View style={styles.result}>
        <Text style={styles.resultText}>Estimated Monthly Payments</Text>
        <Text style={styles.resultAmount}>12 months: {' '+ ('₱ ' + monthlyPayment[12] || ' ')}</Text>
        <Text style={styles.resultAmount}>24 months: {' '+('₱ ' + monthlyPayment[24] || '')}</Text>
        <Text style={styles.resultAmount}>36 months: {' '+('₱ ' + monthlyPayment[36] || '')}</Text>
        <Text style={styles.resultAmount}>48 months: {' '+('₱ ' + monthlyPayment[48] || '')}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 30,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  calculateButton: {
    backgroundColor: '#8B8378',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    backgroundColor: '#292929',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  resultText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  resultAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#FFF',
    borderRadius: 10
  },
});
