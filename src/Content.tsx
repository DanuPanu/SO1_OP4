import { Box, Checkbox, Typography, Select, SelectChangeEvent, Slider, FormControl, FormControlLabel, InputLabel, MenuItem, TextField, Dialog, DialogTitle, Button, List, ListItem } from '@mui/material';
import { useState} from 'react';

function Content() {

  const [mokki, setMokki] = useState<any>('');
  const handleChange = (event: SelectChangeEvent) => {
    setMokki(event.target.value);
  };

  const [nimi, setNimi] = useState<string>('');
  const [paiva, setPaiva] = useState<string>('');

  const [value, setValue] = useState<any>(1);
  const handleSliderChange = (event: Event, newValue: any) => {
    setValue(newValue);
  };

  let summa = mokki * value

  const [tsek, setTsek] = useState<boolean>(false);
  if(tsek === true){
    summa = summa + 100
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return (
    <>
    <Typography variant = "h4" sx={{textAlign : "center", fontWeight : "500"}}>Varaa hieno mökki neljästä upeasta vaihtoehdosta! Varausajan voi valita alla olevasta sliderista! </Typography>
    <Box>
      <Box sx={{display : "flex", alignItems : "center", flexDirection : "column", margin : "2em"}}>
        <FormControl sx={{width : "40%"}}>
          <InputLabel id="mökki">Valitse Mökki...</InputLabel>
          <Select
            labelId = "mökki"
            value = {mokki}
            onChange = {handleChange}
          >
            <MenuItem value={0}>Tyhjä</MenuItem>
            <MenuItem value={1000}>Perus Mökki 1000e/yö</MenuItem>
            <MenuItem value={2000}>Hyvä Mökki 2000e/yö</MenuItem>
            <MenuItem value={3000}>Hieno Mökki 3000e/yö</MenuItem>
            <MenuItem value={4000}>Mahtava Mökki 4000e/yö</MenuItem>
          </Select>
        </FormControl>
        <TextField sx={{width : "40%", marginTop : "5px"}}
          placeholder="Nimi..."
          onChange={(e : any) => {setNimi(e.target.value)}}
          ></TextField>
        <TextField sx={{width : "40%", marginTop : "5px"}}
          placeholder="Varauksen ensimmäinen päivä..."
          onChange={(e : any) => {setPaiva(e.target.value)}}
          ></TextField>
        <Slider sx={{width : "75%"}}
          defaultValue = {1}
          valueLabelDisplay = "auto"
          step = {1}
          marks
          min = {1}
          max = {14}
          onChange = {handleSliderChange}
        ></Slider>
      </Box>
    </Box>
    <Box sx={{display : "flex", justifyContent : "center", paddingTop : "30px"}}>
      <Typography variant = "h5" sx={{marginLeft : "1em"}}>Yhteishinta {summa} euroa</Typography>
      <Button variant = "contained" sx={{margin : "auto", width : "25%", padding : "10px"}}
        onClick={handleClickOpen}
        >Varaa mökki</Button>
      <FormControlLabel sx={{marginRight : "2em"}} 
        control = {<Checkbox onChange={(e : any) => {setTsek(e.target.checked)}}/>}
        label = "Loppusiivous 100 euroa"/>
    </Box>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Varauksen tiedot</DialogTitle>
      <List>
        <ListItem>Nimi: {nimi}</ListItem>
        <ListItem>Varauksen alkamispäivä: {paiva}</ListItem>
        <ListItem>Loppusumma: {summa} euroa</ListItem>
      </List>
    </Dialog>
     </>
    );
  }
  
  export default Content;