import ISvg from "../../classes/ISvg";

function Classmates(prop: {svgColor: string}) {
    const ok = new ISvg(prop.svgColor);
    return (
        <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path style={ok.svgColor} fillRule="evenodd" clipRule="evenodd" d="M0 13.0928C0 13.4254 0.142179 13.7112 0.311979 13.8857C1.26275 14.8629 2.54032 15.5471 3.87285 15.8782C4.24153 15.9698 5.39234 16.2039 5.78602 16.2039C5.68833 16.3496 1.89979 20.1061 1.47529 20.5286C1.04584 20.9551 0.941464 21.6704 1.23251 22.153C1.58752 22.7424 2.30045 23.2026 3.04159 22.909C3.41608 22.7607 3.93362 22.2449 4.17844 21.9524C4.24182 21.8762 4.25025 21.8527 4.32469 21.7788C4.39011 21.7134 4.4343 21.6701 4.49943 21.6047L6.22942 19.8747C6.39922 19.7049 6.80861 19.3356 6.91996 19.1696C7.04761 19.2551 9.60014 21.8259 9.70423 21.9387C9.91765 22.1693 10.1302 22.4359 10.3756 22.6339C10.5221 22.7523 10.6108 22.8238 10.8068 22.9005C10.9484 22.9564 11.2095 23.0154 11.3804 22.9927C11.8986 22.9238 12.0294 22.8264 12.3207 22.5351C12.717 22.1388 12.7932 21.9373 12.7932 21.3793C12.7932 20.7917 12.2094 20.3448 11.7828 19.9183C11.4909 19.6264 8.18271 16.3527 8.08298 16.2039C8.8308 16.2039 10.4567 15.7794 11.2112 15.4651C11.5889 15.3075 11.9419 15.1045 12.2815 14.878C13.2666 14.2212 14.4206 13.4961 13.5265 12.156C12.9982 11.3646 12.0181 11.4756 11.3394 11.9589C10.5338 12.5331 10.1927 12.7314 9.19163 13.0384C8.58832 13.2234 8.20859 13.2815 7.58434 13.3501C7.48054 13.3618 7.37471 13.3475 7.27033 13.3559C6.76354 13.3972 6.88188 13.3821 6.33845 13.3545C5.89186 13.3318 5.12572 13.1699 4.71633 13.0576C4.40784 12.9733 4.04992 12.8486 3.77923 12.7154C3.5379 12.5962 3.14248 12.4046 2.92441 12.2618C2.46822 11.9629 1.8556 11.3919 1.09992 11.605C0.452413 11.7876 0 12.4566 0 13.0928Z" fill="#747176"/>
         <path style={ok.svgColor} fillRule="evenodd" clipRule="evenodd" d="M4.07058 5.85296C4.07058 4.66348 4.73989 3.71446 5.64065 3.26524C6.42307 2.87505 7.39506 2.86196 8.17981 3.25565C8.54442 3.43824 8.69212 3.56937 8.96252 3.83948C9.53618 4.41227 9.76937 5.05833 9.76937 5.91111C9.76937 7.3739 8.47231 8.67328 7.0072 8.67328C6.04393 8.67328 5.44236 8.37322 4.89196 7.82282C4.44739 7.37826 4.07058 6.73075 4.07058 5.85296ZM6.68737 11.639C7.74717 11.639 8.57059 11.5299 9.43035 11.0964C10.1982 10.7094 10.8678 10.1878 11.4182 9.53711C11.6285 9.28823 11.8456 8.98235 12.007 8.70119C12.4972 7.84608 12.7301 6.87554 12.7656 5.88262C12.7708 5.73404 12.7508 5.66135 12.7394 5.55784C12.699 5.19498 12.7452 5.16416 12.631 4.5905C12.476 3.81215 12.1986 3.21814 11.7814 2.59069C11.2604 1.80711 10.352 0.986306 9.51816 0.579831C9.42919 0.536509 9.35679 0.513538 9.27509 0.473996C9.19862 0.436779 9.12215 0.405087 9.03027 0.369906C7.89196 -0.0653539 6.56729 -0.104315 5.38479 0.189056C4.99314 0.286169 4.69483 0.416717 4.34447 0.573434C3.55129 0.927574 2.58307 1.81612 2.06989 2.57295C1.86433 2.87592 1.71895 3.13178 1.5602 3.48796C1.31393 4.0401 1.1043 4.85538 1.10575 5.50493C1.10604 5.66746 1.0697 5.72212 1.07638 5.85063L1.12494 6.50163C1.1575 6.73773 1.17698 6.91392 1.2267 7.12676C1.31393 7.50067 1.41715 7.87487 1.57939 8.19877C1.74948 8.53837 1.88265 8.8143 2.0978 9.10505L2.56563 9.68394C3.59257 10.8397 5.0731 11.639 6.68737 11.639Z" fill="#747176"/>
        </svg>
    );
}

export default Classmates;