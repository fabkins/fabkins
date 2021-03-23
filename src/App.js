import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/paper';
import Grid from  '@material-ui/core/grid';
import { styled } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';

import  DocumentPane  from "./document_pane";
import  MeetingPane  from "./meetings_pane";
import  SchedulePane  from "./schedule_pane";

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





const CustomPane = styled(Paper) ({

  color: blue,
  padding:5, margin: 20

})




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


  function Pane1() {
return(
<CustomPane >
<Typography  variant="h6">
          Meetings
      </Typography>
      <Divider />
      <MeetingPane />
</CustomPane>

)
}

  function Pane2() {
  return(
  <CustomPane elevation={3} >
      <Typography  variant="h6">
          Schedules
      </Typography>
      <SchedulePane />
      <Divider />
    
  </CustomPane>
  
  )
  }

   function Pane3() {
    return(
    <CustomPane elevation={3} >
      <Typography  variant="h6">
          Content
      </Typography>
      <Divider />
      <DocumentPane />
      
    </CustomPane>
    
    )
    }



export default function ButtonAppBar() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Share and Meet
          </Typography>
          <Button color="inherit">Login</Button>
          <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
        </Toolbar>
        </AppBar>


        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h6">Meeting</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <MeetingPane />
        </AccordionDetails>
      </Accordion>

        <Grid container>   
          <Grid item sm>
            <Pane2 />
          </Grid>
          <Grid item sm>
            <Pane3 />
          </Grid>
          
        </Grid>
    </div>
  );
}




