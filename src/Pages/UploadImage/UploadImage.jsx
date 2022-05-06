import React, { useState } from "react";

// import {Row,Col} from 'antd';
import './index.less'
import { Upload, message, Row, Col, Image, Spin,Avatar,Dropdown } from 'antd';
import { InboxOutlined,UserOutlined } from '@ant-design/icons';
import {Redirect,withRouter} from 'react-router-dom'

const { Dragger } = Upload;


 function UploadImage(props) {

  let [imgSrc, setImgSrc] = useState("")

  let [resSrc, setResSrc] = useState("")

  let [showSpin, setShowSpin] = useState(false)

  let [str, setStr] = useState("")


  const fileChange = (info) => {
    setShowSpin(true)
    // console.log(e)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      // message.success(`${info.file.name} file uploaded successfully`);
      console.log(info.file.response.image)
      setResSrc('data:image/png;base64,' + info.file.response.image)
      setStr(info.file.response.inferenced_actions)
      setShowSpin(false)
    } else if (info.file.status === 'error') {
      setShowSpin(false)
      message.error(`${info.file.name}上传失败`);
    }
  }

  const imgUpload = (file) => {
    console.log(file)

    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result)
        setImgSrc(reader.result)
        resolve()
      }
    })
  }

  if(!localStorage.getItem("username")) return <Redirect to="/login" />;

  return (
    <Spin size="large" spinning={showSpin} tip="图片上传中...">
      <header>
        <div className="xx">
          <div className="logoxx">
           
              <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
              <span>Hello</span>
          

          </div>
          <div className="yy">
          <Avatar style={{marginRight:'12px'}} size="small" icon={<UserOutlined />} />
          <Dropdown overlay={<div onClick={()=>{
            localStorage.clear();
            props.history.push('/')
          }} style={{padding:'5px',backgroundColor:'#fff',cursor:'pointer'}}>退出</div>}>
          <span>{localStorage.getItem('username')}</span>
          </Dropdown>
          
        </div>
        </div>
        
      </header>
      <Row gutter={[8, 0]} className="uploadRow">
        <Col className="colLeft" span={12}>

          <div className="bottomRight">
            {/* <h3>原始图片</h3> */}
            <Image width="100%" src={imgSrc} />
          </div>
          <div className="headerLeft">
            <Dragger beforeUpload={imgUpload} listType="picture-card" onChange={fileChange} name="file" action="/api/inference" >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">拖动或者点击上传</p>

            </Dragger>
          </div>
        </Col>
        <Col span={12} className="colLeft">
          <div className="topRight">
            <Image width="100%" src={resSrc} />
          </div>
          <div className="headerRight">
            {str}
          </div>
        </Col>
      </Row>
    </Spin>
  )
}

export default withRouter(UploadImage)