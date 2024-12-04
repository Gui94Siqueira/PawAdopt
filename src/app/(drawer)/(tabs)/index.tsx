
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

import { Link } from "expo-router";
import { View, Image, Text } from "react-native";

export default function Welcome() {
    return (
        <View className="flex-1 bg-primary-400">
            <View className="w-full h-full flex-1 justify-center items-center mt-28">
                <Image
                    source={require("@/assets/welcome.png")}
                    style={{ width: 300, height: 490, marginRight: 20 }}

                />

                <Text className="text-black/70 font-bold text-center">Encontre seu companheiro de estimação perfeito.</Text>
            </View>


            <Link href={"/(drawer)/(tabs)/home"}>
                <View className="w-full justify-center items-center">
                    <View className="w-fit bg-white rounded-full flex-row p-2 mb-10 items-center">
                        <View className="w-14 h-14 bg-black rounded-full items-center justify-center mr-2">

                            <MaterialIcons name="pets" size={32} color={colors.white} />
                        </View>
                        <Text className="text-base font-sans font-semibold mr-2">Começar</Text>
                    </View>
                </View>
            </Link>
        </View>
    )
}