import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {FONT_SIZE_16, FONT_SIZE_12} from './typography';

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  padding: ${scaleSize(20)}px ${scaleSize(10)}px ${scaleSize(10)}px;
  border: 1px solid #ede8df;
  border-radius: ${scaleSize(3)}px;
  margin-bottom: 10px;
`;

export const ImageView = styled.Image`
  height: ${scaleSize(120)}px;
  width: 100%;
  margin-bottom: ${scaleSize(20)}px;
`;

export const ProductDesc = styled.Text`
  font-size: ${(props) => (props.size === 12 ? FONT_SIZE_12 : FONT_SIZE_16)}px;
  font-weight: ${(props) => props.weight || 400};
  line-height: ${scaleFont(24)}px;
  color: ${(props) => props.color || '#000'};
`;

export const BuyButton = styled.TouchableOpacity`
  height: ${scaleSize(40)}px;
  justify-content: center;
`;

export const BuyButtonText = styled.Text`
  color: #01579b;
  font-size: ${scaleFont(18)}px;
  text-align: center;
`;
