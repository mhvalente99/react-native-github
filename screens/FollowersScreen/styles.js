import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  wrappUser: {
    height: 72,
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    borderRadius: 5,
    borderColor: '#DDDDDD',
    borderWidth: 2,
    flexDirection: "row"
  },
  wrappAvatar: {
    marginRight: 16
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#444444"
  },
  username: {
    color: "#444444",

  }
});
