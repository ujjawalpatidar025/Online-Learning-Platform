import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    minWidth:345,
    maxWidth: 345,

    '&:hover':{
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",

    }
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {id, img, ...others}=props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL+img}
          title={others.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {others.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            {others.channel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {others.discription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="outlined" size='small' endIcon={<PlaylistAddIcon />}>
        Add
      </Button>
        <Button size="small"  variant="outlined" endIcon={<KeyboardArrowRightIcon/>}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
