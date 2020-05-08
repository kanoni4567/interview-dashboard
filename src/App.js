import React, { useMemo, useState, useCallback, useEffect } from 'react';
import ToolBar from './components/ToolBar';
import MyDataTable from './components/MyDataTable';
import EditDialog from './components/EditDialog';
import defaultData from './data/data.json';

const useStateWithLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
};


function App() {
    const [data, setData] = useStateWithLocalStorage('formData', defaultData);
    const [selectedRows, setSelectedRows] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        if (selectedRows.length === 1) {
            setIsEditing(true);
            setDialogOpen(true);
        }
    };
    const onCreate = () => {
        setDialogOpen(true);
    };
    const onDelete = () => {
        if (selectedRows) {
            setData((prev) =>
                prev.filter(
                    (item) =>
                        !selectedRows.map((row) => row.name).includes(item.name)
                )
            );
        }
    };
    const onClone = () => {
        if (selectedRows) {
            setData((prev) => [...prev, ...selectedRows]);
        }
    };
    return (
        <div className="App">
            <ToolBar
                onEdit={onEdit}
                onCreate={onCreate}
                onDelete={onDelete}
                onClone={onClone}
            />
            <MyDataTable
                data={data}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
            />
            <EditDialog
                open={dialogOpen}
                selectedRow={isEditing? selectedRows[0] : null}
                handleClose={() => setDialogOpen(false)}
                handleSubmit={(name, type, profile, jsonApiAccess) => {
                    let updatedRow = {
                        name: name,
                        type: type,
                        profile: profile,
                        jsonApiAccess: jsonApiAccess,
                        adoms: 'All ADOMS',
                        trustedIpv4Hosts: '0.0.0.0/0.0.0.0',
                    };
                    if (isEditing) {
                        setIsEditing(false);
                        updatedRow.id = selectedRows[0].id;
                        setData((prev) => [
                            ...prev.filter((item) => item.id !== updatedRow.id),
                            updatedRow,
                        ]);
                    } else {
                        updatedRow.id =
                            Math.random().toString(36).substring(2, 15) +
                            Math.random().toString(36).substring(2, 15);
                        setData((prev) => [...prev, updatedRow]);
                    }
                }}
            ></EditDialog>
        </div>
    );
}

export default App;
