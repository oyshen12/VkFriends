<template>
  <div v-if="authed" class="home__wrap">
    <v-col cols="6" class="pr-8">
      <search-users></search-users>
    </v-col>
    <v-col cols="6" class="pl-8">
      <user-list></user-list>
    </v-col>
  </div>
  <div v-else class="text-h2 text-center mt-16">
    Авторизуйтесь чтобы использовать приложение
  </div>
</template>

<script>
import SearchUsers from "@/components/SearchUsers.vue";
import UserList from "@/components/UserList.vue";
import { mapState } from "vuex";

export default {
  name: "Home",

  components: {
    SearchUsers,
    UserList,
  },
  computed: {
    ...mapState(["authed"]),
  },
};
</script>

<style scoped>
.home__wrap {
  display: flex;
  padding: 32px;
}
@media (max-width: 1100px) {
  .home__wrap {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
  }
}
@media (max-width: 540px) {
  .col-6 {
    max-width: 530px !important;
    padding: 0 !important;
  }
  .list-text {
    font-size: 18px !important;
    font-weight: bold !important;
    margin-left: 8px !important;
  }
}
</style>
