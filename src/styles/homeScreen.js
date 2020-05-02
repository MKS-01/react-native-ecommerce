import styled from 'styled-components/native';
import {scaleSize} from './mixins';
import {TITLE_FONT_SIZE} from './typography';

export const Title = styled.Text`
  font-size: ${TITLE_FONT_SIZE};
  font-weight: bold;
  line-height: ${scaleSize(40)}px;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${scaleSize(15)}px;
`;

export const Container = styled.View`
  margin-bottom: ${scaleSize(20)}px;
`;
