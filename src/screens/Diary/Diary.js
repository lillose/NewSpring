import React from 'react';
import { TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 20px;
`;

const LogoContainer = styled.View`
  width: 60%;
  aspect-ratio: 2;
  overflow: hidden;
  marginTop: -30px;
  margin-left: -100px;
  align-items: flex-start;
`;

const LogoImage = styled.Image`
  width: 70%;
  height: 100%;
  resize-mode: contain;
  `;

const ImageContainer = styled.View`
  width: 100%;
  aspect-ratio: 2;
  overflow: hidden;
  marginBottom: 10px;
`;

const CustomImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  resizeMode: contain;
`;

const Diary = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <LogoImage source={require("../../../assets/logo.png")} />
      </LogoContainer>

      <TouchableOpacity
        onPress={() => navigation.navigate('ToDoList')}
        style={{ marginBottom: 10, width: '130%' }}
      >
        <ImageContainer>
          <CustomImage
            source={require('../../../assets/Todo.png')}
          />
        </ImageContainer>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Record')}
        style={{ marginBottom: 10, width: '130%'}}
      >
        <ImageContainer>
          <CustomImage
            source={require('../../../assets/Record.png')}
          />
        </ImageContainer>
      </TouchableOpacity>
    </Container>
  );
};

export default Diary;
