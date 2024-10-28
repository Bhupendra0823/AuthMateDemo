import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/pages/Login/Login";
import HomePage from "@/pages/HomePage/HomePage";
import Register from "@/pages/Register/Register";
export default function Index() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

