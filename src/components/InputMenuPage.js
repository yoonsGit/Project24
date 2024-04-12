import React, { useState } from 'react';
import { Typography, Input, Form, Button, Select, message, Modal } from 'antd';
import styles from '../css/Button.css';
import '../css/InputPage.css';

function InputMenuPage({  }) {

  const { Option } = Select;

  // 각 요일에 해당하는 식단과 선택된 요일을 관리하는 state
  const [weeklyMenu, setWeeklyMenu] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  });
  const [selectedDay, setSelectedDay] = useState('monday'); // 기본값은 월요일
  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onDescriptionChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const onDayChange = (value) => {
    setSelectedDay(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const newMenu = inputValue.split(/[, ]+/).filter(item => item.trim() !== ''); // 쉼표 또는 공백으로 구분하여 입력값 처리
    setWeeklyMenu(prevMenu => ({
      ...prevMenu,
      [selectedDay]: [...prevMenu[selectedDay], ...newMenu]
    }));
    setInputValue('');
    const formattedMenu = newMenu.join(', '); // 등록된 식단을 쉼표로 구분하여 표시
    message.success(`${selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}에 다음 식단이 추가되었습니다: ${formattedMenu}`);
  };

  const deleteMenu = (day) => {
    setWeeklyMenu(prevMenu => ({
      ...prevMenu,
      [day]: []
    }));
    message.success(`${day.charAt(0).toUpperCase() + day.slice(1)}의 식단이 삭제되었습니다.`);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className='inputPage' style={{ backgroundColor: 'beige', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '700px', background: 'white', padding: '40px', borderRadius: '20px' }}>
        <div className='input-logo2'>식단 정보</div>
        <Form onSubmit={onSubmit}>
          {/* 요일 선택 */}
          <Form.Item label="요일">
            <Select defaultValue="monday" onChange={onDayChange}>
              <Option value="monday">월요일</Option>
              <Option value="tuesday">화요일</Option>
              <Option value="wednesday">수요일</Option>
              <Option value="thursday">목요일</Option>
              <Option value="friday">금요일</Option>
              <Option value="saturday">토요일</Option>
              <Option value="sunday">일요일</Option>
            </Select>
          </Form.Item>
          {/* 선택된 요일에 대한 식단 입력 폼 */}
          <Form.Item label="식단">
            <Input
              onChange={onDescriptionChange}
              value={inputValue}
            />
          </Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Button className={`${styles.btn} }`} onClick={onSubmit}>
              등록하기
            </Button>
            <Button onClick={showModal} style={{ marginLeft: '10px' }}>등록된 식단 </Button>
          </div>
        </Form>
      </div>
      <Modal
        title="등록된 식단"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>닫기</Button>
        ]}
      >
        {Object.keys(weeklyMenu).map(day => (
          <div key={day}>
            <p>{day.charAt(0).toUpperCase() + day.slice(1)}: {weeklyMenu[day].join(', ')}</p>
            <Button onClick={() => deleteMenu(day)} type="default">식단 삭제</Button>
          </div>
        ))}
      </Modal>
    </div>
  );
}

export default InputMenuPage;
