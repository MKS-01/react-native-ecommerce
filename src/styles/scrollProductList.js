import styled from 'styled-components/native';
import {scaleSize} from './mixins';

export const HorizontalScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}))``;
