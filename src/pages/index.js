import React from 'react';
import { Button, Layout, Typography } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userAction';

const { Header, Content, Footer } = Layout;

const Main = ({ children }) => {
    const dispatch = useDispatch();
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
                <Typography.Title level={3} style={{ margin: 0 }}>Arkitektz</Typography.Title>

                {/* button for logout */}
                <Button onClick={() => dispatch(logoutUser())} icon={<PoweroffOutlined />}>Logout</Button>
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