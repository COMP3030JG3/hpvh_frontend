
import React from 'react';
import { Button, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


export default (language, setSearchValue, handleSearch, handleReset) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
            <Input
                onChange={e => { setSearchValue(e.target.value) }}
                onPressEnter={e => { confirm(); handleSearch() }}
                style={{ width: 188, marginBottom: 8 }}
            />
            <div />
            <Space>
                <Button
                    type="primary"
                    onClick={e => { confirm(); handleSearch() }}
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90, display: "block", margin: "0 auto" }}
                >
                    {language['search']}
                </Button>
                <Button
                    onClick={e => { confirm(); handleReset() }}
                    size="small"
                    style={{ width: 90, display: "block", margin: "0 auto" }}
                >
                    {language['reset']}
                </Button>
            </Space>
        </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,

});

