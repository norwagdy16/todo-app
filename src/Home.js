import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleComplete, loadTodos } from "./Redux/todosSlice";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <View style={styles.container}>
      <TodoForm
        onSubmit={(title, description) =>
          dispatch(
            addTodo({
              id: Date.now(),
              title,
              description,
              completed: false,
            })
          )
        }
      />

      <View style={styles.filterContainer}>
        {["all", "active", "completed"].map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setFilter(f)}
            style={{
              ...styles.filterBtn,
              ...(filter === f && styles.activeFilterBtn),
            }}
          >
            <Text
              style={[
                styles.filterText,
                filter === f && styles.activeFilterText,
              ]}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Todos
        todos={filteredTodos}
        deleteTodo={(id) => dispatch(deleteTodo(id))}
        toggleComplete={(id) => dispatch(toggleComplete(id))}
      />
    </View>
  );
};

export default Home;
