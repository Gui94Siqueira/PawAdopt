import { View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { cn } from '../lib/utils';

export type IconNameType = keyof typeof Feather.glyphMap


type cardProps = {
    iconName: IconNameType
    text1: string
    data: string | number
    text2: string
}


export default function Card({ iconName, text1, data, text2 }: cardProps) {
    return(

        <View className={cn("w-1/2 h-full backdrop-blur-sm backdrop-opacity-60 bg-black/40 rounded-2xl p-2 justify-between items-center")}>
            <View className="flex-row items-center gap-2">
              <View className="w-12 h-12 bg-white rounded-full justify-center items-center">
                <Feather name={iconName} size={20} color={colors.black} />
              </View>
              <Text className="text-white">{text1}</Text>
            </View>
            <View className="flex-row gap-1 items-end">
              <Text className="text-white font-bold text-4xl">{data}</Text>
              <Text className="text-white">{text2}</Text>
            </View>
          </View>
        
    )
}