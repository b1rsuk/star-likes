import style from './about.module.scss';
import { Fragment } from 'react'
import Title from '../../Title/Title';
import Box from '../Box/Box';

function About() {
  return (
    <Fragment>
        <Title>Описание</Title>
        <div className={style.about}>
            <Box className={style.box}>
                <div className={style.text}>
                  🔴 AFTER ORDERING, YOU NEED TO WRITE TO SUPPORT YOUR ORDER <br/>
                    NUMBER AND WAIT FOR SUPPORT TO LAUNCH YOUR ORDER <br/>
                    ⏱ ️Start: 1-30 min <br/>
                    ⚡️ Speed: 10000/D <br/>
                    ✔ ️Quality : REAL AND NO DROP <br/>
                </div>
            </Box>
        </div>
    </Fragment>
  );
}

export default About;