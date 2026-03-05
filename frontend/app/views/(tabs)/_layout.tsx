import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ViewsLayout() {
  return (
      <Tabs
          screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: "#9F7AEA",
                tabBarInactiveTintColor: "#888",
                tabBarStyle: {
                    position: "absolute",
                    marginBottom: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    height: 70,
                    borderRadius: 25,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 20,
              },
              
              tabBarBackground: () => (
                <LinearGradient
                    colors={['#444444', '#343434']}
                    style={{ flex: 1, borderRadius: 25, }}
                />
            ),
          }}
      >
          <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
          />

          <Tabs.Screen 
              name="portfolio"
              options={{
                  title: "Portfolio",
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="cards" size={size} color={color} />
                  ),
              }}
          />

          <Tabs.Screen 
              name="profile"
              options={{
                  title: "Profile", 
                  tabBarIcon: ({ color, size }) => (
                      <Ionicons name="person-outline" size={size} color={color} />
                  ),
            }}
        />

        <Tabs.Screen
            name="settings"
            options={{
              title: "Settings",
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings-outline" size={size} color={color} />
              ),
            }}
        />
          
      </Tabs>
  );
}
