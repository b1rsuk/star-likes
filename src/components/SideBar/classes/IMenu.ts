import React, { ReactComponentElement } from "react";
import { IMenuName } from "../emuns/IMenuName";
import Plus from "../../SVG/Plus/Plus";
import Basked from '../../SVG/Basked/Basked';
import Wallet from '../../SVG/Wallet/Wallet';
import Support from '../../SVG/Support/Support';
import Money from '../../SVG/Money/Money';
import Folder from '../../../components/SVG/Folder/Folder';

export interface IList {
    value: string;
    component: Function;
    name: string;
};

interface IActive {
    fontWeight?: number;
    fontSize?: string;
    color?: string;
    filter?: string;
} 

class IMenu {
    public svgColor = 'var(--violet_b6)';
    private router: Function = Function;
    public _menu: IList[] = [
        { 
          value: 'Новый заказ', 
          component: Plus, 
          name: IMenuName.NEWORDER 
        },
        { 
          value: 'Мои заказы', 
          component: Folder, 
          name: IMenuName.MYORDER 
        },
        { 
          value: 'Услуги', 
          component: Basked, 
          name: IMenuName.SERVICES 
        },
        { 
          value: 'Баланс', 
          component: Money, 
          name: IMenuName.BALANCE 
        },
        { 
          value: 'Рефералы', 
          component: Wallet, 
          name: IMenuName.REFERALS 
        },
        { 
          value: 'Support', 
          component: Support, 
          name: IMenuName.SUPPORT 
        },
    ];

    constructor (router: Function) {
        this.router = router;
    }

    public active(active: boolean): IActive {
        if (!active) return {};
        return {
            fontWeight: 700,
            fontSize: '20px',
            color: 'white',
            filter: 'drop-shadow(0px 0px 23px #D5A0FF) drop-shadow(0px 0px 23px #D5A0FF)'
        }
    }

    public choiceMenu(name: string): void {
        this.router(`/panel/${name}`)
    }
}

export default IMenu;