export class Skill {
	public title: string;
	public imageUrl: string;
	public description: string;

	constructor(title: string, imageUrl: string, description: string) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
	}
}