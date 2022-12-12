import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-red-500">
        {/* HEADER */}
        <View>
          <Image
            source={{
              uri: "http://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
        </View>

        <View></View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
