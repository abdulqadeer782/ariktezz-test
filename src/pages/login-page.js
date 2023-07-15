import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userAction';
import { useNavigate } from 'react-router';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { users } = useSelector(state => state.users)

    const onFinish = (values) => {
        const { username, password } = values;
        let user = users.find(user => user.username === username && user.password === password)
        if (user) {
            navigate('/')
            dispatch(loginUser(user));
        } else message.error('Invalid username/password!')
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="Login" style={{ width: '500px' }}>
                <Form
                    name="loginForm"
                    size='large'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter your username!' }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>Login</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;
