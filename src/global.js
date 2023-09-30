import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-crimson-text: 'Crimson Text';

/* font sizes */
--font-size-2xl: 21px;
--font-size-16xl: 35px;

/* Colors */
--color-black: #000;
--color-gainsboro: #d9d9d9;

}
`;
}
