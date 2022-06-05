import Instagram from '../../SVG/SocialNetwork/Instagram/Instagram';
import Telegram from '../../SVG/SocialNetwork/Telegram/Telegram';
import YouTube from '../../SVG/SocialNetwork/YouTube/YouTube';
import TikTok from '../../SVG/SocialNetwork/TikTok/TikTok';
import VK from '../../SVG/SocialNetwork/VK/VK';
import Facebook from '../../SVG/SocialNetwork/Facebook/Facebook';
import Twitter from '../../SVG/SocialNetwork/Twitter/Facebook';
import Spotify from '../../SVG/SocialNetwork/Spotify/Spotify';
import Soundcloud from '../../SVG/SocialNetwork/Soundcloud/Soundcloud';
import WebTraffic from '../../SVG/SocialNetwork/WebTraffic/WebTraffic';
import Clubhouse from '../../SVG/SocialNetwork/Clubhouse/Clubhouse';
import Reddit from '../../SVG/SocialNetwork/Reddit/Reddit';
import Classmates from '../../SVG/SocialNetwork/Classmates/Classmates';

export interface ICard {
    title: string;
    component: Function;
    color: string;
}

class ISocial {
    private color: string = 'var(--darkRGB)';
    public menu: ICard[] = [
        { title: 'Instargram', component: Instagram, color: this.color },
        { title: 'Telegram', component: Telegram, color: this.color },
        { title: 'YouTube', component: YouTube, color: this.color },
        { title: 'Tik Tok', component: TikTok, color: this.color },
        { title: 'VK', component: VK, color: this.color },
        { title: 'Facebook', component: Facebook, color: this.color },
        { title: 'Twitter', component: Twitter, color: this.color },
        { title: 'Spotify', component: Spotify, color: this.color },
        { title: 'Soundcloud', component: Soundcloud, color: this.color },
        { title: 'Web Traffic', component: WebTraffic, color: this.color },
        { title: 'Clubhouse', component: Clubhouse, color: this.color },
        { title: 'Reddit', component: Reddit, color: this.color },
        { title: 'Одноклассники', component: Classmates, color: this.color },
    ];
}

export default ISocial;