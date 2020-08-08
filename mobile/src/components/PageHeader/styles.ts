import { StyleSheet } from "react-native";
import { ArchivoBold } from "../../utils/fonts";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#8257e5",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: ArchivoBold,
    color: "#FFF",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 170,
    marginVertical: 40,
  },
});

export default styles;
