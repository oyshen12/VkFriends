<template>
  <div class="friends__wrap">
    <div class="grid__wrap">
      <user-card
        v-for="user in usersFriends"
        :user="user"
        :key="user.id"
        class="mt-6"
      ></user-card>
    </div>
  </div>
</template>


<script>
import UserCard from "@/components/UserCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    UserCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["usersFriends"]),
  },
};
</script>

<style scoped>
.friends__wrap {
  display: flex;
  justify-content: center;
}
.grid__wrap {
  display: grid;
  max-width: 1800px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0 64px;
}
</style>