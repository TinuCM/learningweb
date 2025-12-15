import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';    

import { styled } from "@mui/material/styles";

export const MyCard = styled(Card)(({ theme }) => ({
  borderRadius: "25px",
//   backgroundColor: theme.palette.background.paper,
  boxShadow: "0 0 8px 4px #00000010"
}));
   
     
  export default function CustomCard(props) {      
    return(
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        { props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
  }