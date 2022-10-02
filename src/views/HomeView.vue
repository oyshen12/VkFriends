<template>
  <div class="d-flex py-8">
    <v-col cols="6" class="pr-8">
      <serach-users></serach-users>
    </v-col>
    <v-col cols="6" class="pl-8">
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
