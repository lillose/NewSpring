import React from 'react';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
flex:1;
justify-content: center;
align-items: center;
`;

const StyledText = styled.Text`
font=size: 30px;
margin-bottom: 10px;`;

const Item1 = ({route}) => {
  return (
    <Container>
        <StyledText>Name: {route.params.name}</StyledText>
    </Container>
  );
};

export default Item1;