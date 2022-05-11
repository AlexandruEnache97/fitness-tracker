import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Typography from './src/components/Typography';
import colors from './src/constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography>Open up App.tsx to start working on your app!</Typography>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
