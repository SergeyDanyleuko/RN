import React, { Component } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View
} from 'react-native';

const styles = StyleSheet.create({
  default: {
    color: '#000'
  }
});
export interface TextBlockProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
}
export default class TextBlock extends Component<TextBlockProps> {

  shouldComponentUpdate(nextProps: TextBlockProps): boolean {
    return nextProps.textStyle !== this.props.textStyle ||
      nextProps.containerStyle !== this.props.containerStyle ||
      nextProps.text !== this.props.text;
  }
  render(): JSX.Element {
    const {
      textStyle,
      containerStyle,
      text
    } = this.props;

    return (
      <View style={containerStyle}>
        <Text style={[styles.default, textStyle]}>{text}</Text>
      </View>
    );
  }
}
