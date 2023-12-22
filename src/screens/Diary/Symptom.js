import React, { useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';



const Symptom = () => {
  const navigation = useNavigation();
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleSymptomButtonPress = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSaveButtonPress = () => {
    navigation.navigate('Diary');
  };

  return (
    <Container>
     <LogoContainer>
     <LogoImage source={require("../../../assets/diarylogo.png")}  />
     </LogoContainer>
      <PageTitle>오늘 환자의 행동증상을 모두 선택해주세요</PageTitle>
      <ScrollView>
        <ButtonContainer>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상1')} selected={selectedSymptoms.includes('증상1')}>
            <SymptomButtonText>없음</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상2')} selected={selectedSymptoms.includes('증상2')}>
            <SymptomButtonText>폭력적 행동</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상3')} selected={selectedSymptoms.includes('증상3')}>
            <SymptomButtonText>식사 거부</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상4')} selected={selectedSymptoms.includes('증상4')}>
            <SymptomButtonText>돌봄거부</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상5')} selected={selectedSymptoms.includes('증상5')}>
            <SymptomButtonText>야간행동</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상6')} selected={selectedSymptoms.includes('증상6')}>
            <SymptomButtonText>망상</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상7')} selected={selectedSymptoms.includes('증상7')}>
            <SymptomButtonText>자주 넘어지거나 걸음걸이 불안정</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상8')} selected={selectedSymptoms.includes('증상8')}>
            <SymptomButtonText>증상8</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상9')} selected={selectedSymptoms.includes('증상9')}>
            <SymptomButtonText>증상9</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상10')} selected={selectedSymptoms.includes('증상10')}>
            <SymptomButtonText>증상10</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상11')} selected={selectedSymptoms.includes('증상11')}>
            <SymptomButtonText>증상11</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상12')} selected={selectedSymptoms.includes('증상12')}>
            <SymptomButtonText>증상12</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상13')} selected={selectedSymptoms.includes('증상13')}>
            <SymptomButtonText>증상13</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상14')} selected={selectedSymptoms.includes('증상14')}>
            <SymptomButtonText>증상14</SymptomButtonText>
          </SymptomButton>
          <SymptomButton onPress={() => handleSymptomButtonPress('증상15')} selected={selectedSymptoms.includes('증상15')}>
            <SymptomButtonText>증상15</SymptomButtonText>
          </SymptomButton>
        </ButtonContainer>
      </ScrollView>
      <SaveButton onPress={handleSaveButtonPress}>
        <SaveButtonText>저장하기</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
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

const PageTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const SymptomButton = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${(props) => (props.selected ? '#00AFFA' : '#FFFFFF')};
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  margin-bottom: 10px;
  border-width: 2px;
  border-color: ${(props) => (props.selected ? '#00AFFA' : '#0C8D30')};
`;

const SymptomButtonText = styled.Text`
  color: ${(props) => (props.selected ? '#FFFFFF' : '#000000')};
  font-size: 16px;
  font-weight: bold;
`;

const SaveButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #B5D692;
  padding: 10px;
  justify-content: center;
  border-radius: 10px;
  width: 200px;
`;

const SaveButtonText = styled.Text`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`;

export default Symptom;
