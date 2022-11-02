import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAuth from '../hooks/useAuth';
import Ticket from '../views/Ticket';
import User from '../views/User';

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();
    const { role } = useAuth()
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarIconStyle: { display: "none" 
                },
                tabBarLabelStyle: {
                    fontWeight: "700",
                    fontSize: 15,
                    marginBottom: 15,
                },
            }}>
            {role == "Admin" ? <Tab.Screen name='Users' component={User}/> : null}
            <Tab.Screen name='Tickets' component={Ticket}/>
        </Tab.Navigator>

    )
}
export default BottomNavigator