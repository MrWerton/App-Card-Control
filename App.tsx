import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes';

export default function App() {
  return (
    <>
    <AppRoutes />
    <StatusBar 
    bar-Style="light-content"
    backgroundColor='transparent'
    translucent />
    </>
  );
}

