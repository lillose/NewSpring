import React, {useState, useEffect} from "react";
import { Dimensions, StatusBar } from "react-native";
import styled, {ThemeProvider} from "styled-components/native";
import {theme} from '../../theme';
import Input from '../../components/Input';
import Task from '../../components/Task';
import Axios from 'axios';

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px 20px 20px;
`;

const TitleImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px 20px 0px 0px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  
  font-size: 30px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  margin: 5px 40px 0px 0px;
  
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

const ToDoList = () => {

    const width = Dimensions.get('window').width;

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      getTasks();

    }, []);

    const getTasks = () => {
      Axios.get('http://172.30.1.8:3001/todos')
        .then(res => {
          const data = res.data.map(task => ({
            ...task,
            completed: Boolean(task.completed)
          }));
          setTasks(data);
        })
        .catch(error => console.log(error));
    };    

    const _addTask = () => {
        const newTaskObject = {
            text: newTask,        
            completed: false 
        };
        Axios.post('http://172.30.1.8:3001/create', newTaskObject)
        .then(res => {
            setNewTask('');
            getTasks();
        })
        .catch(error => console.log(error));
    };

    const _deleteTask = (id) => {
        Axios.delete(`http://172.30.1.8:3001/todos/${id}`)
          .then(res => {
            console.log(res.data);
            getTasks();
          })
          .catch(error => console.log(error));
      };

    const _toggleTask = id => {
        const currentTasks = [...tasks]; 
        const updatedTasks = currentTasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        });
    
        setTasks(updatedTasks); 
    
        const updatedTodo = updatedTasks.find(task => task.id === id);
        _updateTask(updatedTodo); 
    };

    const _updateTask = (todo) => {
        Axios.put('http://172.30.1.8:3001/todos', todo)
          .then(res => {
            console.log(res.data);
            getTasks();
          })
          .catch(error => console.log(error));
      };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    const _onBlur = () => {
        setNewTask('');
    };
    

    return (
        <ThemeProvider theme={theme}>
            <Container>
            <StatusBar
              barStyle="light-content"
              backgroundColor={theme.background}
            />
            <TitleContainer>
              <TitleImage source={require('../../../assets/icons/leaf.png')} />
              <Title>오늘 할 일</Title>
            </TitleContainer>
                <Input placeholder="+ Add a Task"
                value={newTask}
                onChangeText={_handleTextChange}
                onSubmitEditing={_addTask}
                onBlur={_onBlur}/>

                <List width={width}>
                    {Object.values(tasks)
                    .reverse()
                    .map(item => (
                        <Task key={item.id} item={item} deleteTask={_deleteTask} toggleTask={_toggleTask} updateTask={_updateTask}/>
                    ))}
                </List>
            </Container>
        </ThemeProvider>
    );
}

export default ToDoList;