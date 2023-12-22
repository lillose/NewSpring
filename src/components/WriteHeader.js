import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

function WriteHeader({ onSave, onAskRemove, date, onChangeDate }) {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };

  const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);

  const onPressDate = () => {
    setMode('date');
    setVisible(true);
  };

  const onPressTime = () => {
    setMode('time');
    setVisible(true);
  };

  const onConfirm = selectedDate => {
    setVisible(false);
    onChangeDate(selectedDate);
  };

  const onCancel = () => {
    setVisible(false);
  };


  return (
    <View style={styles.block}>
      <View style={styles.buttons}>
        <View style={styles.iconButtonWrapper}>
          <Pressable style={styles.iconButton} onPress={onGoBack}>
            <Icon name={'arrow-back'} size={24} color={'#424242'} />
          </Pressable>
        </View>
        <View style={[styles.iconButtonWrapper, styles.marginRight]}>
          <Pressable style={styles.iconButton} onPress={onAskRemove}>
            <Icon name={'delete-forever'} size={24} color={'#ef5350'} />
          </Pressable>
        </View>
        <View style={styles.iconButtonWrapper}>
          <Pressable style={styles.iconButton} onPress={onSave}>
            <Icon name={'check'} size={24} color={'#333f77'} />
          </Pressable>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.center}>
            <Pressable onPress={onPressDate}>
            <Text>작성날짜: {format(new Date(date), 'PPP', { locale: ko })}</Text>
            </Pressable>
            <View style={styles.separator} />
            <Pressable onPress={onPressTime}>
            <Text>{format(new Date(date), 'p', { locale: ko })}</Text>
            </Pressable>
        </View>
        <DateTimePickerModal
            isVisible={visible}
            mode={mode}
            onConfirm={onConfirm}
            onCancel={onCancel}
            date={date}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 60,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    width: 8,
  },
  future: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },  
  col: {
    flexDirection: 'column',
  },
});

export default WriteHeader;
