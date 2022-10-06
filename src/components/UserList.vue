<template>
  <div class="list-wrap">
    <div class="d-flex justify-space-between mt-4">
      <span class="list-text">Добавленные пользователи</span>
      <v-btn color="primary" @click="buildFriends">Построить</v-btn>
    </div>
    <div
      v-if="allFriends.length === 0 && addedUsers.length !== 0"
      class="list-text mt-4 alarm-friends"
    >
      У выбранных пользователей нету друзей или это приватные аккаунты
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
      if (this.allFriends.length === 0) {
        return;
      }
      const { response } = await this.vkAPI({
        link: "users.get",
        option: {
          user_ids: this.allFriends,
          fields: "photo_max, bdate, sex",
        },
      });

      this.allFriends.map((friend) => {
        const mutualFriends = this.addedUsers.reduce((acc, user) => {
          if (user.friends.includes(friend)) {
            acc += 1;
          }
          return acc;
        }, 0);
        const respEl = response.findIndex((el) => el.id === friend);
        if (respEl !== -1) {
          response[respEl]["mutualFriends"] = mutualFriends;
          return friend;
        }
      });
      this.setUsersFriends(response);
      this.$router.push("friends");
    },
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
.alarm-friends {
  font-size: 14px;
  color: red;
}
@media (max-width: 540px) {
  .list-text {
    font-size: 18px !important;
    font-weight: bold !important;
    margin-left: 8px !important;
    margin-top: auto !important;
  }
}
</style>