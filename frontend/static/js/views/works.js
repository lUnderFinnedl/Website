import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("works");
    }

    async getHtml() {
        return `
            <h1>Works</h1>
            <p> Choose the side navigation options to see the works</p>
        `;
    }
    
}