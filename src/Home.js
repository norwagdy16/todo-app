/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./style";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddTodo = () => {
    if (!title.trim()) return;
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      done: false,
    };
    setTodos([newTodo, ...todos]);
    setTitle("");
    setDescription("");
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const filteredTodos =
    filter === "All"
      ? todos
      : filter === "Completed"
      ? todos.filter((t) => t.done)
      : todos.filter((t) => !t.done);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 200,
          marginBottom: 20,
        }}
      >
        TODO APP
      </Text>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Add new Todo Title..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Add Description..."
        value={description}
        onChangeText={setDescription}
      />

      {/* Submit */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo}>
        <Text style={styles.text}>SUBMIT</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine} />

      {/* Filters */}
      <View style={styles.filterContainer}>
        {["All", "Active", "Completed"].map((f) => (
          <TouchableOpacity
            key={f}
            style={filter === f ? styles.activeFilterBtn : styles.filterBtn}
            onPress={() => setFilter(f)}
          >
            <Text
              style={filter === f ? styles.activeFilterText : styles.filterText}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Todos list */}
      <FlatList
        style={{ width: "93%", paddingHorizontal: 10 }}
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleDone(item.id)}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#aeaeae",
                padding: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#000",
                  textDecorationLine: item.done ? "line-through" : "none",
                  textAlign: "left", 
                }}
              >
                {item.title}
              </Text>

              {item.description ? (
                <Text
                  style={{
                    fontSize: 15,
                    color: "#555",
                    marginTop: 5,
                    textDecorationLine: item.done ? "line-through" : "none",
                    textAlign: "left", 
                  }}
                >
                  {item.description}
                </Text>
              ) : null}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
