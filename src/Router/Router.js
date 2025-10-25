import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CompletedTasks from "../CompletedTasks";
import StackNavigator from "./StackNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

export const PATHS = {
  STACK: 'STACK',
  Home: "Home",
  TODO_DETAILS: "TodoDetails",
  COMPLETED: 'Completed Tasks'
};

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ce2f7eff" },
          headerTitleStyle: {
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: "#ce2f7eff",
            borderTopColor: "transparent",
            position: "relative",
            bottom: 30,
            width: "90%",
            marginHorizontal: "5%",
            borderRadius: 20,
          },
          tabBarLabelStyle: {
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          },
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            />
          ),
        }}
      >
        <Screen
          name={PATHS.STACK}
          component={StackNavigator}
          options={{
            headerTitle: "Todo App",
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Screen
          name={PATHS.COMPLETED}
          component={CompletedTasks}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5 name="check-double" size={24} color="white" />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
