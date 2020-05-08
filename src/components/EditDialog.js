import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    select: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    dialog: {
        minWidth: 400,
    },
}));

export default function EditDialog({ open, handleClose, handleSubmit, selectedRow }) {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [jsonApiAccess, setJsonApiAccess] = useState("");
    const [profile, setProfile] = useState("");

    useEffect(() => {
        if (selectedRow) {
            setName(selectedRow.name)
            setType(selectedRow.type)
            setJsonApiAccess(selectedRow.jsonApiAccess)
            setProfile(selectedRow.profile)
        }
    }, [open])

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeType = (event) => {
        setType(event.target.value);
    };

    const onChangeProfile = (event) => {
        setProfile(event.target.value);
    };

    const onChangeJsonApiAccess = (event) => {
        setJsonApiAccess(event.target.value);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className={classes.dialog}
            >
                <DialogTitle id="form-dialog-title">User Configs</DialogTitle>
                <DialogContent>
                    <TextField
                        value={name}
                        onChange={onChangeName}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select
                        id="type-select"
                        value={type}
                        onChange={onChangeType}
                        className={classes.select}
                    >
                        <MenuItem value={'LOCAL'}>LOCAL</MenuItem>
                        <MenuItem value={'LDAP'}>LDAP</MenuItem>
                    </Select>
                    <InputLabel id="type-select-label">Profile</InputLabel>
                    <Select
                        id="profile-select"
                        value={profile}
                        onChange={onChangeProfile}
                        className={classes.select}
                    >
                        <MenuItem value={'Super_User'}>Super_User</MenuItem>
                    </Select>
                    <InputLabel id="type-select-label">
                        JSON API Access
                    </InputLabel>
                    <Select
                        id="access-select"
                        value={jsonApiAccess}
                        onChange={onChangeJsonApiAccess}
                        className={classes.select}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        <MenuItem value={'Read'}>Read</MenuItem>
                        <MenuItem value={'Read & Write'}>Read & Write</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() =>
                            handleSubmit(name, type, profile, jsonApiAccess)
                        }
                        color="primary"
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
