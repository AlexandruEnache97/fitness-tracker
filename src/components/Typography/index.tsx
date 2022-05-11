import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../../constants/colors';

interface Props {
  children: string;
  style?: any;
}

const Typography: React.FC<Props> = ({ children, style }) => (
  <Text style={{ ...styles.localText, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  localText: {
    color: colors.textPrimary,
    fontSize: 16,
  },
});

export default Typography;
