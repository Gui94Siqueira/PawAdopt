import { Text, Pressable, PressableProps, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import clsx from "clsx"

export type IconNameType = keyof typeof MaterialIcons.glyphMap

interface TabBarButtonProps extends PressableProps {
  title?: string
  isFocused?: boolean
  isDivider?: boolean
  iconName: IconNameType
  notifications?: number
}

export function DrawerButton({
  title = "",
  iconName,
  isDivider = false,
  isFocused = true,
  notifications,
  ...rest
}: TabBarButtonProps) {
  return (
    <Pressable
      className={clsx("py-2 w-full", {
        "border-b ml-10 border-gray-500": isDivider,
      })}
      {...rest}
    >
      <View
        className={clsx("flex-row items-center gap-4 h-16 px-6 mx-4 ", {
          "bg-black rounded-full": isFocused,
          "-ml-14": isDivider,
        })}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.white : colors.black}
        />
        <Text
          className={clsx("text-black font-subtitle text-lg flex-1", {
            "text-white": isFocused,
          })}
        >
          {title}
        </Text>

        <Text
          className={clsx("text-gray-400 text-sm font-body", {
            "text-white": isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}