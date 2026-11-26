import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ReservarVaga() {
  const [vagas, setVagas] = useState<number>(5);

  function reservar() {
    setVagas((anterior) => anterior - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Reserva de Vagas</Text>

      <Text style={styles.texto}>Vagas disponíveis: {vagas}</Text>

      <Pressable onPress={reservar} disabled={vagas === 0}>
        <View style={[styles.botao, vagas === 0 && styles.cinza]}>
          <Text style={styles.textoBotao}>Reservar vaga</Text>
        </View>
      </Pressable>

      {vagas === 0 && <Text style={styles.lotado}>Turma lotada</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
  },
  cinza: {
    backgroundColor: "grey",
  },
  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
  lotado: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
});
