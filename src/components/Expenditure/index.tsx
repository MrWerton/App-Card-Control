import { Text } from 'react-native';

import { Container } from './styles';

interface Icard{
  title: string,
  id: number,
  prices: string,
  color: string
}

interface Props{
  data: Icard
}
const Expenditure: React.FC<Props> = ({data}) => {
  return (
    <Container style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
    }}>
      <Text>Expenditure</Text>
    </Container>
  );
};

export default Expenditure;
