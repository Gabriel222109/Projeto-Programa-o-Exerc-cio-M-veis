import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

type ContadorProps = {
  titulo: String;
  quantidade: number;
};

function Contador(props: ContadorPorps) {
  return (
    <View style={styles.contador}>
      <Text>{props.titulo}</Text>
      <Text>{props.quantidade}</Text>
    </View>
  );
}

export default function Controle_quantidade() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("Toque em um botão.");

  // A função é passada ao onPress; não use onPress={incrementar()}, pois executaria na renderização.
  function incrementar() {
    setContador((anterior) => anterior + 1);
    setMensagem("Contador incrementado!");
  }

  function decrementar() {
    setContador((anterior) => anterior - 1);
    setMensagem("Contador desencrementado!");
  }

  return (
    <ScrollView contentContainerStyle={styles.conteudo}>
      <Text style={styles.titulo}>Selecione a quantidade de pessoas</Text>
      <Contador titulo="Quantidade de pessoas" quantidade={contador} />

      <View style={styles.espaco}>
        <Button
          title="Entrou"
          onPress={incrementar}
          color="#1d4ed8"
          accessibilityLabel="Adicionar um ao contador"
        />
      </View>
      <View style={styles.espaco}>
        <Button title="Saiu" disabled={contador === 0} onPress={decrementar} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteudo: { padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  texto: { fontSize: 18, marginVertical: 12 },
  espaco: { marginBottom: 16 },
  contador: {},
});
