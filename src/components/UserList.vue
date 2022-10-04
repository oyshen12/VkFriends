<template>
  <div class="list-wrap">
    <div class="d-flex justify-space-between mt-4">
      <span class="list-text">Добавленные пользователи</span>
      <v-btn color="primary" @click="buildFriends">Построить</v-btn>
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
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["addedUsers", "usersFriends"]),
    ...mapGetters(["allFriends"]),
  },
  methods: {
    ...mapActions(["vkAPI"]),
    ...mapMutations(["setAddedUsers", "deleteAddedUser", "setUsersFriends"]),
    async buildFriends() {
      const { response } = await this.vkAPI({
        link: "users.get",
        option: {
          user_ids: this.allFriends,
          fields: "photo_max, bdate, sex",
        },
      });

      this.allFriends.map((friend, index) => {
        const mutualFriends = this.addedUsers.reduce((acc, user) => {
          if (user.friends.includes(friend)) {
            acc += 1;
          }
          return acc;
        }, 0);
        response[index]["mutualFriends"] = mutualFriends;
        return friend;
      });
      this.setUsersFriends(response);
      console.log("usersFriends ", this.usersFriends);
    },
  },
  mounted() {
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