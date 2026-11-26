import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercicio4ValidacaoEmail() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  function validar() {
    const valido = email.trim() !== "" && email.includes("@");

    if (!valido) {
      setErro(true);
      setMensagem("Digite um e-mail válido");
    } else {
      setErro(false);
      setMensagem("E-mail aceito");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Validar E-mail</Text>

      <TextInput
        style={[styles.campo, erro && styles.campo_erro]}
        value={email}
        onChangeText={(texto) => {
          setEmail(texto);
          if (erro) setErro(false);
          if (mensagem) setMensagem("");
        }}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#94a3b8"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Pressable onPress={validar}>
        <View style={styles.botao}>
          <Text style={styles.texto_botao}>Validar</Text>
        </View>
      </Pressable>

      {mensagem !== "" && (
        <Text
          style={[
            styles.mensagem,
            { color: mensagem === "E-mail aceito" ? "green" : "red" },
          ]}
        >
          {mensagem}
        </Text>
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
  campo: {
    borderWidth: 2,
    borderColor: "#045220",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  campo_erro: {
    borderColor: "red",
    borderWidth: 2,
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
  mensagem: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
});
