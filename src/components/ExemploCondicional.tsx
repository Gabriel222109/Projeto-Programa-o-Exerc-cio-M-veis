import { useState } from "react";
import { Button, Switch, Text, View } from "react-native";

export default function ExemploCondicional() {
  const [ativado, setAtivado] = useState<boolean>(false);
  const [ativado2, setAtivado2] = useState<boolean>(false);

  function exibir() {
    if (ativado) {
      return true;
    } else {
      return false;
    }
  }

  function exibir2() {
    if (ativado) {
      return <Text>Ativação por função </Text>;
    } else {
      return <Text>Desativado por função</Text>;
    }
  }

  return (
    <View>
      <Switch
        value={ativado}
        onValueChange={(selecionado) => setAtivado(selecionado)}
      />
      {ativado && ativado2 ? <Text>Ativado</Text> : <Text>Desativado</Text>}

      {ativado || (ativado2 && <Button title="Salvar" />)}

      {exibir() && <Text>Ativação por função </Text>}

      {exibir2()}
    </View>
  );
}
