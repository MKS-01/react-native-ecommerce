import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {FONT_SIZE_16, FONT_SIZE_12} from './typography';

export const Card = styled.TouchableOpacity`
  padding: ${scaleSize(20)}px;
  border: 1px solid #ede8df;
  border-radius: ${scaleSize(3)}px;
  margin-bottom: 10px;
  /* background-color: red; */
`;

export const ImageView = styled.Image`
  height: ${scaleSize(200)}px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${scaleFont(20)}px;
  color: ${(props) => props.color || '#000'};
  font-weight: 600;
  line-height: ${scaleFont(26)}px;
  margin-bottom: ${scaleSize(5)}px;
  text-align: ${(props) => props.align};
`;

export const Description = styled.Text`
  font-size: ${scaleFont(16)}px;
  color: #616161;
  text-align: justify;
  margin-bottom: ${scaleSize(5)}px;
`;

export const Price = styled.Text`
  font-size: ${scaleFont(20)}px;
  color: #424242;
  text-align: justify;
  font-weight: 700;
  margin-bottom: ${scaleSize(5)}px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${scaleFont(20)}px;
  height: ${scaleFont(50)}px;
  border-radius: ${scaleFont(25)}px;
  background-color: #388e3c;
  justify-content: center;
`;
