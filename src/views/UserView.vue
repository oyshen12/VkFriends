<template>
  <div v-if="userExist" class="d-flex mt-8 justify-center user-view__wrap">
    <v-icon @click="$router.back()" color="primary" class="back-img" x-large
      >mdi-keyboard-backspace</v-icon
    >
    <user-card :user="user" :hover="false" class="current-user"></user-card>

    <div class="user-info d-flex flex-column">
      <div class="text-h3">В друзьях у пользователей:</div>
      <div class="users__grid mt-4">
        <user-card
          v-for="user in addedFriends"
          :user="user"
          :key="user.id"
          :hover="false"
        ></user-card>
      </div>
      <span class="text-h3 mt-4">Записи на странице:</span>
      <div v-if="records" class="users__grid mt-4">
        <record-card
          v-for="record in records.items"
          :recordProp="record"
          :groups="records.groups"
          :profiles="records.profiles"
          :user="user"
          :key="record.id"
        ></record-card>
      </div>
      <div v-else class="text-h3 mt-4">Это приватный аккаунт</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserCard from "@/components/UserCard.vue";
import RecordCard from "@/components/RecordCard.vue";

export default {
  components: { UserCard, RecordCard },
  component: {
    UserCard,
  },
  data() {
    return {
      id: 0,
      user: {},
      records: {},
    };
  },
  computed: {
    ...mapState(["usersFriends", "addedUsers"]),
    userExist() {
      return this.user && Object.keys(this.user).length;
    },
    addedFriends() {
      return this.addedUsers.filter((el) => el.friends.includes(this.id));
    },
  },
  methods: {
    ...mapActions(["vkAPI"]),
    async getRecords() {
      const { response } = await this.vkAPI({
        link: "wall.get",
        option: {
          owner_id: this.id,
          extended: 1,
        },
      });
      console.log("responses ", response);
      this.records = response;
    },
  },

  async mounted() {
    this.id = this.$route.params.id;
    await this.getRecords();
    this.user = this.usersFriends.find((el) => el.id === this.id);
    if (!this.userExist) {
      const { response } = await this.vkAPI({
        link: "users.get",
        option: {
          user_ids: this.id,
          fields: "photo_max, bdate, sex",
        },
      });
      this.user = response[0];
    }
  },
};
</script>

<style scoped>
.users__grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
.user-info {
  margin-left: 64px;
}
.current-user {
  height: 422px;
}
.back-img {
  font-size: 80px !important;
  align-items: flex-start !important;
  margin-right: 16px;
  height: 80px;
}
@media (max-width: 1050px) {
  .user-view__wrap {
    flex-direction: column;
    justify-content: center;
    justify-items: center;
  }
  .user-info {
    margin-left: 0px;
  }
}
</style>