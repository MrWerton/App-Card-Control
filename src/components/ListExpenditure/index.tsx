import { FlatList, Text } from 'react-native';
import Card from '../Card';
import Expenditure from '../Expenditure';

import { Container } from './styles';


const Data = [{
  title: '',
  id: 3,
  prices: '',
  color: ''
}]
const ListExpenditure: React.FC = () => {
  return (
    <Container>
      <FlatList
      contentContainerStyle={{padding: 10}}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      data={Data}
      keyExtractor={(item)=> item.id.toString()}
      renderItem={({item})=>(
        <Expenditure data={item}/>
      )}
      />
    </Container>
  );
};

export default ListExpenditure;
