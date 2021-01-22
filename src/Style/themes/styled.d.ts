//definisco un interfaccia sovrascrivendo il modulo predefinito di styled component
//per averere autocomplete dei themes definiti senza dover fare ogni volta import dei file
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
    };
  }
}

//per far compilare il file passo in package.json
/**
    "files": [
    "src/Style/themes/styled.d.ts"
    ]
 */

/**
 * per utilizzarlo nei file senza props importo:
 * 1) import { ThemeContext } from 'styled-components';
 * 2) import { useContext } from 'react'
 *
 * e nella funct :
 * const { colors } = useContext(ThemeContext);
 *
 * così posso usare => colors.<Prop>
 */
