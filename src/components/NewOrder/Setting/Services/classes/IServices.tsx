class IServices {
    public _menu: string[] = [
        '👥 Instagram Followers - [REAL+ AUTOREFILL 30D]',
        '👥 Redit Followers - [REAL+ AUTOREFILL 30D]',
        '👥 Instargram Followers - [REAL+ AUTOREFILL 30D1]',
        '👥 Telegram Followers - [REAL+ AUTOREFILL 30D2]',
        '👥 Facebook Followers - [REAL+ AUTOREFILL 30D3]',
        '👥 TikTok Followers - [REAL+ AUTOREFILL 30D4]',
    ]

    public menu(menu: string): string[] {
        return this._menu.filter((elem: string) => elem !== menu);
    }
}

export default IServices;