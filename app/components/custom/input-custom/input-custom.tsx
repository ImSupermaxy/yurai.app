import { TextInput, TextInputProps } from "react-native";
import { styles } from "./input-custom.styles";

interface InputModel {
    
}

export function InputCustom({ placeholder, ...rest }: TextInputProps & InputModel) {
    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
            <TextInput placeholder={placeholder} style={styles.container} {...rest} />
        // </TouchableWithoutFeedback>
    );
}