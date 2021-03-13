class CardComponent extends HTMLElement{
    constructor(){

        super();
    }
    connectedCallback(){
      this.attachShadow({mode:'open'}) ; 
      this.render()

    }

    render(){
      const cardTemplate = document.querySelector("#my-template");
      const cardTemplateContent = cardTemplate.content;
      
      this.shadowRoot.appendChild(cardTemplateContent.cloneNode(true));

      //check if the tag has attriputes 
  
      if(this.hasAttribute('bg-color')){
          this.shadowRoot.querySelector(".c-card__header").style.
          backgroundColor = this.getAttribute('bg-color')
      }
    }
}
customElements.define("my-card",CardComponent)

// customElements.define('template',CardComponent)
