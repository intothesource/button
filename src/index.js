import feedbackAnimation from '@intothesource/feedback-animation/feedback-animation';

class Button extends HTMLElement {
    constructor() {
        super();
        this.createButtonElement();
        this.setButtonElementAttributes();
        this.removeAndSetButtonAttributes();
        feedbackAnimation(this.querySelector('button'));
    }

    createButtonElement() {
        const buttonElement = document.createElement('button');
        this.childNodes.forEach(element => {
            buttonElement.appendChild(element);
        });
        this.appendChild(buttonElement);
    }

    setButtonElementAttributes() {
        for (let attributeIndex = 0; attributeIndex < this.attributes.length; attributeIndex++) {
            this.querySelector('button').setAttribute(this.attributes[attributeIndex].name, this.attributes[attributeIndex].textContent);
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
