<template>
  <div class="list-wrap">
    <div class="d-flex justify-space-between mt-4">
      <span class="list-text">Добавленные пользователи</span>
      <v-btn color="primary">Построить</v-btn>
    </div>
    <v-list class="mt-6">
      <v-list-item v-for="user in addedUsers" :key="user.id">
        <v-list-item-avatar>
          <v-img
            :alt="`${user.first_name} avatar`"
            :src="user.photo_max"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            v-text="`${user.first_name} ${user.last_name}`"
          ></v-list-item-title>
        </v-list-item-content>

        <v-btn color="error" @click="deleteAddedUser(user)">Удалить</v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["addedUsers"]),
  },
  methods: {
    ...mapMutations(["setAddedUsers", "deleteAddedUser"]),
  },
  mounted() {
    console.log("check ", this.addedUsers);
    //this.setAddedUsers();
  },
};
</script>

<style scoped>
.list-text {
  font-size: 26px;
}
.list-wrap {
  max-width: 500px;
}
</style>