import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './Context/theme';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`


  *::-webkit-scrollbar {
    width: 12px;
}

*::-webkit-scrollbar-track {
    background: #070d12;
}

*::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 20px;
    border: 3px solid #070d12;
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  a{
    text-decoration: none;
  }

`;

export default App;
