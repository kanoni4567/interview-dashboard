import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import SearchIcon from '@material-ui/icons/Search';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';

import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

export default function ToolBar({
    onCreate,
    onEdit,
    onClone,
    onDelete,
}) {
    const classes = useStyles();
    return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          
          {/* <div className={classes.grow} /> */}
            <IconButton color="inherit" onClick={onCreate}>
                <AddIcon />
                <Typography variant="body1" noWrap>
                    Create New
                </Typography>
            </IconButton>
            <IconButton color="inherit" onClick={onEdit}>
                <EditIcon />
                <Typography variant="body1" noWrap>
                    Edit
                </Typography>
            </IconButton>
            <IconButton color="inherit" onClick={onClone}>
                <FileCopyIcon />
                <Typography variant="body1" noWrap>
                    Clone
                </Typography>
            </IconButton>
            <IconButton color="inherit" onClick={onDelete}>
                <DeleteIcon />
                <Typography variant="body1" noWrap>
                    Delete
                </Typography>
            </IconButton>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}
