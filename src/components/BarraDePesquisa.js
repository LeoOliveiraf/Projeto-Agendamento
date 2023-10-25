import { SearchBar } from "@rneui/themed";
import { View } from "react-native";
import Styles from "./styles/Styles";

export default function BarraDePesquisa(){
    return(
        <View>
            <SearchBar placeholder="Pesquisar agendamentos" 
            containerStyle={{width: 320, backgroundColor: 'transparent', 
                            borderBottomWidth: 0, borderTopColor: 0, marginBottom: -20}} 
            inputContainerStyle={{height: 45, borderRadius: 40}}
            round='false' 
            lightTheme='true'
            showCancel='true'>
            </SearchBar>
        </View>
    )
}