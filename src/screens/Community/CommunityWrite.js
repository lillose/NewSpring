import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const CommunityWrite = () => {
  const [diary, setDiary] = useState('');

  const saveDiary = async () => {
    try {
      const existingDiaries = await AsyncStorage.getItem('diaries');
      let newDiary = JSON.parse(existingDiaries);
      if(!newDiary){
        newDiary = [];
      }
      newDiary.push(diary);
      await AsyncStorage.setItem('diaries', JSON.stringify(newDiary));
      console.log(newDiary); // 추가한 일기 내용 확인
      alert('게시글이 저장되었습니다.');
    } catch (error) {
      // error saving value
      alert('게시글 저장에 실패하였습니다.');
    }
  };

  return (
    <Container>
    <View>
      <Text style={{ fontSize:20, borderColor: 'gray', borderWidth: 1 }}>게시글 작성하기</Text>
      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        placeholder="여기에 게시글을 작성해주세요"
        onChangeText={text => setDiary(text)}
        value={diary}
      />
     <TouchableOpacity
        style={{ 
          backgroundColor: 'green', 
          alignItems: 'center', 
          padding: 10 
        }}
        onPress={saveDiary}
      >
        <Text style={{ color: 'white' }}>게시글 작성하기</Text>
      </TouchableOpacity>
      {/* Add your Diary screen content here */}
    </View>
    </Container>
    );
      };
export default CommunityWrite;
