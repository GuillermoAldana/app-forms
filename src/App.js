import React from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Formulario from "./components/Forms";
function App() {
  const [usuarios, setUsuarios] = React.useState([]);

  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <Formulario submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(x =>
              <li key={x.email}>{`${x.name} ${x.lastname} ${x.email}`}</li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
