import { createGlobalStyle } from 'styled-components'

const EstilosGlobais = createGlobalStyle`
  :root {
    --preto: #000;
    --preto-fosco: #191919;
    --branco: #fff;
    --cinza-escuro: #262626;
    --cinza-claro: #A5A5A5;
    --azul: #2271D1;
    --vermelho: #E53935;
    --fonte: "Roboto", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-family: var(--fonte);
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
  }
  body {
    display: flex;
    flex-direction: column;
    line-height: 1;
    margin: 0;
    min-height: 100vh;
    background-color: var(--cinza-escuro);
    color: var(--branco);
    overflow-x: hidden;
  }
  main {
    display: block;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
	  margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  vertical-align: baseline;
	  text-decoration: none;
	  color: var(--branco);
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
	  display: block;
  }
  table {
	  border-collapse: collapse;
	  border-spacing: 0;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
	  content: '';
	  content: none;
  } 
  blockquote, q {
	  quotes: none;
  }
  ol, ul {
	  list-style: none;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  } 
  a {
    color: var(--branco);
    text-decoration: none;
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  } 
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }
  button,
  input { 
    overflow: visible;
  }
  button,
  select { 
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`

export default EstilosGlobais