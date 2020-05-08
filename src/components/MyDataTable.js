import React, { useMemo, useState, useCallback, useEffect } from 'react';
import DataTable from 'react-data-table-component';

const customStyles = {
    headRow: {
        style: {
            border: 'none',
        },
    },
    headCells: {
        style: {
            color: '#202124',
            fontSize: '14px',
        },
    },
    rows: {
        highlightOnHoverStyle: {
            backgroundColor: 'rgb(230, 244, 244)',
            borderBottomColor: '#FFFFFF',
            borderRadius: '25px',
            outline: '1px solid #FFFFFF',
        },
    },
    pagination: {
        style: {
            border: 'none',
        },
    },
};

const MyDataTable = ({ data, selectedRows, setSelectedRows }) => {

    useEffect(() => {
        console.log('state', selectedRows);
    }, [selectedRows]);


    const handleChange = useCallback((state) => {
        setSelectedRows(state.selectedRows);
    }, []);

    const columns = useMemo(
        () => [
            {
                name: 'Name',
                selector: 'name',
                sortable: true,
                grow: 2,
            },
            {
                name: 'Type',
                selector: 'type',
                sortable: true,
            },
            {
                name: 'Profile',
                selector: 'profile',
                sortable: true,
            },
            {
                name: 'JSON API Access',
                selector: 'jsonApiAccess',
                sortable: true,
            },
            {
                name: 'ADOMS',
                selector: 'adoms',
                sortable: true,
            },
            {
                name: 'Trusted IPV4 Hosts',
                selector: 'trustedIpv4Hosts',
                sortable: true,
            },
        ],
        []
    );

    return (
        <DataTable
            data={data}
            columns={columns}
            customStyles={customStyles}
            onSelectedRowsChange={handleChange}
            selectableRows
        />
    );
};

export default MyDataTable;
