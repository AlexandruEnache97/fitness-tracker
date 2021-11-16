import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from './components/Typography';
import colors from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography>Open up App.tsx to start working on your app!</Typography>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
