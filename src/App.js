import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [ summary, setSummary ] = useState({})
  const {data} = summary;
  return (
    <Container>
      <Header
        title="Insurance quoter"
      />
      <FormContainer>
        <Form
          setSummary={setSummary}/>
        {data && <Summary data={data}/>}
      </FormContainer>
    </Container>
  );
}

export default App;
