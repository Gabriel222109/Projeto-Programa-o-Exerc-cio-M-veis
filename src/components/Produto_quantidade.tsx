import { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ResumoPedido = {
  nome: String;
  preco: String;
  quantidade: number;
};

function Pedido(props: ResumoPedido) {
  function Calcular() {
    const preco = Number(props.preco.replace(".", "").replace(",", "."));

    return (preco * props.quantidade).toFixed(2).replace(".", ",");
  }

  return (
    <View style={styles.pedido}>
      <Text>{props.nome}</Text>
      <Text>{props.preco}</Text>
      <Text>{props.quantidade}</Text>
      <Text>Valor Total: R$ {Calcular()}</Text>
    </View>
  );
}

export default function Produto_quantidade() {
  const [pedido, setPedido] = useState(1);
  const [mensagem, setMensagem] = useState("Toque em um botão.");

  // A função é passada ao onPress; não use onPress={incrementar()}, pois executaria na renderização.
  function incrementar() {
    setPedido((anterior) => anterior + 1);
    setMensagem("quantidade aumentada!");
  }

  function decrementar() {
    setPedido((anterior) => anterior - 1);
    setMensagem("quantidade diminuida!");
  }

  return (
    <ScrollView contentContainerStyle={styles.conteudo}>
      <Text style={styles.titulo}>Selecione a quantidade do produto</Text>
      <Image
        source={require("@/assets/images/CAMISETA.jpg")}
        style={styles.logo}
      />
      <Pedido nome="Camisa Thrasher" preco="200,00" quantidade={pedido} />

      <View style={styles.espaco}>
        <Button
          title="Aumentar"
          onPress={incrementar}
          color="#1d4ed8"
          accessibilityLabel="Aumentar quantidade"
        />
      </View>

      <View style={styles.espaco}>
        <Button title="Comprar" color="#3af90a" accessibilityLabel="Comprar" />
      </View>

      <View style={styles.espaco}>
        <Button
          title="Diminuir"
          disabled={pedido === 1}
          onPress={decrementar}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteudo: { padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  espaco: { marginBottom: 16 },
  resumo: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
  },
  tituloProduto: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  logo: { width: 130, height: 160 },
});
