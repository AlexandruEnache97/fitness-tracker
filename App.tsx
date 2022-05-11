import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from './src/constants/colors';
import NavigationBottom from './src/components/NavigationBottom';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationBottom />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
