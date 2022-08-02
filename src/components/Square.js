import React from 'react'
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  display: flex;
`;
export default function Square({ black,children }) {
    const fill = black ? 'black' : colors.N0
    const stroke = black ? colors.N0 : 'black'
    return <Container bgColor={fill} color={stroke}>{children}</Container>
}
