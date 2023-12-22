import React from 'react';
import { FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 20px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const items = [
  { id: 1, name: 'pou', image: require("../../../assets/pop.png") },
  { id: 2, name: 'Sick', image: require("../../../assets/Sick2.png") },
  { id: 3, name: 'Daily', image: require("../../../assets/Daily.png") },
  { id: 4, name: 'fall', image: require("../../../assets/fall.png") },
  { id: 5, name: 'Outside', image: require("../../../assets/outside.png") },
  { id: 6, name: 'Eat', image: require("../../../assets/Eat.png") },
];


const Manual = ({ navigation }) => {
  const _onPress = item => {
    navigation.navigate('Item2', {id: item.id, name: item.name, image: item.image });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => _onPress(item)} style={{ flex: 1, margin: 5 }}>
      <Image source={item.image} style={{ width: '100%', height: 150, resizeMode: 'contain' }} />
    </TouchableOpacity>
  );

  return (
    <Container>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </Container>
  );
};

export default Manual;
