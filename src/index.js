import feedbackAnimation from '@intothesource/feedback-animation/feedback-animation';

class Button extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.createButtonElement();
        this.setButtonElementAttributes();
        this.removeAndSetButtonAttributes();
        feedbackAnimation(this.querySelector('[data-its-button]'));
    }

    createButtonElement() {
        const buttonElement = document.createElement('button');
        this.childNodes.forEach(element => {
            buttonElement.appendChild(element);
        });
        this.appendChild(buttonElement);
    }

    setButtonElementAttributes() {
        console.log(this.attributes);
        while (this.attributes.length > 0) {
            this.querySelector('button').setAttribute(this.attributes[0].name, this.attributes[0].textContent);
        }
        this.querySelector('button').setAttribute('data-its-button', '');
    }

    removeAndSetButtonAttributes() {
        while (this.attributes.length > 0) {
            this.removeAttribute(this.attributes[0].name);
        }
    }
}
window.customElements.define('its-button', Button);
