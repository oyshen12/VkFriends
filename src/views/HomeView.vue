<template>
  <div class="d-flex py-8">
    <v-col cols="6">
      <serach-users></serach-users>
      <user-list></user-list>
    </v-col>
    <v-col cols="6">
      <user-list></user-list>
    </v-col>
  </div>
</template>

<script>
import SerachUsers from "@/components/SerachUsers.vue";
import UserList from "@/components/UserList.vue";

export default {
  name: "Home",

  components: {
    SerachUsers,
    UserList,
  },
};
</script>
