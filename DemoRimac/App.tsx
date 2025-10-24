
import
{
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Core from './src/core/Core';
import { Provider } from 'react-redux';
import { store } from './src/stores/Configure';

function App()
{

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Core />
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
