import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import LoginForm from '../views/LoginForm';
import Ticket from '../views/Ticket';
import TicketDetails from '../views/TicketDetails';
import User from '../views/User';
import BottomNavigator from './BottomNavigator';
import { Entypo } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';


const ticketingStack = createNativeStackNavigator()
const Navigation=()=>{
    return (
        <NavigationContainer>
            <ticketingStack.Navigator initialRouteName='Login'>
                <ticketingStack.Screen name={'The Ticketing App'} component={LoginForm}/>
                <ticketingStack.Screen name={'User'} component={User}/>
                <ticketingStack.Screen name={'Ticket'} component={Ticket}/>
                <ticketingStack.Screen
                    name={'TicketDetails'}
                    component={TicketDetails}
                    options={({ navigation, route }) => ({
                        title: "Ticket ID: " + route.params.thisData.ticket_id.toString(),
                        headerLeft: () => (
                            <Entypo
                                onPress={() => navigation.goBack()}
                                name="chevron-left"
                                size={24}
                                color="black"
                            />
                        )
                    })}
                />
                
                <ticketingStack.Screen
                    name={'Ticketing System'}
                    component={BottomNavigator}
                    options={({navigation}) => ({
                        title: "The Ticketing App",
                        headerLeft: () => (
                            <Text
                                onPress={() => navigation.goBack()}
                            >
                                <SimpleLineIcons name="logout" size={24} color="black" />
                            </Text>
                        )
                    })}
                />
            </ticketingStack.Navigator>
        </NavigationContainer>

    )
}
export default Navigation
// options={()=>({
//     headerRight:()=>(
//         <Entypo name="chevron-left" size={24} color="black"/>
//     ),
    
// })}