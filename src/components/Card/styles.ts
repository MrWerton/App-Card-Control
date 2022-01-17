import styled from 'styled-components/native';
import { Colors } from '../../themes/Colors';

interface Color {
    color: string
}
const handleColorType = ({color}:Color) => {
    switch (color) {
      case 'primary':
        return `${Colors.pink}`;
      case 'secondary':
        return `${Colors.purple}`;
      default:
        return `${Colors.blue}`;
    }
  };
export const Container = styled.View`
    width: 230px;
    background-color: ${({color}:Color)=> handleColorType({color})};
    height: 240px;
   
    margin: 15px;
    border-radius: 50px;

    justify-content: space-around;
    padding: 20px 40px;
`;

export const Icon = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 10px;

`; 
export const Subtitle = styled.Text`
    font-size: 14px;
    color: #555;
`; 
export const Title = styled.Text`
    font-size: 22px;
    font-weight: 700;
    color: #333;
`; 
export const Number = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #333;

`; 
export const InfoCard = styled.View`
   margin: 10px 0;
`; 
