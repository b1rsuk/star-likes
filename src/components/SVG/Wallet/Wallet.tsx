import ISvg from "../classes/ISvg";

function Wallet(prop: {svgColor: string}) {
    const wallet = new ISvg(prop.svgColor);

    return (
      <svg style={wallet.shadow()} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path style={wallet.svgColor} d="M24.9502 10.2952H24.3215V6.51719C24.3215 4.97237 23.0639 3.72025 21.5245 3.72025H20.9445L20.9499 2.31636C20.9499 1.27564 20.1044 0.430054 19.0636 0.430054H2.29284C1.04072 0.430054 0.0162613 1.43825 0 2.69037C0 2.70121 0 2.71205 0 2.72289V21.2282C0 22.269 0.845586 23.1145 1.88631 23.1145H21.5299C23.0748 23.1145 24.3269 21.857 24.3269 20.3176V16.5341H24.9556C25.7687 16.5341 26.43 15.8728 26.43 15.0598V11.7696C26.4246 10.9565 25.7633 10.2952 24.9502 10.2952ZM2.29284 1.73096H19.0636C19.3834 1.73096 19.649 1.99114 19.649 2.31094L19.6436 3.72025H2.29284C1.74538 3.72025 1.3009 3.27578 1.3009 2.72831C1.3009 2.18085 1.74538 1.73096 2.29284 1.73096ZM23.0206 20.3122C23.0206 21.1361 22.3484 21.8082 21.5245 21.8082H1.88089C1.56108 21.8082 1.29548 21.548 1.29548 21.2228V4.7935C1.59903 4.93985 1.93509 5.02115 2.29284 5.02115H21.5245C22.3484 5.02115 23.0206 5.69329 23.0206 6.51719V10.2952H18.5812C17.7682 10.2952 17.1069 10.9565 17.1069 11.7696V15.0598C17.1069 15.8728 17.7682 16.5341 18.5812 16.5341H23.0206V20.3122ZM25.1237 15.0598C25.1237 15.1574 25.0478 15.2332 24.9502 15.2332H18.5866C18.4891 15.2332 18.4132 15.1574 18.4132 15.0598V11.7696C18.4132 11.6774 18.4891 11.5961 18.5866 11.5961H24.9502C25.0424 11.5961 25.1237 11.672 25.1237 11.7696V15.0598Z"/>
      </svg>
    );
}

export default Wallet;