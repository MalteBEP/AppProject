import { Tabs } from "expo-router";

export default function ViewsLayout() {
  return (
    <Tabs initialRouteName="home">
    <Tabs.Screen name="home" options={{ title: "Home", headerShown: false }} />
    <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false }} />
    <Tabs.Screen name="settings" options={{ title: "Settings", headerShown: false }} />
    <Tabs.Screen name="portfolio" options={{ title: "Portfolio", headerShown: false }} /> 
    </Tabs>
  );
}
