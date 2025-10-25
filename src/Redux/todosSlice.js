import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadTodos = createAsyncThunk("todos/loadTodos", async () => {
  const stored = await AsyncStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
});

const saveToStorage = async (todos) => {
  await AsyncStorage.setItem("todos", JSON.stringify(todos));
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
      saveToStorage(state.list);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
      saveToStorage(state.list);
    },
    toggleComplete: (state, action) => {
      state.list = state.list.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
      saveToStorage(state.list);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(loadTodos.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todosSlice.actions;
export default todosSlice.reducer;
