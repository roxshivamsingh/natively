import { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";

export function NavigationBar() {
  const [index, setIndex] = useState(0);
  const [routes] = useState(INIT_ROUTE);

  const renderScene = BottomNavigation.SceneMap(INIT_SCENE);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
const INIT_ROUTE = [
  {
    key: "music",
    title: "Favorites",
    focusedIcon: "heart",
    unfocusedIcon: "heart-outline",
  },
  { key: "albums", title: "Albums", focusedIcon: "album" },
  { key: "recents", title: "Recents", focusedIcon: "history" },
  {
    key: "notifications",
    title: "Notifications",
    focusedIcon: "bell",
    unfocusedIcon: "bell-outline",
  },
];
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const INIT_SCENE = {
  music: MusicRoute,
  albums: AlbumsRoute,
  recents: RecentsRoute,
  notifications: NotificationsRoute,
};
