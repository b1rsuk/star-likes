import ISvg from "../../classes/ISvg";

function Clubhouse(prop: {svgColor: string}) {
    const cb = new ISvg(prop.svgColor);
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
           <path style={cb.svgColor} d="M15.7328 24C14.617 23.979 11.8276 23.346 9.59625 20.9818C6.80692 18.0263 4.29802 16.0259 3.82442 15.5226C3.55629 15.2376 2.26014 14.1062 3.06882 12.7429C3.48811 12.036 4.76806 12.1587 5.4706 12.7429C5.81087 13.0258 9.04243 15.8603 9.25931 16.3004C8.74062 15.5455 3.18638 10.089 2.65215 9.56284C1.88556 8.80786 1.74692 7.69202 2.49386 6.90899C3.14857 6.22265 4.1634 6.18833 4.88426 6.80603L10.6601 12.7981C10.7605 12.9022 10.9328 12.8814 11.0054 12.7562C11.0533 12.6735 11.0417 12.5691 10.9768 12.499L4.23019 5.20458C3.58833 4.57544 3.12688 3.13412 4.1634 2.50498C5.30791 1.81029 6.41946 2.79095 6.79069 3.25995L12.43 10.1704C12.5256 10.2875 12.6931 10.3156 12.8216 10.2363C12.9771 10.1403 13.0129 9.9302 12.8969 9.78901C11.5097 8.09986 8.9345 4.89132 8.19937 3.69463C7.42358 2.43176 8.10164 1.52123 8.53765 1.22381C9.06447 0.864452 10.3318 0.79618 11.086 2.11605C11.8077 3.37891 14.6943 7.40087 16.0474 9.25398C16.4353 9.78525 17.2201 10.6359 18.032 10.3979C19.0468 10.1005 19.2273 8.6134 19.3852 7.6754C19.543 6.7374 20.4225 4.86141 22.362 4.83853C24.3014 4.81565 23.6926 6.76029 23.3768 7.21784C23.0611 7.6754 21.8884 9.7573 22.2718 11.9536C22.6552 14.1499 23.4444 16.5292 22.2718 19.4118C21.3337 21.7179 19.8632 23.096 18.8107 23.401" stroke="#747176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default Clubhouse;