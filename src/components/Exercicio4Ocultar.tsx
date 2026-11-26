import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Exercicio4Ocultar() {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const produto = {
    nome: "Camiseta Thrasher",
    descricao:
      "Camiseta 100% algodão, estampa frontal Thrasher, disponível nos tamanhos P, M, G e GG.",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Produto</Text>
      <Text style={styles.texto_produto}>{produto.nome}</Text>

      <Pressable onPress={() => setMostrarDetalhes(!mostrarDetalhes)}>
        <View style={styles.botao}>
          <Text style={styles.texto_botao}>
            {mostrarDetalhes ? "Ocultar detalhes" : "Mostrar detalhes"}
          </Text>
        </View>
      </Pressable>

      {mostrarDetalhes && (
        <Text style={styles.descricao}>{produto.descricao}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  texto_produto: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  texto_botao: {
    color: "white",
    fontWeight: "bold",
  },
  descricao: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 22,
  },
});
