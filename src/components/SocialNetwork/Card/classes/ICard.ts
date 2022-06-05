interface TitleStyle {
    color: string;
}

interface ActiveCard {
    border?: string;
    backgroundColor?: string;
    boxShadow?: string;
    color?: string;
}

class ICard {
    private color: string = '';
    private activeCard: string = '';

    constructor (color: string, activeCard: string) {
        this.color = color;
        this.activeCard = activeCard;
    }

    public active(title: string): ActiveCard {
        if (this.activeCard !== title) return {}
        return {
            border: '2px solid var(--gray)',
            backgroundColor: 'var(--purple)',
            boxShadow: '0px 0px 37px var(--shadow_8c)',
        }
    }

    public title(title: string): TitleStyle {
        return {
            color: this.activeCard === title? 'white' : this.color
        }
    }
}

export default ICard;