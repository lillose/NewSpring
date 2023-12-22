import React from 'react';
import { TouchableOpacity, Dimensions, } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 10px;
`;

const LogoContainer = styled.View`
  width: 50%;
  aspect-ratio: 2;
  overflow: hidden;
  margin-top: -30px;
  margin-left: -130px;
  align-items: flex-start;
`;

const LogoImage = styled.Image`
  width: 90%;
  height: 100%;
  resize-mode: contain;
`;

const LogoImage2 = styled.Image`
  width: 90%;
  height: 100%;
  resize-mode: contain;
`;

const LogoImage3 = styled.Image`
  width: 90%;
  height: 100%;
  resize-mode: contain;
`;


const ContentContainer = styled.View`
  flex: 1;
  width: 90%;
  align-items: top;
  justify-content: top;
`;

const CustomContainer = styled.View`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const SubContainer1 = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const RedContainer1 = styled(TouchableOpacity)`
  width: 20%;
  height: 100%;
  margin-right: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const RedContainer2 = styled.View`
  width: 75%;
  height: 100%;
  background-color: #0C8D30;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

// 새로 추가할 스타일 컴포넌트
const InnerContainer1 = styled.View`
  width: 70%; 
  height: 100%;
  margin-right: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const InnerContainer2 = styled.View`
  width: 13%; 
  height: 100%; 
  margin-right: 5px;
  border-radius: 5px;
  flexDirection: row;
`;

const InnerContainer3 = styled.View`
  width: 13%; 
  height: 100%; 
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flexDirection: row;
`;

const NewContainer1 = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const NewContainer2 = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;


const NewContainer3 = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const NewContainer4= styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
// YellowContainer1 수정
const YellowContainer1 = styled.View`
  width: 98%;
  height: 44%;
  background-color: white;
  marginBottom: 3px;
  borderRadius: 5px;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`;

const SubContainer2 = styled.View`
  width: 100%;
  height: 100px;
  background-color:#0C8D30;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  
`;

const LogText = styled.Text`
  color: white;
  font-size: 19px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LogText2 = styled.Text`
  color: black;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LogText3 = styled.Text`
  color: black;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 1px;
`;
const Community = () => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <LogoImage source={require("../../../assets/logo2.png")} />
      </LogoContainer>

      <ContentContainer>
        <CustomContainer>
          <SubContainer1>
          <RedContainer1 onPress={() => navigation.navigate('Free')}>
            <LogoImage source={require("../../../assets/Group.png")} />
          </RedContainer1>
            <RedContainer2>
              <LogText>자유게시판</LogText>
            </RedContainer2>
          </SubContainer1>

          <SubContainer2>
            <YellowContainer1>
              <InnerContainer1>
                <LogText2>새봄시터가 간병에 도움이 되어서 좋네요.</LogText2>
              </InnerContainer1>
              <InnerContainer2>
                  <NewContainer1>
                  <LogoImage2 source={require("../../../assets/heart.png")} />
                  </NewContainer1>
                  <NewContainer2>
                  <LogText3>2</LogText3>
                  </NewContainer2>
              </InnerContainer2>

              <InnerContainer3>
                  <NewContainer3>
                  <LogoImage3 source={require("../../../assets/message.png")} />
                  </NewContainer3>

                  <NewContainer4>
                    <LogText3>3</LogText3>
                  </NewContainer4>
              </InnerContainer3>
              
            </YellowContainer1>

            <YellowContainer1>
              <InnerContainer1>
                <LogText2>안녕하세요~ 초보 간병인이에요 반갑게 지내요.</LogText2>
              </InnerContainer1>
              <InnerContainer2>
                  <NewContainer1>
                  <LogoImage2 source={require("../../../assets/heart.png")} />
                  </NewContainer1>
                  <NewContainer2>
                  <LogText3>5</LogText3>
                  </NewContainer2>
              </InnerContainer2>

              <InnerContainer3>
                  <NewContainer3>
                  <LogoImage3 source={require("../../../assets/message.png")} />
                  </NewContainer3>

                  <NewContainer4>
                    <LogText3>2</LogText3>
                  </NewContainer4>
              </InnerContainer3>
              
            </YellowContainer1>
            
          </SubContainer2>

        </CustomContainer>
        <SubContainer1>
          <RedContainer1 onPress={() => navigation.navigate('Question')}>
            <LogoImage source={require("../../../assets/Group.png")} />
          </RedContainer1>
            <RedContainer2>
              <LogText>질문게시판</LogText>
            </RedContainer2>
          </SubContainer1>

          <SubContainer2>
            <YellowContainer1>
              <InnerContainer1>
                <LogText2>명상 방법 추천해주세요.</LogText2>
              </InnerContainer1>
              <InnerContainer2>
                  <NewContainer1>
                  <LogoImage2 source={require("../../../assets/heart.png")} />
                  </NewContainer1>
                  <NewContainer2>
                  <LogText3>5</LogText3>
                  </NewContainer2>
              </InnerContainer2>

              <InnerContainer3>
                  <NewContainer3>
                  <LogoImage3 source={require("../../../assets/message.png")} />
                  </NewContainer3>

                  <NewContainer4>
                    <LogText3>2</LogText3>
                  </NewContainer4>
              </InnerContainer3>
              
            </YellowContainer1>

            <YellowContainer1>
              <InnerContainer1>
                <LogText2>요양보호사 자격증 어려울까요?</LogText2>
              </InnerContainer1>
              <InnerContainer2>
                  <NewContainer1>
                  <LogoImage2 source={require("../../../assets/heart.png")} />
                  </NewContainer1>
                  <NewContainer2>
                  <LogText3>5</LogText3>
                  </NewContainer2>
              </InnerContainer2>

              <InnerContainer3>
                  <NewContainer3>
                  <LogoImage3 source={require("../../../assets/message.png")} />
                  </NewContainer3>

                  <NewContainer4>
                    <LogText3>2</LogText3>
                  </NewContainer4>
              </InnerContainer3>
              
            </YellowContainer1>
            
          </SubContainer2>
        <CustomContainer>
        <SubContainer1>
          <RedContainer1 onPress={() => navigation.navigate('Info')}>
            <LogoImage source={require("../../../assets/Group.png")} />
          </RedContainer1>
            <RedContainer2>
              <LogText>정보공유게시판</LogText>
            </RedContainer2>
          </SubContainer1>

          <SubContainer2>
            <YellowContainer1>
              <InnerContainer1>
                <LogText2>요양보호사 자격증 국비 지원 궁금해요~</LogText2>
              </InnerContainer1>
              <InnerContainer2>
                  <NewContainer1>
                  <LogoImage2 source={require("../../../assets/heart.png")} />
                  </NewContainer1>
                  <NewContainer2>
                  <LogText3>5</LogText3>
                  </NewContainer2>
              </InnerContainer2>

              <InnerContainer3>
                  <NewContainer3>
                  <LogoImage3 source={require("../../../assets/message.png")} />
                  </NewContainer3>

                  <NewContainer4>
                    <LogText3>2</LogText3>
                  </NewContainer4>
              </InnerContainer3>
              
            </YellowContainer1>

            <YellowContainer1>
              <InnerContainer1>
                <LogText2>요양보호사 실습장소는 어디로 가야할까요?</LogText2>
              </InnerContainer1>
              <InnerContainer2>
                  <NewContainer1>
                  <LogoImage2 source={require("../../../assets/heart.png")} />
                  </NewContainer1>
                  <NewContainer2>
                  <LogText3>5</LogText3>
                  </NewContainer2>
              </InnerContainer2>

              <InnerContainer3>
                  <NewContainer3>
                  <LogoImage3 source={require("../../../assets/message.png")} />
                  </NewContainer3>

                  <NewContainer4>
                    <LogText3>2</LogText3>
                  </NewContainer4>
              </InnerContainer3>
              
            </YellowContainer1>
            
          </SubContainer2>
         
        </CustomContainer>

      </ContentContainer>
    </Container>
  );
};

export default Community;
