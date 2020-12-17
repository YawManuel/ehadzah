Vue.component('btn',{
  template: `<button @click="$emit('trigger')"><slot></slot></button>`,
});

Vue.component('modal',{
  template: `<p><slot></slot></p>`,
});

Vue.component('modal-btn', {
  template: `
    <div>
      <modal v-if="showModal">
        <slot>I am a moda</slot>
      </modal>
      <btn @trigger="showModal = true">Show Modal</btn>
    </div>
  `,
  data() {
    return { showModal: false }
  }
});

new Vue({
  el: '#app',
  data: {
    showModal: false
  },
  methods: {
    onShowModal(){
      this.showModal = true;
    }
  }
});