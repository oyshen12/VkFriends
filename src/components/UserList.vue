<template></template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setAddedUsers"]),
  },
  mounted() {
    console.log("check ", this.addedUsers);
    //this.setAddedUsers();
  },
};
</script>

<style scoped>
</style>