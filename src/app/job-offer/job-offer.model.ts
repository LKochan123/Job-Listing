

export class JobOffer {
    public id: number;
    public company: string;
    public logo: string;
    public newOffer: boolean;
    public featured: boolean;
    public position: string;
    public role: string;
    public level: string;
    public postedAt: string;
    public contract: string;
    public location: string;
    public languages: string[];
    public tools: string[];

    constructor(id: number, company: string, logo: string, newOffer: boolean, featured: boolean, 
        position: string, role: string, level: string, postedAt: string, contract: string, location: string,
        languages: string[], tools: string[] ) {

        this.id = id;
        this.company = company;
        this.logo = logo;
        this.newOffer = newOffer;
        this.featured = featured;
        this.position = position;
        this.role = role;
        this.level = level;
        this.postedAt = postedAt;
        this.contract = contract;
        this.location = location;
        this.languages = languages;
        this.tools = tools;
    }
}