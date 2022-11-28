import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Header from './components/Header';
import SearchInput from "./components/SearchInput";
import SelectorLangs from './components/SelectorLangs/SelectorLangs';
import StepperResult from "./components/StepperResult";

const View = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center"
}));
const Grid = styled('div')(({ theme }) => ({
  maxWidth: "70%",
  minHeight: "97vh",
  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  display: "grid",
  justifyContent: "center"
}));
const Search = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: '5px'
}));
const Stepper = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start"
}));
const Display = styled('div')(({ theme }) => ({
  maxHeight: "50vh", 
  display: "grid"
}));
const SizeSelector = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  maxHight: '50%'
}));

function App() {
  const [response, setResponse] = useState(null);
  const [language, setLanguage] = useState('IT');
  const handleSetResponse = (response) => {
    setResponse(response);
  };
  const handleSetLanguage = () => {
    setLanguage()
  }

  return (
    <View>      
      <Grid>
        <Display>
          <Header/>

          <SizeSelector>
            <SelectorLangs handleSetLanguage={handleSetLanguage} />
            <Search>
              <SearchInput handleSetResponse={handleSetResponse} />
            </Search>
          </SizeSelector>
        </Display>
        <Stepper>
          <StepperResult language={language} searchWord={response} />
        </Stepper>
      </Grid>
    </View>
  );
}

export default App;
