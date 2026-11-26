import { View } from "react-native";
import Exercicio4Produto from "./Exercicio4Produto";

export default function Exercicio4ProdutoDemo() {
  return (
    <View>
      <Exercicio4Produto
        nome="Smartphone Galaxy"
        preco={1899.9}
        emPromocao={true}
      />
      <Exercicio4Produto
        nome="Fone de Ouvido"
        preco={249.0}
        emPromocao={false}
      />
    </View>
  );
}
