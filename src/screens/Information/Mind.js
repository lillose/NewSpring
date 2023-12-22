import React,{useState, useEffect} from 'react';
import { Text, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 20px;
  align-items: center;
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


const Mind = () => {
  useEffect(() => {
    searchVideo();
  }, []);
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();
  const [videoThumbnail, setVideoThumbnail] = useState('');
  const [videoId, setVideoId] = useState('');

  const searchVideo = async () => {
    const API_KEY = 'AIzaSyD3L3zm75WqOSrRf_xMvGHPRpgQDxiFJbc';
    const searchTerm = '명상';
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchTerm}&part=snippet&type=video`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      // data에서 원하는 썸네일 이미지 URL과 비디오 ID를 가져와서 상태에 설정합니다.
      if (data.items && data.items.length > 0) {
        const thumbnailUrl = data.items[0].snippet.thumbnails.default.url;
        const id = data.items[0].id.videoId;
        setVideoThumbnail(thumbnailUrl);
        setVideoId(id);
      }
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const openVideo = () => {
    if (videoId) {
      const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
      Linking.openURL(videoLink);
    }
  };
  
  return (
<Container>
      <LogoContainer>
        <LogoImage source={require("../../../assets/logo.png")} />
      </LogoContainer>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>마음다스리기</Text>
      <TouchableOpacity onPress={openVideo} style={{ marginTop: 20, marginBottom: 20 }}>
        {videoThumbnail ? (
          <Image source={{ uri: videoThumbnail }} style={{ width: 300, height: 200 }} />
        ) : (
          <Text>No Thumbnail</Text>
        )}
      </TouchableOpacity>
      <Text style={{ fontSize: 18, marginLeft: 20 }}>
        - 명상에 도움이 되는 음악을 들어주세요.
      </Text>
  <Text  style={{ fontSize: 18, marginLeft: 20 }}>- 명상 전 가벼운 스트레칭으로 관절을 풀어주세요.</Text>
  <Text  style={{ fontSize: 18, marginLeft: 20 }}>- 허리를 곧게 펴고 바른 자세로 실시하세요.</Text>
  <Text  style={{ fontSize: 18, marginLeft: 20 }}>- 편안한 음악을 들으며 숨을 천천히 들이쉬고 내쉬세요.
</Text>
    </Container>

  );
};

export default Mind;