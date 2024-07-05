import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Card2() {

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
