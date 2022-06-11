import Box from "../Box/Box";
import style from './services.module.scss';
import IServices from "./classes/IServices";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setVisibleDropDownSetting } from "../../../../app/features/dropdown/dropdownSlice";
import DropDown from "./DropDown/DropDown";
import { useSelector } from 'react-redux';
import IDropDown from "./DropDown/classes/IDropDown";
import { RootState } from '../../../../app/store';
import Title from "../../Title/Title";

function Services() {
    const services = new IServices();
    const [menu, setMenu] = useState(services._menu[0]);
    const dispatch = useDispatch();
    const visibleDropDown = useSelector((state: RootState) => state.dropdown.visibleSetting);
    const dropdown = new IDropDown(visibleDropDown);

    return (
        <div className={style.container}>
            <Title>Услуга</Title>
            <div className={style.input}>
                <Box onClick={() => dispatch(setVisibleDropDownSetting())}>
                    <div className={style.services}>
                        <h3>{menu}</h3>
                        <img src="/arrow.svg" alt="arrow" style={dropdown.arrowMode}/>
                    </div>
                </Box>
            </div>
            <DropDown menu={services.menu(menu)} setMenu={setMenu} dropdown={dropdown}/>
        </div>
    );
}

export default Services;