import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Input, Modal, Row, Select, Space, Table, Typography } from 'antd'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'


export default function Product({ products, categories, message }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(() => {
        if (!modalOpen) {
            setSelectedProduct({})
            setModalTitle("")
        }
    }, [modalOpen])

    useEffect(() => {
        if (message) alert(message)
    }, [message])

    const handleDelete = (id) => console.log(id)

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button
                        title='Edit'
                        icon={<EditOutlined />}
                        onClick={() => {
                            setModalTitle(`Update ${record.name}`)
                            setModalOpen(true)
                            setSelectedProduct(record)
                        }}
                    />
                    <Button
                        title='View'
                        icon={<EyeOutlined />}
                        onClick={() => {
                            setModalTitle(`View ${record.name}`)
                            setModalOpen(true)
                            setSelectedProduct(record)
                            // setModalFooter(false)
                        }}
                    />
                    <Button onClick={() => handleDelete(record.id)} title='Delete' icon={<DeleteOutlined />} danger />
                </Space>
            )
        }
    ];

    return (
        <>
            <Card
                title={(
                    <Row justify={'space-between'} align={'middle'}>
                        <Col>
                            <Typography.Title level={3}>Product</Typography.Title>
                        </Col>
                        <Col>
                            <Button
                                onClick={() => {
                                    setModalOpen(true)
                                    setModalTitle('Add Product')
                                }}
                            >Add Product</Button>
                        </Col>
                    </Row>
                )}
            >
                <Table
                    columns={columns}
                    dataSource={products}
                    rowKey={"id"}
                />
            </Card>

            <ProductModalForm
                isOpen={modalOpen}
                title={modalTitle}
                onCancel={() => setModalOpen(false)}
                categories={categories}
                selectedProduct={selectedProduct}
            />
        </>
    )
}

const ProductModalForm = ({ isOpen, title, onCancel, categories, selectedProduct }) => {
    let [form] = Form.useForm()

    useEffect(() => {
        if (Object.keys(selectedProduct)?.length > 0) form.setFieldsValue(selectedProduct)
        if (!isOpen) form.resetFields();
    }, [isOpen, selectedProduct, form])

    const handleSubmit = () => {
        form.validateFields().then(result => {
            console.log('result')
        })
    }

    return (
        <Modal
            title={title}
            open={isOpen}
            onCancel={onCancel}
            footer={null}
        >
            <Form
                name='product_form'
                form={form}
                size='large'
                onFinish={handleSubmit}
            >
                <Form.Item
                    name={'name'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product name."
                        }
                    ]}
                >
                    <Input placeholder='Enter Product Name!' readOnly={title.split(' ')[0] === "View"} />
                </Form.Item>
                <Form.Item
                    name={'description'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product description."
                        }
                    ]}
                >
                    <Input.TextArea placeholder='Enter Product Description!' readOnly={title.split(' ')[0] === "View"} />
                </Form.Item>

                {title.split(' ')[0] !== "View" ? <Form.Item
                    name={'category'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product category."
                        }
                    ]}
                >
                    <Select placeholder="Please Select Category!">
                        {categories?.length > 0 && categories.map((cat) =>
                            <Select.Option key={cat.id} value={cat.id}>{cat.name}</Select.Option>
                        )}
                    </Select>
                </Form.Item> :
                    <Form.Item name={'category'}>
                        <Input readOnly={title.split(' ')[0] === "View"} />
                    </Form.Item>
                }

                <Form.Item
                    name={'stock'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product quantity."
                        },
                        {
                            pattern: new RegExp(/[0-9]/),
                            message: "Field accepts numbers only.",
                        },
                    ]}
                >
                    <Input placeholder='Enter Product Quantity!' readOnly={title.split(' ')[0] === "View"} />
                </Form.Item>
                <Form.Item
                    name={'price'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product price."
                        },
                        {
                            pattern: new RegExp(/[0-9]/),
                            message: "Field accepts numbers only.",
                        },
                    ]}
                >
                    <Input placeholder='Enter Product Price!' readOnly={title.split(' ')[0] === "View"} />
                </Form.Item>

                {title.split(' ')[0] !== "View" && <Row gutter={[20, 0]}>
                    <Col span={12}>
                        <Button block onClick={onCancel}>Cancel</Button>
                    </Col>
                    <Col span={12}>
                        <Form.Item htmlFor=''>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                            >
                                {title === 'Add Product' ? "Add Product" : "Update Product"}
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>}
            </Form>
        </Modal>
    )
}


