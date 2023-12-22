import React from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 20px;
`;

const LogoContainer = styled.View`
  width: 60%;
  aspect-ratio: 2;
  overflow: hidden;
  margin-left: 20px;
  align-items: flex-start;
`;

const LogoImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

const ButtonsContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

const Information = () => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <LogoImage source={require("../../../assets/logo.png")} />
      </LogoContainer>

      <ButtonsContainer>
        <Button onPress={() => navigation.navigate('Manual')}>
          <Image
            source={require("../../../assets/Group_18.png")}
            style={{ width: width * 0.8, height: width * 0.8 * (2 / 5) }}
          />
        </Button>
        <Button onPress={() => navigation.navigate('Emergency')}>
          <Image
            source={(require("../../../assets/Dangerous.png"))}
            style={{ width: width * 0.8, height: width * 0.8 * (2 / 5) }}
          />
        </Button>
        <Button onPress={() => navigation.navigate('Mind')}>
          <Image
            source={require("../../../assets/Mind.png")}
            style={{ width: width * 0.8, height: width * 0.8 * (2 / 5) }}
          />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Information;
