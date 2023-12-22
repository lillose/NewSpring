import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const ImageButton = ({ onPress, selected, image, selectedImage }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={selected ? selectedImage : image} style={styles.buttonImage} />
  </TouchableOpacity>
);

const Input = ({ placeholder }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
  />
);

const MealButton = ({ title, onPress, selected }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[styles.mealButton, selected ? styles.selectedMealButton : null]}
  >
    <Text style={styles.mealButtonText}>{title}</Text>
  </TouchableOpacity>
);

const ExerciseButton = ({ title, onPress, selected }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[styles.exerciseButton, selected ? styles.selectedExerciseButton : null]}
  >
    <Text style={styles.exerciseButtonText}>{title}</Text>
  </TouchableOpacity>
);
const SleepButton = ({ title, onPress, selected }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[styles.SleepButton, selected ? styles.selectedSleepButton : null]}
  >
    <Text style={styles.SleepButtonText}>{title}</Text>
  </TouchableOpacity>
);
const PoopButton = ({ title, onPress, selected }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[styles.PoopButton, selected ? styles.selectedPoopButton : null]}
  >
    <Text style={styles.PoopButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Container = styled.SafeAreaView`
flex:1;
justify-content: center;
align-items: center;
`;

const Record = ({ navigation }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null); 
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedSleep, setSelectedSleep] = useState(null);
  const [selectedPoop, setSelectedPoop] = useState(null);

  return (
    
    <Container>
        <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>기분 선택</Text>
        </View>
        <View style={styles.buttonGroup}>
          <ImageButton
            title="Soso"
            onPress={() => setSelectedMood('Soso')}
            selected={selectedMood === 'Soso'}
            image={require('../../../assets/soso.png')}
            selectedImage={require('../../../assets/checksoso.png')}
          />
          <ImageButton
            title="Happy"
            onPress={() => setSelectedMood('Happy')}
            selected={selectedMood === 'Happy'}
            image={require('../../../assets/smile.png')}
            selectedImage={require('../../../assets/checksmile.png')}
          />
          <ImageButton
            title="Sad"
            onPress={() => setSelectedMood('Sad')}
            selected={selectedMood === 'Sad'}
            image={require('../../../assets/sad.png')}
            selectedImage={require('../../../assets/checksad.png')}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subText}>체중</Text>
          <Input/>
          <Text style={styles.subText2}>Kg</Text>
          <Text style={styles.subText}>체온</Text>
          <Input/>
          <Text style={styles.subText2}>℃</Text>
        </View>
          
        <View style={styles.inputContainer}>
          <Text style={styles.subText}>혈압</Text>
          <Input/>
          <Text style={styles.subText2}>mmHg</Text>
          <Text style={styles.subText}>혈당</Text>
          <Input/>
          <Text style={styles.subText2}>mg/dL</Text>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>식사량</Text> 
      </View>
      <View style={styles.mealButtonGroup}>
        <MealButton
          title="안먹음"
          onPress={() => setSelectedMeal('안먹음')}
          selected={selectedMeal === '안먹음'}
        />
        <MealButton
          title="적음"
          onPress={() => setSelectedMeal('적음')}
          selected={selectedMeal === '적음'}
        />
        <MealButton
          title="적당함"
          onPress={() => setSelectedMeal('적당함')}
          selected={selectedMeal === '적당함'}
        />
        <MealButton
          title="많음"
          onPress={() => setSelectedMeal('많음')}
          selected={selectedMeal === '많음'}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>운동량</Text> 
      </View>
      <View style={styles.exerciseButtonGroup}>
        <ExerciseButton
          title="안함"
          onPress={() => setSelectedExercise('안함')}
          selected={selectedExercise === '안함'}
        />
        <ExerciseButton
          title="30분 내외"
          onPress={() => setSelectedExercise('30분 내외')}
          selected={selectedExercise === '30분 내외'}
        />
        <ExerciseButton
          title="1시간 내외"
          onPress={() => setSelectedExercise('1시간 내외')}
          selected={selectedExercise === '1시간 내외'}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>수면시간</Text> 
      </View>
      <View style={styles.SleepButtonGroup}>
        <SleepButton
          title="적음"
          onPress={() => setSelectedSleep('적음')}
          selected={selectedSleep === '적음'}
        />
        <SleepButton
          title="충분"
          onPress={() => setSelectedSleep('충분')}
          selected={selectedSleep === '3충분'}
        />
        <SleepButton
          title="불면"
          onPress={() => setSelectedSleep('불면')}
          selected={selectedSleep === '불면'}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>배변여부</Text> 
      </View>
      <View style={styles.PoopButtonGroup}>
        <PoopButton
          title="O"
          onPress={() => setSelectedPoop('O')}
          selected={selectedPoop === 'O'}
        />
        <PoopButton
          title="X"
          onPress={() => setSelectedPoop('X')}
          selected={selectedPoop === 'X'}
        />
        
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Symptom')}>
        <Text style={styles.saveButtonText}>행동증상 선택하기</Text>
      </TouchableOpacity>
    </View>
    </Container>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
  },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 20,
  },
  subText2: {
    fontSize: 18,
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    margin: 10,
  },
  input: {
    height: 40,
    width: 70,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#3ABB5E',
    borderBottomWidth: 3,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: '#B5D692',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },



  mealButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mealButton: {
    padding:5,
    margin: 5,
    width: 90,
    alignItems: 'center',
    backgroundColor: '#3ABB5E',
    opacity: 0.9,
    borderRadius: 30,
  },
  selectedMealButton: {
    backgroundColor: '#00AFFA',
  },
  mealButtonText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },



  exerciseButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  exerciseButton: {
    padding:5,
    margin: 5,
    width: 110,
    alignItems: 'center',
    backgroundColor: '#3ABB5E',
    opacity: 0.9,
    borderRadius: 30,
  },
  selectedExerciseButton: {
    backgroundColor: '#00AFFA',
  },
  exerciseButtonText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },



  SleepButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  SleepButton: {
    padding:5,
    margin: 5,
    width: 110,
    alignItems: 'center',
    backgroundColor: '#3ABB5E',
    opacity: 0.9,
    borderRadius: 30,
  },
  selectedSleepButton: {
    backgroundColor: '#00AFFA',
  },
  SleepButtonText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },




  PoopButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  PoopButton: {
    padding:5,
    margin: 5,
    width: 110,
    alignItems: 'center',
    backgroundColor: '#3ABB5E',
    opacity: 0.9,
    borderRadius: 30,
  },
  selectedPoopButton: {
    backgroundColor: '#00AFFA',
  },
  PoopButtonText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Record;
