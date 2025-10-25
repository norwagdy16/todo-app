import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";

const CompletedTasks = () => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const unsubscribe = setInterval(loadCompleted, 1000); 
    return () => clearInterval(unsubscribe);
  }, []);

  const loadCompleted = async () => {
    const stored = await AsyncStorage.getItem("todos");
    if (stored) {
      const all = JSON.parse(stored);
      setCompleted(all.filter((t) => t.completed));
    }
  };

  return (
    <View style={[styles.container, { paddingTop: 50 }]}>
      {/* <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>
        Completed Tasks
      </Text> */}
      <FlatList
        data={completed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#f2f2f2",
              padding: 15,
              marginVertical: 5,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 17, textDecorationLine: "line-through" }}>
              {item.title}
            </Text>
            <Text style={{ color: "#666" }}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CompletedTasks;
