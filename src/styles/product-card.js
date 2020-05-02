import styled from 'styled-components/native';
import {scaleSize} from './mixins';
import {FONT_SIZE_14} from './typography';

export const CardContainer = styled.View`
  width: 48%;
  padding: ${scaleSize(10)}px;
  border: 1px solid #ede8df;
  border-radius: ${scaleSize(3)}px;
`;

export const ImageView = styled.Image`
  height: ${scaleSize(100)}px;
  width: 100%;
`;

export const ProductTitle = styled.Text`
  font-size: ${FONT_SIZE_14}px;
  font-weight: 400;
`;
