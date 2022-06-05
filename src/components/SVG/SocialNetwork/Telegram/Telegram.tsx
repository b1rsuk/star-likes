import ISvg from "../../classes/ISvg";

function Telegram(prop: {svgColor: string}) {
    const tg = new ISvg(prop.svgColor);
    return (
        <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path style={tg.svgColor} d="M25.5734 0.15123L1.28055 9.51897C-0.377331 10.1849 -0.36774 11.1097 0.976381 11.5221L7.21332 13.4678L21.6438 4.36308C22.3261 3.94793 22.9495 4.17126 22.4371 4.62615L10.7456 15.1777H10.7428L10.7456 15.1791L10.3153 21.6078C10.9456 21.6078 11.2238 21.3187 11.5773 20.9776L14.6067 18.0317L20.908 22.6861C22.0699 23.326 22.9043 22.9972 23.1934 21.6106L27.3299 2.11603C27.7533 0.41841 26.6818 -0.350246 25.5734 0.15123Z" fill="#747176"/>
        </svg>
    );
}

export default Telegram;