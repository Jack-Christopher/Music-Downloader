import { StyleSheet } from "react-native";
import { Styles } from "./Styles";

export function GetStyles (names){
    let selected_styles = {};
    for (let name of names)
    {
        selected_styles[name] = Styles[name];
    }
    const styles = StyleSheet.create(selected_styles);
    return styles;        
}