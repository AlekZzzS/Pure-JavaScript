export class Page {
    constructor(params) {
        this.params = params
    }

    getRoot() {
        throw new Error('Method "getRoot" should not implemented')
    }

    afterRender() {

    }

    destroy() {

    }
}