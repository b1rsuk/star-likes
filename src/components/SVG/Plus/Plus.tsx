import style from './plus.module.scss';
import IPlus from './classes/IPlus';

function Plus(prop: {svgColor: string}) {
    const plus = new IPlus(prop.svgColor);

    return (
        <div className={style.plus} style={plus.borderColor}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={plus.svgColor} d="M6.43571 11.9782C6.64032 11.9782 6.82085 11.894 6.95927 11.7616C7.09166 11.6292 7.17591 11.4426 7.17591 11.238V7.18795H11.226C11.4306 7.18795 11.6111 7.1037 11.7496 6.9713C11.882 6.83891 11.9662 6.65235 11.9662 6.44774C11.9662 6.03852 11.6352 5.70753 11.232 5.71355H7.18193V1.66347C7.18193 1.25425 6.85094 0.923262 6.44774 0.92928C6.03852 0.92928 5.70753 1.26027 5.71355 1.66347V5.71355H1.66347C1.25425 5.71355 0.923262 6.04454 0.92928 6.44774C0.92928 6.85696 1.26027 7.18795 1.66347 7.18193H5.71355V11.232C5.6955 11.6473 6.02649 11.9782 6.43571 11.9782Z"/>
            </svg>
        </div>
    );
}

export default Plus;