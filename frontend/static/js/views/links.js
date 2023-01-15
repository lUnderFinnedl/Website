import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("links");
    }

    async getHtml() {
        return `
            <h1>Links</h1>
            <p>Choose an external link to view more information about Stephen Hawking!</p>
        `;
    }
}