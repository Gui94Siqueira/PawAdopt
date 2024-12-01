import { View } from "react-native";

import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

export function NavigationBar() {
    return (
        <View className="w-full items-center justify-center">
            <View className="w-fit bg-black py-4 px-4 mb-10 flex flex-row items-center justify-between border-2 rounded-full gap-6 opacity-70">
                <Link href={"/(drawer)/(tabs)/home"}>
                    <TouchableOpacity>
                        <Feather name="home" size={32} color={colors.white} />
                    </TouchableOpacity>
                </Link>

                <Link href={"/(drawer)/(tabs)/search"}>
                    <TouchableOpacity>
                        <Feather name="search" size={32} color={colors.white} />
                    </TouchableOpacity>
                </Link>

                <Link href={"/(drawer)/(tabs)/user"}>
                    <TouchableOpacity>
                        <Feather name="user" size={32} color={colors.white} />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}