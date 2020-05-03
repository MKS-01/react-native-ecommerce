import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';

export const Container = styled.View`
  width: 100%;
  height: ${scaleSize(50)}px;
  background-color: red;
`;
