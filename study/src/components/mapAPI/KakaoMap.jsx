import { useEffect } from "react";

function KakaoMap() {

    useEffect(()=>{
        const script = document.createElement('script'); 
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
        script.async = true;   
        
        script.onload =()=>{
            // kakao 객체가 제대로 로드되었는지 확인
            if (window.kakao && window.kakao.maps) {
                // kakao.maps.load()를 사용하여 API가 완전히 로드된 후 콜백 함수 실행
                window.kakao.maps.load(() => {
                    // 지도를 담을 영역의 DOM 레퍼런스
                    const container = document.getElementById('map');
                    // 지도 생성 기본 옵션
                    const options = {
                        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 위도, 경도
                        level: 3 // 지도의 확대 레벨
                    };
                    // 지도 생성 및 객체 리턴
                    new window.kakao.maps.Map(container, options);
                });
            } else {
                console.error('Kakao Maps API가 로드되지 않았습니다.');
            }
        };
        script.onerror = () => {
            console.error('Kakao Maps API 스크립트 로드 중 오류가 발생했습니다.');
        };
            document.head.appendChild(script);
    },[]);
    
    return(
        <>
            <div id="map" style={{width:"500px", height:"400px"}}></div>

        </>
    )
}

export default KakaoMap;