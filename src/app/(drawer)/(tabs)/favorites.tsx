import { NavigationBar } from "@/components/NavigationBar"
import { View, Text } from "react-native"

export default function Favorites() {
    return(
        <View className="flex-1 bg-primary-400 pt-14 p-4 items-center justify-center">
            <Text className="text-2xl">Favoritos</Text>


            <NavigationBar />
        </View>
    )
}