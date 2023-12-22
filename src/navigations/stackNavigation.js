import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './tabNavigation';
import Intro from '../screens/Intro';
import Diary from '../screens/Diary/Diary';
import Writing from '../screens/Diary/Writing';
import Record from '../screens/Diary/Record';
import Symptom from '../screens/Diary/Symptom';
import Storage from '../screens/Diary/Storage';
import ToDoList from '../screens/Diary/ToDoList';
import Information from '../screens/Information/Information';
import Manual from '../screens/Information/Manual';
import Emergency from '../screens/Information/Emergency';
import Mind from '../screens/Information/Mind';
import Item1 from '../screens/Information/Item1';
import Item2 from '../screens/Information/Item2';
import Community from '../screens/Community/Community';
import Free from '../screens/Community/Free';
import Info from '../screens/Community/Info';
import Question from '../screens/Community/Question';
import CommunityWrite from '../screens/Community/CommunityWrite';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
          <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
            <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}/>
            <Stack.Screen name="Diary" component={Diary} options={{ headerShown: false }}/>
                <Stack.Screen name="Writing" component={Writing} options={{ headerShown: false }}/> 
                <Stack.Screen name="Record" component={Record} options={{ headerShown: false }}/> 
                <Stack.Screen name="Symptom" component={Symptom} options={{ headerShown: false }}/> 
                    <Stack.Screen name="Storage" component={Storage} options={{ headerShown: false }}/>
                <Stack.Screen name="ToDoList" component={ToDoList} options={{ headerShown: false }}/>
            <Stack.Screen name="Information" component={Information} options={{ headerShown: false }}/>
                <Stack.Screen name="Manual" component={Manual} options={{ headerShown: false }}/>
                <Stack.Screen name="Emergency" component={Emergency} options={{ headerShown: false }}/>
                <Stack.Screen name="Mind" component={Mind} options={{ headerShown: false }}/>
                <Stack.Screen name="Item1" component={Item1} options={{ headerShown: false }}/>
                <Stack.Screen name="Item2" component={Item2} options={{ headerShown: false }}/>
            <Stack.Screen name="Community" component={Community} options={{ headerShown: false }}/>
              <Stack.Screen name="CommunityWrite" component={CommunityWrite} options={{ headerShown: false }}/>
              <Stack.Screen name="Free" component={Free} options={{ headerShown: false }}/>
              <Stack.Screen name="Info" component={Info} options={{ headerShown: false }}/>
              <Stack.Screen name="Question" component={Question} options={{ headerShown: false }}/>

          </Stack.Navigator>
  );
};

export default StackNavigation;