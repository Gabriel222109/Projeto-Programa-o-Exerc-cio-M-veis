import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ConferirSenha() {
  const [senha, setSenha] = useState<string>("");
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo_campo}>Senha</Text>

      <TextInput
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
        style={styles.campo_texto}
      />

      <Text style={styles.titulo_campo}>Confirmar Senha</Text>

      <TextInput
        value={confirmaSenha}
        onChangeText={(text) => setConfirmaSenha(text)}
        secureTextEntry={true}
        style={styles.campo_texto}
      />

      {confirmaSenha !== "" &&
        (senha === confirmaSenha ? (
          <Text style={styles.correto}>As senhas coincidem</Text>
        ) : (
          <Text style={styles.erro}>As senhas são diferentes</Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo_campo: {
    fontSize: 15,
  },
  campo_texto: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  correto: {
    color: "green",
    fontSize: 16,
    margin: 5,
  },
  erro: {
    color: "red",
    fontSize: 16,
    margin: 5,
  },
});
