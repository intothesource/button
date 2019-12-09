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

    attributeChangedCallback() {
        this.setButtonElementAttributes();
        this.removeAndSetButtonAttributes();
    }

    createButtonElement() {
        const buttonElement = document.createElement('button');
        console.log(this.childNodes, buttonElement);
        this.childNodes.forEach(element => {
            buttonElement.appendChild(element);
        });
        this.appendChild(buttonElement);
    }

    setButtonElementAttributes() {
        console.log(this.attributes);
        while (this.attributes.length > 0) {
            if (this.attributes[0].name[0] === '-') {
                const dynamicAttributeContent = getComputedStyle(document.documentElement).getPropertyValue(this.attributes[0].name);
                this.querySelector('button').setAttribute(this.attributes[0].name, dynamicAttributeContent);
            } else {
                this.querySelector('button').setAttribute(this.attributes[0].name, this.attributes[0].textContent);
            }
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
