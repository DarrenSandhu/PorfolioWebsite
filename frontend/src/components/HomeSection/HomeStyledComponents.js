import styled from "styled-components";
import _default from "../../themes/default";
import { motion } from "framer-motion";


export const HomeContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HomeBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 80%;
  height: 90%;
  overflow: hidden;
  padding: 0 80px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HomeContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1150px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HomeLeftContent = styled.div`
  width: 150%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeRightContent = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;


export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  padding-bottom: 20px;

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  padding-bottom: 5px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  padding-bottom: 20px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 650;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);

    /* Updated gradient background to blue tonal colors */
    background: linear-gradient(225deg, hsla(210, 100%, 60%, 1) 0%, hsla(210, 100%, 40%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(210, 100%, 60%, 1) 0%, hsla(210, 100%, 40%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(210, 100%, 60%, 1) 0%, hsla(210, 100%, 40%, 1) 100%);
    
    /* Updated box-shadow for blue theme */
    box-shadow:  0px 10px 20px #a0c4ff,
                 -0px -10px 20px #d6e0ff;
    
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 500px;
    border-radius: 80%;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 450px;
  height: 100%; /* Maintain aspect ratio */
  padding: 0; /* Adjust padding if needed */
  object-fit: cover;
  object-position: center;
  display: block; /* No need for flex properties on img itself */
  max-width: 600px; /* Make sure max-width and max-height are equal */
  max-height: 500px; /* to ensure circular shape */
  border: 1.8px solid ${({ theme }) => theme.primary};
`;

export const AnimatedBackground = () => {
    return (
      <Background>
        <motion.div
          className="motion-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ backgroundColor: 'rgba(0, 200, 300, 0.5)' }} // Blue color with some transparency
        />
      </Background>
    );
  };
  
  const Background = styled.div`
    width: 100%;
    height: 100%; /* Adjust height as needed */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; /* Ensure it stays behind other content */
    overflow: hidden;
  
    .motion-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(225deg, rgba(0, 200, 300, 0.5), rgba(0, 200, 300, 0.8));
      clip-path: circle(50% at 50% 50%);
    }
`;