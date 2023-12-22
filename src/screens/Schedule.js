import React, { useContext, useState, useMemo } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import CalendarView from "../components/CalendarView";
import LogContext from "../contexts/LogContext";
import { format } from 'date-fns';
import StorageList from '../components/StorageList';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex:1;
justify-content: center;
align-items: center;
`;


const Schedule = () => {
  const { logs } = useContext(LogContext);
  const [selectDate, setSelectDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [logs],
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectDate,
  );

  const renderItem = ({ item }) => (
    <StorageList logs={[item]} />
  );

  const keyExtractor = (index) => index.toString();

  return (
    <Container>
     <View style={styles.container}>
      <FlatList
        data={filteredLogs}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <View style={styles.calendarContainer}>
              <CalendarView
                markedDates={markedDates}
                selectedDate={selectDate}
                onSelectDate={setSelectDate}
              />
            </View>
          </View>
        }
      />
    </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  calendarContainer: {
    width: '100%',
    marginBottom: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333f77',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Schedule;
