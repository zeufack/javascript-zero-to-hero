"use strict";

class AlphormHello extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log(
            'connectedCallback'
        )
        let shadowDom = this.attachShadow({mode: 'open'});
        let template = document.querySelector('#templateHelloAlphorm');
        shadowDom.innerHTML = template.innerHTML;
    }
    disconnectedCallback() {
        console.log(
            'connectedCallback'
        )
    }
    attributeChangeCallback() {
        console.log(
            'connectedCallback'
        )
    }
}

window.customElements.define('alphorm-hello', AlphormHello);