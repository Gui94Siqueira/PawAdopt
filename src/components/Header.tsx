import { View } from "react-native";

import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors";
import { Pressable } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export function Header() {

    const navigation = useNavigation()
    const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer())

    return (
        <View className="m-4 justify-between flex-row bg-primary-400">
            <Pressable onPress={toggleMenu}>
                <Feather name="menu" size={32} color={colors.black} />
            </Pressable>

            <Pressable>
                <Feather name="bell" size={32} color={colors.black} />
            </Pressable>
        </View>
    )
}