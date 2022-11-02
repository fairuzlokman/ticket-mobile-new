import Navigation from './src/navigation';
import AuthProvider from './src/provider/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  )
};