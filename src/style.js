/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60, 
    paddingBottom: 20,
  },

  formContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#ce2f7eff",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "100%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },

  submitBtn: {
    width: "50%",
    backgroundColor: "#ce2f7eff",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },

  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },

  dividerLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },

  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ce2f7eff",
  },

  filterText: {
    color: "black",
    fontSize: 15,
  },

  activeFilterBtn: {
    width: "30%",
    backgroundColor: "#ce2f7eff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },

  activeFilterText: {
    color: "white",
    fontSize: 15,
  },

  todosContainer: {
    marginTop: 10,
    width: "90%",
  },

  doneTodo: {
    textDecorationLine: "line-through",
  },
});
