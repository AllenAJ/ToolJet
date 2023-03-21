import React, { useEffect, useState } from 'react';
import Select from '@/_ui/Select';

const userStatusOptions = [
  { name: 'All', value: '' },
  { name: 'Active', value: 'active' },
  { name: 'Invited', value: 'invited' },
  { name: 'Archived', value: 'archived' },
];

const UsersFilter = ({ filterList }) => {
  const [options, setOptions] = React.useState({ email: '', firstName: '', lastName: '', status: '' });
  const [statusVal, setStatusVal] = useState('');
  const [queryVal, setQueryVal] = useState();

  const statusValuesChanged = (event) => {
    let newOptions = {};
    newOptions = {
      ...options,
      email: queryVal,
      firstName: queryVal,
      lastName: queryVal,
      status: event,
    };
    setOptions(newOptions);
  };

  const queryValuesChanged = (event) => {
    let newOptions = {};
    newOptions = {
      ...options,
      status: statusVal,
      email: event.target.value,
      firstName: event.target.value,
      lastName: event.target.value,
    };
    setOptions(newOptions);
  };

  useEffect(() => {
    filterList(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  // const handleEnterKey = (e) => {
  //   if (e.key === 'Enter') filterList(options);
  // };

  return (
    <div className="workspace-settings-table-wrap workspace-settings-filter-wrap">
      <div className="row workspace-settings-filters">
        <div
          className="workspace-settings-filter-items d-flex align-items-center "
          data-cy="user-status-select-continer"
        >
          <div className="tj-text-xsm mx-3">Showing</div>
          <Select
            options={userStatusOptions}
            value={options.status}
            onChange={(value) => {
              statusValuesChanged(value);
              setStatusVal(value);
            }}
            width={'161.25px'}
            height="32px"
            useMenuPortal={true}
            className="users-filter-dropdown"
            closeMenuOnSelect={true}
          />
        </div>
        <div className="workspace-settings-filter-items workspace-clear-filter-wrap">
          <div className="d-flex align-items-center cursor-pointer tj-app-input">
            <input
              type="text"
              className="user-filter-search"
              placeholder="Search users by name or email"
              onChange={(e) => {
                setQueryVal(e.target.value);
                queryValuesChanged(e);
              }}
            />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default UsersFilter;
