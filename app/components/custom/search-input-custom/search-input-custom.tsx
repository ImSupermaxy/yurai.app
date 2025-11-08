import { TextInput, TextInputProps } from "react-native";
import styles from "./serach-input-custom.styles";

interface InputModel {
    
}

export function SerachInputCustom({ placeholder, ...rest }: TextInputProps & InputModel) {
    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
            <TextInput placeholder={placeholder} style={styles.container} {...rest} />
        // </TouchableWithoutFeedback>
    );
}