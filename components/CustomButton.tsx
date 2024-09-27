import { Text, TouchableOpacity} from 'react-native'
import React from 'react'

// Define the props interface
interface CustomButtonProps {
    title: string; // Type for the title prop
    handlePress: () => void; // Function type for handlePress
    containerStyles?: string; // Optional string for additional styles
    textStyles?: string; // Optional string for text styles
    isLoading?: boolean; // Optional boolean for loading state
}

const CustomButton: React.FC<CustomButtonProps>  = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading? 'opacity-50': ''}`}
        disabled={isLoading}>
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
            CustomButton
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
