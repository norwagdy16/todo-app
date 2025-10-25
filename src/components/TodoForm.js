import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../style";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todosSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    if (!title.trim()) return;

    const obj = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    dispatch(addTodo(obj));
    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 70 }]}
        placeholder="Add a description..."
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.submitBtn} onPress={submit}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;
