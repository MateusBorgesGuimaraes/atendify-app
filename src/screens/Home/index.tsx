import {
  Container,
  HomeBody,
  IconBox,
  InfoBox,
  InfoText,
  ProfessorInfo,
  ProfessorName,
  ProfessorPhoto,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { InfoBoxComponent } from '../../components/InfoBoxContent';
import theme from '../../global/styles/theme';
import { RootStackParamList } from '../../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { AppHeader } from '../../components/AppHeader/AppHeader';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navegarParaAgendamentos = () => {
    navigation.navigate('Agendar');
  };

  const navegarParaHorarios = () => {
    navigation.navigate('Horario');
  };

  return (
    <Container>
      <AppHeader />
      <HomeBody>
        <ProfessorInfo>
          <ProfessorPhoto></ProfessorPhoto>
          <ProfessorName>Leonardo</ProfessorName>
        </ProfessorInfo>
        <InfoBox>
          <IconBox bgColor={theme.colors.highlight1}>
            <Octicons name="number" size={24} color="white" />
          </IconBox>
          <InfoText>4 agendamentos</InfoText>
        </InfoBox>
        <InfoBoxComponent
          onPress={navegarParaHorarios}
          icon={<MaterialIcons name="schedule" size={24} color="white" />}
          text="Ver agendamentos"
          bgColor={theme.colors.highlight2}
        />
        <InfoBoxComponent
          onPress={navegarParaAgendamentos}
          icon={<MaterialIcons name="event" size={24} color="white" />}
          text="Novo agendamento"
          bgColor={theme.colors.highlight3}
        />
      </HomeBody>
    </Container>
  );
}
