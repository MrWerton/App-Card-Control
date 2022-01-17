
import { Container, InfoCard, Icon, Subtitle, Title, Number } from './styles';

interface Icard{
  id: number,
  icon: string,
  subtitle: string,
  number: string,
  color: string,
  title: string,
}

interface Props{
  data: Icard
}

const Card: React.FC<Props> = ({data}) => {
  return (
    <Container color={data.color}>
     <Icon source={{uri: data.icon}}/> 
     
      <InfoCard>
        <Subtitle>
            Card Number
        </Subtitle>
        <Number>
            {data.number}
        </Number>
      </InfoCard>
        <Title>{data.title}</Title>
    </Container>
  );
};

export default Card;
