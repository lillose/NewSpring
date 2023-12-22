import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Dimensions, Text, ScrollView, FlatList, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // useFocusEffect를 추가로 import합니다.
import AsyncStorage from '@react-native-async-storage/async-storage';
// 스타일 컴포넌트...

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

const SubContainer1 = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const RedContainer1 = styled.View`
  width: 40%;
  height: 100%;
  margin-right: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const RedContainer2 = styled.View`
  width: 60%;
  height: 80%;
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
  margin:3px;
  width: 340px;
  height: 60px;
  background-color: white;
  marginBottom: 3px;
  borderRadius: 5px;
  flexDirection: row;
`;

const SubContainer2 = styled.View`
  background-color: green;
  width: 100%;
  height: 1000px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: 'column';
  justify-content: 'flex-end';
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

const SubContainer4 = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const RedContainer4 = styled.View`
  width: 10%;
  height: 100%;
  margin-right: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const RedContainer5 = styled.View`
  width: 90%;
  height: 70%;
  background-color: #9FB841;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;


const SubContainer5 = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const WriteContainer = styled.View`
  width: 60%;
  height: 70%;
  margin-right: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #0C8D30;
  
`;

const BoxContainer1 = styled.View`
  width: 20%;
  height: 70%;
  background-color: #C0E897;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;


const BoxContainer2 = styled.View`
margin-left: 2%;
  width: 20%;
  height: 70%;
  background-color: #C0E897;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  
`;

const WriteText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  margin-left:25px;
`;

const WriteText2 = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 1px;
 
`;


const Info = () => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();
  const [diaries, setDiaries] = useState([]);


  const [searchQuery, setSearchQuery] = useState(""); // 검색어를 저장하는 상태
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장하는 상태

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  

  useEffect(() => {
    const results = diaries.filter(diary =>
      diary.text && diary.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);
  
  const deleteDiary = async (index) => {
    // 일기 목록에서 해당 인덱스의 일기를 제거합니다.
    const newDiaries = diaries.filter((diary, i) => i !== index);
  
    try {
      // 결과를 AsyncStorage에 저장합니다.
      await AsyncStorage.setItem('diaries', JSON.stringify(newDiaries));
  
      // 상태를 업데이트합니다.
      setDiaries(newDiaries);
    } catch (e) {
      alert('글 삭제에 실패하였습니다.');
    }
  };
  

  useEffect(() => {
    let results;
    if (searchQuery) {
      // 검색어가 있을 때, 검색어에 맞는 일기만 필터링합니다.
      results = diaries.filter(diary =>
        diary.text && diary.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // 검색어가 없을 때, 모든 일기를 보여줍니다.
      results = diaries;
    }
    setSearchResults(results);
  }, [searchQuery, diaries]);
  
  useFocusEffect(
    React.useCallback(() => {
      const fetchDiaries = async () => {
        try {
          const value = await AsyncStorage.getItem('diaries');
          if(value !== null) {
            setDiaries(JSON.parse(value));
          }
        } catch(e) {
          // error reading value
          alert('글 불러오기에 실패하였습니다.');
        }
      }

      fetchDiaries();
    }, [])
  );

  const handleLike = (index) => {
    setDiaries(diaries.map((diary, i) => {
      if (i !== index) return diary;
  
      if (diary.isLiked) {
        return { ...diary, isLiked: false, likeCount: diary.likeCount - 1 };
      } else {
        return { ...diary, isLiked: true, likeCount: diary.likeCount + 1 };
      }
    }));
  };
  
    return (
      <Container>
        
        <ContentContainer>
            <SubContainer1>
              <RedContainer1>
              <LogoImage source={require("../../../assets/logo2.png")} />
              </RedContainer1>
              <RedContainer2>
                <LogText>정보공유게시판</LogText>
              </RedContainer2>
            </SubContainer1>
  
            <SubContainer4>
              <RedContainer4>
              <LogoImage source={require("../../../assets/search.png")} />
              </RedContainer4>
              <RedContainer5>
          <TextInput // 검색어를 입력받는 입력 필드
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="검색어를 입력하세요"
          />
        </RedContainer5>
            </SubContainer4>
  
            <SubContainer5>
            <TouchableOpacity onPress={() => navigation.navigate('CommunityWrite')}
              style={{width: '40%',height: '60%', backgroundColor:'green', marginRight: '15%' }}
            >
              <WriteText>글 작성하기</WriteText>
          </TouchableOpacity>
  
              <BoxContainer1>
                <WriteText2>좋아요 순</WriteText2>
              </BoxContainer1>
              <BoxContainer2>
                <WriteText2>최신 순</WriteText2>
              </BoxContainer2>
            </SubContainer5>
  
    
            <SubContainer2>
        <FlatList
           data={searchQuery ? searchResults : diaries}
           renderItem={({ item: diary, index }) => (
            <YellowContainer1 key={index}>
              <InnerContainer1>
              <LogText2>{diary}</LogText2>
              </InnerContainer1>

              <TouchableOpacity onPress={() => deleteDiary(index)}>
               <Text>삭제</Text>
              </TouchableOpacity>
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
          )}
          keyExtractor={(diary, index) => index.toString()} // 각 아이템의 key를 설정
          contentContainerStyle={{ paddingBottom: 1 }} // 아이템 간의 간격을 조정합니다.
        />
      </SubContainer2>
    </ContentContainer>
  </Container>
);
};

export default Info;