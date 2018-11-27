import React,{ Component } from 'react';
import EditRow from './EditRow';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize:20
    },
    body: {
      fontSize: 17,
    },
  }))(TableCell);
  
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
    avatar: {
        margin: 10,
      },
      bigAvatar: {
        width: 60,
        height: 60,
      },
  });
  



class DisplayComponent extends Component
{
    render()
    {
        const { classes } = this.props;
        
        return(<div >
        <Paper className={classes.root} >
            <Table className={classes.table} >
                <TableHead>
                    <TableRow >
                        <CustomTableCell>First Name</CustomTableCell>
                        <CustomTableCell >Last Name</CustomTableCell>
                        <CustomTableCell >Picture</CustomTableCell>
                        <CustomTableCell >Edit</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.items.map(item =>(
                        <TableRow className={classes.row} key={item.id}>
                            <CustomTableCell component="th" scope="row">{item.first_name}</CustomTableCell>
                            <CustomTableCell >{item.last_name}</CustomTableCell>
                            <CustomTableCell>
                                <Avatar
                                    alt="pic" src={item.avatar}
                                    className={classNames(classes.avatar, classes.bigAvatar)}
                                />   
                            </CustomTableCell>                               
                            <CustomTableCell><EditRow id={item.id}/></CustomTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>

        </div>);
        
       
    }
}

DisplayComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(DisplayComponent);
