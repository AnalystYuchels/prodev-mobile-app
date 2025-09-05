import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  searchGroup: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    marginTop: 6,
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 4,
  },
  listingContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 18,
  },
  showMoreButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 30,
    paddingHorizontal: 24,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  showMoreButtonText: {
    fontSize: 16,
  },
});

export { styles };
