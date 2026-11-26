import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercicio4Aluno() {
  const [nome, setNome] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nome do Aluno</Text>
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do aluno"
        placeholderTextColor="#94a3b8"
      />
      <Text style={styles.texto}>Bem-vindo(a), {nome || "..."}!</Text>
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
  campo: {
    borderWidth: 2,
    borderColor: "#045220",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
