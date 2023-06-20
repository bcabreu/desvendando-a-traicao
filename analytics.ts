import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-J2408BVQ9B"); // Insira aqui o código de acompanhamento do seu Google Analytics
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
