import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrappProfile: {
    alignItems: "center"
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  user: {
    marginTop: 12,
    color: "#5C5354",
    fontSize: 18,
    fontWeight: "bold"
  },
  bio: {
    marginTop: 16,
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "500"
  },
  wrappButton: {
    marginTop: 32,
    height: 48,
    flexDirection: "row"
  },
  button: {
    width: "80%",
    height: "100%",
    backgroundColor: "#3F3637",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  titleButton: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "500"
  }
});
