import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`;

export const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


export const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

export const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

export const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(197, 100%, 70%, 1); /* Light blue with full saturation and 70% lightness */
  background: linear-gradient(225deg, hsla(197, 100%, 70%, 1) 0%, hsla(210, 100%, 70%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(197, 100%, 70%, 1) 0%, hsla(210, 100%, 70%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(197, 100%, 70%, 1) 0%, hsla(210, 100%, 70%, 1) 100%);  
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 30px;
  width: 50%;
  height: 100%;
  align-self: center;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background: hsla(197, 100%, 60%, 1); /* Slightly darker blue on hover */
    background: linear-gradient(225deg, hsla(197, 100%, 60%, 1) 0%, hsla(210, 100%, 60%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(197, 100%, 60%, 1) 0%, hsla(210, 100%, 60%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(197, 100%, 60%, 1) 0%, hsla(210, 100%, 60%, 1) 100%);
    transform: scale(1.05)
  }
  &:active {
    transform: scale(0.95)
  }
`;

export const WhatsAppButton = styled.a`
  display: inline-block;
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1ebe57;
  }
`;

export const ErrorNotification = styled.div`
  color: rgba(285, 0, 0, 0.9);
  font-size: 14px;
  margin-top: -10px;
  text-align: left;
  background-color: rgba(255, 0, 0, 0.05);
  border-radius: 6px;
`;