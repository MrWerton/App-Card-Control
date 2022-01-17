import { FlatList, Text } from 'react-native';
import { CardMook } from '../../Mooks/Data';
import Card from '../Card';

import { Container } from './styles';

const ListCard: React.FC = () => {
  return (
    <Container>

      <FlatList
      contentContainerStyle={{alignItems: 'center', padding: 10}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={CardMook}
      keyExtractor={(item)=> item.id.toString()}
      renderItem={({item})=>(
        <Card data={item}/>
      )}
      />
    </Container>
  );
};

export default ListCard;
