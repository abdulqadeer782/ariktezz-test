import React from 'react';
import { Button, Dropdown, Layout, Menu, Space, Typography } from 'antd';
import { DownOutlined, PoweroffOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


const items = [
    {
        label: 'Users',
        key: '/users',
    },
    {
        label: 'Product',
        key: '/product',
    },
];

const Main = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate();

    console.log('ffff', location.pathname)
    return (
        <Layout style={{ minHeight: '100vh' }} className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#fff'
                }}
            >
                <Typography.Title level={3} style={{ margin: 0 }}>Arkitezz</Typography.Title>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={[location.pathname]}
                    style={{ minWidth: '200px' }}
                    items={items}
                    onClick={(e) => navigate(e.key)}
                />

                {/* button for logout */}
                <Button icon={<PoweroffOutlined />}>Logout</Button>
            </Header>
            <Content
                style={{
                    padding: '50px',
                }}
            >

                {children}
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Copyright @2023. All right reserved.
            </Footer>
        </Layout>
    );
};
export default Main;