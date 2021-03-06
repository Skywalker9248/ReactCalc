import { useState } from "react";
import { Grid, Typography, Button,Box} from "@material-ui/core";
import { styled } from '@material-ui/core/styles';
import { maxWidth } from "@mui/system";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

function App() {
  const [calc, setCalc]= useState("");
  const [result, setResult]=useState("");

  const ops = ['+','-','*','/','%','.'];
  const updateCalc = value =>{
      if(
        (ops.includes(value) && calc === '' )|| 
        (ops.includes(value) && ops.includes(calc.slice(-1)))
      )
      {return;}

    setCalc(calc+value); 
    if(!ops.includes(value))
    {
      setResult(eval(calc + value).toString())
    }
  }
  const cal = () => {
       setCalc(eval(calc).toString());     
  } 
  const del = () => {
    if (calc === '')
    {return;}
    const value = calc.slice(0, -1);
    setCalc(value);
  } 
  const clr = () => {
    if (calc === '')
    {return;}
    const value = " "
    setCalc(value);
  }
  return (
    
    <div style={{backgroundColor: "#202020" ,height : '100vh'}}>
     <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <CalcBox>
          <Grid container justify = "center">
               <Disp>
                  <No>
                     {/* {result ? <span>({result})</span>:''}  */}
                  
                     {calc || " "} 
                  </No>
               </Disp>
          </Grid>
          
          <Grid container justify = "center">
               <Pad>
            
            <R>
              <FKey onClick={clr}>C</FKey>
              <FKey onClick={del}>←</FKey>
              <OKey onClick={() => updateCalc('%')}>%</OKey>
              <OKey onClick={() => updateCalc('/')}>/</OKey>
            </R>
            <R>
              <Key onClick={() => updateCalc('7')}>7</Key>
              <Key onClick={() => updateCalc('8')}>8</Key>
              <Key onClick={() => updateCalc('9')}>9</Key>
              <OKey onClick={() => updateCalc('*')}>*</OKey>
            </R>
            <R>
              <Key onClick={() => updateCalc('4')}>4</Key>
              <Key onClick={() => updateCalc('5')}>5</Key>
              <Key onClick={() => updateCalc('6')}>6</Key>
              <OKey onClick={() => updateCalc('-')}>-</OKey>
            </R>
            <R>
              <Key onClick={() => updateCalc('1')}>1</Key>
              <Key onClick={() => updateCalc('2')}>2</Key>
              <Key onClick={() => updateCalc('3')}>3</Key>
              <OKey onClick={() => updateCalc('+')}>+</OKey>
            </R>
            <R>
              <Key onClick={() => updateCalc('.')}>.</Key>
              <Key onClick={() => updateCalc('0')}>0</Key>
              <Key onClick={() => updateCalc('00')}>00</Key>
              <FKey onClick={cal}>=</FKey>
            </R>
          </Pad>
          </Grid>
          
        </CalcBox>  
            
     </Grid>
    </div>
  );
}

const CalcBox = styled(Box)({
    
  borderRadius:'15px', /* added */
  background: 'black',
  display: 'flex',
  width:'300px',
  flexDirection: 'column',
  padding: '15px 15px',
  marginTop:'15px',
  
  position:'relative',
  boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'
});

const Disp = styled(Box)({
    
  borderRadius:'15px',
  align:'center',
  background: '#5f9ea0',
  display: 'flex',
  width:'275px',
  height:'40px',
  flexDirection: 'column',
  padding: '15px 15px',
  marginTop:'15px',
  position:'relative',
  boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
  overflow: 'hidden',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap',
  getSpaceUntilMaxLength : '20ch'

});

const Pad = styled(Box)({
    
  borderRadius:'15px',
  align:'center',
  background: 'black',
  display: 'flex',
  width:'275px',
  // height:'140px',
  flexDirection: 'column',
  padding: '15px 15px',
  marginTop:'15px',
  position:'relative',
  boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'
});

const R = styled(Box)({
  background: 'black',
  display: 'flex',
  width:'175px',
  
});


const Key = styled(Button)({
  background: 'linear-gradient(315deg, #01224a 0%,  #033840 100% )',
  margin:'2px',
  color:'white',
  position:'relative',
  flexGrow:'1',
  width:'25px',
});

const OKey = styled(Button)({
  background: 'linear-gradient(320deg, #4f0441 30%, #780808 90% )',
  margin:'2px',
  color:'white',
  position:'relative',
  flexGrow:'1',
  width:'25px',
});

const FKey = styled(Button)({
  background: 'linear-gradient(160deg, #132d36 10%, #016639 90% )',
  margin:'2px',
  color:'white',
  position:'relative',
  flexGrow:'1',
  width:'25px',
});

const No = styled(Typography)({
  
    fontFamily: 'Orbitron',
    color:'black',
    fontStyle:'bold',
    fontWeight: 100,
    letterSpacing: '0.5px',
    fontSize:'19px',
    padding : '5px'

});
export default App;
