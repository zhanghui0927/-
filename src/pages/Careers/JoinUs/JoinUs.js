/**
 * 招贤纳士 - 职业匹配 - 加入我们
 */
import React from 'react';
import { Divider, Form, Icon, Button, Row, Col, Input, Radio, DatePicker, Upload, message } from 'antd';
import './joinUs.less';
import comLogo from '../../../static/images/companyProfile/com-logo.png';

const JoinUs = (props) => {
    const { form } = props;
    const { getFieldDecorator } = form;

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

    function dateOnChange(date, dateString) {
        console.log(date, dateString);
    }

    const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <div className='joinUs'>
            <div className='content'>
                <div className='content-top'>
                   <div>
                       <h2 style={{ fontSize: '1.2rem' }}>加入我们</h2>
                        <p>如果你对我们的岗位感兴趣。</p>
                        <p>为了更好的了解你，请告诉我们你的技能、经验和你所求的机会。</p>
                        <p>方便我们了解你，给彼此一个机会。</p>
                   </div>
                   <img src={comLogo} />
                </div>
                <div className='basic-information'>
                    <div className='information-header'>
                        <Icon type="user" style={{ fontSize: '28px', color: '#6b6464' }} />
                        <span>&nbsp;基本信息</span>
                    </div>
                    <Divider />
                    <Form onSubmit={handleSubmit}>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item label="姓名">
                                    {getFieldDecorator('name', {
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                            <Col span={8} offset={4}>
                                <Form.Item label="性别">
                                    {getFieldDecorator('gender', {
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item label="年龄">
                                    {getFieldDecorator('age', {
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                            <Col span={8} offset={4}>
                                <Form.Item label="邮箱">
                                    {getFieldDecorator('email', {
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label="电话">
                                    {getFieldDecorator('phone', {
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label="期待职位">
                                    {getFieldDecorator('qidaizhiwei', {
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label="期待城市">
                                    {getFieldDecorator('city', {
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="求职性质">
                            {getFieldDecorator('radio', {
                            })(
                                <Radio.Group>
                                    <Row gutter={24}>
                                        <Col span={6}>
                                            <Radio value={1}>正式</Radio>
                                        </Col>
                                        <Col span={6}>
                                            <Radio value={2}>实习</Radio>
                                        </Col>
                                        <Col span={6}>
                                            <Radio value={3}>校招</Radio>
                                        </Col>
                                        <Col span={6}>
                                            <Radio value={4}>实习+校招</Radio>
                                        </Col>
                                    </Row>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label="预期到岗时间">
                                    {getFieldDecorator('city', {
                                    })(<DatePicker onChange={dateOnChange} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="预期到岗时间">
                            {getFieldDecorator('aaaaa', {
                            })(
                                <Upload {...uploadProps}>
                                    <Button type="primary">
                                        <Icon type="upload" /> 上传简历
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className='btn'>
                            提交
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Form.create({})(JoinUs);