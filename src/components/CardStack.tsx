import { View, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { PETS } from "@/utils/pets";

import { SwipeableCard } from "./SwipeableCard";

export const assets = PETS.map((card) => card.images);

export const CardStack = () => {
  const shuffleBack = useSharedValue(false);
  return (
    <View style={styles.container}>
      {PETS.map((pet, index) => (
        <SwipeableCard
          card={{ images: pet.images }}
          key={index}
          index={index}
          shuffleBack={shuffleBack}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBD6C6",
  },
});