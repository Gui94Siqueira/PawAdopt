import { NavigationBar } from "@/components/NavigationBar"
import { View, Text } from "react-native"

export default function User() {
    return(
        <View className="flex-1 pt-14 p-4 items-center justify-center">
            <Text className="text-2xl">Usuário</Text>

            <NavigationBar />
        </View>
    )
}