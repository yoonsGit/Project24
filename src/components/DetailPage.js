import React from 'react';
import '../css/ProductPage.css';
import { useNavigate,useParams } from 'react-router-dom';

const DetailPage = () => {
  let { id } = useParams();
  
  const nutrition = [
    { id: 1, name: '비타민C' },
    { id: 2, name: '비타민B1' },
    { id: 3, name: '비타민A' },
    { id: 4, name: '비타민D' },
    { id: 5, name: '비타민B6' },
    { id: 6, name: '엽산' },
    { id: 7, name: '비타민K' },
    { id: 8, name: '비타민E' },
    { id: 9, name: '비타민B12' },
    { id: 10, name:'베타카로틴' },
    { id: 11, name: '판토텐산' },
    { id: 12, name: '비타민B2' },
    { id: 13, name: '비오틴' },
    { id: 14, name: '나이아신(비타민B3)' },
  ];
  
  const navigate = useNavigate();
  const navigateToDetailPage = () => {
    // 영양성분 상세 페이지로 이동
    navigate("/detail"+id);
  };

  return (
    
    <div className="product-page">
      {nutrition.map(item => (
        <div key={item.id} className="minibox">
          <h4 onClick={() => navigateToDetailPage(item.id)}>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;

/*위의 DetailPage 컴포넌트는 영양성분 목록을 나타내고, 
각 성분을 클릭하면 해당 성분의 상세 페이지로 이동합니다.

nutrition 배열은 간단한 제품 데이터를 가지고 있으며, 
각 제품은 고유한 id와 이름으로 구성되어 있습니다.

useNavigate 훅을 사용하여 페이지 간 이동을 관리하고 있으며, 
navigateToDetailPage 함수는 클릭된 성분의 id를 받아 
해당 id를 가진 상세 페이지로 이동합니다.

그리고 영양성분 목록은 nutrition 배열을 매핑하여 각 항목을 나타내며, 
클릭 이벤트가 발생하면 navigateToDetailPage 함수가 호출되어 
해당 성분의 상세 페이지로 이동합니다. */