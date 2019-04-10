import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    position: 'relative',
    minWidth: 450,
    top: 200,
    ...theme.mixins.gutters(),
    pad4ingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Information(props) {
  const { classes } = props;

  return (
    <div>
        <Typography variant='display4' style = {{position:'absolute', top: '100px',right: '50%', transform: 'translate(50%,-50%)'}}>
        {props.page}
        </Typography>
      <Paper className={classes.root} elevation={1} style ={{left : '50%' , width: '40%',transform: 'translateX(-50%)'}}>
        <Typography variant="h5" paragraph >
          {props.children}
        </Typography>
      </Paper>
    </div>
  );
}

Information.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Information);
