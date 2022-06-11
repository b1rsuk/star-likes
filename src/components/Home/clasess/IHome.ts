class IHome {
    public page: string[] = ['new-order', 'my-order', 'services', 'balance', 'referals', 'support'];

    public isPage(id?: string) {
        return this.page.includes(id? id : '')
    }
}

export default IHome;