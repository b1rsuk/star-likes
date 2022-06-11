import IUser from "../../NavBar/classes/User/IUser";
import Avatar from "../../NavBar/Menu/Profile/Avatar/Avatar";
import style from './profile.module.scss';

function Profile(prop: { user: IUser }) {
  return (
    <div>
        <div className={style.profile}>
          <Avatar user={prop.user} />
          <h4>{prop.user.name}</h4>
        </div>
    </div>
  );
}

export default Profile;