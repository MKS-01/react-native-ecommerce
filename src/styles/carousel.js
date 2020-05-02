import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';

export const HorizontalScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}))``;

export const ItemContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const ImageView = styled.Image`
  height: ${scaleSize(80)}px;
  width: ${scaleSize(80)}px;
  border: 1px solid #ede8df;
  border-radius: ${scaleSize(40)}px;
  margin: ${scaleSize(10)}px;
`;

export const ImageText = styled.Text`
  font-size: ${scaleFont(12)}px;
  color: #616161;
  text-align: center;
`;

export const CarouselContainer = styled.View`
  flex: 1;
  border: 0 solid #ede8df;
  border-radius: ${scaleSize(2)}px;
  box-shadow: ${scaleSize(5)}px ${scaleSize(5)}px ${scaleSize(10)}px #dfdccd;
`;
