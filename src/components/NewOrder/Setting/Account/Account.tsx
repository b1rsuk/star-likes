import { Fragment } from 'react';
import Title from '../../Title/Title';
import style from './account.module.scss';
import Box from '../Box/Box';

function Account() {
  return (
    <Fragment>
        <Title>Ссылка</Title>
        <div className={style.account}>
            <Box>
                <div className={style.text}>
                    <img src="/link.svg" alt="link" />
                </div>
            </Box>
        </div>
    </Fragment>
  )
}

export default Account