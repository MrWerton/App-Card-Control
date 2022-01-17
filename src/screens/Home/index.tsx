import { Text } from 'react-native';
import ListCard from '../../components/ListCard';
import ListExpenditure from '../../components/ListExpenditure';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
     <ListCard/>
     <ListExpenditure/>
    </Container>
  );
};

export default Home;
