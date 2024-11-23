import "@/styles/global.css"
import { Slot } from "expo-router"


import { GestureHandlerRootView } from "react-native-gesture-handler"

import { colors } from "@/styles/colors"

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.primary[400] }}>
            <Slot />
        </GestureHandlerRootView>
    )
}