let id = 0;

export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    createId() {
      this.id = id.toString();
      id++;
    }
  }
}