import { Text as NativeText, StyleSheet } from 'react-native';

import theme from './theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  dimensions:{
    height:theme.boxDim.height,
    width:theme.boxDim.width,
    backgroundColor: theme.boxDim.backgroundColor,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
  },

});

const Text = ({ inputDim,color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    inputDim==='inputDim' && styles.dimensions,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;