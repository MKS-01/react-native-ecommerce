import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${scaleSize(50)}px;
  border: 1px solid #ede8df;
  border-radius: ${scaleSize(3)}px;
  align-items: center;
  box-shadow: ${scaleSize(5)}px ${scaleSize(5)}px ${scaleSize(10)}px #dfdccd;
  margin-bottom: ${scaleSize(10)}px;
`;

export const LocationText = styled.Text`
  font-size: ${scaleFont(18)}px;
  font-weight: 500;
`;
