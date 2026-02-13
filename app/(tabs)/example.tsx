import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Example() {
  return (
    <SafeAreaView>
      <Button
        mode="contained"
        onPress={() => {
          console.log("xsxs");
        }}
      >
        Button
      </Button>
    </SafeAreaView>
  );
}
