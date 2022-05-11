import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

interface Props {
}

const UserPage: React.FC<Props> = () => (
  <View style={styles.pageContainer} />
);

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: colors.backgroundColor
  }
});

export default UserPage;
