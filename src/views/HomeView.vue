<template>
  <div class="d-flex py-8">
    <v-col cols="6" class="pr-8">
      <search-users></search-users>
    </v-col>
    <v-col cols="6" class="pl-8">
      <user-list></user-list>
    </v-col>
  </div>
</template>

<script>
import SearchUsers from "@/components/SearchUsers.vue";
import UserList from "@/components/UserList.vue";

export default {
  name: "Home",

  components: {
    SearchUsers,
    UserList,
  },
};
</script>
