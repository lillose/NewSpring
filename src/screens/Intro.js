import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex:0.8;
justify-content: space-between;
`;


const StyledText = styled.Text`
font-size: 20px;
text-align: center;
`;


const GreenButton = styled.TouchableOpacity`
  width: 80%;
  background-color: #DAFFB5;
  padding: 30px;
  align-items: center;
  align-self:center;
  margin-top:-30px;
  border-radius:30px;
  border:solid 5px #0C8D30;
`;

const ButtonText = styled.Text`
  color: #0C8D30;
  font-size: 30px;
`;

const Intro = ({ navigation }) => {
    const goToTheListScreen = () => {
        navigation.navigate('TabNavigation');
    };

    return (
        <Container>
            <Image
                source={require("../../assets/logo.png")}
                style={{ width: 200, height: 50, }}
            />
            <StyledText>간병생활을 어떻게 시작해야할지 막막하셨나요</StyledText>
            <StyledText>새봄시터를 사용해보세요</StyledText>
            <StyledText> 기록, 다양한 정보, 커뮤니티를 통해</StyledText>
            <StyledText>간병인으로서의 생활을 도와드립니다.</StyledText>
            <GreenButton onPress={goToTheListScreen}>
                <ButtonText>새봄시터 시작하기</ButtonText>
                </GreenButton>
        </Container>
    );
};
  

export default Intro;