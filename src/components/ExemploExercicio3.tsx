import { useState } from "react";
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function ExemploExercicio3() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] =
    useState<boolean>(false);

  const [erroVisivel, setErroVisivel] = useState<boolean>(false);

  const [erroNome, setErroNome] = useState<boolean>(false);
  const [erroEmail, setErroEmail] = useState<boolean>(false);
  const [erroSenha, setErroSenha] = useState<boolean>(false);
  const [erroConfirmaSenha, setErroConfirmaSenha] = useState<boolean>(false);

  function validarCampos() {
    setErroVisivel(true);

    setErroNome(false);
    setErroEmail(false);
    setErroSenha(false);
    setErroConfirmaSenha(false);

    if (nome.trim() === "") {
      //erro
      setErroNome(true);
      return false;
    }
    if (email.trim() === "") {
      //erro
      setErroEmail(true);
      return false;
    }
    if (senha.trim() === "") {
      //erro
      setErroSenha(true);
      return false;
    }
    if (confirmaSenha.trim() === "") {
      //errp
      setErroConfirmaSenha(true);
      return false;
    }
    if (senha !== confirmaSenha) {
      //erro
      setErroSenha(true);
      return false;
    }

    return true;
  }

  function Cadastrar() {
    if (!validarCampos()) {
      return;
    }

    Alert.alert("Campos válidos, irá cadastrar!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo_campo}>Nome</Text>
      <TextInput
        value={nome}
        onChangeText={(text) => {
          setNome(text);
          setErroVisivel(false);
        }}
        style={styles.campo_texto}
      />
      {erroVisivel === true && erroNome === true && (
        <Text>Preencha o nome</Text>
      )}
      <Text style={styles.titulo_campo}>Email</Text>
      <TextInput
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErroVisivel(false);
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.campo_texto}
      />
      {erroVisivel === true && erroEmail === true && (
        <Text>Preencha o email</Text>
      )}
      <Text style={styles.titulo_campo}>Senha</Text>
      <View style={styles.painel_senha}>
        <TextInput
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setErroVisivel(false);
          }}
          secureTextEntry={!senhaVisivel}
          style={[styles.campo_texto, styles.campo_senha]}
        />

        <Pressable
          style={styles.botao_olho}
          onPress={() => setSenhaVisivel((anterior) => !anterior)}
        >
          <Text style={styles.titulo_campo}>{senhaVisivel ? "🙈" : "👁️"}</Text>
        </Pressable>
      </View>
      {erroVisivel === true && erroSenha === true && (
        <Text>Preencha a senha</Text>
      )}
      <Text style={styles.titulo_campo}>Confirmar Senha</Text>
      <View style={styles.painel_senha}>
        <TextInput
          value={confirmaSenha}
          onChangeText={(text) => {
            setConfirmaSenha(text);
            setErroVisivel(false);
          }}
          secureTextEntry={!confirmaSenhaVisivel}
          style={[styles.campo_texto, styles.campo_senha]}
        />

        <Pressable
          style={styles.botao_olho}
          onPress={() => setConfirmaSenhaVisivel((anterior) => !anterior)}
        >
          <Text style={styles.titulo_campo}>
            {confirmaSenhaVisivel ? "🙈" : "👁️"}
          </Text>
        </Pressable>
      </View>
      {erroVisivel === true && erroConfirmaSenha === true && (
        <Text>Preencha a confirmação da senha</Text>
      )}
      (erroVisivel && <Text>Erro visiivel</Text>)
      <Button title="Cadastrar" onPress={Cadastrar} />
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
  painel_senha: {
    flexDirection: "row",
  },
  campo_senha: {
    flex: 1,
  },
  icone_olho: {
    margin: 5,
  },
  botao_olho: {
    justifyContent: "center",
  },
});
