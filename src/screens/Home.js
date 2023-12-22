import React,{useState, useEffect} from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';


const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding-top: 20px;
  align-items: center;
`;

const LogoContainer = styled.View`
  width: 60%;
  aspect-ratio: 2;
  overflow: hidden;
  marginBottom: 40px;
  marginTop: -100px;
  margin-left: -100px;
  align-items: flex-start;
`;

const LogoImage = styled.Image`
  width: 70%;
  height: 100%;
  resize-mode: contain;
`;


const RectangleBox = styled.View`
  background-color: #3ABB5E; 
  border-radius: 10px;
  margin-top: -30px;
  margin-bottom:20px; 
`;
const LogoText = styled.Text`
  font-size: 18px;
  color: white;
  text-align: center;
  padding: 10px;
`;

const positiveQuotes = [
  "당신은 놀라울 정도로 멋져요!",
  "오늘도 최선을 다하고 있어요!",
  "자신을 믿어보세요. 당신은 할 수 있어요!",
  "오늘 하루도 화이팅!",
  "매 순간 소중하고 멋진 사람이에요."
];



const Home = ({ navigation }) => {
    const { width } = Dimensions.get('window');
    const [positiveQuote, setPositiveQuote] = useState('');

    useEffect(() => {
      const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * positiveQuotes.length);
        setPositiveQuote(positiveQuotes[randomIndex]);
      };
      getRandomQuote();
    }, []);

  return (
    <Container>
      <LogoContainer>
        <LogoImage source={require("../../assets/logo.png")} />
      </LogoContainer>
      <RectangleBox>
        <LogoText>오늘의 긍정문장</LogoText>
        <LogoText>"{positiveQuote}"</LogoText>
      </RectangleBox>

        <TouchableOpacity
          style={{ marginBottom: 20 }}
          onPress={() => navigation.navigate('Diary')}
        > 
          <Image
            source={require("../../assets/diary.png")}
            style={{ width: width * 0.8, height: width * 0.8 * (2 / 5) }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 20 }}
          onPress={() => navigation.navigate('Information')}
        > 
          <Image
            source={(require("../../assets/information.png"))}
            style={{ width: width * 0.8, height: width * 0.8 * (2 / 5) }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 20 }}
          onPress={() => navigation.navigate('Community')}
        > 
          <Image
            source={require("../../assets/community.png")}
            style={{ width: width * 0.8, height: width * 0.8 * (2 / 5) }}
          />
        </TouchableOpacity>

    </Container>
  );
};

export default Home;