/**
 * 意见与反馈
 */
import React from 'react';
import { Divider, Form, Input, Button, Radio, Row, Col, Icon } from 'antd';

 import './feedback.less';

 const Feedback = (props) => {
     const { form } = props;
     const { getFieldDecorator } = form;

     const { TextArea } = Input;

     
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    };
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
        },
    };

    const onChange = e => {
        console.log(e);
    };
    

    return (
        <div className='feedback'>
            <h2>意见与反馈</h2>
            <Divider />
            <Form onSubmit={handleSubmit}>
                <Form.Item label="你的反馈对象">
                    {getFieldDecorator('radio', {
                        rules: [
                        {
                            required: true,
                            message: '请选择反馈对象!',
                        },
                        ],
                    })(
                        <Radio.Group>
                            <Row gutter={24}>
                                <Col span={14}>
                                    <Radio value={1}>健康界APP、网站</Radio>
                                </Col>
                                <Col span={6}>
                                    <Radio value={2}>健康界用户及VIP会员</Radio>
                                </Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={14}>
                                    <Radio value={3}>健康界学院课程、课件</Radio>
                                </Col>
                                <Col span={6}>
                                    <Radio value={4}>健康界商城</Radio>
                                </Col>
                            </Row>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item label="请详细描述你的问题或建议">
                    {getFieldDecorator('input', {
                        rules: [
                            {
                                required: true,
                                message: '请详细描述你的问题或建议',
                            },
                        ],
                    })(
                        <TextArea placeholder="请留下你的问题和建议吧"  maxLength={500} autoSize={{minRows: 6, maxRows: 10}} onChange={onChange} />
                    )}
                </Form.Item>
                <Form.Item label="邮箱">
                    {getFieldDecorator('email', {
                        rules: [
                        {
                            type: 'email',
                            message: '输入无效电子邮件!',
                        },
                        {
                            required: true,
                            message: '请输入电子邮件!',
                        },
                        ],
                    })(<Input placeholder='请输入你的电子邮箱，方便我们快速为你回复问题' prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />)}
                </Form.Item>
                <Form.Item label="你的联系方式">
                    {getFieldDecorator('phone', {
                    })(<Input placeholder='请输入你的手机号码，如有需要我们会尽快联系你' prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} />)}
                </Form.Item>
                <div className='note'>
                    <div>谢谢你的反馈，如果有主动联系我们的需要，请拨打一下热线：</div>
                    <div>1、健康界APP、网站：17801368257（周一至周日 8:00 - 18:00）</div>
                    <div>2、健康界用户及VIP会员：17801368257（周一至周日 8:00 - 18:00）</div>
                    <div>3、健康界学院、智库：18210568191（周一至周日 8:00 - 18:00）</div>
                    <div>4、健康界商城：17801368257（周一至周日 8:00 - 18:00）</div>
                </div>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
 }

 export default Form.create({})(Feedback);