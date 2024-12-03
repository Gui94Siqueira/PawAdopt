import { View, Text, Pressable } from "react-native";

type props = {
    title: string
    subTitle: string
    action: () => void
}

export default function ({ title, subTitle, action} : props) {
    return(
        <View className="w-full mt-6 flex-row justify-between items-center">
            <Text className="text-xl font-bold">{title}</Text>
            <Pressable onPress={action}>
                <Text className="text-base font-normal">{subTitle}</Text>
            </Pressable>
        </View>
    )
}