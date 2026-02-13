import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Badge, PaperProvider } from "react-native-paper";
export default function HomeScreen() {
  const [local, setLocal] = useState(INIT_LOCAL);
  useEffect(() => {
    axios({
      url: APIs.POSTS,
    })
      ?.then((response) => {
        setLocal((prev) => ({ ...prev, values: response?.data }));
      })
      .finally(() => {
        setLocal((prev) => ({
          ...prev,
          loading: {
            ...prev.loading,
            status: false,
            renderCount: prev.loading.renderCount + 1,
          },
        }));
      });
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<></>}
    >
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Natively</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title="Action"
              icon="cube"
              onPress={() => alert("Action pressed")}
            />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert("Share pressed")}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert("Delete pressed")}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>
        <PaperProvider>
          <Badge>2</Badge>
        </PaperProvider>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  ListItem: {
    color: "white",
  },
});

const APIs = {
  POSTS: "https://jsonplaceholder.typicode.com/posts",
};

type TPostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const renderItem = ({ item }: { item: TPostItem }) => (
  <View>
    <Text style={styles?.ListItem}>{item.title}</Text>
  </View>
);

type TLocal = {
  values: TPostItem[];
  loading: {
    status: boolean;
    renderCount: number;
  };
};
const INIT_LOCAL: TLocal = {
  values: [],
  loading: {
    status: true,
    renderCount: 0,
  },
};
