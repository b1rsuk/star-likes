import style from './avatar.module.scss';
import IUser from '../../../classes/User/IUser';

function Avatar(prop: {user: IUser}) {
  return (
    <div className={style.circle} style={prop.user.avatar}></div>
  );
}

export default Avatar;