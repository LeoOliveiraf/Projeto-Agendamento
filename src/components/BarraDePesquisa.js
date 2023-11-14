import { SearchBar } from "@rneui/themed";
import { View } from "react-native";

export default function BarraDePesquisa({valorBarraPesquisa, changeBarraPesquisa}){
    return(
        <View style={{marginTop: 30}}>
            <SearchBar style={{fontSize: 16}} placeholder="Pesquisar agendamentos" 
                containerStyle={{width: 330, backgroundColor: 'transparent', 
                                borderBottomWidth: 0, borderTopColor: 0, marginBottom: -20}} 
                inputContainerStyle={{height: 40, borderRadius: 30}}
                round='false' 
                lightTheme='true'
                showCancel='true'  onChangeText={changeBarraPesquisa} value={valorBarraPesquisa}>
            </SearchBar>
        </View>
    )
}