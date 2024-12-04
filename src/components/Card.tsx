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

        <View className={cn("w-44 h-36 bg-black/40 rounded-3xl p-2 justify-center items-center")}>
            <View className="flex-row items-center gap-2">
              <View className="w-16 h-16 mb-4 bg-white rounded-full justify-center items-center">
                <Feather name={iconName} size={26} color={colors.black} />
              </View>
              <Text className="text-white font-bold font-medium">{text1}</Text>
            </View>
            <View className="flex-row gap-1 items-end">
              <Text className="text-white font-bold text-4xl">{data}</Text>
              <Text className="text-white/80 mb-1 font-semibold">{text2}</Text>
            </View>
          </View>
        
    )
}