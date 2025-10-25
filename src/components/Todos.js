import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style";
import TodoItem from "./TodoItem";

const Todos = ({ todos, deleteTodo, toggleComplete }) => {

return (
    <View style={styles.todosContainer}>
     <FlatList
  data={todos}
  renderItem={({ item }) => (
    <TodoItem
      todo={item}
      deleteTodo={deleteTodo}
      toggleComplete={toggleComplete} 
    />
  )}
  keyExtractor={(item) => item.id}
/>

    </View>
  );
};

export default Todos;
