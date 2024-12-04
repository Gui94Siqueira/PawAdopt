import { View, Text, Pressable } from "react-native";

type props = {
    title: string
    subTitle: string
    action: () => void
}

export default function ({ title, subTitle, action} : props) {
    return(
        <View className="w-full mt-6 mb-2 flex-row justify-between items-center">
            <Text className="text-xl font-bold font-sans">{title}</Text>
            <Pressable onPress={action}>
                <Text className="text-base font-normal font-sans">{subTitle}</Text>
            </Pressable>
        </View>
    )
}