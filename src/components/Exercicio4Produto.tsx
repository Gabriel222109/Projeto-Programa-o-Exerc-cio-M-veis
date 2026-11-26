import { StyleSheet, Text, View } from "react-native";

type ProdutoProps = {
  nome: string;
  preco: number;
  emPromocao: boolean;
};

export default function Exercicio4Produto({
  nome,
  preco,
  emPromocao,
}: ProdutoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto_card}>Nome: {nome}</Text>
      <Text style={styles.texto_card}>
        Preço: R$ {preco.toFixed(2).replace(".", ",")}
      </Text>
      {emPromocao && (
        <Text style={styles.promocao}>Promoção de Black Friday</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "green",
    padding: 12,
    marginVertical: 6,
  },
  texto_card: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  promocao: {
    color: "red",
    fontWeight: "bold",
    marginTop: 4,
  },
});
