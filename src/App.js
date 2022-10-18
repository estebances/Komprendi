import { styled } from '@mui/material/styles';
import SearchInput from "./components/SearchInput";
import StepperResult from "./components/StepperResult";

const View = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center"
}));
const Grid = styled('div')(({ theme }) => ({
  minWidth: "50%",
  minHeight: "97vh",
  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  display: "grid",
  justifyContent: "center"
}));
const Title = styled('div')(({ theme }) => ({
  marginTop: "50px",
  display: "flex",
  justifyContent: "center"
}));
const Search = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center"
}));
const Stepper = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start"
}));

function App() {
  return (
    <View>      
      <Grid>
        <Title>KOMPRENI</Title> 
        <Search><SearchInput/></Search>
        <Stepper><StepperResult/></Stepper>
      </Grid>
    </View>
  );
}

export default App;
