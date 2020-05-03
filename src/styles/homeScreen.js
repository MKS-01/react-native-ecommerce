import styled from 'styled-components/native';
import {scaleSize} from './mixins';
import {TITLE_FONT_SIZE} from './typography';

export const Title = styled.Text`
  font-size: ${TITLE_FONT_SIZE}px;
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

export const CategoryContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${scaleSize(10)}px;
`;

export const CategoryCard = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid #ede8df;
  border-radius: ${scaleSize(3)}px;
  margin-bottom: ${scaleSize(10)}px;
`;

export const ImageView = styled.Image`
  height: ${scaleSize(150)}px;
  width: 100%;
`;
