import React from 'react';
import { 
    Button,
    Tabs,
    Form,
    Input,
    Icon,
    Checkbox,
    Row,
    Col
} from 'antd';
import login from '../../static/images/login.jpg';
import { NavLink } from 'react-router-dom';
import './login.less';


const Login = (props) => {
    const { TabPane } = Tabs;
    const { form } = props;
    const { getFieldDecorator, validateFields } = form;

    function callback(key) {
        console.log(key);
    }

    let divStyle = {
        backgroundImage: 'url(' + login + ')'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    };

    return (
        <div className="login" style={divStyle}>
            <div className="content">
                <Tabs defaultActiveKey="1" onChange={callback} className="login-tab">
                    <TabPane tab="账号登录" key="1" className='form-login'>
                        <Form onSubmit={handleSubmit} className="login-form">
                            <Form.Item style={{ margin: '1.3rem 2%' }}>
                                {getFieldDecorator('username', {
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入手机号/邮箱"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item style={{ margin: '1.3rem 2% 2% 2%' }}>
                                {getFieldDecorator('password', {
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />,
                                )}
                            </Form.Item>
                            <div className='login-forgot' style={{ margin: '2%' }}>
                                <a className='forget'>
                                    忘记密码
                                </a>
                                <a>
                                    注册新账号
                                </a>
                            </div>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ margin: '2rem 2%' }}>
                                <NavLink to="/home">
                                    登录
                                </NavLink>
                            </Button>
                            <div className='sign-in-with' style={{ margin: '10% 2% 0 2%' }}>
                                <span>第三方登录</span>
                                <div className='sign-icon' >
                                    <Icon type="qq-circle" theme="filled" className='qq-circle' />
                                    <Icon type="wechat" theme="filled" className='wechat' />
                                    <Icon type="weibo-circle" theme="filled" className='weibo-circle' />
                                </div>
                            </div>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册新账号" key="2" className='regist-tab'>
                        <Form onSubmit={handleSubmit} className="login-form">
                            <Form.Item style={{ margin: '0.7rem 2%' }}>
                                {getFieldDecorator('username', {
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入手机号"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item style={{ margin: '0.7rem 2%' }}>
                                {getFieldDecorator('password', {
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item style={{ margin: '0.7rem 2%' }}>
                                {getFieldDecorator('nickName', {
                                })(
                                    <Input placeholder="昵称（2到10个字）" />,
                                )}
                            </Form.Item>
                            <Form.Item style={{ margin: '0.7rem 2%' }}>
                                <Row gutter={8}>
                                    <Col span={12}>
                                    {getFieldDecorator('captcha', {
                                        // rules: [{ required: true, message: '请输入验证码！' }],
                                    })(<Input />)}
                                    </Col>
                                    <Col span={12}>
                                        <Button>获取验证码</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item style={{ margin: '0.7rem 2%' }}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <div>
                                        <Checkbox>同意并接受</Checkbox>
                                        <a>《健康界用户协议》</a>
                                    </div>
                                )}
                            </Form.Item>
                            <Form.Item style={{ margin: '0 2%', marginTop: '-6%' }}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    确定一次信息注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Form.create({})(Login);