import React, {useEffect, useState} from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import wallpaper from '../../assets/images/wallpaper.jpg';

const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    background-image: url(${wallpaper});
    z-index: 1;
    justify-content: center; 
    align-items: center; 
    padding: 50px 0 30px 0;
    width: 100vw;
    text-align: center;

`

const Text = styled.div`
    margin: 0 auto;
    max-width: 1920px;
    color: lightgray;
    font-size: 90px;
    font-weight: 700;
    line-height: 1.8;
    letter-spacing: -1px;

    @font-face {
          font-family: 'AppleBold';
          src: url('/fonts/AppleSDGothicNeoBold.ttf') format('truetype');
      }
    
    font-family: 'AppleBold';

    span.highlight {
        color: #F3F781;
    }

    span.highlight2 {
        font-size: 120px;
    }
    
    @media (max-width: 768px) {
        font-size: 4rem;
    }
`

const Scroll = styled.div`
    .show {
        opacity: 1;
    }

    .hide {
        opacity: 0.3;
    }
`
interface Section2Props {
    children: React.ReactNode;
}


export const Section2: React.FC<Section2Props> = ({ children }) => { 
    
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setScrollY(scrollPosition)
    };
    
    useEffect( () => {
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
    
    console.log(scrollY);

    return (
    <SectionContainer container xs id='how'>
        <Scroll>
            <Text className={(950 < scrollY && scrollY < 1050) ? 'show' : 'hide'}>전례없던 <span className="highlight">{" 배포 "}</span>서비스.</Text>
            <Text className={(1050 < scrollY && scrollY < 1150) ? 'show' : 'hide'}>뛰어난 안정성으로 자식같은 서비스를 안전하게.</Text>
            <Text className={(1150 < scrollY && scrollY < 1250) ? 'show' : 'hide'}>걱정할 필요없는 비용문제.</Text>
            <Text className={(1250 < scrollY && scrollY < 1350) ? 'show' : 'hide'}>메이저 개발 언어 모두를 포용하는 편리함.</Text>
            <Text className={(1350 < scrollY && scrollY < 1450) ? 'show' : 'hide'}>모니터링 페이지를 통해 배포 상황 실시간 확인까지.</Text>
        </Scroll>
    </SectionContainer>
    );
};